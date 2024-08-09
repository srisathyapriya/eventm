import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
//   const { user, logout, isAuthenticated } = useAuth0();

  return (
    <header className="bg-gray-800 text-white flex justify-between items-center p-6 w-full">
      <h1 className="text-3xl text-pink-500 font-bold">Eventify</h1>
      <nav className="flex space-x-4 items-center">
        <Link to="/home" className="text-white text-xl hover:text-pink-500">Home</Link>
        <Link to="/service" className="text-white text-xl hover:text-pink-500">Services</Link>
        <Link to="/price" className="text-white text-xl hover:text-pink-500">Price</Link>
        <Link to="/contact" className="text-white text-xl hover:text-pink-500">Contact</Link>
        {isAuthenticated && (
          <>
            <div className="flex items-center space-x-2">
              <img src={user.picture} alt={user.name} className="rounded-full w-8 h-8" />
              <span>{user.name}</span>
            </div>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;