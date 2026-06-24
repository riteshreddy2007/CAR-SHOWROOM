import React from 'react';

const Header = ({ cartCount, onNavigate, currentPage }) => {
  return (
    <header className="bg-gray-800 border-b border-gray-700 py-5">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 
          onClick={() => onNavigate('home')}
          className="text-2xl font-extrabold tracking-wider text-red-500 cursor-pointer select-none"
        >
          DRIVE<span className="text-white">X</span> SHOWROOM
        </h1>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('home')}
            className={`text-sm font-semibold transition-colors ${currentPage === 'home' ? 'text-red-550 underline' : 'text-gray-300 hover:text-white'}`}
          >
            Showroom Floor
          </button>
          
          <button 
            onClick={() => onNavigate('cart')}
            className="relative bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg flex items-center gap-2 transition-all border border-gray-600"
          >
            <span>🛒 My Cart</span>
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;