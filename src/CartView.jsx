import React from 'react';
import { getCarImage } from './carImages';

const CartView = ({ cartItems, onRemove, onBack, onCheckout }) => {
  // Calculate total price dynamically using structural model calculations
  const orderTotal = cartItems.reduce((acc, item) => acc + ((item.Model_ID % 30) + 25000), 0);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Showroom Cart Allocation</h2>
        <button onClick={onBack} className="text-sm text-red-400 hover:underline">← Back to Floor</button>
      </div>

      {cartItems.length === 0 ? (
        <div className="bg-gray-800 p-12 text-center rounded-xl border border-gray-700">
          <p className="text-gray-400">Your order cart queue is empty.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => {
            const price = (item.Model_ID % 30) + 25000;
            return (
              <div key={item.Model_ID} className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={getCarImage(item.Model_ID)} alt={item.Model_Name} className="w-24 h-16 object-cover rounded bg-gray-900" />
                  <div>
                    <h4 className="font-bold">{item.Model_Name}</h4>
                    <p className="text-xs text-gray-400 uppercase">{item.Make_Name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-green-400 font-bold">${price.toLocaleString()}</span>
                  <button onClick={() => onRemove(item.Model_ID)} className="text-xs text-red-500 hover:underline">Remove</button>
                </div>
              </div>
            );
          })}

          {/* Subtotal Display Summary Block and Checkout Routing Trigger */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mt-6 flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Total Allocation Invoice Cost:</p>
              <h3 className="text-2xl font-black text-green-400">${orderTotal.toLocaleString()}</h3>
            </div>
            <button 
              onClick={onCheckout}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-sm transition-all shadow-md"
            >
              Proceed to Customer Billing Details →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartView;