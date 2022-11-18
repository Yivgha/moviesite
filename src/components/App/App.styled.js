import styled from '@emotion/styled';
import { theme } from '../../styles';

// export const Container = styled.div`
//   max-width: 1170px;
//   margin-left: auto;
//   margin-right: auto;
//   padding-left: 16px;
//   padding-right: 16px;
//   padding-top: 16px;
// `;

export const AppBox = styled.div`
min-height: 100vh;
background-color: ${theme.colors.dark};
color: ${theme.colors.white};
padding-top: 130px;
padding-bottom: 70px;
display: flex;

@media screen (max-width:700px){
    &{
        padding-top: 70px;
    }
}
`