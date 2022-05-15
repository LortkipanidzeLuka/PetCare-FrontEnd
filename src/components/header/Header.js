import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/test.png';
import ProfileDropdown from './ProfileDropdown';

const Header = () => {


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
						<ProfileDropdown />
					</div>
				</div>

			</header>
		</React.Fragment>
	);
};

export default Header;
