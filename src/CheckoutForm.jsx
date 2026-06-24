import React from 'react';

const CheckoutForm = ({ customerInfo, setCustomerInfo, onBack, onOrderSubmit }) => {
  // Simple form input change tracker
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  // Checks form validations before showing print invoice layouts
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      alert("Please fill in all buyer configuration inputs.");
      return;
    }
    onOrderSubmit();
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-3">Buyer & Billing Configuration</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Full Legal Name</label>
          <input type="text" name="name" value={customerInfo.name} onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 rounded p-2.5 text-white focus:outline-none focus:border-red-500 text-sm" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Email Address</label>
          <input type="email" name="email" value={customerInfo.email} onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 rounded p-2.5 text-white focus:outline-none focus:border-red-500 text-sm" placeholder="john@example.com" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Contact Phone Number</label>
          <input type="tel" name="phone" value={customerInfo.phone} onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 rounded p-2.5 text-white focus:outline-none focus:border-red-500 text-sm" placeholder="(555) 019-2834" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Preferred Showroom Payment Method</label>
          <select name="payment" value={customerInfo.payment} onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 rounded p-2.5 text-white focus:outline-none focus:border-red-500 text-sm">
            <option value="Cash / Financing Settlement">Cash / Financing Settlement</option>
            <option value="Bank Wire Transfer">Bank Wire Transfer</option>
            <option value="Crypto Asset Remittance">Crypto Asset Remittance</option>
          </select>
        </div>

        <div className="flex gap-4 pt-4 border-t border-gray-700 mt-6">
          <button type="button" onClick={onBack} className="w-1/2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2.5 rounded text-sm transition-colors">
            Back to Cart
          </button>
          <button type="submit" className="w-1/2 bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded text-sm transition-colors">
            Generate Printed Invoice
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;