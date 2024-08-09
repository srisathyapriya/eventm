import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Simulate a successful signup by setting a timeout
      setTimeout(() => {
        setSuccess('Account created successfully');
        navigate('/eventcreation');
      }, 2000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <header className="bg-gray-800 text-white flex justify-between p-6 w-full">
        <h1 className="text-3xl text-pink-500 font-bold">Eventify</h1>
        <nav className="flex space-x-4">
          <Link to="/home" className="text-white text-xl hover:text-pink-500">Home</Link>
          <Link to="/service" className="text-white text-xl hover:text-pink-500">Services</Link>
          <Link to="/price" className="text-white text-xl hover:text-pink-500">Price</Link>
          <Link to="/contact" className="text-white text-xl hover:text-pink-500">Contact</Link>
        </nav>
      </header>
      <section className="home flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat w-full" style={{ backgroundImage: "url('https://kingsolomonscatering.com/wp-content/uploads/2022/11/bunch-flowers-leaves-table.jpg')" }}>
        <div className="bg-black bg-opacity-60 rounded-lg p-10 w-full max-w-md mx-auto">
          <section className="text-center mb-8">
            <h2 className="text-4xl font-bold text-pink-500">Sign Up</h2>
          </section>
          <form className="flex flex-col space-y-4" onSubmit={handleSignup}>
            <div className="flex flex-col">
              <label htmlFor="username" className="mb-2 text-sm font-medium">Username</label>
              <input type="text" id="username" name="username" className="text-black shadow-sm rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-pink-500 focus:ring-1" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm font-medium">Email</label>
              <input type="email" id="email" name="email" className="text-black shadow-sm rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-pink-500 focus:ring-1" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2 text-sm font-medium">Password</label>
              <input type="password" id="password" name="password" className="text-black shadow-sm rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-pink-500 focus:ring-1" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-2 text-sm font-medium">Phone</label>
              <input type="text" id="phone" name="phone" className="text-black shadow-sm rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-pink-500 focus:ring-1" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500" disabled={loading}>Sign Up</button>
          </form>
          <p className="text-center text-white mt-4">
            Already have an account? <Link to="/login" className="text-pink-500 hover:underline">Login</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Signup;
