import React, { useState } from 'react';
import SellForm from '../components/SellForm';
import { TagIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'; // npm install @heroicons/react

const Sell = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showForm = () => setIsFormVisible(true);
  const hideForm = () => setIsFormVisible(false);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {isFormVisible ? (
          <div>
            <button
              onClick={hideForm}
              className="flex items-center gap-2 mb-4 text-gray-600 hover:text-gray-900 font-semibold"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              Back
            </button>
            <SellForm onSuccessfulSubmit={hideForm} />
          </div>
        ) : (
          <div className="text-center bg-white p-10 rounded-2xl shadow-lg">
            <TagIcon className="mx-auto h-16 w-16 text-blue-600" />
            <h1 className="mt-6 text-4xl font-extrabold text-gray-900">
              Ready to Sell Your Kicks?
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Join our community of sneakerheads. List your shoes in just a few
              clicks and find them a new home.
            </p>
            <button
              onClick={showForm}
              className="mt-8 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Selling
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sell;