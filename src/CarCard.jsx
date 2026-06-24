import React from 'react';
import { getCarImage } from './carImages';

const CarCard = ({ car, onViewSpecs, onAddToCart }) => {
  const samplePrice = (car.Model_ID % 30) + 25 + ",900";
  const sampleYear = 2021 + (car.Model_ID % 5);
  
  // Dynamic Image assignment depending directly on API model labels
 const matchedCarImage = getCarImage(car.Model_ID);
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 flex flex-col justify-between shadow-md">
      <div className="h-44 bg-gray-900 relative">
        <img 
          src={matchedCarImage} 
          alt={car.Model_Name} 
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="mb-4">
          <h3 className="text-lg font-bold line-clamp-1">{car.Model_Name}</h3>
          <p className="text-xs text-gray-400 font-medium mb-2 uppercase">{car.Make_Name}</p>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">Year: {sampleYear}</span>
            <span className="text-green-400 font-bold">${samplePrice}</span>
          </div>
        </div>

        <div className="space-y-2">
          <button 
            onClick={() => onViewSpecs(car)}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white text-xs font-bold py-2 rounded transition-colors"
          >
            View Specifications
          </button>
          <button 
            onClick={() => onAddToCart(car)}
            className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2 rounded transition-colors"
          >
            Add to Order Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;