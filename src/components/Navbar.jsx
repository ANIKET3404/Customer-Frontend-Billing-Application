import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">

            <div className="hidden md:block">
              <div className="ml-28 flex items-baseline space-x-4">
                <Link
                  to="/profile"
                  className="text-gray-900 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Profile
                </Link>
                <Link
                  to="/billing-history"
                  className="text-gray-900 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Billing History
                </Link>
                <Link
                  to="/sign-out" // Update with actual sign-out route
                  className="text-gray-900 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


