import styled from "styled-components";

export const StyledResetButton = styled.button`
 grid-area: rb;
    border: 2px solid hsl(33, 60%, 50%);
    padding: 5px;
    border-radius: 25px;
    font-size: larger;
    font-weight: bold;
    transition: 0.3s;


&:hover {
    transition: 0.3s;
    transform: scale(1.2);
};

&:active {
    background-color: hsl(33, 60%, 50%);
    filter: opacity(70%);
};

@media(max-width: 650px) 
  {  &:hover {
        transform: scale(1.1);
    };}
`;