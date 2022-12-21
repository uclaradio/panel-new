import styled from "styled-components";
import {motion} from "framer-motion";

export const FormSection = styled.div`
  padding: 160px 0;
  background-color: black;
`;

export const FormTitle = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
`;

export const FormContainer = styled.div`
  display: flex;
`;

export const FormColumn = styled.div`
  padding: 50px;
  background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and(max-width: 768px) {
    width: 80%;
  }
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

export const FormInputRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 1.4rem;

  > p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e;
  }
`;

export const FormMessage = styled(motion.div)`
  color: ${({error}) => error ? "red" : "green"};
  padding: 5px;
  text-align: center;
  margin-top: 1rem;
`;

export const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #cfcfcf;
  font-size: 1rem;
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  color: #afafaf
`;

export const FormButton = styled.button`
  border-radius: 4px;
  background: none;
  margin-top: 1.5rem;
  white-space: nowrap;
  outline: none;
  width: 100%;
  font-size: 1.4rem;
  padding: 5px 15px;
  border: 2px solid black;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transition: background-color 0.4s ease-in;
    color: white;
    background-color: black;
  }
`;