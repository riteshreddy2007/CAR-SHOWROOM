import React from 'react';

const ReceiptPage = ({ cartItems, customerInfo, onHomeReturn }) => {
  const orderTotal = cartItems.reduce((acc, item) => acc + ((item.Model_ID % 30) + 25000), 0);
  const invoiceNumber = Math.floor(100000 + Math.random() * 900000);
  const currentDate = new Date().toLocaleDateString();

  // Pure arrow logic interface connecting window layer print requests directly
  const handlePrintCommand = () => {
    window.print();
  };

  return (
    <div className="max-w-3xl mx-auto">
      
      {/* Operational Control Menu Group - Hides from paper layouts completely */}
      <div className="print:hidden mb-6 flex justify-between items-center bg-gray-800 p-4 rounded-xl border border-gray-700">
        <span className="text-xs text-yellow-400 font-bold">✓ Invoice Draft Generated successfully!</span>
        <div className="flex gap-3">
          <button onClick={onHomeReturn} className="bg-gray-700 hover:bg-gray-600 text-white font-bold text-xs py-2 px-4 rounded transition-all">
            Reset Showroom & Close
          </button>
          <button onClick={handlePrintCommand} className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2 px-5 rounded transition-all shadow-md animate-pulse">
            🖨 Print Official Bill Statement
          </button>
        </div>
      </div>

      {/* Main Structural Print Document Invoice Sheet */}
      <div className="bg-white text-black p-8 md:p-12 rounded-xl shadow-2xl border border-gray-200 print:border-0 print:shadow-none print:p-0">
        
        {/* Invoice Letterhead Header Layout */}
        <div className="flex justify-between items-start border-b-2 border-gray-900 pb-6 mb-6">
          <div>
            <h1 className="text-3xl font-black tracking-tighter text-red-600">DRIVEX SHOWROOM LTD.</h1>
            <p className="text-xs text-gray-500 mt-1">Authorized Automotive Distribution Network</p>
            <p className="text-xs text-gray-500">100 Premium Terminal Way, Suite A</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold tracking-tight text-gray-800">OFFICIAL BILL OF SALE</h2>
            <p className="text-sm font-mono text-gray-600 mt-1">Invoice Reference: #{invoiceNumber}</p>
            <p className="text-sm text-gray-600">Date Issued: {currentDate}</p>
          </div>
        </div>

        {/* Client Metadata Section */}
        <div className="grid grid-cols-2 gap-4 mb-8 bg-gray-50 p-4 rounded border border-gray-100 print:bg-transparent">
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Registered Purchaser Info</h3>
            <p className="font-bold text-gray-900">{customerInfo.name}</p>
            <p className="text-sm text-gray-700">{customerInfo.phone}</p>
            <p className="text-sm text-gray-700">{customerInfo.email}</p>
          </div>
          <div className="text-right">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Payment Method Specified</h3>
            <p className="font-semibold text-gray-800 mt-1">{customerInfo.payment}</p>
            <p className="text-xs text-green-700 font-bold mt-1 bg-green-50 px-2 py-0.5 rounded inline-block print:border print:border-green-600">PENDING AUDIT CLEARANCE</p>
          </div>
        </div>

        {/* Itemized Line Ledger Matrix Table */}
        <table className="w-full text-left border-collapse mb-8">
          <thead>
            <tr className="border-b border-gray-900 text-xs font-bold uppercase text-gray-600">
              <th className="py-2">Vehicle Manifest Profile Description</th>
              <th className="py-2 text-center">Qty</th>
              <th className="py-2 text-right">MSRP Cost Allocation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-150 text-sm">
            {cartItems.map((item, idx) => {
              const itemPrice = (item.Model_ID % 30) + 25000;
              return (
                <tr key={idx} className="text-gray-800">
                  <td className="py-3">
                    <span className="font-bold text-black">{item.Model_Name}</span>
                    <span className="block text-xs text-gray-500 uppercase">{item.Make_Name} (Model Registry ID: {item.Model_ID})</span>
                  </td>
                  <td className="py-3 text-center text-black">1</td>
                  <td className="py-3 text-right font-mono font-medium text-black">${itemPrice.toLocaleString()}.00</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Invoice Statement Summary Ledger Wrap */}
        <div className="border-t-2 border-gray-900 pt-4 flex flex-col items-end">
          <div className="w-64 space-y-2 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal Summary:</span>
              <span className="font-mono">${orderTotal.toLocaleString()}.00</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Showroom Delivery / Logistics:</span>
              <span className="text-green-700 font-bold uppercase text-xs">Waived / Free</span>
            </div>
            <div className="flex justify-between text-lg font-black text-black border-t border-gray-300 pt-2">
              <span>Grand Total Due:</span>
              <span className="font-mono text-xl text-red-600">${orderTotal.toLocaleString()}.00</span>
            </div>
          </div>
        </div>

        {/* Print Disclaimer Bottom Terms notice */}
        <div className="mt-12 text-center border-t border-gray-200 pt-6 text-xxs text-gray-400">
          <p>Thank you for choosing DriveX Distribution Systems. All vehicle transfers are subject to regional dealership licensing regulations.</p>
          <p className="mt-1 font-mono text-gray-300 print:text-gray-400">Computer Generated Document — No Physical Signature Mandatory.</p>
        </div>

      </div>
    </div>
  );
};

export default ReceiptPage;