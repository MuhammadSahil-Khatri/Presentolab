import React from 'react';
import { Link } from 'react-router-dom';
import { PricingTier } from '../../constants/pricing';

interface OrderSummaryProps {
    plan: PricingTier & { currency?: string }; // currency might not be in PricingTier, handling gracefully
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ plan }) => {
    // Calculate final price: basePrice - (basePrice * discount / 100)
    const finalPrice = Math.round(plan.basePrice - (plan.basePrice * plan.discountPercent / 100));

    return (
        <div className="bg-[#09090B] border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold mb-6 text-white">Order Summary</h2>

            <div className="flex justify-between items-start mb-4 pb-4 border-b border-white/10">
                <div>
                    <h3 className="text-[#FF5C00] font-bold text-lg">{plan.name}</h3>
                    <p className="text-white/50 text-xs mt-1">One-time payment</p>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-black text-white">${finalPrice}</div>
                    <div className="text-sm text-white/30 line-through">${plan.basePrice}</div>
                </div>
            </div>

            <div className="mb-6">
                <h4 className="text-sm font-semibold text-white/70 mb-3 uppercase tracking-wider">What's Included:</h4>
                <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-white/60">
                            <span className="text-green-500 mt-0.5">✓</span>
                            <span className="leading-tight">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-white/5 p-4 rounded-lg mb-6 border border-white/5">
                <div className="flex justify-between items-center text-white font-bold">
                    <span>Total</span>
                    <span className="text-xl">${finalPrice} <span className="text-xs font-normal text-white/50">USD</span></span>
                </div>
            </div>

            <p className="text-xs text-white/40 text-center mb-4">
                You will be redirected to Stripe for secure payment.
            </p>

            <Link
                to="/pricing"
                className="block w-full text-center text-sm font-semibold text-white/60 hover:text-white hover:underline transition-colors"
            >
                Change Plan
            </Link>
        </div>
    );
};

export default OrderSummary;
