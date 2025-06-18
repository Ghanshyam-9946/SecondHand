import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowPathIcon } from '@heroicons/react/24/solid';

const ShoeCard = () => {
  // State for listings, loading, and errors
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/shoes');
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const data = await response.json();
        setListings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchListings();
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <ArrowPathIcon className="h-12 w-12 text-blue-600 animate-spin" />
      </div>
    );
  }

  // Error state
  if (error) {
    return <div className="text-center text-red-500 font-semibold p-10">Error: {error}</div>;
  }

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {listings.map((listing) => (
            // Link ab database ki '_id' use karega
            <Link to={`/product/${listing._id}`} key={listing._id}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                <div className="relative h-64 bg-gray-200 flex items-center justify-center p-4">
                  <img
                    // Database se aayi hui image URL use karein
                    src={ (listing.shoeImages && listing.shoeImages[0]) ? listing.shoeImages[0] : '/placeholder.png' } 
                    alt={listing.shoeName}
                    className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 truncate" title={listing.shoeName}>
                    {listing.shoeName}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 capitalize">
                    {listing.gender}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-extrabold text-gray-900">
                      ${listing.sellingPrice}
                    </span>
                    <span className="text-blue-600 font-semibold hover:underline">
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;