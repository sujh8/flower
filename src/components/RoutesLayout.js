import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FallPage from './components/pages/FallPage';
import BirthdayPage from './components/pages/BirthdayPage';
import GetWellPage from './components/pages/GetWellPage';
import RosesPage from './components/pages/RosesPage';
import PlantsPage from './components/pages/PlantsPage';
import ProductList from './components/ProductList';

const RoutesLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/fall" element={<FallPage />} />
      <Route path="/birthday" element={<BirthdayPage />} />
      <Route path="/get-well" element={<GetWellPage />} />
      <Route path="/roses" element={<RosesPage />} />
      <Route path="/plants" element={<PlantsPage />} />
    </Routes>
  );
};

export default RoutesLayout;
