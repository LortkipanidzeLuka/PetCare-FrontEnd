import PetCardGeneric from '../../components/item-card/PetCardGeneric';
import { Col, Row } from 'reactstrap';
import Dog from '../../assets/images/dog.jpg';

const SingleRowPetList = () => {

	const data = [
		{
			imgUrl: Dog,
			title: 'Dog was api',
			description: 'This staggering number is why we created Petco Love Lost, which simplifies and shortens the api pet search with just one photo of your pet. We are here for you should the unthinkable happen to a pet you love or find.',
			hashTags: ['dog', 'yellow', '5 kilos']
		},
		{
			imgUrl: Dog,
			title: 'Dog was api',
			description: 'This staggering number is why we created Petco Love Lost, which simplifies and shortens the api pet search with just one photo of your pet. We are here for you should the unthinkable happen to a pet you love or find.',
			hashTags: ['dog', 'yellow', '5 kilos']
		},
		{
			imgUrl: Dog,
			title: 'Dog was api',
			description: 'This staggering number is why we created Petco Love Lost, which simplifies and shortens the api pet search with just one photo of your pet. We are here for you should the unthinkable happen to a pet you love or find.',
			hashTags: ['dog', 'yellow', '5 kilos', 'puppy', 'little', 'nose', '5 kilos', 'puppy', 'little', 'nose']
		}
	];

	return (
		<>
			<Row>
				{data.map((value, index) => (
					<Col className='pet-card-col' xl='3' lg='4' sm='6' xs='12' key={index}>
						<PetCardGeneric
							description={value.description}
							hashTags={value.hashTags}
							title={value.title}
							openModal={() => {
							}}
							imgUrl={value.imgUrl} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default SingleRowPetList;
