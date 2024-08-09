import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { GiHamburgerMenu } from 'react-icons/gi';

function Home() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 flex items-center justify-between p-6">
        <span className="text-pink-500 font-bold text-3xl">Eventify</span>
        <nav className="hidden md:flex space-x-4">
        <Link to="/home" className="text-white text-xl hover:text-pink-500">Home</Link>
          <Link to="/service" className="text-white text-xl hover:text-pink-500">Services</Link>
          <Link to="/price" className="text-white text-xl hover:text-pink-500">Price</Link>
          <Link to="/contact" className="text-white text-xl hover:text-pink-500">Contact</Link>
        </nav>
        {/* <div className="md:hidden">
          <GiHamburgerMenu
            className="text-white text-3xl cursor-pointer"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div> */}
      </header>

     
        <nav className="md:hidden fixed top-0 left-0 right-0 bg-gray-800 z-40 p-6 flex flex-col space-y-4">
          <Link to="/service" className="text-white text-xl hover:text-pink-500" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/price" className="text-white text-xl hover:text-pink-500" onClick={() => setMobileMenuOpen(false)}>Price</Link>
          <Link to="#review" className="text-white text-xl hover:text-pink-500" onClick={() => setMobileMenuOpen(false)}>Review</Link>
          <Link to="/contact" className="text-white text-xl hover:text-pink-500" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>
      

      <section
        className="home flex items-center justify-center min-h-screen bg-cover bg-center"
        id="home"
        style={{ backgroundImage: "url('https://kingsolomonscatering.com/wp-content/uploads/2022/11/bunch-flowers-leaves-table.jpg')" }}
      >
        <div className="text-center p-4 md:p-0">
          <h3 className="text-4xl md:text-5xl text-white uppercase text-shadow">
            Elevate Your Events with Our Professional Touch
            <span className="block text-pink-500 text-shadow"> - Your Partner in Creating Memorable Experiences</span>
          </h3>
          <Link to="/service" className="inline-block mt-4 px-6 py-3 bg-pink-500 text-white text-lg font-semibold rounded hover:bg-gray-400">
            Discover our Services
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;