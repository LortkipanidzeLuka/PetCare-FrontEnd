import PetFound from '../../assets/images/found_icon.7d6654b.svg';
import PetCare from '../../assets/images/petco_love_care_black.51923ac.svg'
import Adoption from '../../assets/images/adoption.png'
import Charity from '../../assets/images/animal-charity-svgrepo-com.svg'
import { Link } from 'react-router-dom';
import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';
import Block from '../../components/styled/block/Block';

const LandingPageSquares = () => {
	const squares=[
		{
			imgUrl:PetFound,
			text:'Lost and found',
			url:'/lost-found'
		},
		{
			imgUrl:PetCare,
			text:'Pet care',
			url:'/pet-care'
		},
		{
			imgUrl:Adoption,
			text:'Adoption',
			url:'/adoption'
		},
		{
			imgUrl:Charity,
			text:'Charity',
			url:'/charity'
		}
	]
	return (
		<div className={'d-flex justify-content-between landing-page-content-width'}>
			{squares.map((value, index)=>{
				return(
					<Block key={index}>
						<div className='pet-card-content d-flex flex-column  align-items-center'
								 style={{ width: '250px', height: '250px', paddingTop: "50px" }}>
							<img width={'100px'} src={value.imgUrl} alt={value.text}/>
							<Link className={'unset-list-style'} to={value.url}>
								<Text text={value.text} type={TextType.EXTRA_LARGE} />
							</Link>
						</div>
					</Block>
				)
			})}
		</div>

	);
};

export default LandingPageSquares;
