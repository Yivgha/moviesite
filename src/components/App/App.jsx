import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { authOperation } from 'redux/auth';
// import { BarMenu } from '../AppBar/BarMenu';
// import { PrivateRoute } from '../Routes/PrivateRoute';
// import { PublicRoute } from '../Routes/PublicRoute';
import { Header } from "../Header/Header";
import { SimpleBottomNavigation } from '../MainNav';
import { AppBox } from "./App.styled";
import { Trending } from '../../pages/Trending';
import { Movies } from "../../pages/Movies";
import { Series } from "../../pages/Series";
import { Search } from "../../pages/Search";


export function App() {
  return (
    <>
    <AppBox>
    <Header />
    <Routes>
        <Route exact path="/" element={<Trending />}/>
        <Route path="/movies" element={<Movies />} />
        <Route path="/series"  element={<Series />} />
        <Route path="/search" element={<Search />} />
         <Route path="*" element={<Trending />} />
      </Routes>
      <SimpleBottomNavigation />
      </AppBox>
      </>
  );
};