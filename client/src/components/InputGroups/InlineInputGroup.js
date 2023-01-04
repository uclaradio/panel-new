import { StyledInlineInputGroup } from "./style";

const InlineInputGroup = ({ editable, children }) => {
    return (
        <StyledInlineInputGroup editable={editable}>
            {children}
        </StyledInlineInputGroup>
    );
}

export default InlineInputGroup;