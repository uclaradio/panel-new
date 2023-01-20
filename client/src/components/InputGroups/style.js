import styled from "styled-components";

export const StyledInputGroup = styled.div`
  margin-bottom: 24px;
  text-align: left;

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
    color: #777777;

    &:hover {
      cursor: auto;
    }
  }
`;

export const StyledInlineInputGroup = styled(StyledInputGroup)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  //overflow: hidden;

  label {
    width: 150px;
    text-align: right;
    white-space: nowrap;
    padding-right: 4px;
    font-weight: bold;
    font-size: 15px;
  }

  input {
    margin-left: 16px;
    border: 1px solid #e6e6e6;
    color: black;
    width: 70%;
    font-size: 15px;

    &::placeholder {
      font-style: italic;
    }
    
    &:disabled {
      border: none;
      background-color: white;
    }
  }
  
  .select {
    margin-left: 13.5px;
    width: 70%;
  }
`;