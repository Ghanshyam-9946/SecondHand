import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ComponentsShoe from '../components/ComponentsShoe'; 

// Icons for different states
import { TagIcon } from '@heroicons/react/24/outline';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';

const Collection = () => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/shoes');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
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

  if (isLoading) {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center text-center p-4">
        <ArrowPathIcon className="h-12 w-12 text-blue-600 animate-spin" />
        <h2 className="mt-4 text-xl font-semibold text-gray-700">Loading Your Collection...</h2>
      </div>
    );
  }

  if (error) {
    return (
       <div className="bg-red-50 min-h-screen flex items-center justify-center text-center p-4">
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-red-200">
            <ExclamationTriangleIcon className="mx-auto h-16 w-16 text-red-500" />
            <h2 className="mt-6 text-2xl font-bold text-red-700">Oops! Something went wrong.</h2>
            <p className="mt-4 text-sm text-red-500 font-mono">Error: {error}</p>
          </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            My Collection
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Here are the shoes you've listed for sale on the platform.
          </p>
        </div>

        {listings.length === 0 ? (
          <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-sm text-center border-2 border-dashed border-gray-300">
            <TagIcon className="mx-auto h-16 w-16 text-gray-400" />
            <h2 className="mt-6 text-2xl font-semibold text-gray-900">
              Your Collection is Empty
            </h2>
            <p className="mt-2 text-md text-gray-600">
              It looks like you haven't listed any shoes yet. Why not sell your first pair?
            </p>
            <Link
              to="/sell"
              className="mt-8 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700"
            >
              List Your First Shoe
            </Link>
          </div>
        ) : (
          // --- THIS IS THE FIX ---
          // We are now passing the 'listings' state and 'setListings' function as props.
          <ComponentsShoe listings={listings} setListings={setListings} />
        )}
      </div>
    </div>
  );
};

export default Collection;