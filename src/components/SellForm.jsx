import React, {  useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { nanoid } from "nanoid";

const SellForm = () => {

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  

  const onSubmit = (data) => {
     data.id=nanoid();
    const updatedData = [...FormData, data]; // Append new entry
    setFormData(updatedData);
    reset();
    navigate("/collection");
   

  };
   console.log(FormData);
  // Log updated FormData after every change
  // useEffect(() => {
  //   console.log("Updated FormData:", FormData);
  // }, [FormData]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 max-w-md mx-auto shadow-md rounded-xl space-y-4 bg-white"
    >
      <h2 className="text-xl font-semibold">Sell Your Shoes</h2>

      <div>
        <label className="block text-sm font-medium">Shoe Name</label>
        <input
          {...register("shoeName")}
          type="text"
          className="w-full p-2 border rounded"
          placeholder="e.g. Nike Air Max"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Shoe Size</label>
        <input
          {...register("shoeSize")}
          type="number"
          min="1"
          className="w-full p-2 border rounded"
          placeholder="e.g. 9"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Selling Price (₹)</label>
        <input
          {...register("sellingPrice")}
          type="number"
          className="w-full p-2 border rounded"
          placeholder="e.g. 2500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Shoe Image</label>
        <input
          {...register("shoeImage")}
          type="file"
          accept="image/*"
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Bill Image</label>
        <input
          {...register("billImage")}
          type="file"
          accept="image/*"
          className="w-full"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default SellForm;
