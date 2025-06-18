import React, { useState, useEffect } from 'react';

const ImageModal = ({ product, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product.images, currentIndex]); 

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? product.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === product.images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose} 
    >
      
      <div 
        className="relative bg-white p-4 rounded-xl shadow-2xl max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center text-2xl font-bold hover:bg-opacity-75 z-10"
        >
          ×
        </button>

        <div className="relative">
            <div className="h-96 flex items-center justify-center mb-4">
                <img 
                    src={product.images[currentIndex]} 
                    alt={`${product.name} - view ${currentIndex + 1}`}
                    className="max-h-full max-w-full object-contain"
                />
            </div>
          
            <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 text-2xl hover:bg-opacity-60"
            >
                ❮
            </button>
            
            <button
                onClick={goToNext}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 text-2xl hover:bg-opacity-60"
            >
                ❯
            </button>
        </div>
        
        <div className="text-center text-gray-700 font-semibold">
            {currentIndex + 1} / {product.images.length}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;