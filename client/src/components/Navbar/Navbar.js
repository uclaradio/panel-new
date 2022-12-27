import { StyledNavbar, NavItemLink } from "./style";

const Navbar = () => {
    return (
        <StyledNavbar>
            <NavItemLink to="/home">Home</NavItemLink>
            <NavItemLink to="/faq">FAQ</NavItemLink>
            <NavItemLink to="/" logout>Log Out</NavItemLink>
        </StyledNavbar>
    )
}

export default Navbar;