import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../seo/SEO';

const CheckoutCancel: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center pt-20">
            <SEO pageKey="checkoutCancel" />
            <h1 className="text-4xl font-bold text-red-500 mb-4">Payment Cancelled</h1>
            <p className="text-xl mb-8">Your payment was not processed.</p>
            <Link to="/pricing" className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                Return to Pricing
            </Link>
        </div>
    );
};

export default CheckoutCancel;
