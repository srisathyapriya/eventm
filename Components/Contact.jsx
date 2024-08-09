import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }

      const data = await response.json();
      setSuccess('Message sent successfully');
      // Clear form fields after successful submission
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
          <header className="bg-gray-800 text-white flex justify-between p-6 w-full">
        <h1 className="text-3xl text-pink-500 font-bold">Eventify</h1>
        <nav className="flex space-x-4">
          <Link to="/home" className="text-white text-xl hover:text-pink-500">Home</Link>
          <Link to="/service" className="text-white text-xl hover:text-pink-500">Services</Link>
          <Link to="/price" className="text-white text-xl hover:text-pink-500">Price</Link>
          <Link to="/contact" className="text-white text-xl hover:text-pink-500">Contact</Link>
        </nav>
      </header>
      <section className="home flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" id="home" style={{ backgroundImage: "url('https://kingsolomonscatering.com/wp-content/uploads/2022/11/bunch-flowers-leaves-table.jpg')" }}>
        <div className="bg-black bg-opacity-60 rounded-lg p-8 w-full max-w-md mx-auto">
          <section className="text-center mb-8">
            <h2 className="text-4xl font-bold text-pink-500">Contact Us</h2>
          </section>
          <form className="flex flex-col space-y-4" onSubmit={handleSendMessage}>
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-sm font-medium">Name</label>
              <input type="text" id="name" name="name" className="text-black shadow-sm rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-pink-500 focus:ring-1" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm font-medium">Email</label>
              <input type="email" id="email" name="email" className="text-black shadow-sm rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-pink-500 focus:ring-1" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="mb-2 text-sm font-medium">Subject</label>
              <input type="text" id="subject" name="subject" className="text-black shadow-sm rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-pink-500 focus:ring-1" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows="6" className="text-black shadow-sm rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-pink-500 focus:ring-1" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            </div>
            <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;