
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); // Get cart data from location state
  const [cartItems, setCartItems] = React.useState(state?.cart || []); // State for cart items

  const handleCheckout = () => {
    navigate('/checkout', { state: { cartItems } });
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id)); // Update cart items state
  };

  const handleBackToProducts = () => {
    navigate('/products'); // Navigate back to the products page
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cartItems.length > 0 ? (
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">Product</th>
              <th className="border border-gray-200 px-4 py-2">Price</th>
              <th className="border border-gray-200 px-4 py-2">Quantity</th>
              <th className="border border-gray-200 px-4 py-2">Total</th>
              <th className="border border-gray-200 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">{item.name}</td>
                <td className="border border-gray-200 px-4 py-2">${item.price.toFixed(2)}</td>
                <td className="border border-gray-200 px-4 py-2">1</td> {/* Assuming fixed quantity for now */}
                <td className="border border-gray-200 px-4 py-2">${(item.price * 1).toFixed(2)}</td> {/* Total price */}
                <td className="border border-gray-200 px-4 py-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 focus:outline-none"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBackToProducts}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        >
          Back to Products
        </button>
        <button
          onClick={handleCheckout}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

