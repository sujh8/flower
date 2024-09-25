import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SearchResults from './components/SearchResults'; // Import the SearchResults component

import ProductList from './components/ProductList';
import { CartProvider } from './CartContext';
import Cart from './components/Cart';
import AboutSection from './AboutSection';
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';
import Category from './components/Category';
// Import the AboutSection component
import './App.css';

// Additional Pages
import FallPage from './components/pages/FallPage';
import BirthdayPage from './components/pages/BirthdayPage';
import ThankYouPage from './components/pages/ThankYouPage';
import RosesPage from './components/pages/RosesPage';
import PlantsPage from './components/pages/PlantsPage';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fall" element={<FallPage />} />
            <Route path="/search" element={<SearchResults />} />

            <Route path="/birthday" element={<BirthdayPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/roses" element={<RosesPage />} />
            <Route path="/plants" element={<PlantsPage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<AboutSection />} />
          </Routes>
       
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
