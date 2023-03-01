import styled from "styled-components";

export const StyledClock = styled.p`
    grid-area: rt;
    margin: 0;
    justify-self: end;
    font-weight: lighter;
    font-family: 'Courier New', Courier, monospace;

    @media(max-width: 650px) 
      {
        grid-area: tt;
        justify-self: center;
    }
`;