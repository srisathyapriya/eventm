import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const EventCreation = () => {
  const [event, setEvent] = useState({
    title: '',
    date: '',
    servicesRequired: '',
    location: '',
    package: '',
    description: ''
  });
  const [formValid, setFormValid] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value
    });
  };

  const validateForm = () => {
    return (
      event.title.trim() !== '' &&
      event.date.trim() !== '' &&
      event.servicesRequired.trim() !== '' &&
      event.location.trim() !== '' &&
      event.package.trim() !== '' &&
      event.description.trim() !== ''
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setFormValid(false);
      return;
    }
    setFormValid(true);
    try {
      const response = await fetch('http://localhost:5000/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });

      if (!response.ok) {
        throw new Error('Failed to create event');
      }

      // Redirect to event display page using window.location
      window.location.href = '/eventdisplay';

      setSuccessMessage('Event created successfully!');
      setEvent({
        title: '',
        date: '',
        servicesRequired: '',
        location: '',
        package: '',
        description: ''
      });
    } catch (error) {
      console.error('Error creating event:', error.message);
      setSuccessMessage('');
    }
  };

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
      <section className="home flex items-center justify-center min-h-screen bg-cover bg-center" id="home" style={{backgroundImage: "url('https://kingsolomonscatering.com/wp-content/uploads/2022/11/bunch-flowers-leaves-table.jpg')"}}>
        <form className="bg-black bg-opacity-60 rounded-lg p-20 z-10 my-10" onSubmit={handleSubmit}>
          <section className="text-center mb-8">
            <h2 className="text-4xl font-bold text-pink-500">Create Your Event</h2>
            <p className="text-gray-400 mt-2">Fill in the details below to create your event</p>
          </section>
          {!formValid && (
            <div className="mb-4 text-red-500 font-bold">
              Please fill in all the fields.
            </div>
          )}
          {successMessage && (
            <div className="mb-4 text-green-500 font-bold">
              {successMessage}
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-400 font-bold mb-2">Event Title</label>
            <input type="text" id="title" name="title" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter event title" onChange={handleChange} value={event.title}/>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-400 font-bold mb-2">Event Date</label>
            <input type="date" id="date" name="date" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={event.date}/>
          </div>
          <div className="mb-4">
            <label htmlFor="servicesRequired" className="block text-gray-400 font-bold mb-2">Services Required</label>
            <textarea id="servicesRequired" name="servicesRequired" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter required services" onChange={handleChange} value={event.servicesRequired}></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-400 font-bold mb-2">Location</label>
            <input type="text" id="location" name="location" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your location (Eg:Coimbatore)" onChange={handleChange} value={event.location}/>
          </div>
          <div className="mb-4">
            <label htmlFor="package" className="block text-gray-400 font-bold mb-2">Package Selected</label>
            <select id="package" name="package" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={event.package}>
              <option value="" disabled>Choose a package</option>
              <option value="basic">Basic</option>
              <option value="prime">Prime</option>
              <option value="luxury">Luxury</option>
              <option value="ultra">Ultra</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-400 font-bold mb-2">Event Description</label>
            <textarea id="description" name="description" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" placeholder="Enter event description" onChange={handleChange} value={event.description}></textarea>
          </div>
          <div className="mb-4 flex justify-between">
            <button type="submit" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Create Event</button>
            <Link to="/eventdisplay" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Created Events</Link>
          </div>
        </form>
        
      </section>
    </div>
  );
};

export default EventCreation;