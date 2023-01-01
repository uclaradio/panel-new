import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 465px;
  border-radius: 5px;
  padding: 40px 50px;
  margin: 60px auto 40px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  text-align: center;
  
  ${props => props.profile && css`
    margin-top: 10px;
    margin-left: 25%;
  `}

  ${props => props.shows && css`
    margin-top: 10px;
    margin-right: 25%;
  `}
  
  h1 {
    font-weight: 500;
    margin-bottom: 5px;
  }

  h3, h4, h5 {
    font-weight: 500;
    margin-bottom: 30px;
    color: #b9b9b9;
  }

  span {
    display: block;
    margin-top: 30px;
    color: #888888;
    font-size: 14px;
  }
`;