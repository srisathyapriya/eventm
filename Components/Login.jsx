import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Simulate a successful login by setting a timeout
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || 'Failed to login');
      }

      const data = await response.json();
      setSuccess('Logged in successfully');
      console.log(data);
      navigate('/eventcreation');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-900">
      <header className="flex justify-between w-full p-6 text-white bg-gray-800">
        <h1 className="text-3xl font-bold text-pink-500">Eventify</h1>
        <nav className="flex space-x-4">
          <Link to="/home" className="text-xl text-white hover:text-pink-500">Home</Link>
          <Link to="/service" className="text-xl text-white hover:text-pink-500">Services</Link>
          <Link to="/price" className="text-xl text-white hover:text-pink-500">Price</Link>
          <Link to="/contact" className="text-xl text-white hover:text-pink-500">Contact</Link>
        </nav>
      </header>
      <section className="flex items-center justify-center w-full min-h-screen bg-center bg-no-repeat bg-cover home" style={{ backgroundImage: "url('https://kingsolomonscatering.com/wp-content/uploads/2022/11/bunch-flowers-leaves-table.jpg')" }}>
        <div className="w-full max-w-md p-10 mx-auto bg-black rounded-lg bg-opacity-60">
          <section className="mb-8 text-center">
            <h2 className="text-4xl font-bold text-pink-500">Login</h2>
          </section>
          <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:ring-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2 text-sm font-medium">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:ring-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          {error && <p className="text-sm text-red-500">{error}</p>}
          {success && <p className="text-sm text-green-500">{success}</p>}
          <p className="mt-4 text-center text-white">
            Don't have an account? <Link to="/signup" className="text-pink-500 hover:underline">Sign Up</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
