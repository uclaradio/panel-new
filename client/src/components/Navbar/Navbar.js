import { NavItemLink, NavLogo, StyledNavbar } from "./style";
import Logo from "../../assets/fun_box_logo.jpg";

import handleSignOut from "../../pages/LoginPage.js";

// A&D Drive > Archive > Big Merch Folder > Box Logos

const Navbar = () => {
    return (
        <StyledNavbar>
            <NavLogo to="/home">
                <img src={Logo} alt="Fun Box Logo" />
            </NavLogo>
            <NavItemLink to="/faq">FAQ</NavItemLink>
            <NavItemLink to="/booth">Booth</NavItemLink>
            {/* <NavItemLink to "/" onClick={(e) => handleSignOut(e)}>Sign Out</NavItemLink> */}
            <NavItemLink to="/" logout="true">
                Log Out
            </NavItemLink>
        </StyledNavbar>
    );
};

export default Navbar;
