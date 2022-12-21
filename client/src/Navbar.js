import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer, NavbarLinkContainer, NavbarLink, Logo
} from "./styles/Navbar.style";
import BoxLogo from "./assets/boxlogo_black.png"

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/">Home</NavbarLink>
                    </NavbarLinkContainer>
                </LeftContainer>

                <RightContainer>
                    <Logo src={BoxLogo}></Logo>
                </RightContainer>
            </NavbarInnerContainer>

            <NavbarExtendedContainer/>
        </NavbarContainer>
    );
}

export default Navbar;