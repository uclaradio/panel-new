import { StyledFormContainer } from "./style";

const FormContainer = ({ children }) => {
    return (
        <StyledFormContainer>
            {children}
        </StyledFormContainer>
    );
}

export default FormContainer;