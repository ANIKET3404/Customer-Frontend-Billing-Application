import React, { useState } from 'react';
import { Button, TextInput, Label } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [name, setName] = useState('Aniket Shinde');
  const [email, setEmail] = useState('aniket3404@gmail.com');
  const [contactNumber, setContactNumber] = useState('9922373841');
  const [isUpdated, setIsUpdated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Profile updated!\nName: ${name}\nEmail: ${email}\nContact Number: ${contactNumber}`);
    setIsUpdated(true);
    setTimeout(() => setIsUpdated(false), 3000); 
  };

  const goToProducts = () => {
    navigate('/products');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">User Profile</h1>
      {/*    */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <div className="mb-4">
          <Label htmlFor="name" value="Name" className="text-sm font-medium text-gray-700" />
          <TextInput
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            color={name ? 'gray' : 'red'}
            helperText={!name && "Name cannot be empty"}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="email" value="Email" className="text-sm font-medium text-gray-700" />
          <TextInput
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            color={email ? 'gray' : 'red'}
            helperText={!email && "Email cannot be empty"}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="contact" value="Contact Number" className="text-sm font-medium text-gray-700" />
          <TextInput
            id="contact"
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="Enter your contact number"
            required
            color={contactNumber ? 'gray' : 'red'}
            helperText={!contactNumber && "Contact number cannot be empty"}
          />
        </div>

        <div className="flex justify-between mt-6 space-x-4">
          <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
            {isUpdated ? "Profile Updated" : "Update Profile"}
          </Button>
          <Button onClick={goToProducts} className="w-full bg-green-500 text-white hover:bg-green-600">
            Go to Products
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
