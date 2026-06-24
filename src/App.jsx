import React, { useState, useEffect } from 'react';
import Header from './Header';
import CarFilters from './CarFilters';
import CarCard from './CarCard';
import CarSpecsPage from './CarSpecsPage';
import CartView from './CartView';
import CheckoutForm from './CheckoutForm';
import ReceiptPage from './ReceiptPage';

const App = () => {
  const [cars, setCars] = useState([]);
  const [selectedMake, setSelectedMake] = useState('Honda');
  const [loading, setLoading] = useState(false);
  
  // Updated Navigation States: 'home' | 'specs' | 'cart' | 'checkout' | 'receipt'
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCar, setSelectedCar] = useState(null);
  const [cart, setCart] = useState([]);

  // Billing State Management
  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', phone: '', payment: 'Cash' });

  useEffect(() => {
    const fetchCarData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${selectedMake}?format=json`
        );
        const data = await response.json();
        setCars(data.Results.slice(0, 8));
      } catch (error) {
        console.error("Error loading vehicle API:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCarData();
  }, [selectedMake]);

  const addToCart = (carItem) => {
    if (!cart.find(item => item.Model_ID === carItem.Model_ID)) {
      setCart([...cart, carItem]);
    }
    alert(`${carItem.Model_Name} added to your cart!`);
  };

  const removeFromCart = (modelId) => {
    setCart(cart.filter(item => item.Model_ID !== modelId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    // Tailwind "print:bg-white print:text-black" forces clean monochrome printing
    <div className="min-h-screen bg-gray-900 text-white font-sans print:bg-white print:text-black">
      {/* Tailwind print:hidden automatically hides the header during printing */}
      <div className="print:hidden">
        <Header cartCount={cart.length} onNavigate={setCurrentPage} currentPage={currentPage} />
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {currentPage === 'home' && (
          <div>
            <CarFilters selectedMake={selectedMake} setSelectedMake={setSelectedMake} />
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cars.map((car, index) => (
                  <CarCard 
                    key={index} 
                    car={car} 
                    onViewSpecs={(chosen) => { setSelectedCar(chosen); setCurrentPage('specs'); }} 
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {currentPage === 'specs' && (
          <CarSpecsPage car={selectedCar} onBack={() => setCurrentPage('home')} onAddToCart={addToCart} />
        )}

        {currentPage === 'cart' && (
          <CartView 
            cartItems={cart} 
            onRemove={removeFromCart} 
            onBack={() => setCurrentPage('home')} 
            onCheckout={() => setCurrentPage('checkout')}
          />
        )}

        {currentPage === 'checkout' && (
          <CheckoutForm 
            customerInfo={customerInfo} 
            setCustomerInfo={setCustomerInfo} 
            onBack={() => setCurrentPage('cart')} 
            onOrderSubmit={() => setCurrentPage('receipt')}
          />
        )}

        {currentPage === 'receipt' && (
          <ReceiptPage 
            cartItems={cart} 
            customerInfo={customerInfo} 
            onHomeReturn={() => { clearCart(); setCurrentPage('home'); }} 
          />
        )}

      </main>
    </div>
  );
};

export default App;