import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Repo from './pages/Repo';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/repo" element={<Repo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;