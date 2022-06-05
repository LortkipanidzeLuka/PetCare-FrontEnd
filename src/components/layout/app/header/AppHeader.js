import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/petcare-logo.png';
import ProfileDropdown from './ProfileDropdown';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../../../storage/user/Selector';
import { useModal } from '../../../../hooks/UseModal';
import RegisterModal from '../../../user/Register';
import AuthModal from '../../../user/Login';
import Text from '../../../styled/text/Text';
import { TextType } from '../../../styled/text/TextType';

const AppHeader = () => {

	const [, registerOpen, , registerToggle] = useModal();
	const [, authOpen, , authToggle] = useModal();

	let isLoggedIn = useSelector(userSelectors.isLoggedIn);
	let userName = useSelector(userSelectors.userInitials);


	return (
		<React.Fragment>
			<header className='header'>

				<div className='d-flex header-content content-width'>
					<div className='header-left '>
						<Link to='/' className='logo logo-dark unset-list-style'>
							<span className='logo-sm'>
								<div className={'d-flex justify-content-between align-items-center'}>
									<img src={logo} alt='' height='60' width={'60'} />
									<Text text={'PetCare'} type={TextType.LOGO} classNames={['logo-text mrl-medium']}/>
								</div>
							</span>
						</Link>
					</div>
					<div className='header-right'>
						{isLoggedIn ? <ProfileDropdown user={userName} /> : (
							<div className={'d-flex'}>
								<div className={'header-button'} onClick={authToggle}>Log in</div>
								<div className={'header-button mrl-small'} onClick={registerToggle}>Register</div>
							</div>
						)}
					</div>
				</div>
			</header>
			<RegisterModal closeModal={registerToggle} open={registerOpen} />
			<AuthModal closeModal={authToggle} open={authOpen} />
		</React.Fragment>
	);
};

export default AppHeader;
