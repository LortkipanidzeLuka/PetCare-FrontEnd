import { TextType } from '../../styled/text/TextType';
import Text from '../../styled/text/Text';
import { Col, Row } from 'reactstrap';
import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const AppFooter = () => {
	return (
		<footer className={'footer'}>
			<div className={'landing-page-content-width'}>
				<Row>
					<Col xs={4} md={2} lg={2} sm={6} xxl={2} xl={2}
							 className={'d-flex flex-column justify-content-center p-all-very-big'}>
						<div className={'footer-logo-wrapper d-flex flex-row align-items-center'}>
							<div>
								<img src={logo} height={'50'} alt={'petcare'} />
							</div>
							<div>
								<Text text={'PetCare'} type={TextType.LARGE} classNames={['mrl-small']} />
							</div>
						</div>
					</Col>
					<Col xs={8} md={4} lg={4} sm={6} xxl={4} xl={4} className={' p-all-very-big'}>
						<Text text={'Menu'} type={TextType.LARGE} />
						<div className={'d-flex flex-column '}>
							<div className={'d-flex flex-row justify-content-between'}>
								<div className={'d-flex flex-column divided-info'}>
									<Link to={'/lost-found'} className={'unset-list-style'}>
										<Text text={'Lost Pets'} type={TextType.MEDIUM} />
									</Link>
									<Link to={'/lost-found'} className={'unset-list-style'}>
										<Text text={'Found Pets'} type={TextType.MEDIUM} />
									</Link>
									<Link to={'/lost-found'} className={'unset-list-style'}>
										<Text text={'Pet Adoption'} type={TextType.MEDIUM} />
									</Link>
								</div>
								<div className={'d-flex flex-column divided-info'}>

									<Link to={'/lost-found'} className={'unset-list-style'}>
										<Text text={'Lost Pets'} type={TextType.MEDIUM} classNames={['justify-content-end']} />
									</Link>
									<Link to={'/lost-found'} className={'unset-list-style'}>
										<Text text={'Found Pets'} type={TextType.MEDIUM} classNames={['justify-content-end']} />
									</Link>
									<Link to={'/lost-found'} className={'unset-list-style'}>
										<Text text={'Pet Adoption'} type={TextType.MEDIUM} classNames={['justify-content-end']} />
									</Link>
								</div>
							</div>
						</div>
					</Col>
					<Col xs={1} md={1} lg={1} sm={1} xxl={1} xl={1} className={'empty-footer-div'} />
					<Col className={' p-all-very-big'}>
						<div className={'d-flex flex-column divided-info'}>
							<div className={'d-flex flex-row'}>
								<Text text={'Contact Information'} type={TextType.LARGE} />
							</div>
							<div className={'d-flex flex-row justify-content-between'}>
								<Text text={'E-mail'} type={TextType.REGULAR} classNames={['faint-text footer-key']} />
								<Text text={'info@petcare.com'} type={TextType.REGULAR} />
							</div>

							<div className={'d-flex flex-row justify-content-between'}>
								<Text text={'Phone'} type={TextType.REGULAR} classNames={['faint-text footer-key']} />
								<Text text={'555349719'} type={TextType.REGULAR} />
							</div>
							<div className={'d-flex flex-row justify-content-between'}>
								<Text text={'Address'} type={TextType.REGULAR} classNames={['faint-text footer-key']} />
								<Text text={'Tbilisi, Rustaveli ave, N12'} type={TextType.REGULAR} />
							</div>
						</div>
					</Col>
				</Row>
				<Row>
					<div className={'d-flex justify-content-between'}>
						<div>
							<Text text={'@2022 Beso_Tato_Luka'} type={TextType.REGULAR} classNames={['mrl-small']} />
						</div>
						<div className={'mrl-small'}>
							<Text text={'All Right Reserved.'} type={TextType.REGULAR} classNames={['mrl-small']} />
						</div>
					</div>
				</Row>
			</div>
		</footer>
	);
};
export default AppFooter;
