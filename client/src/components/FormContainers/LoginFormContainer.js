import { StyledFormContainer } from "./style";

const LoginFormContainer = ({ children }) => {
    return (
        <StyledFormContainer>
            {children}
        </StyledFormContainer>
    );
}

export default LoginFormContainer;