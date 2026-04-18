
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './pages/home-page';
import HoodiesPage from './pages/hoodies-page';

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
