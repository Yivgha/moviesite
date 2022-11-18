import axios from "axios"
import { useEffect } from "react";
import Chip from '@mui/material/Chip';

export const Genres = ({ type, selectedGenres, genres, setGenres, setSelectedGenres, setPage }) => {
    
    const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

    
    const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };
    
    const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=8e0288e6c002e9adeca41ab040f8eda1&language=en-US`
    );
    setGenres(data.genres);
  };

    useEffect(() => {
    
    fetchGenres();

    return () => {
      setGenres([]);
     };
     // eslint-disable-next-line
  }, []);
    
    return (
        <div sx={{ padding: "6px 0" }}>

          {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 3 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="medium"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          style={{ margin: 3 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="medium"
        onClick={() => handleAdd(genre)}
        color="primary" variant="outlined"
        />
      ))}
        </ div>
  
    );
}