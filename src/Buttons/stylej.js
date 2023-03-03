import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    border: 2px solid ${({ theme }) => theme.colors.main};
    padding: 5px;
    border-radius: 25px;
    font-size: larger;
    font-weight: bold;
    transition: 0.3s;

    &:hover{
        transition: 0.3s;
        transform: scale(1.2);
    };

    &:active{
        background-color: ${({ theme }) => theme.colors.mainTransparent};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    &:hover {
        transform: scale(1.1);
    }}

    ${({ calculate }) => calculate && css`
    grid-area: bt;
    `};
    ${({ reset }) => reset && css`
    grid-area: rb;
    `}
`;