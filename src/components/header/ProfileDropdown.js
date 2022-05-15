import React, {useState} from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from "react-router-dom";
// import TestUser from "../../assets/images/test-profile.jpg"
// ../../assets/images/test-profile.jpg
const ProfileDropdown = ({user})=>{
    const [menu, setMenu] = useState(false);


    return(
        <React.Fragment>
            <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block" >
                <DropdownToggle className="btn header-item waves-effect" id="page-header-user-dropdown" tag="button">
                    {/*<img className="rounded-circle profile-picture " src={TestUser} alt="Header Avatar" />*/}
                    <span className="mrl-small">{user}</span>
                    <i className="mdi mdi-chevron-down d-none d-xl-inline-block"/>

                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem tag="a"  href="/profile"> Profile</DropdownItem>
                    <DropdownItem tag="a" href="/my-uploads">My Uploads</DropdownItem>
                    <DropdownItem tag="a" href="/charity">My Charity</DropdownItem>
                    <DropdownItem tag="a" href="/adoption">My adoptions</DropdownItem>

                    <Link to="/logout" className="dropdown-item">
                        <span>Logout</span>
                    </Link>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    )
}

export default ProfileDropdown;
