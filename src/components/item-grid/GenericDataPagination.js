import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const GenericDataPagination = ({ pages, page, goToNextPage, goToPreviousPage, changePage }) => {
	return (
		<Pagination className='pagination pagination-rounded justify-content-center mt-10 mb-5 mrt-big'>
			<PaginationItem active>
				<PaginationLink previous href='#' onClick={goToPreviousPage} />
			</PaginationItem>
			{[...Array(pages)].map((value, index) => (
				<PaginationItem active={(index+1) === page}>
					<PaginationLink href='#' onClick={changePage}>{index + 1}</PaginationLink>
				</PaginationItem>
			))}
			<PaginationItem active>
				<PaginationLink next href='#' onClick={goToNextPage} />
			</PaginationItem>
		</Pagination>
	);
};

export default GenericDataPagination;
