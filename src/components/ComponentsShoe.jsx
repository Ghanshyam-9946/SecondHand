import React, { useContext } from 'react';
import { UserContext } from '../context/Context';

const ComponentsShoe = () => {
  const { FormData } = useContext(UserContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {FormData.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl p-4 border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2 text-gray-800">{item.shoeName}</h2>
          <p className="text-gray-600">Size: {item.shoeSize}</p>
        </div>
      ))}
    </div>
  );
};

export default ComponentsShoe;
