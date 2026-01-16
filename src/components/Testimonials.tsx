
import React from 'react';

const TestimonialCard: React.FC<{
  rating: string;
  text: string;
  author: string;
  role: string;
  image: string;
}> = ({ rating, text, author, role, image }) => {
  return (
    <div className="bg-transparent p-10 rounded-[3rem] w-[400px] flex-shrink-0 flex flex-col justify-between min-h-[500px] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 border border-white/5 hover:border-white/10">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-2xl font-bold">{rating}</span>
          <div className="flex text-yellow-400">
            {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
          </div>
        </div>
        <p className="text-white/80 text-lg leading-relaxed font-medium mb-12">
          {text}
        </p>
      </div>
      
      <div className="flex items-center gap-4 relative z-10">
        <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all border border-white/10" />
        <div>
          <p className="font-bold text-sm">{author}</p>
          <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      rating: "5.0",
      text: "The team at Presento Lab didn't just design slides; they understood our vision and translated it into a narrative that investors could finally grasp. Their excellence in communication and attention to detail gave our brand the credibility it needed to secure our seed round.",
      author: "Sarah Jenkins",
      role: "Product Lead, Webflow",
      image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      rating: "5.0",
      text: "We gained immense clarity on our core value proposition thanks to their significant knowledge in UI/UX and visual storytelling. The vendor has provided valuable feedback by always being readily available. They transformed our communication challenges into a massive growth driver.",
      author: "Atif Hussain",
      role: "Co-Founder at Kinetic",
      image: "https://i.pravatar.cc/150?u=atif"
    },
    {
      rating: "5.0",
      text: "Working with them was a turning point for our brand identity. The client is proud of Halo Lab's work, which their customers have praised. They lead a communicative process that ensures the final result doesn't just look good, but delivers real-world success.",
      author: "Dmitri Lubaschevski",
      role: "CEO, DATA Services",
      image: "https://i.pravatar.cc/150?u=dmitri"
    }
  ];

  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Header Section - Centralized */}
        <div className="flex flex-col items-center text-center mb-24 gap-12">
          
          {/* Heading and Subheading */}
          <div className="flex flex-col items-center gap-6 max-w-4xl">
            <h2 className="text-5xl md:text-8xl font-[900] tracking-tighter uppercase leading-[0.9]">Client Stories</h2>
            <p className="text-gray-500 text-xl font-light leading-relaxed max-w-2xl">
              Stories of transformation from clients who gained clarity, credibility, and real-world success through our collaboration.
            </p>
          </div>

          {/* Upwork Reviews Pill - Background removed for minimal look */}
          <button className="flex items-center gap-5 border border-white/10 rounded-full px-8 py-3.5 bg-transparent transition-all hover:border-white/30 active:scale-95 group">
            <span className="font-black text-2xl tracking-tight text-[#14a800]">Upwork</span>
            <div className="w-[1.5px] h-5 bg-zinc-700/50"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-300 transition-colors">80+ REVIEWS</span>
          </button>
        </div>

        {/* Main Content: Sidebar + Carousel */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Sidebar 4.9 Section - Entirely transparent */}
          <div className="w-full lg:w-[450px] flex-shrink-0 relative p-12 flex flex-col justify-between min-h-[550px]">
            <div className="relative">
              <div className="mb-10">
                <span className="text-[140px] font-black leading-none tracking-tighter text-white">4.9</span>
              </div>
              <p className="text-white/90 text-xl font-medium max-w-[340px] leading-[1.4]">
                Upwork average based on 80+ reviews. All chances are you'll be impressed too.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button className="w-16 h-16 rounded-full border border-white/10 bg-transparent flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <button className="w-16 h-16 rounded-full border border-white/10 bg-transparent flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6 6-6" transform="rotate(180 12 12)"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Scrolling Cards */}
          <div className="flex-grow w-full overflow-x-auto no-scrollbar pb-10">
            <div className="flex gap-8 px-4">
              {testimonials.map((t, idx) => (
                <TestimonialCard 
                  key={idx}
                  rating={t.rating}
                  text={t.text}
                  author={t.author}
                  role={t.role}
                  image={t.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
