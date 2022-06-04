import React, { useState } from 'react';
import Block from '../../../components/styled/block/Block';
import Api from '../../../services';
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
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap';
import ProfileCreateModal from './ProfileCreateModal';
import ConfirmationModal from '../../../components/confirmation/ConfirmationModal';

const ProfileAdvertisementTab = () => {
	const [modalData, modalOpen, , toggleModal] = useModal();
	const [deleteModalData, deleteModalOpen, , toggleDeleteModal] = useModal();
	const [updateData, fetchData] = useFetchTrigger();
	const [createMenu, setCreateMenu] = useState(false);
	const { setMessage: setError } = useToast(ToastType.ERROR);
	const { setMessage: setSuccess } = useToast(ToastType.SUCCESS);
	const createMenuData = [
		{
			keyWord: 'LOST_FOUND',
			text: 'Add Lost And Found'
		},
		{
			keyWord: 'PET_CARE',
			text: 'Add Pet Care'
		},
		{
			keyWord: 'ADOPTION',
			text: 'Add Adoption'
		},
		{
			keyWord: 'CHARITY',
			text: 'Add Charity'
		}

	];

	const deleteItem = (data) => {
		toggleDeleteModal(data);
	};

	const deleteItemCallBack = async ({ data }) => {
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
						<Dropdown isOpen={createMenu} toggle={() => setCreateMenu(!createMenu)} className='d-inline-block'>
							<DropdownToggle className='btn header-item waves-effect add-button responsive-button'
															id='page-header-user-dropdown' tag='button'>
								<Text text={'Add advertisement'} type={TextType.MEDIUM} align={'center'} />
							</DropdownToggle>
							<DropdownMenu end>
								{createMenuData.map((value, index) => {
									return (
										<DropdownItem tag='a' key={index} onClick={() => {
											toggleModal({ data: { id: null, advertisementType: value.keyWord } });
										}}>
											<Text text={value.text} type={TextType.MEDIUM} classNames={['pointer']} />
										</DropdownItem>
									);
								})}
							</DropdownMenu>
						</Dropdown>
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
			<ProfileCreateModal data={modalData} open={modalOpen} closeModal={toggleModal} fetchData={fetchData} />
			<ConfirmationModal
				text={'Are you sure you want to delete this advertisement '}
				open={deleteModalOpen}
				toggle={toggleDeleteModal}
				callback={(params) => {
					deleteItemCallBack(params);
				}}
				params={deleteModalData} />
		</Block>
	);
};

export default ProfileAdvertisementTab;
