import React from 'react';

const CheckoutSteps: React.FC = () => {
    return (
        <div className="flex items-center gap-4 mb-8 ml-6 text-sm md:text-base">
            <div className="flex items-center gap-2 text-white font-semibold">
                <span className="bg-[#FF5C00] w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                <span>Your Info</span>
            </div>
            <div className="w-8 h-[1px] bg-white/20"></div>
            <div className="flex items-center gap-2 text-white/50">
                <span className="border border-white/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                <span>Payment</span>
            </div>
            <div className="w-8 h-[1px] bg-white/20"></div>
            <div className="flex items-center gap-2 text-white/50">
                <span className="border border-white/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
                <span>Confirmation</span>
            </div>
        </div>
    );
};

export default CheckoutSteps;
