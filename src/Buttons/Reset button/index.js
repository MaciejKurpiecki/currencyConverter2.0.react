// import { StyledResetButton } from "./styled";
import { StyledButton } from "../stylej";

export const ResetButton = ({ setAmount, setResult }) => {
    const resetForm = () => {
        setAmount("");
        setResult("");
    };
    return (
        <StyledButton reset
            onClick={resetForm}
        >Reset</StyledButton>
    );
};