
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { state } = useLocation();
  const cartItems = state?.cartItems || [];
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handlePayment = () => {
    // Redirect to InvoicePayment with cart and total data
    navigate('/invoice-payment', { state: { totalPrice, cartItems } });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded shadow-md mb-4">
          <h2 className="font-bold text-lg">{item.name}</h2>
          <p>Price: ${item.price}</p>
        </div>
      ))}
      <p className="font-bold text-lg">Total: ${totalPrice}</p>
      <button
        onClick={handlePayment}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default Checkout;
