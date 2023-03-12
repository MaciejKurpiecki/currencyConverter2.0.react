import { StyledFooter } from "./styled"
import { useRatesData } from "../useRatesData"



export const Footer = ({ }) => {
    const {
        date,
        status,
    } = useRatesData();
    return (
        <>
            {status === "loading" ? (
                null
            ) : status === "error" ? (
                null
            ) : (
                <StyledFooter className="footer">Currency exchange rates taken form European Central Bank as of: <br /> {date}</StyledFooter>
            )}
        </>
    )
};
