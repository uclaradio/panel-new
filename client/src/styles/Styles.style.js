import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neve',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.lightblue ? "#e6ffff" : "#f1efef"};
`;

export const SideBySide = styled.div`
  width: ${props => props.width || "100%"};
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  gap: ${props => props.gap || "25px"};
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  max-width: 35%;
  margin-bottom: 15px;
`;

export const UnderlinedLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

export const Spacer = styled.div`
  width: ${props => props.width || "0px"};
  height: auto;
  display: inline-block;
`;