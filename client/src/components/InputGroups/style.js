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

  label {
    width: 150px;
    text-align: right;
    white-space: nowrap;
    padding-right: 4px;
    font-weight: bold;
  }

  input {
    margin-left: 16px;
    width: 100%;
    border: none;
    //pointer-events: none;

    &::placeholder {
      //color: black;
      font-style: italic;
    }
  }
`;