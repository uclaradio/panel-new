import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 80%;
  height: 50px;
  background-color: black;
  display: flex;
  flex-direction: column;
  margin: auto auto 15px; // top, right & left, bottom
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  background-color: red;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: flex-end;
  padding-right: 50px;
  background-color: salmon;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`

export const Logo = styled.img`
  margin-left: auto;
  height: 50px;
`

export const NavbarExtendedContainer = styled.div``;