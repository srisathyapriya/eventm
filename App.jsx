import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Price from './Components/Price';
import Login from './Components/Login';
import Signup from './Components/Signup';
import EventCreation from './Components/EventCreation';
import EventDisplay from './Components/EventDisplay';
// import { Auth0Provider } from '@auth0/auth0-react';
// import Profile from './Components/Profile';
// import Layout from './Components/Layout';

export default function App() {
  return (
    
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/price" element={<Price />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/eventcreation" element={<EventCreation />} />
          <Route path="/home" element={<Home />} />
          <Route path="/eventdisplay" element={<EventDisplay />} />
          {/* <Route path="/profile" element={<Profile /></Layout>} /> */}
        </Routes>
      </Router>
   
  );
}