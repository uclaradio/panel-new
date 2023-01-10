import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  min-width: 64px;
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;
  background-color: ${props => props.cancelable ? "#ed5e68" : "#2f8bfd"};
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02857rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.cancelable ? "#d04c55" : "#0072ff"};
  }
`;