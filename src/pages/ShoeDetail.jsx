import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../context/Context';
import { ArrowPathIcon } from '@heroicons/react/24/solid';

const ShoeDetail = () => {
  const { id } = useParams(); // URL se shoe ki ID lein
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  
  // State for a single product, loading, and errors
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainImage, setMainImage] = useState('');

  // Fetch single product details from backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/shoes/${id}`);
        if (!response.ok) {
          throw new Error('Product not found.');
        }
        const data = await response.json();
        setProduct(data);
        // Set the first image as the main image
        if (data.shoeImages && data.shoeImages.length > 0) {
          setMainImage(data.shoeImages[0]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]); // Dependency array mein 'id' daalein taaki ID change hone par data re-fetch ho

  const handleAddToCart = () => {
    const itemToAdd = { ...product, cartId: Date.now() };
    setUser([...user, itemToAdd]);
    navigate('/cart');
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen"><ArrowPathIcon className="h-12 w-12 text-blue-600 animate-spin" /></div>;
  }
  
  if (error || !product) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 text-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Product Not Found</h1>
          <p className="text-gray-600 mt-4">Sorry, we couldn't find the shoe you're looking for.</p>
          <Link to="/" className="mt-6 inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
      <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-2xl p-6 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="bg-gray-200 rounded-lg mb-4 flex items-center justify-center h-96">
              <img src={mainImage} alt={product.shoeName} className="max-h-full max-w-full object-contain p-4"/>
            </div>
            <div className="flex space-x-2">
              {product.shoeImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`w-1/4 h-24 bg-gray-200 rounded-md p-1 border-2 transition ${mainImage === image ? 'border-blue-500' : 'border-transparent'}`}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-contain"/>
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase capitalize">{product.gender}</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 my-3">{product.shoeName}</h1>
            <p className="text-gray-600 text-base leading-relaxed mb-6">{product.description || 'No description available.'}</p>
            
            <div className="flex items-center justify-between mb-8">
              <span className="text-5xl font-black text-blue-600">${product.sellingPrice}</span>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-4 px-6 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetail;