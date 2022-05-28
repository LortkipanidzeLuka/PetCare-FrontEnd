import { Carousel } from 'react-responsive-carousel';

const PetCarousel = ({ data }) => {

	return (
		<>
			{data &&
				(<Carousel className={'pet-carousel'} dynamicHeight>
					{data.map((value, index) => <img className={'modal-picture'} alt={`pet-no ${index}`} src={value} key={index} />)}
				</Carousel>)
			}
		</>
	);
};

export default PetCarousel;
