import styled from "@emotion/styled";
import { theme } from "../../styles";

export const ModalWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: ${theme.colors.gray};
color: ${theme.colors.white};
padding: 15px 5px 0 5px;
`

export const Tagline = styled.div`
padding-bottom: 10px;
align-self: center;
`

export const ModalAbout = styled.div`
padding: 10px 20px 15px 20px;
width: 95%;
height: 90%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
font-weigth: 300;
`

export const ModalTitle = styled.span`
font-size: 2vw;
align-self: center;
padding-bottom: 5px;
`

export const ModalDescription = styled.span`
display: flex;
height: 12%;
overflow-y: scroll;
scrollbar-width: none;
padding: 15px;
margin-bottom: 10px;
border-radius: 20px;
box-shadow: inset 0 0 5px #000000;
text-align: justify;
`
