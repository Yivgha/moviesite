import styled from '@emotion/styled';
import { theme } from '../../styles';

export const HeaderContainer = styled.div`
width: 100%;
    cursor: pointer;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    background-color:${theme.colors.dark};
    font-family: "Roboto", sans-serif;
    font-size: 5vw;
    padding-bottom: 15px;
    box-shadow: 0 1px 5px black;
    color: ${theme.colors.white};
    z-index: 100;

    @media (max-width:1000px){
    &{
        padding-top: 15px;
       font-size: 6.4vw;
    }
}
`