import React from 'react';
import Block from '../../../components/styled/block/Block';
import Api from '../../../services';
import AddLostPet from '../../lostfound/AddLostPet';
import { useModal } from '../../../hooks/UseModal';
import GenericDataList from '../../../components/item-collection/data-components/GenericDataList';
import GenericCardRectangle from '../../../components/item-card/GenericCardRectangle';
import ProfileAdvertisementModal from './ProfileAdvertisementModal';

const ProfileAdvertisementTab = () => {
	const [modalData,modalOpen, , toggleModal] = useModal();

	return (
		<Block className={'full-tab'}>
			<GenericDataList
				searchConfig={[]}
				DetailModal={ProfileAdvertisementModal}
				Card={GenericCardRectangle}
				fetchData={Api.Prof.advertisements}
				toggleEditModal={toggleModal}
			/>
			<AddLostPet data={modalData} open={modalOpen} closeModal={toggleModal} />
		</Block>
	);
};

export default ProfileAdvertisementTab;
