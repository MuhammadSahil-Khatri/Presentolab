import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../seo/SEO';

const CheckoutSuccess: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center pt-20">
            <SEO pageKey="checkoutSuccess" />
            <h1 className="text-4xl font-bold text-green-500 mb-4">Payment Successful!</h1>
            <p className="text-xl mb-8">Thank you for your order. We will be in touch shortly.</p>
            <Link to="/" className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                Return Home
            </Link>
        </div>
    );
};

export default CheckoutSuccess;
