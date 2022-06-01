import React from 'react';
import Block from '../../../components/styled/block/Block';
import Api from '../../../services';
import AddLostPet from '../../lostfound/AddLostPet';
import { useModal } from '../../../hooks/UseModal';
import GenericDataList from '../../../components/item-collection/data-components/GenericDataList';
import GenericCardRectangle from '../../../components/item-card/GenericCardRectangle';
import ProfileAdvertisementModal from './ProfileAdvertisementModal';
import useFetchTrigger from '../../../hooks/UseFetchTrigger';
import { PetTypeConfig } from '../../../utils/PageTypes';
import useToast, { ToastType } from '../../../hooks/UseToast';

const ProfileAdvertisementTab = () => {
	const [modalData, modalOpen, , toggleModal] = useModal();
	const [updateData, fetchData] = useFetchTrigger();
	const { setMessage: setError } = useToast(ToastType.ERROR);
	const { setMessage: setSuccess } = useToast(ToastType.SUCCESS);

	const deleteItem = async ({ data }) => {
		try {
			if (data.advertisementType && data.id && PetTypeConfig[data.advertisementType]) {
				console.log(data)
				await PetTypeConfig[data.advertisementType].deleteSingle(data);
				setSuccess('advertisement-deleted');
				fetchData();
			}
		} catch (error) {
			setError(error);
		}

	};

	return (
		<Block className={'full-tab'}>
			<GenericDataList
				searchConfig={[]}
				DetailModal={ProfileAdvertisementModal}
				Card={GenericCardRectangle}
				fetchData={Api.Prof.advertisements}
				toggleEditModal={toggleModal}
				updateData={updateData}
				deleteItem={deleteItem}
			/>
			<AddLostPet data={modalData} open={modalOpen} closeModal={toggleModal} fetchData={fetchData} />
		</Block>
	);
};

export default ProfileAdvertisementTab;
