import React from 'react';
import { getCarImage } from './carImages';

const CarSpecsPage = ({ car, onBack, onAddToCart }) => {
  if (!car) return null;

  const samplePrice = (car.Model_ID % 30) + 25 + ",900";
  const sampleYear = 2021 + (car.Model_ID % 5);
 const matchedImage = getCarImage(car.Model_ID);
  return (
    <div>
      <button onClick={onBack} className="mb-6 text-gray-400 hover:text-red-500 font-semibold text-sm">
        ← Back to Catalog Gallery
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-800 p-6 rounded-xl border border-gray-700">
        <div>
          {/* Renders the precise targeted vehicle image layout */}
          <img 
            src={matchedImage} 
            alt={car.Model_Name} 
            className="w-full h-80 object-cover rounded-lg border border-gray-700 shadow-inner"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <span className="text-xs bg-red-600 px-3 py-1 rounded-full uppercase font-black">{car.Make_Name}</span>
            <h2 className="text-3xl font-extrabold mt-2 mb-4">{car.Model_Name}</h2>
            
            <div className="bg-gray-900 p-4 rounded-lg space-y-2 text-sm border border-gray-700">
              <div className="flex justify-between"><span className="text-gray-400">Showroom Status:</span><span className="text-green-400 font-bold">In Stock</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Release Year:</span><span>{sampleYear}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Estimated Valuation Price:</span><span className="text-green-400 font-bold">${samplePrice}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">System Inventory ID:</span><span className="font-mono text-xs">{car.Model_ID}</span></div>
            </div>
          </div>

          <button 
            onClick={() => onAddToCart(car)}
            className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Secure This Vehicle Allocation (Add to Cart)
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarSpecsPage;