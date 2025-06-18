import React, { useState, useContext } from 'react';
import { UserContext } from '../context/Context';
import { NavLink, Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal'; 

const Cart = () => {
  const { user, setUser } = useContext(UserContext);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDelete = (cartId) => {
    setUser(user.filter(item => item.cartId !== cartId));
  };

  const handleImageClick = (productFromDb) => {
    // The ImageModal component might expect a different data structure.
    // We adapt the database object here to ensure compatibility.
    const modalProduct = {
      ...productFromDb,
      name: productFromDb.shoeName, // Ensure 'name' property exists for the modal
      images: productFromDb.shoeImages // Ensure 'images' property exists for the modal
    };
    setSelectedProduct(modalProduct);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // --- CHANGE 1: Use 'sellingPrice' for the calculation ---
  const totalPrice = user.reduce((sum, item) => sum + item.sellingPrice, 0);

  if (user.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Your Cart is Empty</h1>
        <p className="text-gray-600 mt-4">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="mt-8 inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-6 text-gray-900">My Cart ({user.length})</h1>
          <div className="grid lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2 space-y-4">
              {user.map((item) => (
                <div key={item.cartId} className="flex flex-col sm:flex-row gap-4 p-4 border rounded-xl shadow-sm bg-white">
                  
                  <div 
                    className="w-full sm:w-28 sm:h-28 cursor-pointer group"
                    onClick={() => handleImageClick(item)} 
                  >
                    <img
                      // --- CHANGE 2: Use 'shoeImages' array ---
                      src={item.shoeImages && item.shoeImages[0] ? item.shoeImages[0] : '/placeholder.png'}
                      // --- CHANGE 3: Use 'shoeName' for alt text ---
                      alt={item.shoeName}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex-1">
                    {/* --- CHANGE 4: Use 'shoeName' for the title --- */}
                    <h2 className="text-lg font-semibold text-gray-800">{item.shoeName}</h2>
                    {/* --- CHANGE 5: Use 'gender' for the category --- */}
                    <p className="text-sm text-gray-500 capitalize">{item.gender}</p>
                    <button 
                      className="text-sm text-red-500 hover:underline mt-4 font-medium" 
                      onClick={() => handleDelete(item.cartId)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="text-lg font-bold text-gray-900 self-center sm:self-start mt-2 sm:mt-0">
                    {/* --- CHANGE 6: Use 'sellingPrice' for the display --- */}
                    ${item.sellingPrice.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm h-fit">
              <h2 className="font-semibold text-xl border-b border-gray-200 pb-3 mb-4">
                Price Details
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Price ({user.length} items)</span>
                  {/* Total price is already calculated correctly */}
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Discount</span>
                  <span className="text-green-600">-$0.00</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg border-t border-gray-200 mt-4 pt-4">
                <span>Total Amount</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <NavLink to='/buy'>
                <button className="w-full mt-6 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all">
                  Place Order
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      
      {isModalOpen && selectedProduct && (
        <ImageModal product={selectedProduct} onClose={handleCloseModal} />
      )}
      
    </>
  );
};

export default Cart;