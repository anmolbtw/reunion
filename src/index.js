// Import the React and ReactDOM libraries.
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import a CSS file for styling.
import './index.css';

// Import the App component from a local file.
import App from './App';

// Import a HouseContextProvider component from a local file.
import HouseContextProvider from './components/HouseContext';

// Import the BrowserRouter component from the 'react-router-dom' library.
// router will be used for determining which component should be rendered 
// based on the current URL in the browser's address bar.
import { BrowserRouter as Router } from 'react-router-dom';

// Use the `createRoot` method from the ReactDOM library to create a new root
// for the React application and specify that it should be attached to the element
// with an ID of 'root' in the HTML document.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component to the root element inside a Router and HouseContextProvider component.
root.render(
  <Router>
    <HouseContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HouseContextProvider>
  </Router>
);
