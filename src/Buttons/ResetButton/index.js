import { StyledButton } from "../styled";

export const ResetButton = ({ onClick }) => {

    return (
        <StyledButton reset
            onClick={onClick}
        >Reset</StyledButton>
    );
};