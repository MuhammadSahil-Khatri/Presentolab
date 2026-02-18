import React from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface ClientInfoFormData {
    fullName: string;
    email: string;
    companyName: string;
    phone: string;
    description: string;
}

interface ClientInfoFormProps {
    value: ClientInfoFormData;
    onChange: (field: keyof ClientInfoFormData, val: string) => void;
    errors: Partial<Record<keyof ClientInfoFormData, string>>;
}

const ClientInfoForm: React.FC<ClientInfoFormProps> = ({ value, onChange, errors }) => {
    return (
        <div className="bg-[#09090B] border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="bg-[#FF5C00] w-8 h-8 rounded-full flex items-center justify-center text-sm text-white">1</span>
                Customer Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">

                {/* Full Name */}
                <div className="md:col-span-2 relative group">
                    <label className="block text-white/40 text-xs font-bold mb-1">
                        Name <span className="text-[#FF5C00]">*</span>
                    </label>
                    <input
                        type="text"
                        value={value.fullName}
                        onChange={(e) => onChange('fullName', e.target.value)}
                        className={`w-full bg-transparent border-b py-1.5 text-base text-white focus:outline-none transition-colors ${errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-white'}`}
                    />
                    {errors.fullName && <p className="text-red-500 text-[10px] mt-1 absolute">{errors.fullName}</p>}
                </div>

                {/* Email Address */}
                <div className="md:col-span-2 relative group">
                    <label className="block text-white/40 text-xs font-bold mb-1">
                        Email Address <span className="text-[#FF5C00]">*</span>
                    </label>
                    <input
                        type="email"
                        value={value.email}
                        onChange={(e) => onChange('email', e.target.value)}
                        className={`w-full bg-transparent border-b py-1.5 text-base text-white focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-white'}`}
                    />
                    {errors.email && <p className="text-red-500 text-[10px] mt-1 absolute">{errors.email}</p>}
                </div>

                {/* Company Name */}
                <div className="md:col-span-1 relative group">
                    <label className="block text-white/40 text-xs font-bold mb-1">
                        Company Website (optional)
                    </label>
                    <input
                        type="text"
                        value={value.companyName}
                        onChange={(e) => onChange('companyName', e.target.value)}
                        className={`w-full bg-transparent border-b py-3 text-base text-white focus:outline-none transition-colors border-white/10 focus:border-white`}
                    />
                </div>

                {/* Phone Number */}
                <div className="md:col-span-1 relative group">
                    <label className="block text-white/40 text-xs font-bold mb-1">
                        Phone Number (optional)
                    </label>
                    <div className={`w-full bg-transparent border-b py-1.5 text-base text-white focus:outline-none transition-colors ${errors.phone ? 'border-red-500' : 'border-white/10 focus:border-white'}`}>
                        <PhoneInput
                            international
                            defaultCountry="US"
                            maxLength={20}
                            value={value.phone}
                            onChange={(val) => onChange('phone', val || '')}
                            className="flex items-center gap-2 bg-transparent py-1.5 text-base text-gray-400 focus:outline-none [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:outline-none [&_.PhoneInputCountrySelect]:bg-transparent [&_.PhoneInputCountrySelect]:-ml-1"
                            placeholder="Enter phone number"
                        />
                    </div>
                    {errors.phone && <p className="text-[#FF007F] text-[10px] mt-1 absolute">{errors.phone}</p>}
                </div>

                {/* Description - New Field */}
                <div className="md:col-span-2 relative group">
                    <label className="block text-white/40 text-xs font-bold mb-1">
                        Description <span className="text-[#FF5C00]">*</span>
                    </label>
                    <textarea
                        value={value.description}
                        onChange={(e) => onChange('description', e.target.value)}
                        rows={4}
                        className={`w-full bg-transparent border-b py-1.5 text-base text-white focus:outline-none transition-colors resize-none ${errors.description ? 'border-red-500' : 'border-white/10 focus:border-white'}`}
                    />
                    {errors.description && <p className="text-red-500 text-[10px] mt-1 absolute">{errors.description}</p>}
                </div>

            </div>
        </div>
    );
};

export default ClientInfoForm;
