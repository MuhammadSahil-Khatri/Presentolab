import { motion } from 'framer-motion';
import { CLIENT_LOGOS } from '../constants';

const ClientLogos = () => {
    return (
        <section className="bg-black mt-10 md:mb-20 mb-16 overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden">
                <motion.div
                    className="flex w-max items-center"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        ease: 'linear',
                        duration: window.innerWidth < 768 ? 20 : 30,
                        repeat: Infinity,
                    }}
                >
                    {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 flex items-center justify-center mx-8 md:mx-16"
                        >
                            <img
                                src={logo}
                                alt="Client Logo"
                                className="w-28 md:w-36 object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientLogos;
