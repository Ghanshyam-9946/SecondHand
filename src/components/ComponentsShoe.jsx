import React from 'react';

const ComponentsShoe = ({ listings = [], setListings }) => {

  const handleDelete = async (shoeId) => {
    if (window.confirm("Are you sure you want to delete this listing? This action cannot be undone.")) {
      try {
        const response = await fetch(`http://localhost:3000/api/shoes/${shoeId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete listing from the server.');
        }

        const updatedListings = listings.filter((item) => item._id !== shoeId);
        setListings(updatedListings);

      } catch (error) {
        console.error("Delete operation failed:", error);
        alert("Could not delete the listing. Please try again.");
      }
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {listings.map((item) => (
        <div
          key={item._id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out group"
        >
          <div className="h-56 w-full">
            <img
              className="h-full w-full object-cover"
              src={
                (item.shoeImages && item.shoeImages.length > 0)
                  ? item.shoeImages[0]
                  : "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop"
              }
              alt={item.shoeName || 'A listed shoe'}
            />
          </div>

          <div className="p-6">
            <h2
              className="text-2xl font-bold text-gray-800 truncate mb-3"
              title={item.shoeName}
            >
              {item.shoeName}
            </h2>

            <div className="flex items-baseline justify-between">
              <p className="text-3xl font-extrabold text-blue-600">
                ${item.sellingPrice}
              </p>
              <div className="bg-gray-200 text-gray-800 text-sm font-semibold px-3 py-1.5 rounded-full">
                Size: {item.shoeSize}
              </div>
            </div>

            <button
              onClick={() => handleDelete(item._id)}
              className="w-full mt-6 py-2.5 px-4 border border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComponentsShoe;