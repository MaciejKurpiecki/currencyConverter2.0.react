import { StyledFooter } from "./styled"

export const Footer = ({ date }) => (
    <StyledFooter className="footer">Currency exchange rate taken form European Central Bank as of: <br /> {date}</StyledFooter>
)
