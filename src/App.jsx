import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import InvoicePayment from './components/InvoicePayment';
import BillingHistory from './components/BillingHistory';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SignOut from './components/SignOut';
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar /> {/* Render Navbar at the top */}
        <div className="flex flex-1">
          <Sidebar /> {/* Sidebar is fixed on the left */}
          <main className="ml-64 p-8 w-full bg-gray-100"> {/* Ensure there's space for the sidebar */}
            <Routes>
              <Route path="/" element={<Navigate to="/products" replace />} /> {/* Redirect to /products */}
              
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/invoice-payment" element={<InvoicePayment />} />
              <Route path="/billing-history" element={<BillingHistory />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signout" element={<SignOut />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
