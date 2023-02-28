import { StyledResetButton } from "./styled";

export const ResetButton = ({ setAmount, setResult }) => {
    const resetForm = () => {
        setAmount("");
        setResult("");
    };
    return (
        <StyledResetButton
            onClick={resetForm}
        >Reset</StyledResetButton>
    );
};