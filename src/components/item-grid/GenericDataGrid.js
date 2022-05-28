import { Col, Row } from 'reactstrap';
import { useModal } from '../../hooks/UseModal';
import GenericDataPagination from './GenericDataPagination';
import useGrid from '../../hooks/UseGrid';
import { useEffect, useState } from 'react';
import useToast, { ToastType } from '../../hooks/UseToast';

const GenericDataGrid = ({ DetailModal, Card, fetchData , fetchSingle, fetchSingleImages}) => {
	const [modalData, petModalOpen, , toggleModal] = useModal();
	const [params] = useState({});
	const [data, loading, error, pages, currentPage, goToNextPage, goToPreviousPage, changePage] = useGrid({
		itemsPerPage: 2,
		params: params,
		fetchData: fetchData
	});
	const { setMessage } = useToast(ToastType.ERROR);

	useEffect(() => {
		setMessage(error);
	}, [error, setMessage]);

	return (
		<div>
			{loading ? <div>loading TODO</div> : (
				<div>
					<Row>
						{data.map((value, index) => (
							<Col className='pet-card-col' xl='3' lg='4' sm='6' xs='12' key={index}>
								<Card
									openModal={toggleModal}
									{...value} />
							</Col>
						))}
					</Row>
					<GenericDataPagination
						pages={pages}
						page={currentPage}
						goToNextPage={goToNextPage}
						goToPreviousPage={goToPreviousPage}
						changePage={changePage}
					/>
					<DetailModal open={petModalOpen} closeModal={toggleModal} fetchSingle={fetchSingle} params={modalData} fetchSingleImages={fetchSingleImages}/>
				</div>
			)}
		</div>
	);
};

export default GenericDataGrid;
