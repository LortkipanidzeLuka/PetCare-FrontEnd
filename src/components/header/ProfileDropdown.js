import React, {useState} from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from "react-router-dom";
import TestUser from "../../assets/images/test-profile.jpg"

const ProfileDropdown = ()=>{
    const [menu, setMenu] = useState(false);

    const [username, setusername] = useState("admin");

    return(
        <React.Fragment>
            <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block" >
                <DropdownToggle className="btn header-item waves-effect" id="page-header-user-dropdown" tag="button">
                    <img className="rounded-circle profile-picture " src={TestUser} alt="Header Avatar" />
                    <span className="mrl-small">{username}</span>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem tag="a"  href="/profile"> Profile</DropdownItem>
                    <DropdownItem tag="a" href="/crypto-wallet">My Wallet</DropdownItem>
                    <DropdownItem tag="a" href="#">Settings</DropdownItem>
                    <DropdownItem tag="a" href="auth-lock-screen">Lock screen</DropdownItem>
                    <div className="dropdown-divider"></div>
                    <Link to="/logout" className="dropdown-item">
                        <span>Logout</span>
                    </Link>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    )
}

export default ProfileDropdown;
