import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaShoppingCart, FaBoxOpen, FaCreditCard, FaHistory, FaFileInvoiceDollar } from 'react-icons/fa';
import logo from '../assets/InvoNext.png'; // Import the logo

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white fixed top-0 left-0 h-full z-10">
      <div className="flex items-center justify-center h-16 bg-gray-800">
        <div className="shrink-0 mr-2"> 
          <img
            className="h-14 w-14" // Adjust size as needed
            src={logo} 
            alt="InvoNext Logo"
          />
        </div>
        <h1 className="text-xl font-bold">InvoNext</h1>
      </div>
      <ul className="space-y-2 p-6">
        <li>
          <Link to="/profile" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FaUserCircle className="mr-2" />
            Profile
          </Link>
        </li>
        <li>
          <Link to="/products" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FaBoxOpen className="mr-2" />
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FaShoppingCart className="mr-2" />
            Cart
          </Link>
        </li>
        <li>
          <Link to="/checkout" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FaCreditCard className="mr-2" />
            Checkout
          </Link>
        </li>
        <li>
          <Link to="/invoice-payment" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FaFileInvoiceDollar className="mr-2" />
            Invoice Payment
          </Link>
        </li>
        <li>
          <Link to="/billing-history" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FaHistory className="mr-2" />
            Billing History
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
