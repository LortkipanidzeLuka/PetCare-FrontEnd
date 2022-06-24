import PetFound from '../../assets/images/square-found.svg';
import PetCare from '../../assets/images/square-petcare.svg';
import Adoption from '../../assets/images/square-adoption.png';
import Charity from '../../assets/images/square-charity.svg';
import { Link } from 'react-router-dom';
import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';
import Block from '../../components/styled/block/Block';
import { Col, Row } from 'reactstrap';

const LandingPageSquares = () => {
	const squares = [{
		imgUrl: PetFound, text: 'Lost and found', url: '/lost-found'
	}, {
		imgUrl: PetCare, text: 'Pet service', url: '/pet-care'
	}, {
		imgUrl: Adoption, text: 'Adoption', url: '/lost-found'
	}, {
		imgUrl: Charity, text: 'Donation', url: '/donation'
	}];
	return (
		<div className={'d-flex justify-content-between landing-page-content-width full-width'}>
			<Col>

				<Row className={'full-width landing-square'}>
					{squares.map((value, index) => {
						return (
							<Col key={index} xl={3} xxl={3} sm={12} xs={12} lg={6} md={6} className={'landing-square'}>
								<Block className={'full-width'}>
									<div className='full-width pet-card-content d-flex flex-column  align-items-center  home-page-square'>
										<img src={value.imgUrl} alt={value.text} />
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
