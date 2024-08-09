import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Price() {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/login');
  };

  return (
    <div className="bg-gray-900">
      <header className="bg-gray-800 text-white flex justify-between p-6 w-full">
        <h1 className="text-3xl text-pink-500 font-bold">Eventify</h1>
        <nav className="flex space-x-4">
          <Link to="/home" className="text-white text-xl hover:text-pink-500">Home</Link>
          <Link to="/service" className="text-white text-xl hover:text-pink-500">Services</Link>
          <Link to="/price" className="text-white text-xl hover:text-pink-500">Price</Link>
          <Link to="/contact" className="text-white text-xl hover:text-pink-500">Contact</Link>
        </nav>
      </header>
      <section className="home flex items-center justify-center min-h-screen bg-cover bg-center" id="home" style={{ backgroundImage: "url('https://kingsolomonscatering.com/wp-content/uploads/2022/11/bunch-flowers-leaves-table.jpg')" }}>
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 rounded-lg p-4">
          <h2 className="text-4xl font-bold text-pink-500">Our Prices</h2>
        </div>
        <div className="container mx-auto px-4 py-16" style={{ marginTop: "100px" }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                name: 'Basic',
                price: '$500.00',
                features: ['Basic Decoration', 'Background Music', 'Standard Photography', 'Buffet Snacks', 'Basic Invitation Card'],
              },
              {
                name: 'Prime',
                price: '$600.00',
                features: ['Premium Decoration', 'DJ Music', 'Professional Photography', 'Full Course Meal', 'Custom Invitation Card'],
              },
              {
                name: 'Luxury',
                price: '$800.00',
                features: ['Luxury Decoration', 'Live Band', 'Exclusive Photography & Videography', 'Gourmet Dining', 'Luxury Invitation Card', 'Event Planning Consultation'],
              },
              {
                name: 'Ultra',
                price: '$1000.00',
                features: ['Ultra Luxury Decoration', 'Celebrity DJ/Band', 'Exclusive Photography & Cinematography', 'Five-Star Catering', 'Custom Designed Invitation Card', 'Comprehensive Event Planning', 'VIP Guest Services'],
              },
            ].map((plan, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div>
                  <h3 className="text-xl font-bold text-center mb-2">{plan.name}</h3>
                  <p className="text-center text-gray-500 mb-4">{plan.price}</p>
                  <ul className="list-disc space-y-2 px-4">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button onClick={handleBuyNow} className="mt-4 px-4 py-2 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-700">Buy Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
