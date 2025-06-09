import React from 'react'
import { useNavigate } from 'react-router-dom'

const Buy = () => {
    const navigate = useNavigate();
    const navigateHandler = ()=>{
        navigate('/');
    }
  return (
 <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Buy Now</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded shadow">

        {/* Shipping Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Shipping Details</h3>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Full Address"
            className="w-full border p-2 rounded"
            rows={3}
          />
          <input
            type="text"
            placeholder="City"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Pincode"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Payment Methods */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Payment Method</h3>

          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            Cash on Delivery
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            UPI / GPay / PhonePe
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            Credit / Debit Card
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            Net Banking
          </label>

          <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Buy