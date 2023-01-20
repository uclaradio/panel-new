import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 465px;
  border-radius: 5px;
  padding: 20px 50px 40px;
  margin: 60px auto 40px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  text-align: center;

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
  
  img, button {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledHomeContainer = styled(StyledContainer)`
  max-width: 25%;
  margin-top: 10px;
  padding: 20px 25px 5px;

  h1 {
    margin-bottom: 10px;
  }

  button {
    width: fit-content;
    margin-bottom: 5px;
  }

  ${props => props.profile && css`
    margin-left: 25%;
  `}

  ${props => props.shows && css`
    margin-right: 25%;
  `}
`