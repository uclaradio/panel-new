import { StyledContainer } from "./style";

const Container = ({ profile, shows, children }) => {
    return (
        <StyledContainer profile={profile} shows={shows}>
            {children}
        </StyledContainer>
    );
}

export default Container;