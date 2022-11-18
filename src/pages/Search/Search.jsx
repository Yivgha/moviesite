import { SearchTitle, SearchBox } from './Search.styled';
import { useState, useEffect } from 'react';
import { TextField, Button, Tab, Tabs, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import { CustomPagination } from '../../components/Pagination';
import { SingleContent } from '../../components/SingleContent';


export const Search = () => {

  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=8e0288e6c002e9adeca41ab040f8eda1&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
        fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);


    return (
      <Box sx={{flex: 1,}}>
    
       
          <SearchTitle>Find the movie or TV series here</SearchTitle>


          <SearchBox >
          <TextField
              sx={{ flex: 1, background: "white", color: 'black' }}
            
            label="Search"
            variant="filled"
              onChange={(e) => setSearchText(e.target.value)}
              onKeyPress={(e) => {
                        if (e.key === "Enter" || e.keyCode === 13 || e.code === "Enter") {
                            fetchSearch(e.target.value)
                        }
                    }}
                    
            />
            <Button variant="contained" sx={{ marginLeft: 1 }}
              onClick={fetchSearch}
          >
            <SearchIcon />
          </Button>
          </SearchBox>


          <Tabs value={type} indicatorColor="primary" textColor="primary"
            onChange={(event, newValue) => { setType(newValue); setPage(1); }}
            sx={{  paddingBottom: "5px", margin: "10px 350px",}} aria-label="disabled tabs example">
            <Tab sx={{ width: "50%"}} label="Search movies" />
            <Tab sx={{width: "50%"}} label="Search TV Series"/>
          </Tabs>

        <SearchBox>
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}

          {searchText && !content && (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}

          </SearchBox>
          
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
     
    </Box>
    )
}
