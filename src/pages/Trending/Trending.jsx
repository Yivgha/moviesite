import Box from '@mui/material/Box';
import axios from "axios";
import { useState, useEffect } from 'react';
import { SingleContent } from "../../components/SingleContent";
import { TrendingBox, TrendingTitle } from "./Trending.styled";
import { CustomPagination } from "../../components/Pagination";
import { Outlet } from 'react-router-dom';

// const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;

export function Trending() {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    try{
    // const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);
    // const { data } = await axios.get(`https://api.themoviedb.org/3/movie/157336?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`)
    //  
  const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=8e0288e6c002e9adeca41ab040f8eda1&page=${page}`);

      setContent(data.results);
    } catch (error) {
       console.error(error);
      }
  }
  
  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();   
    // eslint-disable-next-line
  }, [page]);

    return (
        <Box >
        
        {/* <Link component={RouterLink} to="/" variant="body1"> */}
            
          <TrendingTitle>Trending Now</TrendingTitle>

            <TrendingBox>
              {content && content.map((c) => (
                <SingleContent
                  key={c.id}
                  id={c.id}
                  poster={c.poster_path}
                  title={c.title || c.name}
                  date={c.first_air_date || c.release_date}
                  media_type={c.media_type}
                  vote_average={c.vote_average} />))}
          </TrendingBox>
          
        <CustomPagination setPage={setPage} />
        <Outlet />
        {/* </Link> */}
  
    </Box>
    )
}
