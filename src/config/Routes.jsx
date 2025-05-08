// src/config/Routes.jsx

import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Search Route */}
      <Route
        path='/:category/search/:keyword'
        element={<Catalog />}
      />

      {/* Detail Route */}
      <Route
        path='/:category/:id'
        element={<Detail />}
      />

      {/* Category List Route */}
      <Route
        path='/:category'
        element={<Catalog />}
      />

      {/* Home Route */}
      <Route
        path='/'
        element={<Home />}
      />
    </Routes>
  );
}

export default AppRoutes;