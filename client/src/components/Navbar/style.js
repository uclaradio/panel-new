import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  width: 50%;
  height: 60px;
  padding: 0 10px;
  margin: 25px auto 15px;
  color: #777777;
  background-color: #f8f8f8;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 5px;
`;

export const NavLogo = styled(Link)`
  height: 50px;
  
  img {
    height: inherit;
  }
`

export const NavItemLink = styled(Link)`
  color: inherit;
  margin-left: 25px;

  ${props => props.logout && css`
    color: red;
    margin-left: auto;
    margin-right: 16px;
  `};

  //&:hover {
  //  text-decoration: underline;
  //}
`;