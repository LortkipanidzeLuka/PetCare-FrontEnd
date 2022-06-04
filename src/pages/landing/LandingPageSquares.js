import PetFound from '../../assets/images/found_icon.7d6654b.svg';
import PetCare from '../../assets/images/petco_love_care_black.51923ac.svg';
import Adoption from '../../assets/images/adoption.png';
import Charity from '../../assets/images/animal-charity-svgrepo-com.svg';
import { Link } from 'react-router-dom';
import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';
import Block from '../../components/styled/block/Block';
import { Col, Row } from 'reactstrap';

const LandingPageSquares = () => {
	const squares = [{
		imgUrl: PetFound, text: 'Lost and found', url: '/lost-found'
	}, {
		imgUrl: PetCare, text: 'Pet care', url: '/pet-care'
	}, {
		imgUrl: Adoption, text: 'Adoption', url: '/adoption'
	}, {
		imgUrl: Charity, text: 'Charity', url: '/charity'
	}];
	return (
		<div className={'d-flex justify-content-between landing-page-content-width full-width'}>
			<Col>

				<Row className={'full-width landing-square'}>
					{squares.map((value, index) => {
						return (
							<Col xl={3} xxl={3} sm={12} xs={12} lg={6} md={6} className={'landing-square'}>
								<Block className={'full-width full-height'}>
									<div
										className='full-width full-height pet-card-content d-flex flex-column  align-items-center  home-page-square'>
										<img width={'100px'} src={value.imgUrl} alt={value.text} />
										<Link className={'unset-list-style'} to={value.url}>
											<Text text={value.text} type={TextType.EXTRA_LARGE} />
										</Link>
									</div>
								</Block>
							</Col>
						);
					})}
				</Row>
			</Col>

		</div>

	);
};

export default LandingPageSquares;
