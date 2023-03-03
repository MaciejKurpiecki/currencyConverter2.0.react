import styled from "styled-components";

export const StyledClock = styled.p`
    grid-area: rt;
    margin: 0;
    justify-self: end;
    font-weight: lighter;
    font-family: 'Courier New', Courier, monospace;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) 
      {
        grid-area: tt;
        justify-self: center;
    }
`;