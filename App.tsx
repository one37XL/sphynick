
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import HoodiesPage from './pages/HoodiesPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hoodies" element={<HoodiesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
