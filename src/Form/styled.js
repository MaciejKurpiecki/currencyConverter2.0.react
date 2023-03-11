import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    max-width: 800px;
    max-height: 600px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
        "lt lt rt rt"
        "in in ou ou"
        "in in ou ou"
        "in in ou ou"
        ".. bt bt .."
        ".. rb rb .."
        ".. ft ft ..";
    justify-content: center;
    justify-items: stretch;
    align-content: center;
    margin: 100px auto;
    padding: 20px;
    gap: 20px;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    border: 5px ${({ theme }) => theme.colors.border} solid;
    border-radius: 25px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) 
    {
        max-width: 650px;
        max-height: 1000px;
        margin: 20px 1%;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
            "tt tt"
            "in in"
            "in in"
            "ou ou"
            "ou ou"
            "bt bt"
            "rb rb"
            "ft ft";
    }
`;

export const StyledFieldset = styled.fieldset`
    border: 2px solid ${({ theme }) => theme.colors.main};
    border-radius: 25px;
    text-align: center;
    display: grid;
    align-content: start;
    justify-items: stretch;

    ${({ Input }) => Input && css`
    grid-area: in;
    `};

    ${({ Output }) => Output && css`
    grid-area: ou;
    `};
`;

export const StyledLegend = styled.legend`
    border: 2px solid ${({ theme }) => theme.colors.main};
    padding: 10px;
    border-radius: 25px;
`;

export const StyledInputField = styled.input`
    border: 2px solid ${({ theme }) => theme.colors.main};
    padding: 15px;
    border-radius: 25px;
    font-weight: bold;
    text-align: center;
    width: 245px;
 

    &:hover {
    border: 2px solid ${({ theme }) => theme.colors.main};
    background-color: ${({ theme }) => theme.colors.mainTransparent};
    }
    &:active {
    border: 2px solid ${({ theme }) => theme.colors.main};
    background-color: ${({ theme }) => theme.colors.mainTransparent};
    }
    &:focus-visible {
    border: 2px solid ${({ theme }) => theme.colors.main};
    background-color: ${({ theme }) => theme.colors.mainTransparent};
    outline: none;
    }
`;