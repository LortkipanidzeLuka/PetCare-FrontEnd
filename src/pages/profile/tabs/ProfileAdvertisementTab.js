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
import { PROFILE_SEARCH } from '../../../utils/PageSearch';
import Text from '../../../components/styled/text/Text';
import { TextType } from '../../../components/styled/text/TextType';
import { Button, Col, Row } from 'reactstrap';

const ProfileAdvertisementTab = () => {
	const [modalData, modalOpen, , toggleModal] = useModal();
	const [updateData, fetchData] = useFetchTrigger();
	const { setMessage: setError } = useToast(ToastType.ERROR);
	const { setMessage: setSuccess } = useToast(ToastType.SUCCESS);

	const deleteItem = async ({ data }) => {
		try {
			if (data.advertisementType && data.id && PetTypeConfig[data.advertisementType]) {
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
			<div className={'d-flex justify-content-between align-items-center pl-medium'}>
				<Row className={'full-width'}>
					<Col md={6} lg={6} xxl={6} xl={6} xs={12} sm={6}>
						<Text text={'My Advertisements'} type={TextType.LARGE} />
					</Col>
					<Col md={6} lg={6} xxl={6} xl={6} xs={12} sm={6} className={'d-flex justify-content-end'}>
						<Button onClick={toggleModal} className={'add-button responsive-button'}>
							<Text text={'Add advertisement'} type={TextType.MEDIUM} align={'center'}/>
						</Button>
					</Col>
				</Row>
			</div>
			<GenericDataList
				searchConfig={PROFILE_SEARCH}
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
