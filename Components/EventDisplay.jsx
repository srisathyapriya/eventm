import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EventDisplay = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div className="text-white text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-10">Error: {error}</div>;
  }

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
      <section className="min-h-screen bg-cover bg-center p-4" id="home" style={{ backgroundImage: "url('https://kingsolomonscatering.com/wp-content/uploads/2022/11/bunch-flowers-leaves-table.jpg')" }}>
        <div className="flex flex-col items-center">
          <div className="bg-black bg-opacity-60 rounded-lg p-6 my-10 max-w-xl w-full">
            <h2 className="w-full text-5xl font-bold text-pink-500 text-center mb-6">My Events</h2>
          </div>
          <div className="flex flex-wrap justify-center w-full">
            {events.map((event) => (
              <div key={event._id} className="bg-white p-6 m-4 rounded-lg shadow-md text-gray-700 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2 text-pink-500">{event.title}</h3>
                <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Services:</strong> {event.servicesRequired.join(', ')}</p>
                <p><strong>Package:</strong> {event.package}</p>
                <p className="mt-4">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-4 right-4">
          <Link to="/eventcreation" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Continue Creating Events</Link>
        </div>
      </section>
    </div>
  );
};

export default EventDisplay;