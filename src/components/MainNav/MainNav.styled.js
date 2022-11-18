import styled from '@emotion/styled';
import { theme } from '../../styles';

export const BottomNavigations = styled.div`
position: fixed;
display: flex;
justify-content: space-evenly;
color: ${theme.colors.white};
width: 100vw;
bottom: 0;
border: 0;
outline: 0;
background-color: ${theme.colors.dark};
box-shadow: 0 1px 5px black;
z-index: 99;
opacity: 1;
`
