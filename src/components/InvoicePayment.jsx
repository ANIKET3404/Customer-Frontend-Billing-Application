
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { jsPDF } from 'jspdf';

const InvoicePayment = () => {
  const { state } = useLocation();
  const totalPrice = state?.totalPrice || 0;
  const cartItems = state?.cartItems || [];
  const [isPaid, setIsPaid] = useState(false);
  const navigate = useNavigate();

  const handleDownloadInvoice = () => {
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFontSize(16);
    doc.text('Invoice #12345', 10, 10);
    doc.setFontSize(12);
    doc.text(`Total: $${totalPrice}`, 10, 20);
    doc.text('Payment Status:', 10, 30);
    doc.text(isPaid ? 'Paid' : 'Pending', 40, 30);

    // Save the PDF
    doc.save('invoice_12345.pdf');

    // After downloading the invoice, navigate to BillingHistory
    const newInvoice = {
      id: Math.floor(Math.random() * 10000), // Random invoice ID
      date: new Date().toISOString().split('T')[0], // Current date
      amount: totalPrice,
      productName: cartItems.map(item => item.name).join(', '), // Concatenate product names
      status: 'Paid'
    };

    // Redirect to BillingHistory with new invoice
    navigate('/billing-history', { state: { newInvoice } });
  };

  const handlePayment = () => {
    setIsPaid(true);
    alert('Payment successful!');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Invoice Payment</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="font-bold text-lg">Invoice #12345</h2>
        <p>Total: ${totalPrice}</p>
        {isPaid ? (
          <>
            <p className="text-green-500 mb-4">Payment Successful!</p>
            <Button onClick={handleDownloadInvoice} className="bg-gray-500 text-white">
              Download Invoice
            </Button>
          </>
        ) : (
          <Button onClick={handlePayment} className="bg-blue-500 text-white mb-4">
            Pay Now
          </Button>
        )}
      </div>
    </div>
  );
};

export default InvoicePayment;

