// import Link from '@mui/material/Link';
// import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import { SeriesTitle, SeriesBox } from "./Series.styled";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { CustomPagination } from '../../components/Pagination';
import { SingleContent } from '../../components/SingleContent';
import { Genres } from "../../components/Genres";
import useGenre from "../../hooks/useGenre";

export function Series() {

 const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const genreforURL = useGenre(selectedGenres);

  const fetchSeries = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=8e0288e6c002e9adeca41ab040f8eda1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSeries();
    // eslint-disable-next-line
  }, [page, genreforURL]);


    return (
        <Box >
    
        {/* <Link component={RouterLink} to="/series" variant="body1"> */}

          <SeriesTitle>TV Series</SeriesTitle>
          
         <Genres
          type="tv"
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          genres={genres}
          setGenres={setGenres}
          setPage={setPage}
        />
        
        <SeriesBox>
          {content && content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              vote_average={c.vote_average} />))}
        </SeriesBox>

        {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={numOfPages} />
          )}
          
        {/* </Link> */}
 
    </Box>
    )
}
