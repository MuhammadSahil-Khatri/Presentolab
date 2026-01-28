import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const TestimonialCard: React.FC<{
  item: typeof TESTIMONIALS[0];
}> = ({ item }) => {
  return (
    <motion.div
      className="bg-zinc-900/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] w-[300px] md:w-[450px] flex-shrink-0 flex flex-col justify-between min-h-[450px] md:min-h-[500px] relative overflow-hidden group hover:bg-zinc-900/60 transition-colors duration-500 border border-white/5 hover:border-white/10"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#7000FF]/10 rounded-full blur-[100px] -translate-y-1/2 md:translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-8">
          <div className="flex text-[#FF5C00]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <span className="text-xl font-bold ml-2">{item.rating}</span>
        </div>

        <div className="relative mb-4">
          <Quote className="absolute -top-4 -left-2 text-white/5 w-12 h-12 rotate-180" />
          <p className="text-white/80 md:text-xl text-lg leading-relaxed font-medium relative z-10">
            "{item.text}"
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5 relative z-10 border-t border-white/5">
        <div className="relative mt-1">
          <div className="absolute inset-0 rounded-full group-hover:opacity-100 transition-opacity duration-500" />
          <img src={item.image} alt={item.author} className="w-14 h-14 rounded-full object-cover relative z-10 border-2 border-black" />
        </div>
        <div>
          <p className="font-bold text-lg text-white group-hover:text-[#FF5C00] transition-colors duration-300">{item.author}</p>
          <p className="text-white/40 text-xs uppercase tracking-widest font-bold">{item.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const slideLeft = () => {
    const currentX = x.get();
    const cardWidth = window.innerWidth < 768 ? 300 : 450;
    const newX = Math.min(currentX + cardWidth, 0);
    controls.start({ x: newX, transition: { type: "spring", stiffness: 300, damping: 30 } });
  };

  const slideRight = () => {
    const currentX = x.get();
    const cardWidth = window.innerWidth < 768 ? 300 : 450;
    const newX = Math.max(currentX - cardWidth, -width);
    controls.start({ x: newX, transition: { type: "spring", stiffness: 300, damping: 30 } });
  };

  return (
    <section className="pt-28 bg-black overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-full h-[500px] bg-gradient-to-r from-purple-900/10 via-transparent to-orange-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* New Centered Header */}
        <div className="flex items-center justify-center w-full z-20 relative">
          <h2 className="text-3xl md:text-6xl font-[900] mb-8 tracking-tighter text-white uppercase leading-[0.9] text-center">
            Client Stories
          </h2>
        </div>
        <p className="text-gray-500 text-xl font-light text-center mb-16 max-w-3xl mx-auto relative">
          Every startup has a story, but not every founder knows how to present it. We take your raw ideas, shape them into a Clear narrative, and design them into visuals that speak louder than words
        </p>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-end">

          {/* Left Content - Rating & Nav */}
          <div className="w-full lg:w-[400px] flex-shrink-0 flex flex-col h-full justify-between pt-10 sticky top-32 md:mb-2">
            <div className="flex items-center justify-center md:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative inline-block md:mb-12"
              >
                <span className="text-[120px] font-black leading-none tracking-tighter text-white inline-block">4.9</span>
                <p className="text-white/60 text-lg font-medium mt-4 max-w-[300px] leading-relaxed">
                  Based on 80+ reviews on Upwork. Consistent quality that builds trust.
                </p>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="hidden md:flex gap-4">
              <button
                onClick={slideLeft}
                className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#FF5C00] hover:border-[#FF5C00] text-white transition-all duration-300 group"
              >
                <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={slideRight}
                className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#7000FF] hover:border-[#7000FF] text-white transition-all duration-300 group"
              >
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="w-full overflow-hidden">
            <motion.div
              ref={carousel}
              className="cursor-grab active:cursor-grabbing"
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                animate={controls}
                style={{ x }}
                className="flex gap-8 md:pt-6"
              >
                {TESTIMONIALS.map((item, idx) => (
                  <TestimonialCard key={item.id} item={item} />
                ))}
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
