import React from 'react';

// Import custom components
import HouseList from '../components/HouseList';
import Banner from '../components/Banner';

// Define the Home component
const Home = () => {
  // Render a div element with a minimum height of 1800 pixels that contains the Banner and HouseList components
  return (
    <div className='min-h-[1800px]'>
      <Banner />   {/* Render the Banner component*/}
      <HouseList /> {/* Render the HouseList component*/}
    </div>
  );
};

export default Home;
