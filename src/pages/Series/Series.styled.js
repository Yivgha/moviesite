import styled from "@emotion/styled";
import { theme } from "../../styles";

export const SeriesTitle = styled.div`
display: flex;
font-size: 3vw;
text-align: center;
justify-content: center;
text-transform: uppercase;
color: ${theme.colors.white};
padding: 4px;
border-radius: 50px;

@media screen(min-width: 1000px){
    font-size: 6.4vw;
}
`
export const SeriesBox = styled.div`
background-color: ${theme.colors.dark};
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`
