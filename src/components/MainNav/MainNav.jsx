import React, { useState, useEffect } from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { useNavigate } from "react-router-dom";
import { theme } from "../../styles";


export function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
     navigate("/movies");
    } else if (value === 2) {
      navigate("/series");
    } else if (value === 3) {
      navigate("/search");
    }
  }, [value, navigate]);

  return (
    <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue) }}
      sx={{
        bgcolor: theme.colors.dark,
        fill: theme.colors.white,
        position: 'fixed',
        bottom: 0, left: 0, right: 0,
        fontFamily: 'body',
        boxShadow: '0 0 1px 3px rgba(0, 0, 0, 0.8)',
        zIndex: 99,
      }}>
      
      <BottomNavigationAction sx={{
        color: theme.colors.white,
        "&:focus": { color: theme.colors.gray,},
        "&:hover": { color: theme.colors.gray, },
        "&:active": { color: theme.colors.gray, },
        "&.Mui-selected": { color: theme.colors.gray, }}} 
        title="Trending" label="Trending" icon={<WhatshotIcon />} />
      
      <BottomNavigationAction sx={{
        color: theme.colors.white,
      "&:focus": { color: theme.colors.gray,  },
        "&:hover": { color: theme.colors.gray,  },
        "&:active": { color: theme.colors.gray, },
      "&.Mui-selected": { color: theme.colors.gray, }}}
        label="Movies" icon={<MovieFilterIcon />} />
      
      <BottomNavigationAction sx={{
        color: theme.colors.white,
      "&:focus": { color: theme.colors.gray, },
      "&:hover": { color: theme.colors.gray, },
        "&:active": { color: theme.colors.gray, },
      "&.Mui-selected": { color: theme.colors.gray, }}}
        label="Series" icon={<LiveTvIcon />} />
      
      <BottomNavigationAction sx={{
        color: theme.colors.white,
      "&:focus": { color: theme.colors.gray, },
      "&:hover": { color: theme.colors.gray, },
      "&:active": { color: theme.colors.gray, },
      "&.Mui-selected": { color: theme.colors.gray, }}}
        label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
  );
}