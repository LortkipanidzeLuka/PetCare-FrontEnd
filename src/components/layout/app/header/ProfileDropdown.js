import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { logout } from '../../../../storage/Actions';
import { useDispatch } from 'react-redux';

const ProfileDropdown = ({ user }) => {
	const [menu, setMenu] = useState(false);
	const dispatch = useDispatch();

	return (
		<React.Fragment>
			<Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className='d-inline-block'>
				<DropdownToggle className='btn header-item waves-effect' id='page-header-user-dropdown' tag='button'>
					<span className='mrl-small'>{user}</span>

				</DropdownToggle>
				<DropdownMenu end>
					<DropdownItem tag='a' href='/profile?tab=0'>My Advertisements</DropdownItem>
					<DropdownItem tag='a' href='/profile?tab=1'>Change Information</DropdownItem>
					<DropdownItem tag='a' href='/profile?tab=2'>Change Password</DropdownItem>
					<DropdownItem onClick={() => logout({ dispatch })}>Logout</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</React.Fragment>
	);
};

export default ProfileDropdown;
