import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const CLOUDINARY_CLOUD_NAME = "df3rnoytj";
const CLOUDINARY_UPLOAD_PRESET = "shoe_app_unsigned";

const SellForm = ({ onSuccessfulSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    
    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error("Cloudinary upload failed.");
    }

    const data = await response.json();
    return data.secure_url;
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmissionError('');
    
    try {
      const shoeImageFiles = data.shoeImage ? Array.from(data.shoeImage) : [];
      if (shoeImageFiles.length === 0) {
        throw new Error("At least one shoe image is required.");
      }

      const shoeUploadPromises = shoeImageFiles.map(file => uploadToCloudinary(file));
      const shoeImageUrls = await Promise.all(shoeUploadPromises);

      let billImageUrl = '';
      if (data.billImage && data.billImage[0]) {
        billImageUrl = await uploadToCloudinary(data.billImage[0]);
      }

      const finalData = {
        shoeName: data.shoeName,
        shoeSize: data.shoeSize,
        gender: data.gender,
        sellingPrice: data.sellingPrice,
        shoeImages: shoeImageUrls,
        billImageUrl: billImageUrl,
      };

      const serverResponse = await fetch('http://localhost:3000/api/shoes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData),
      });

      if (!serverResponse.ok) {
        throw new Error('Failed to save the listing to our server.');
      }

      await serverResponse.json();
      reset();
      navigate('/collection');
      if (onSuccessfulSubmit) {
        onSuccessfulSubmit();
      }

    } catch (error) {
      console.error('Failed to submit form:', error);
      setSubmissionError(error.message || 'Failed to create listing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 max-w-2xl mx-auto shadow-xl rounded-2xl space-y-6 bg-white border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">
        List Your Shoe for Sale
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Shoe Name</label>
          <input {...register('shoeName', { required: 'Shoe name is required' })} type="text" className={`w-full p-3 border rounded-lg ${errors.shoeName ? 'border-red-500' : 'border-gray-300'}`} placeholder="e.g. Nike Air Jordan 1" />
          {errors.shoeName && <p className="text-red-500 text-xs mt-1">{errors.shoeName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Shoe Size (US)</label>
          <input {...register('shoeSize', { required: 'Shoe size is required' })} type="number" step="0.5" min="1" className={`w-full p-3 border rounded-lg ${errors.shoeSize ? 'border-red-500' : 'border-gray-300'}`} placeholder="e.g. 9.5" />
          {errors.shoeSize && <p className="text-red-500 text-xs mt-1">{errors.shoeSize.message}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
          <div className="flex items-center space-x-6 pt-1">
            <div className="flex items-center"><input {...register('gender', { required: 'Gender is required' })} id="gender-men" type="radio" value="men" className="h-4 w-4 text-blue-600"/><label htmlFor="gender-men" className="ml-2 block text-sm">Men</label></div>
            <div className="flex items-center"><input {...register('gender', { required: true })} id="gender-women" type="radio" value="women" className="h-4 w-4 text-blue-600"/><label htmlFor="gender-women" className="ml-2 block text-sm">Women</label></div>
            <div className="flex items-center"><input {...register('gender', { required: true })} id="gender-unisex" type="radio" value="unisex" className="h-4 w-4 text-blue-600"/><label htmlFor="gender-unisex" className="ml-2 block text-sm">Unisex</label></div>
          </div>
          {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Selling Price ($)</label>
          <input {...register('sellingPrice', { required: 'Price is required' })} type="number" className={`w-full p-3 border rounded-lg ${errors.sellingPrice ? 'border-red-500' : 'border-gray-300'}`} placeholder="e.g. 150" />
          {errors.sellingPrice && <p className="text-red-500 text-xs mt-1">{errors.sellingPrice.message}</p>}
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Shoe Images (up to 4)</label>
          <input
            {...register('shoeImage', { 
              required: 'At least one shoe image is required',
              validate: { maxFiles: files => files.length <= 4 || "You can only upload a maximum of 4 images." }
            })}
            type="file"
            accept="image/*"
            multiple
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {errors.shoeImage && <p className="text-red-500 text-xs mt-1">{errors.shoeImage.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Proof of Purchase (Bill Image)</label>
          <input
            {...register('billImage')}
            type="file"
            accept="image/*"
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
          />
        </div>

      </div>
      
      {submissionError && <p className="text-center text-red-600 font-semibold">{submissionError}</p>}
      
      <div className="flex justify-end gap-4 border-t pt-6">
        <button type="button" onClick={() => reset()} className="px-6 py-2.5 rounded-lg bg-gray-200 font-semibold transition hover:bg-gray-300">Reset</button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Uploading...' : 'Submit Listing'}
        </button>
      </div>
    </form>
  );
};

export default SellForm;