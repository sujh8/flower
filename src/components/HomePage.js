import React from 'react';
import './HomePage.css'; // Ensure this CSS file styles your HomePage
import Category from './Category'; // Correct the path for the Category component
import ProductList from './ProductList'; // Correct the path for the ProductList component
import IconSection from './IconSection'; // Import the IconSection component
import AboutSection from '../AboutSection'; 
const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <div className="marquee-container">
          <h1 className="marquee-text">Get Well Soon Flower Arrangements</h1>
        </div>
      </header>
      
      <main>
        <IconSection /> {/* Use the IconSection component */}

        <div className="categories-grid">
          <Category title="Fall" image="/images/fall.jpg" link="/fall" />
          <Category title="THANK YOU" image="/images/hh.jpg" link="/sympathy" />
          <Category title="Birthday" image="/images/birth.jpg" link="/birthday" />
          <Category title="Get Well" image="/images/chan.jpg" link="/get-well" />
          <Category title="Roses" image="/images/flower.jpg" link="/roses" />
          <Category title="Plants" image="/images/plant.jpg" link="/plants" />
          <Category title="Anniversary" image="/images/rose.jpg" link="/anniversary" />
          <Category title="Housewarming" image="/images/roseflower.jpg" link="/housewarming" />
        </div>
        <ProductList /> {/* Include ProductList if it's part of the Home page */}
        <AboutSection /> {/* Add the AboutSection component here */}

      </main>
    </div>
  );
}

export default HomePage;
