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
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const Page = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.lightblue ? '#e6ffff' : '#f1efef'};
`;

export const SideBySide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const UnderlinedLink = styled(Link)`
  // This is kind of impractical but kind of cool
  padding-left: ${props => props.paddingleft ? props.paddingleft : 0}px;
  padding-right: ${props => props.paddingright ? props.paddingright : 0}px;
  
  &:hover {
    text-decoration: underline;
  }
`;