import { StyledHomeContainer } from "./style";

const HomeContainer = ({ profile, shows, children }) => {
    return (
        <StyledHomeContainer profile={profile} shows={shows}>
            {children}
        </StyledHomeContainer>
    );
}

export default HomeContainer;