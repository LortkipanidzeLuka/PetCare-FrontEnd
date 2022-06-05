import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/petcare-logo.png';
import Text from '../../../styled/text/Text';
import { TextType } from '../../../styled/text/TextType';

const LandingHeader = () => {
	const style = {
		color: 'unset',
		textDecoration: 'auto'
	};
	const tabs = [
		{
			path: '#home',
			text: 'Home'
		},
		{
			path: '#aboutUs',
			text: 'About Us'
		},
		{
			path: '#achievements',
			text: 'Achievements'
		},
		{
			path: '#faqs',
			text: 'FAQs'
		}
	];
	return (
		<React.Fragment>
			<header className='header landing-header'>
				<div className='d-flex header-content landing-page-content-width'>
					<div className='header-left '>
						<Link to='/' className='logo logo-dark unset-list-style'>
							<div className={'d-flex justify-content-between align-items-center'}>
								<img src={logo} alt='' height='60' width={'60'} />
								<Text text={'PetCare'} type={TextType.LOGO} classNames={['logo-text mrl-medium']} />
							</div>
						</Link>
					</div>
					<div className='header-right'>
						<nav id='navbar-example2' className='navbar'>

							<ul className='subheader-list m-auto nav landing-subheader'>
								{tabs.map((value, index) => (
										<li key={index}>
											<a href={value.path} style={style}>
												<Text text={value.text} type={TextType.HEADING} />
											</a>
										</li>
									)
								)}
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</React.Fragment>
	);
};

export default LandingHeader;
