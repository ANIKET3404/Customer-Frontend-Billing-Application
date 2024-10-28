// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Products = () => {
//   const navigate = useNavigate();
  
//   // Sample Products
//   const [products] = useState([
//     { id: 1, name: 'Laptop', category: 'Electronics', price: 1000, quantity: 10 },
//     { id: 2, name: 'Smartphone', category: 'Electronics', price: 800, quantity: 20 },
//     { id: 3, name: 'Headphones', category: 'Accessories', price: 150, quantity: 15 },
//     { id: 4, name: 'Smart Watch', category: 'Wearables', price: 250, quantity: 12 },
//   ]);

//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (product) => {
//     setCart([...cart, product]);
//     alert(`${product.name} added to cart!`);
//   };

//   const goToCart = () => {
//     navigate('/cart', { state: { cart } });  // Navigate to Cart with cart data
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Product List</h1>
//       <table className="min-w-full bg-white shadow-md rounded mb-6">
//         <thead>
//           <tr>
//             <th className="py-0 px-4 text-black">Product Name</th>
//             <th className="py-0 px-4">Category</th>
//             <th className="py-0 px-4">Price</th>
//             <th className="py-0 px-4">Quantity</th>
//             <th className="py-2 px-4">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id} className="border-b">
//               <td className="py-2 px-4">{product.name}</td>
//               <td className="py-2 px-4">{product.category}</td>
//               <td className="py-2 px-4">${product.price}</td>
//               <td className="py-2 px-4">{product.quantity}</td>
//               <td className="py-2 px-4">
//                 <button
//                   onClick={() => handleAddToCart(product)}
//                   className="bg-blue-500 text-white py-1 px-3 rounded"
//                 >
//                   Add to Cart
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="flex justify-between mt-6">
//       <button
//         onClick={goToCart}
//         className="bg-green-500 text-white py-2 px-4 rounded">
//         Go to Cart
//       </button>
//       </div>
//     </div>
//   );
// };

// export default Products;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';

const Products = () => {
  const navigate = useNavigate();

  // Sample Products
  const [products] = useState([
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000, quantity: 10 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 800, quantity: 20 },
    { id: 3, name: 'Headphones', category: 'Accessories', price: 150, quantity: 15 },
    { id: 4, name: 'Smart Watch', category: 'Wearables', price: 250, quantity: 12 },
  ]);

  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const goToCart = () => {
    navigate('/cart', { state: { cart } });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-left">Product List</h1>

      {/* Search Bar */}
      <div className="flex justify-left mb-6">
        <input
          type="text"
          placeholder="Search for product"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-100 text-left text-black font-semibold">Product Name</th>
            <th className="py-2 px-4 bg-gray-100 text-left text-black font-semibold">Category</th>
            <th className="py-2 px-4 bg-gray-100 text-left text-black font-semibold">Price</th>
            <th className="py-2 px-4 bg-gray-100 text-left text-black font-semibold">Quantity</th>
            <th className="py-2 px-4 bg-gray-100 text-left text-black font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">{product.category}</td>
                <td className="py-2 px-4">${product.price}</td>
                <td className="py-2 px-4">{product.quantity}</td>
                <td className="py-2 px-4">
                  <Button
                    color="blue"
                    onClick={() => handleAddToCart(product)}
                    className="text-sm px-3 py-1"
                  >
                    Add to Cart
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">No products found</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-center mt-6">
        <Button
          color="green"
          onClick={goToCart}
          className="px-4 py-2"
        >
          Go to Cart
        </Button>
      </div>
    </div>
  );
};

export default Products;
