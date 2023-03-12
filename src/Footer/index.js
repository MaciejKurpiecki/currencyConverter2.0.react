import { StyledFooter } from "./styled"

export const Footer = ({ date }) => (
    <StyledFooter className="footer">Currency exchange rates taken form European Central Bank as of: <br /> {date}</StyledFooter>
)
