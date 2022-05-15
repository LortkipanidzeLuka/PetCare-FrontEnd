import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/test.png';
import ProfileDropdown from './ProfileDropdown';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../storage/user/Selector';
import { useModal } from '../../hooks/UseModal';
import RegisterModal from '../user/Register';
import AuthModal from '../user/Login';

const Header = () => {

	const [registerOpen, , registerToggle] = useModal()
	const [authOpen, , authToggle] = useModal()

	let userInfo = useSelector(userSelectors.userInfo);
	let userName = useSelector(userSelectors.userInitials);
	useEffect(() => {
		console.log(userName);
	}, [userName]);


	return (
		<React.Fragment>
			<header className='header'>

				<div className='d-flex header-content content-width'>
					<div className='header-left '>
						<Link to='/' className='logo logo-dark'>
							<span className='logo-sm'>
								<img src={logo} alt='' height='22' />
							</span>
						</Link>
					</div>
					<div className='header-right'>
						{userInfo ? <ProfileDropdown user={userName} /> : (
							<div className={"d-flex"}>
								<div className={"header-button"} onClick={authToggle}>Log in</div>
								<div className={"header-button mrl-small"} onClick={registerToggle}>Register</div>
							</div>
						)}
					</div>
				</div>
			</header>
			<RegisterModal closeModal={registerToggle} open={registerOpen}/>
			<AuthModal closeModal={authToggle} open={authOpen}/>
		</React.Fragment>
	);
};

export default Header;
