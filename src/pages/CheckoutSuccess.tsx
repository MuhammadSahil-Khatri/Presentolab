import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../seo/SEO';

const CheckoutSuccess: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const completed = sessionStorage.getItem('checkoutCompleted');
        if (!completed) {
            navigate('/', { replace: true });
            return;
        }
        // Clear the flag so refreshing this page redirects home
        sessionStorage.removeItem('checkoutCompleted');
    }, [navigate]);

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
