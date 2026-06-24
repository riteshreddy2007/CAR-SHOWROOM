import React from 'react';

// Receiving state and modifier functions through Props destructured inline
const CarFilters = ({ selectedMake, setSelectedMake }) => {
  const brands = ['Honda', 'Toyota', 'Ford', 'BMW', 'Tesla', 'Audi'];

  return (
    <div className="mb-10 bg-gray-800 p-6 rounded-lg border border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-gray-300">Select Manufacturer</h2>
      <div className="flex flex-wrap gap-3">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => setSelectedMake(brand)}
            className={`px-5 py-2.5 rounded-md font-medium transition-colors duration-200 ${
              selectedMake === brand
                ? 'bg-red-600 text-white'
                : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
            }`}
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarFilters;