import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PortfolioModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ isOpen, onClose, imageUrl }) => {
    // Lock scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Push state for back button support
            window.history.pushState({ modal: 'portfolio' }, '');
        } else {
            document.body.style.overflow = '';
        }

        const handlePopState = () => {
            if (isOpen) {
                onClose();
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('popstate', handlePopState);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-zoom-out"
                />

                {/* Close Button */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={onClose}
                    className="absolute top-6 right-6 z-[110] p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                >
                    <X size={24} />
                </motion.button>

                {/* Image Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative z-[105] max-w-full max-h-full overflow-hidden rounded-2xl shadow-2xl"
                >
                    <img
                        src={imageUrl}
                        alt="Portfolio Large"
                        className="max-w-full max-h-[90vh] object-contain select-none"
                    />
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default PortfolioModal;
