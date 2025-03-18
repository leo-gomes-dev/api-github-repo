import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Repo from './pages/Repo';

export default function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/repo" element={<Repo />} />
      </Routes>
    </BrowserRouter>
  );
};

