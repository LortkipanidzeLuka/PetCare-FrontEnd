import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { logout } from '../../../../storage/Actions';
import { useDispatch } from 'react-redux';
import Text from '../../../styled/text/Text';
import { TextType } from '../../../styled/text/TextType';

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
					<DropdownItem tag='a' href='/profile?tab=0'>
						<Text text={'My Advertisements'} type={TextType.MEDIUM}/>
					</DropdownItem>
					<DropdownItem tag='a' href='/profile?tab=1'>
						<Text text={'Change Information'} type={TextType.MEDIUM}/>
					</DropdownItem>
					<DropdownItem tag='a' href='/profile?tab=2'>
						<Text text={'Change Password'} type={TextType.MEDIUM}/>
					</DropdownItem>
					<DropdownItem onClick={() => logout({ dispatch })}>
						<Text text={'Logout'} type={TextType.MEDIUM}/>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</React.Fragment>
	);
};

export default ProfileDropdown;
