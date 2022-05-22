import { Col, Row } from 'reactstrap';
import PetCardGeneric from '../item-card/PetCardGeneric';
import { useModal } from '../../hooks/UseModal';
import GenericDataPagination from './GenericDataPagination';
import useGrid from '../../hooks/UseGrid';
import { useEffect, useState } from 'react';
import useToast, { ToastType } from '../../hooks/UseToast';
import Api from 'src/services/index';

const GenericDataGrid = ({ DetailModal }) => {

	const [petModalOpen, , toggleModal] = useModal();
	const [params,] = useState({});
	const [data, loading, error, pages, currentPage, goToNextPage, goToPreviousPage, changePage] = useGrid({
		itemsPerPage: 10,
		params: params,
		fetchData: Api.Adv.fetchAdvs
	});
	const {setMessage} = useToast(ToastType.ERROR);

	useEffect(() => {
		setMessage(error);
	}, [error, setMessage]);

	return (
		<div>
			{loading ? <div>loading TODOOO</div> : (
				<div>
					<Row>
						{data.map((value, index) => (
							<Col className='pet-card-col' xl='3' lg='4' sm='6' xs='12' key={index}>
								<PetCardGeneric
									description={value.description}
									hashTags={value.tags}
									title={value.header}
									openModal={toggleModal}
									city={value.city}
									createDate={value.createDate}
									imgUrl={value.imgUrl} />
							</Col>
						))}
					</Row>
					<GenericDataPagination pages={pages}
																 page={currentPage}
																 goToNextPage={goToNextPage}
																 goToPreviousPage={goToPreviousPage}
																 changePage={changePage} />
					<DetailModal open={petModalOpen} closeModal={toggleModal} />
				</div>
			)}
		</div>
	);
};

export default GenericDataGrid;
