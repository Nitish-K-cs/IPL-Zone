import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Teams from './components/Teams';
import TeamData from './components/TeamData';
import Nation from "./components/Nation";
import Position from "./components/Position";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />} />
          <Route path="teams/:team" element={<TeamData />} />

          <Route path="data" element={<TeamData />} />

          <Route path="nation" element={<Nation />} />
          <Route path="nation/:country" element={<TeamData />} /> 

          <Route path="position" element={<Position />} />
          <Route path="position/:role" element={<TeamData />} />

          <Route path="search" element={<Search />} />
          <Route path="search/:player" element={<TeamData />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
