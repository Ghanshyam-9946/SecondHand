// import React, { useContext } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { addToCart } from "../store/reducers/cartdata";
// import { UserContext } from '../context/Context';

const ShoeBanner = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.banner.data);

  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
    navigate("/cart");
  };

  return (
    <>
      {data.map((val) => (
        <div className="bg-black text-white min-h-screen flex items-center justify-center px-6">
          <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="max-w-xl space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                YOUR FAVORITE
                <br />
                SNEAKERS
              </h2>
              <div>
                <p className="text-lg font-semibold">{val.para}</p>
                <ul className="text-sm text-gray-300 mt-2 space-y-1 list-disc list-inside">
                  <li>Rubber outsole gives you multidirectional traction.</li>
                  <li>Shown: Multi-Color/Multi-Color</li>
                  <li>Style: DH8460-900</li>
                </ul>
              </div>
              <button
                onClick={() => handleAddToCart(val)}
                className=" bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
              >
                Make an order
              </button>
            </div>

            {/* Right Sneaker Image */}
            <div className="mt-10 md:mt-0 relative">
              <div className="relative z-10">
                <img
                  src={val.image}
                  alt="Sneaker"
                  className="w-[400px] drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 z-0 rounded-full bg-purple-500 blur-3xl opacity-40"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShoeBanner;
