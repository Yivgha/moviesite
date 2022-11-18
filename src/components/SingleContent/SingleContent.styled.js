import styled from '@emotion/styled';
import { theme } from '../../styles';

export const MediaContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
text-decoration: none;
width: 200px;
height: 90%;
padding: 10px;
margin: 10px 0;
background-color: ${theme.colors.dark};
border-radius: 10px;
border: 2px solid  rgba(151, 151, 151, 0.52);
position: relative;

&:hover, &:focus {
  background-color: ${theme.colors.gray};
  color: ${theme.colors.white};
}

& .MuiBadge-root{
  position: absolute;
  top: 0;
  right: 10px;
}

@media (max-width: 550px) {
  & {
    width: 46%;
  }
}
}
`

export const Poster = styled.div`
border-radius: 10px;
`

export const Title = styled.span`
width: 100%;
text-align: center;
font-size: 17px;
padding: 8px 0;
text-decoration: none;
color: ${theme.colors.white};
margin-top: 5px;
`

export const MediaType = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: space-between;
align-items: center;
margin-bottom: 3px;
padding: 0 2px;
text-decoration: none;
color: ${theme.colors.white};
`