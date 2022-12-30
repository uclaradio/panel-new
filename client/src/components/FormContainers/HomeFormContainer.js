import { StyledFormContainer } from "./style";

const HomeFormContainer = (profile, { children }) => {
    return (
        <StyledFormContainer profile={profile}>
            {children}
        </StyledFormContainer>
    );
}

export default HomeFormContainer;