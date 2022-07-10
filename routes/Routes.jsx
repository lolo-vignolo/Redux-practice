import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Ability from '../pages/Ability';
import Home from '../pages/Home';
import News from '../pages/News';
import Posts from '../pages/Posts';
import Nav from '../ui/Nav';

const Router = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <Routes>
        <Route exact path="/" element={<News />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="ability" element={<Ability />} />
        <Route exact path="posts" element={<Posts />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default Router;
