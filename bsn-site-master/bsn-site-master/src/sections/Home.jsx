import React from 'react';
import CoverCoruselslider from '../homepage/Cover/CoverCoruselslider';
// import Navbar from '../homepage/Navbar/Navbar'
import About from '../homepage/about/About';
import Location from '../homepage/location/Location';
import LatestNews from '../homepage/latestNews/LatestNews';
import Footer from '../homepage/footer/Footer';
import './home.scss';

const Home = () => {
  return (
    <div className="home-div">
      <CoverCoruselslider />

      <About />
      <Location />
      <LatestNews />
      <Footer />
    </div>
  );
};

export default Home;
