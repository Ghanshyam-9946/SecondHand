import React, { useContext } from 'react'
// import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/Context';
import { NavLink } from 'react-router-dom';


const Cart = () => {
  const {user, setUser}=useContext(UserContext);
  // console.log("in context->", user.length)

  const handleDelete = (id) => {
    setUser(user.filter(val => val.id !== id))
    console.log(user)
    // alert("Item deleted")
  }
  return (
    <div>
       {user?.length > 0 ? (
        user.map((item) => (
          <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Cart </h1>
      <div className="grid md:grid-cols-3 gap-4">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {/* Item 1 */}
          <div className="flex gap-4 p-4 border rounded-xl shadow-sm bg-white">
            <img
              src={item.image}
              alt="Product 1"
              className="w-24 h-24 object-cover"
            />
            <div className="flex-1">
              <h2 className="font-semibold">{item.para}</h2>
              <p className="text-gray-600">{item.price}</p>
              {/* <div className="flex items-center mt-2 space-x-2">
                <button className="px-2 py-1 border rounded">-</button>
                <span>1</span>
                <button className="px-2 py-1 border rounded">+</button>
              </div> */}
              <button className="text-sm text-red-500 mt-2" onClick={()=> handleDelete(item.id)}>Remove</button>
            </div>
            <div className="font-bold">{item.price}</div>
          </div>

          {/* Item 2 */}
          {/* <div className="flex gap-4 p-4 border rounded-xl shadow-sm bg-white">
            <img
              src="https://via.placeholder.com/100"
              alt="Product 2"
              className="w-24 h-24 object-cover"
            />
            <div className="flex-1">
              <h2 className="font-semibold">Samsung Galaxy S24</h2>
              <p className="text-gray-600">₹74,999</p>
              <div className="flex items-center mt-2 space-x-2">
                <button className="px-2 py-1 border rounded">-</button>
                <span>2</span>
                <button className="px-2 py-1 border rounded">+</button>
              </div>
              <button className="text-sm text-red-500 mt-2">Remove</button>
            </div>
            <div className="font-bold">₹1,49,998</div>
          </div> */}
        </div>

        {/* Price Summary */}
        <div className="bg-white p-4 rounded-xl shadow-sm h-fit">
          <h2 className="font-semibold text-lg border-b pb-2 mb-2">
            Price Details
          </h2>
          <div className="flex justify-between mb-2">
            <span>Price (items)</span>
            <span>{item.price}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount</span>
            <span className="text-green-600">-₹0</span>
          </div>
          <div className="flex justify-between font-bold border-t pt-2">
            <span>Total Amount</span>
            <span>{item.price}</span>
          </div>
          <NavLink to='/buy'>
          <button to= 'buy' className=" w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Place Order
          </button>
          </NavLink>
        </div>
      </div>
    </div>

        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
     
    </div>
  )
}

export default Cart;