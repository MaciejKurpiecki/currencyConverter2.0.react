import { StyledFooter } from "./styled"

export const Footer = ({ date }) => (
    <StyledFooter className="footer">Currency exchange rate as of: {date}</StyledFooter>
)
