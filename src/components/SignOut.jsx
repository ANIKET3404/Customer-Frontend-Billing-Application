import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear any user data from storage or session
    localStorage.removeItem('userToken'); // Adjust as per your token storage method

    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Are you sure you want to sign out?</h2>
        <Button 
          onClick={handleSignOut} 
          className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default SignOut;
