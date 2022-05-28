import { Col, Row } from 'reactstrap';
import { useModal } from '../../hooks/UseModal';
import GenericDataPagination from './GenericDataPagination';
import useGrid from '../../hooks/UseGrid';
import React, { useEffect, useState } from 'react';
import useToast, { ToastType } from '../../hooks/UseToast';
import GenericDataSearch from './GenericDataSearch';
import ApiLoader from '../styled/loader/ApiLoader';

const GenericDataGrid = ({ DetailModal, Card, fetchData, fetchSingle, fetchSingleImages, searchConfig }) => {
	const [modalData, petModalOpen, , toggleModal] = useModal();
	const [params] = useState({});
	const [data, loading, error, pages, currentPage, goToNextPage, goToPreviousPage, changePage] = useGrid({
		itemsPerPage: 10, params: params, fetchData: fetchData
	});
	const { setMessage } = useToast(ToastType.ERROR);

	useEffect(() => {
		setMessage(error);
	}, [error, setMessage]);

	return (<div>

		<Row>
			<Col xl={'3'}>
				<GenericDataSearch searchConfig={searchConfig} />
			</Col>
			<Col xl={'9'} className={'d-flex justify-content-center flex-column'}>
				<ApiLoader loading={loading}>
					<Row>
						{data.map((value, index) => (<Col className='pet-card-col' xl='4' lg='6' sm='6' xs='12' key={index}>
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
	</div>);
};

export default GenericDataGrid;
