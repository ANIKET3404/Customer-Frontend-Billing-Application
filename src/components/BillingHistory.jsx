import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BillingHistory = () => {
  const { state } = useLocation();
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    if (state?.newInvoice) {
      setInvoices([...invoices, state.newInvoice]);
    }
  }, [state]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Billing History</h1>
      {invoices.length > 0 ? (
        invoices.map((invoice) => (
          <div key={invoice.id} className="bg-white p-4 rounded shadow-md mb-4">
            <h2 className="font-bold">Invoice #{invoice.id}</h2>
            <p>Date: {invoice.date}</p>
            <p>Product: {invoice.productName}</p>
            <p>Amount: ${invoice.amount}</p>
            <p>Status: {invoice.status}</p>
          </div>
        ))
      ) : (
        <p>No invoices found.</p>
      )}
    </div>
  );
};

export default BillingHistory;
