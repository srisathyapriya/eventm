import React from 'react';
import { Link } from 'react-router-dom';

export default function Service() {
  return (
    <div className="text-white">
      <header className="bg-gray-800 text-white flex justify-between p-6 w-full">
        <h1 className="text-3xl text-pink-500 font-bold">Eventify</h1>
        <nav className="flex space-x-4">
          <Link to="/home" className="text-white text-xl hover:text-pink-500">Home</Link>
          <Link to="/service" className="text-white text-xl hover:text-pink-500">Services</Link>
          <Link to="/price" className="text-white text-xl hover:text-pink-500">Price</Link>
          <Link to="/contact" className="text-white text-xl hover:text-pink-500">Contact</Link>
        </nav>
      </header>
      <section 
        className="home flex flex-col items-center justify-center min-h-screen relative" 
        id="home"
      >
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="https://videos.pexels.com/video-files/14534903/14534903-hd_1280_720_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="bg-black bg-opacity-50 rounded-lg p-4 z-10 my-10">
          <section className="text-center mb-8">
            <h2 className="text-4xl font-bold text-pink-500">Our Services</h2>
            <p className="text-gray-400 mt-2">We provide a range of services to make your events unforgettable</p>
          </section>
        </div>
      
        <main className="p-4">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white hover:shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 transform transition-transform duration-300 hover:scale-105">
              <img src="https://cdn.pixabay.com/photo/2016/03/27/20/52/blue-1284240_960_720.jpg" alt="Custom Invitation Design" className="w-full h-32 object-cover rounded-md"/>
              <i className="text-5xl text-pink-500 fas fa-envelope"></i>
              <h3 className="text-2xl font-bold text-pink-500">Custom Invitation Design</h3>
              <p className="text-center text-black">Impress your guests from the start with unique and personalized invitations.</p>
            </div>
            <div className="bg-white hover:shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 transform transition-transform duration-300 hover:scale-105">
              <img src="https://cdn.pixabay.com/photo/2022/05/22/19/15/photographer-7214400_960_720.jpg" alt="Professional Photo & Video" className="w-full h-32 object-cover rounded-md"/>
              <i className="text-5xl text-pink-500 fas fa-film"></i>
              <h3 className="text-2xl font-bold text-pink-500">Professional Photo & Video</h3>
              <p className="text-center text-black">Capture every special moment of your event with our experienced photographers and videographers.</p>
            </div>
            <div className="bg-white hover:shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 transform transition-transform duration-300 hover:scale-105">
              <img src="https://cdn.pixabay.com/photo/2020/08/07/23/34/concert-5471823_1280.jpg" alt="Live Entertainment & DJs" className="w-full h-32 object-cover rounded-md"/>
              <i className="text-5xl text-pink-500 fas fa-music"></i>
              <h3 className="text-2xl font-bold text-pink-500">Live Entertainment & DJs</h3>
              <p className="text-center text-black">Find the perfect entertainment to liven up your event and keep your guests dancing.</p>
            </div>
            <div className="bg-white hover:shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 transform transition-transform duration-300 hover:scale-105">
              <img src="https://cdn.pixabay.com/photo/2020/12/17/11/07/bus-5838990_960_720.jpg" alt="Event Transportation & Rentals" className="w-full h-32 object-cover rounded-md"/>
              <i className="text-5xl text-pink-500 fas fa-shuttle-van"></i>
              <h3 className="text-2xl font-bold text-pink-500">Event Transportation & Rentals</h3>
              <p className="text-center text-black">We provide seamless transportation solutions to ensure your guests arrive stress-free.</p>
            </div>
            <div className="bg-white hover:shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 transform transition-transform duration-300 hover:scale-105">
              <img src="https://cdn.pixabay.com/photo/2022/05/06/16/20/wedding-7178668_960_720.jpg" alt="Venue Selection & Coordination" className="w-full h-32 object-cover rounded-md"/>
              <i className="text-5xl text-pink-500 fas fa-map-marker-alt"></i>
              <h3 className="text-2xl font-bold text-pink-500">Venue Selection & Coordination</h3>
              <p className="text-center text-black">Let us help you find the perfect venue and handle all the logistics for a smooth event.</p>
            </div>
            <div className="bg-white hover:shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 transform transition-transform duration-300 hover:scale-105">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Catering Services" className="w-full h-32 object-cover rounded-md"/>
              <i className="text-5xl text-pink-500 fas fa-utensils"></i>
              <h3 className="text-2xl font-bold text-pink-500">Catering Services</h3>
              <p className="text-center text-black">Delicious and diverse menu options tailored to satisfy all your guests.</p>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
}
