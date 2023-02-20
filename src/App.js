import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

// Import pages
import Home from './pages/Home';

const App = () => {
  return (
    // Render a container div with a maximum width of auto width pixels, centered on the page,
    // and with a white background
    <div className='max-w-auto mx-auto bg-white'>
      {/* Render the Header component */}
      <Header />

      {/* Render a `Routes` component that will handle routing */}
      <Routes>
        {/* Define a `Route` that will render the Home component when the URL path is '/' */}
        <Route path='/' element={<Home />} />
      </Routes>

      {/* Render the Footer component */}
      <Footer />
    </div>
  );
};

export default App;
