import { useModal } from '../../../hooks/UseModal';
import React, { useEffect, useState } from 'react';
import useGrid from '../../../hooks/UseGrid';
import useToast, { ToastType } from '../../../hooks/UseToast';
import { Col, Row } from 'reactstrap';
import ApiLoader from '../../styled/loader/ApiLoader';
import GenericDataPagination from '../item-pagination/GenericDataPagination';
import GenericDataSearchList from '../item-search/GenericDataSearchList';

const GenericDataList = ({ DetailModal, Card, fetchData, fetchSingle, fetchSingleImages, searchConfig }) => {
	const [modalData, petModalOpen, , toggleModal] = useModal();
	const [params] = useState({});
	const [data, loading, error, pages, currentPage, goToNextPage, goToPreviousPage, changePage] = useGrid({
		itemsPerPage: 10, params: params, fetchData: fetchData
	});
	const { setMessage } = useToast(ToastType.ERROR);
	const toggleModalWrapper=(type)=>{
		// const PetTypeModals[type]
	}

	useEffect(() => {
		setMessage(error);
	}, [error, setMessage]);
	return (
		<Row className={'advertisement-list'}>
			<Col xl={'12'}>
				<GenericDataSearchList searchConfig={searchConfig} />
			</Col>
			<Col xl={'12'} className={'d-flex justify-content-center flex-column'}>
				<ApiLoader loading={loading}>
					<Row>
						{data.map((value, index) => (
							<Col className={'mrb-medium'} xl={12} lg={12} md={12} sm={12} xs={12} xxl={6} key={index}>
								<Card
									openModal={toggleModal}
									{...value} />
							</Col>))}
					</Row>
					<GenericDataPagination
						pages={pages}
						page={currentPage}
						goToNextPage={goToNextPage}
						goToPreviousPage={goToPreviousPage}
						changePage={changePage}
					/>
				</ApiLoader>
			</Col>

			<DetailModal open={petModalOpen} closeModal={toggleModal} fetchSingle={fetchSingle} params={modalData}
									 fetchSingleImages={fetchSingleImages} />
		</Row>

	);
};

export default GenericDataList;
