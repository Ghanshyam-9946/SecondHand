import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/Context';

const ShoeBanner = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const bannerProduct = {
    id: 99, 
    name: 'LeBron 19',
    category: 'Basketball Shoes',
    price: 200,
    images: ['./main.png'], 
    cartId: Date.now(), 
    features: [ 
      'Rubber outsole gives you multidirectional traction.',
      'Shown: Multi-Color/Multi-Color',
      'Style: DH8460-900',
    ]
  };

  const handleAddToCart = () => {
    setUser([...user, { ...bannerProduct }]);
    navigate('/cart');
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between">
        
        <div className="max-w-xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            YOUR FAVORITE<br />SNEAKERS
          </h2>
          <div>
            <p className="text-lg font-semibold">{bannerProduct.name} ({bannerProduct.category})</p>
            <ul className="text-sm text-gray-300 mt-2 space-y-1 list-disc list-inside">
              {bannerProduct.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <button 
            onClick={handleAddToCart} 
            className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
          >
            Make an order
          </button>
        </div>

        <div className="mt-10 md:mt-0 relative">
          <div className="relative z-10">
            <img
              src={bannerProduct.images[0]} 
              alt="Sneaker"
              className="w-[400px] drop-shadow-2xl"
            />
          </div>
          <div className="absolute inset-0 z-0 rounded-full bg-purple-500 blur-3xl opacity-40"></div>
        </div>
      </div>
    </div>
  );
};

export default ShoeBanner;