import { Col, Row } from 'reactstrap';
import { useModal } from '../../../hooks/UseModal';
import GenericDataPagination from '../item-pagination/GenericDataPagination';
import useGrid from '../../../hooks/UseGrid';
import React, { useEffect, useState } from 'react';
import useToast, { ToastType } from '../../../hooks/UseToast';
import GenericDataSearchBar from '../item-search/GenericDataSearchBar';
import ApiLoader from '../../styled/data/ApiLoader';
import NoData from '../../styled/data/NoData';

const GenericDataGrid = ({
													 DetailModal,
													 Card,
													 fetchData,
													 fetchSingle,
													 fetchSingleImages,
													 searchConfig,
													 updateData,
													 cardConfig,
													 gridConfig
												 }) => {
	const [modalData, petModalOpen, , toggleModal] = useModal();
	const [params, setParams] = useState(searchConfig.initialData);
	const [data, loading, error, pages, currentPage, goToNextPage, goToPreviousPage, changePage] = useGrid({
		itemsPerPage: 6, params: params, fetchData: fetchData, updateData
	});
	const { setMessage } = useToast(ToastType.ERROR);

	useEffect(() => {
		setMessage(error);
	}, [error, setMessage]);

	return (<div>

		<Row>
			<Col xl={'3'}>
				<GenericDataSearchBar searchConfig={searchConfig} setParams={setParams} />
			</Col>
			<Col xl={'9'} className={'d-flex justify-content-center flex-column'}>
				<NoData noData={(!data || !data.length) && !loading}>

					<ApiLoader loading={loading}>
						<Row>
							{data.map((value, index) => (<Col className='pet-card-col' {...gridConfig} key={index}>
								<Card openModal={toggleModal} {...value} cardConfig={cardConfig} />
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
				</NoData>
			</Col>

			<DetailModal open={petModalOpen} closeModal={toggleModal} fetchSingle={fetchSingle} params={modalData}
									 fetchSingleImages={fetchSingleImages} />
		</Row>
	</div>);
};

export default GenericDataGrid;
