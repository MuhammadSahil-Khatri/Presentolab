import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { PLANS, getPlanById } from '../constants/plans';
import CheckoutSteps from '../components/checkout/CheckoutSteps';
import OrderSummary from '../components/checkout/OrderSummary';
import ClientInfoForm from '../components/checkout/ClientInfoForm';
import TrustSection from '../components/checkout/TrustSection';
import Loader from '../components/Loader';
import SEO from '../seo/SEO';

const CheckoutPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const planId = searchParams.get('plan');
    const [isValidPlan, setIsValidPlan] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form State
    const [clientInfo, setClientInfo] = useState({
        fullName: '',
        email: '',
        companyName: '',
        phone: '',
        description: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        if (!planId || !getPlanById(planId)) {
            navigate('/pricing');
        } else {
            setIsValidPlan(true);
        }
    }, [planId, navigate]);

    const validate = () => {
        const newErrors: Record<string, string> = {};

        // Client Info Validation
        if (!clientInfo.fullName.trim() || clientInfo.fullName.length < 2) {
            newErrors.fullName = "Full name is required (min 2 chars)";
        }
        if (!clientInfo.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientInfo.email)) {
            newErrors.email = "Valid email is required";
        }
        if (!clientInfo.description.trim()) {
            newErrors.description = "Please describe your project needs";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validate()) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        setIsSubmitting(true);

        try {
            const { data, error } = await supabase.from('orders').insert([
                {
                    plan_id: planId,
                    client_info: clientInfo,
                    payment_status: 'pending',
                }
            ]);

            if (error) {
                console.error("Supabase insert error:", error);
                alert("Something went wrong while saving your order.");
            } else {
                console.log("Order saved:", data);
                sessionStorage.setItem('checkoutCompleted', 'true');
                navigate('/checkout/success');
            }
        } catch (err) {
            console.error(err);
            alert("Unexpected error occurred.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isValidPlan) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#09090B] text-white">
                <Loader size={60} />
            </div>
        );
    }

    const plan = getPlanById(planId!)!;

    return (
        <div className="min-h-screen bg-[#09090B] text-white pt-48 pb-20 px-4 md:px-8">
            <SEO pageKey="checkout" />
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Forms */}
                    <div className="lg:col-span-8 order-2 lg:order-1">
                        <CheckoutSteps />

                        <ClientInfoForm
                            value={clientInfo}
                            onChange={(field, val) => setClientInfo(prev => ({ ...prev, [field]: val }))}
                            errors={errors}
                        />

                        <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className={`
                                    group relative flex items-center
                                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BE00FF]/40
                                    transition-transform duration-200
                                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'active:scale-[0.98]'}
                                `}
                            >
                                {/* Text pill */}
                                <span
                                    className="
                                        bg-cta-gradient text-white
                                        h-11 px-8
                                        rounded-full
                                        flex items-center justify-center
                                        font-semibold text-sm
                                        relative z-20
                                        shadow-lg shadow-[#BE00FF]/20
                                        transition-all duration-300
                                        group-hover:brightness-110
                                    "
                                >
                                    {isSubmitting ? 'Processing...' : 'Next'}
                                </span>

                                {/* Icon pill */}
                                <span
                                    className="
                                        bg-cta-gradient
                                        h-11 w-11
                                        rounded-full
                                        flex items-center justify-center
                                        relative z-10
                                        ml-[-0.75rem]
                                        transition-all duration-300 ease-out
                                        group-hover:ml-2
                                        group-hover:brightness-110
                                        shadow-lg shadow-[#BE00FF]/20
                                    "
                                >
                                    <span
                                        className="
                                            w-7 h-7
                                            rounded-full
                                            bg-black/5
                                            flex items-center justify-center
                                            transition-colors
                                            group-hover:bg-black/10
                                        "
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M7 17L17 7" />
                                            <path d="M7 7h10v10" />
                                        </svg>
                                    </span>
                                </span>
                            </button>

                            <div className="flex items-center gap-2 max-w-sm">
                                <div className="flex-shrink-0 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/90">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        <polyline points="9 11 12 14 15 11"></polyline>
                                    </svg>
                                </div>
                                <p className="text-white/80 text-[10px] font-medium leading-relaxed">
                                    By clicking "Proceed", you agree to our Terms of Service.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sticky Summary */}
                    <div className="lg:col-span-4 order-1 lg:order-2">
                        <div className="sticky top-32 space-y-8">
                            <OrderSummary plan={plan} />
                            <TrustSection />
                        </div>
                    </div>

                </div>
            </div>

            {isSubmitting && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center pointer-events-none">
                </div>
            )}
        </div>
    );
};

export default CheckoutPage;
