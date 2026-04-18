import React, { useEffect, useState } from 'react';

import emailjs from '@emailjs/browser';
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import toast from 'react-hot-toast';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    website: '',
    phone: '',
    smsConsent: false,
    termsConsent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Back button handling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Push state when modal opens
      window.history.pushState({ modal: true }, '', window.location.href);
      setTimeout(() => setIsAnimating(true), 10);

      const handlePopState = () => {
        // When back button is pressed, close modal
        onClose();
      };

      window.addEventListener('popstate', handlePopState);

      return () => {
        document.body.style.overflow = 'unset';
        setIsAnimating(false);
        setErrors({});
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }, [isOpen, onClose]); // Note: onClose needs to be stable or this might re-run

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Name: Required + Alpha characters only
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.name)) {
      newErrors.name = 'Name should only contain letters';
    }

    // Email: Required + Format
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Description: Required
    if (!formData.description.trim()) newErrors.description = 'Description is required';

    // Website: Optional + URL Format
    if (formData.website.trim()) {
      // Allow http/https/www or standard domain format
      const urlPattern = /^(https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,}(\.[a-z]{2,})?([\/\w \.-]*)*\/?$/i;
      if (!urlPattern.test(formData.website)) {
        newErrors.website = 'Please enter a valid URL (e.g., example.com)';
      }
    }

    // Phone: Required + Phone Format using library validation
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!isValidPhoneNumber(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Consent Validation
    if (!formData.smsConsent) {
      newErrors.smsConsent = 'You must agree to receive SMS messages to continue.';
    }
    if (!formData.termsConsent) {
      newErrors.termsConsent = 'You must agree to the Terms & Conditions and Privacy Policy.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,                 // ✅ matches {{name}}
          email: formData.email,               // ✅ matches {{email}}
          message: formData.description,       // ✅ matches {{message}}
          website: formData.website || "—",
          phone: formData.phone || "—",
          smsConsent: formData.smsConsent ? "Yes" : "No",
          termsConsent: formData.termsConsent ? "Yes" : "No",
          time: new Date().toLocaleString(),   // ✅ matches {{time}}
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Thank you for reaching out! Our team has received your message and will get back to you shortly.", {
        duration: 3000,
      });

      setFormData({
        name: "",
        email: "",
        description: "",
        website: "",
        phone: "",
        smsConsent: false,
        termsConsent: false,
      });

      onClose();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
      if (errors[name]) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
      return;
    }

    // Apply input restrictions
    let sanitizedValue = value;

    if (name === 'name') {
      // Only allow letters and spaces
      sanitizedValue = value.replace(/[^a-zA-Z\s]/g, '');
    }
    // Phone logic moved to separate handler

    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handlePhoneChange = (value?: string) => {
    setFormData(prev => ({ ...prev, phone: value || '' }));
    if (errors.phone) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.phone;
        return newErrors;
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 md:p-8 transition-all duration-500 opacity-100 ${isAnimating ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500"
        onClick={() => window.history.back()}
      />
      {/* Modal Content */}
      <div className={`relative bg-white text-black sm:max-w-[780px] h-[92vh] sm:max-h-[85vh] sm:h-auto rounded-2xl overflow-y-auto shadow-2xl ${isAnimating ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'} max-h-[90vh] overflow-y-auto`}>

        {/* Close Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 text-black/40 hover:text-black transition-colors z-50"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="pt-10 p-4 md:p-8">
          {/* Header (Team Section) */}
          <div className="flex items-start flex-col md:flex-row gap-4 md:mb-4 mb-8 relative z-10">
            {/* <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/150?u=sarah" alt="Expert 1" className="w-10 h-10 rounded-full border-[3px] border-white shadow-lg object-cover" />
              <img src="https://i.pravatar.cc/150?u=atif" alt="Expert 2" className="w-10 h-10 rounded-full border-[3px] border-white shadow-lg object-cover" />
            </div> */}
            <div>
              <h2 className="text-lg md:text-2xl font-black tracking-tight leading-tight ">Tell us what you are looking for.</h2>
              <p className="text-black/50 text-sm font-medium mt-0.5">We will shape your project strategy</p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-5 relative z-10" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">

              {/* Name */}
              <div className="relative group">
                <label className="block text-black/40 text-xs font-bold mb-1">Name <span className="text-[#FF007F]">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b py-1.5 text-base text-black focus:outline-none transition-colors ${errors.name ? 'border-[#FF007F]' : 'border-black/10 focus:border-black'}`}
                />
                {errors.name && <p className="text-[#FF007F] text-[10px] mt-1 absolute">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="relative group">
                <label className="block text-black/40 text-xs font-bold mb-1">Email Address <span className="text-[#FF007F]">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b py-1.5 text-base text-black focus:outline-none transition-colors ${errors.email ? 'border-[#FF007F]' : 'border-black/10 focus:border-black'}`}
                />
                {errors.email && <p className="text-[#FF007F] text-[10px] mt-1 absolute">{errors.email}</p>}
              </div>

              {/* Description - Spanning full width */}
              <div className="md:col-span-2 relative group">
                <label className="block text-black/40 text-xs font-bold mb-1">Description <span className="text-[#FF007F]">*</span></label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full bg-transparent border-b py-1.5 text-base text-black focus:outline-none transition-colors resize-none ${errors.description ? 'border-[#FF007F]' : 'border-black/10 focus:border-black'}`}
                />
                {errors.description && <p className="text-[#FF007F] text-[10px] mt-1 absolute">{errors.description}</p>}
              </div>

              {/* Company Website */}
              <div className="relative group">
                <label className="block text-black/40 text-xs font-bold mb-1">Company Website (optional)</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b py-1.5 text-base text-black focus:outline-none transition-colors ${errors.website ? 'border-[#FF007F]' : 'border-black/10 focus:border-black'}`}
                />
                {errors.website && <p className="text-[#FF007F] text-[10px] mt-1 absolute">{errors.website}</p>}
              </div>

              {/* Phone */}
              <div className="relative group">
                <label className="block text-black/40 text-xs font-bold mb-1">Phone Number <span className="text-[#FF007F]">*</span></label>
                <div className={`border-b transition-colors ${errors.phone ? 'border-[#FF007F]' : 'border-black/10 group-focus-within:border-black'}`}>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    maxLength={20}
                    value={formData.phone || undefined} // Fix for backspace reset bug
                    onChange={handlePhoneChange}
                    className="flex items-center gap-2 bg-transparent py-1.5 text-base text-black focus:outline-none [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:outline-none [&_.PhoneInputCountrySelect]:bg-transparent [&_.PhoneInputCountrySelect]:-ml-1"
                    placeholder="Enter phone number"
                  />
                </div>
                {errors.phone && <p className="text-[#FF007F] text-[10px] mt-1 absolute">{errors.phone}</p>}
              </div>
            </div>
            <div className="lg:mr-48 lg:ml-4 md:mr-24 md:ml-4 flex flex-col gap-y-4">
              {/* Consents */}
              <div className="space-y-6 pt-4 ">
                {/* SMS Consent */}
                <div className="relative flex items-start gap-3">
                  <div className="flex items-center h-5 mt-0.5 shrink-0">
                    <input
                      id="smsConsent"
                      name="smsConsent"
                      type="checkbox"
                      checked={formData.smsConsent}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-black/20 text-[#FF007F] focus:ring-[#FF007F] bg-transparent cursor-pointer accent-[#FF007F]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-black/80 text-xs font-medium leading-tight">
                      By checking this box, I agree to receive SMS messages from PresentoLab regarding my inquiry, updates, and services. <span className="text-[#FF007F]">*</span>
                    </div>
                    <p className="text-black/50 text-[10px] mt-1 pr-4">
                      Message frequency may vary. Standard message and data rates may apply. Reply STOP to unsubscribe at any time. Consent is not a condition of purchase.
                    </p>
                    {errors.smsConsent && <p className="text-[#FF007F] text-[10px] mt-1">{errors.smsConsent}</p>}
                  </div>
                </div>

                {/* Terms Consent */}
                <div className="relative flex items-start gap-3">
                  <div className="flex items-center h-5 mt-0.5 shrink-0">
                    <input
                      id="termsConsent"
                      name="termsConsent"
                      type="checkbox"
                      checked={formData.termsConsent}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-black/20 text-[#FF007F] focus:ring-[#FF007F] bg-transparent cursor-pointer accent-[#FF007F]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-black/80 text-xs font-medium leading-tight">
                      By checking this box, I agree to the <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold tracking-wide">Terms &amp; Conditions</a> and <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold tracking-wide">Privacy Policy</a> of PresentoLab. <span className="text-[#FF007F]">*</span>
                    </div>
                    <p className="text-black/50 text-[10px] mt-1 pr-4">
                      I understand how my data is collected, used, and protected.
                    </p>
                    {errors.termsConsent && <p className="text-[#FF007F] text-[10px] mt-1">{errors.termsConsent}</p>}
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6 pt-2">
                {/* Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label={isSubmitting ? 'Sending message' : 'Send message'}
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
                    {isSubmitting ? 'Sending...' : 'Let’s Talk'}
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
