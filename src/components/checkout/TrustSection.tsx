import React from 'react';
import { ShieldCheck, Lock, CreditCard } from 'lucide-react';

const TrustSection: React.FC = () => {
    return (
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mt-8">
            <div className="flex items-center gap-3 mb-4 text-[#FF5C00]">
                <ShieldCheck size={24} />
                <h3 className="font-bold text-lg">Secure Payment</h3>
            </div>
            <p className="text-white/60 text-sm mb-6">
                All transactions are secure and encrypted. We never store your credit card information.
            </p>
            <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                {/* Simple SVG placeholders for payment icons if no assets available, utilizing Lucide for now */}
                <div className="flex items-center gap-2 border border-white/10 px-3 py-1.5 rounded bg-black/20">
                    <Lock size={14} />
                    <span className="text-xs font-mono">SSL ENCRYPTED</span>
                </div>
                <div className="flex items-center gap-2 border border-white/10 px-3 py-1.5 rounded bg-black/20">
                    <CreditCard size={14} />
                    <span className="text-xs font-bold">Stripe</span>
                </div>
            </div>
        </div>
    );
};

export default TrustSection;
