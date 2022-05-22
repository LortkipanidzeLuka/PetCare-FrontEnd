import { Col, Row } from 'reactstrap';
import PetCardGeneric from '../item-card/PetCardGeneric';
import Dog from '../../assets/images/dog.jpg';
import { useModal } from '../../hooks/UseModal';
import GenericDataPagination from './GenericDataPagination';
import usePagination from '../../hooks/UsePagination';

const GenericDataGrid = ({ DetailModal }) => {

	const data = [
		{
			imgUrl: Dog,
			title: 'Dog was lost',
			description: 'This staggering number is why we created Petco Love Lost, which simplifies and shortens the lost pet search with just one photo of your pet. We are here for you should the unthinkable happen to a pet you love or find.',
			hashTags: ['dog', 'yellow', '5 kilos']
		},
		{
			imgUrl: Dog,
			title: 'Dog was lost',
			description: 'This staggering number is why we created Petco Love Lost, which simplifies and shortens the lost pet search with just one photo of your pet. We are here for you should the unthinkable happen to a pet you love or find.',
			hashTags: ['dog', 'yellow', '5 kilos']
		},
		{
			imgUrl: Dog,
			title: 'Dog was lost',
			description: 'This staggering number is why we created Petco Love Lost, which simplifies and shortens the lost pet search with just one photo of your pet. We are here for you should the unthinkable happen to a pet you love or find.',
			hashTags: ['dog', 'yellow', '5 kilos']
		},
		{
			imgUrl: Dog,
			title: 'Dog was lost',
			description: 'This staggering number is why we created Petco Love Lost, which simplifies and shortens the lost pet search with just one photo of your pet. We are here for you should the unthinkable happen to a pet you love or find.',
			hashTags: ['dog', 'yellow', '5 kilos']
		},
		{
			imgUrl: Dog,
			title: 'Dog was lost',
			description: 'This staggering number is why we created Petco Love Lost, which simplifies and shortens the lost pet search with just one photo of your pet. We are here for you should the unthinkable happen to a pet you love or find.',
			hashTags: ['dog', 'yellow', '5 kilos']
		},
		{
			imgUrl: Dog,
			title: 'Dog was lost',
			description: 'This staggering number is why we created Petco Love Lost, which simplifies and shortens the lost pet search with just one photo of your pet. We are here for you should the unthinkable happen to a pet you love or find.',
			hashTags: ['dog', 'yellow', '5 kilos']
		},
		{
			imgUrl: Dog,
			title: 'Dog was lost',
			description: 'This staggering number is why we created Petco Love Lost, which simplifies and shortens the lost pet search with just one photo of your pet. We are here for you should the unthinkable happen to a pet you love or find.',
			hashTags: ['dog', 'yellow', '5 kilos']
		},
		{
			imgUrl: Dog,
			title: 'Dog was lost',
			description: 'This staggering number is why we created Petco Love Lost, which simplifies and shortens the lost pet search with just one photo of your pet. We are here for you should the unthinkable happen to a pet you love or find.',
			hashTags: ['dog', 'yellow', '5 kilos']
		},
		{
			imgUrl: Dog,
			title: 'Dog was lost',
			description: 'This staggering number is why we created Petco Love Lost, which simplifies and shortens the lost pet search with just one photo of your pet. We are here for you should the unthinkable happen to a pet you love or find.',
			hashTags: ['dog', 'yellow', '5 kilos', 'puppy', 'little', 'nose', '5 kilos', 'puppy', 'little', 'nose']
		},
		{
			imgUrl: Dog,
			title: 'Dog was lost',
			description: 'This staggering number is why we created Petco Love Lost, which simplifies and shortens the lost pet search with just one photo of your pet. We are here for you should the unthinkable happen to a pet you love or find.',
			hashTags: ['dog', 'yellow', '5 kilos']
		},
		{
			imgUrl: Dog,
			title: 'Dog was lost',
			description: 'This staggering number is why we created Petco Love Lost, which simplifies and shortens the lost pet search with just one photo of your pet. We are here for you should the unthinkable happen to a pet you love or find.',
			hashTags: ['dog', 'yellow', '5 kilos']
		},
		{
			imgUrl: Dog,
			title: 'Dog was lost',
			description: 'This staggering number is why we created Petco Love Lost, which simplifies and shortens the lost pet search with just one photo of your pet. We are here for you should the unthinkable happen to a pet you love or find.',
			hashTags: ['dog', 'yellow', '5 kilos']
		}
	];
	const [petModalOpen, , toggleModal] = useModal();
	const [pages, page, goToNextPage, goToPreviousPage, changePage] = usePagination({ data, itemsPerPage: 10 });


	return (
		<>
			<Row>

				{data.map((value, index) => (
					<Col className='pet-card-col' xl='3' lg='4' sm='6' xs='12' key={index}>
						<PetCardGeneric
							description={value.description}
							hashTags={value.hashTags}
							title={value.title}
							openModal={toggleModal}
							imgUrl={value.imgUrl} />
					</Col>
				))}
			</Row>
			<GenericDataPagination 	pages={pages}
														 page={page}
														 goToNextPage={goToNextPage}
														 goToPreviousPage={goToPreviousPage}
														 changePage={changePage} />
			<DetailModal open={petModalOpen} closeModal={toggleModal} />
		</>
	);
};

export default GenericDataGrid;
