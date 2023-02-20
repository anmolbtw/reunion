import React, { useContext } from 'react';

// Import context
import { HouseContext } from './HouseContext';
// Import components
import House from './House';
// Import link
import { Link } from 'react-router-dom';
// Import icons
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  // Get the houses and loading state from the context
  const { houses, loading } = useContext(HouseContext);

  // If data is still loading, show a loading spinner
  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
    );
  }

  // If no houses are found, display a message
  if (houses.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 mt-48'>
        Sorry, nothing was found.
      </div>
    );
  }

  // If there are houses to display, map over them and render each house component inside a link to the house's details page
  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
