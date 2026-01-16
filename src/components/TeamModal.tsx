
import React, { useEffect, useState } from 'react';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      document.body.style.overflow = 'unset';
      setIsAnimating(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const teamPortraits = [
    { name: "Julian", role: "Creative Lead", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" },
    { name: "Elena", role: "Strategist", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop" },
    { name: "Marcus", role: "UI Expert", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop" },
    { name: "Sofia", role: "Narrative Designer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className={`relative bg-white text-black w-full max-w-[1000px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 transform ${isAnimating ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center rounded-full hover:bg-black/5 text-black/40 hover:text-black transition-colors z-50"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[600px]">
          {/* Left Content Side */}
          <div className="flex-1 p-6 md:p-10 lg:p-12 flex flex-col justify-between">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-4">
                Our team,<br />
                <span className="text-gray-400">your vision</span>
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-end gap-12 lg:gap-20">
              {/* Mission Block */}
              <div className="flex flex-col items-start gap-4 flex-1">
                <h3 className="text-xl font-bold tracking-tight">Join our mission</h3>
                <p className="text-gray-500 text-lg leading-snug max-w-[280px]">
                  If you're ready to create and collaborate, we'd love to hear from you.
                </p>
                <button className="bg-black text-white h-11 px-6 rounded-full flex items-center gap-3 font-bold text-sm mt-2 hover:bg-black/90 active:scale-95 transition-all">
                  Apply now
                  <span className="w-2 h-2 rounded-full bg-white ml-1"></span>
                </button>
              </div>

              {/* Teamwork Block */}
              <div className="flex-1">
                <p className="text-gray-500 text-lg lg:text-2xl leading-[1.3] font-medium max-w-lg">
                  We thrive on teamwork, <span className="text-black font-bold">turning individual strengths into shared success</span>. Together, we turn ideas into digital products that solve real problems for real people.
                </p>
              </div>
            </div>
          </div>

          {/* Right Portrait Grid Side */}
          <div className="w-full lg:w-[450px] p-6 lg:p-12 bg-transparent flex items-center">
            <div className="grid grid-cols-2 gap-4 w-full">
              {teamPortraits.map((member, i) => (
                <div
                  key={i}
                  className="relative group aspect-[4/5] rounded-[1.2rem] overflow-hidden bg-zinc-300 shadow-sm"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  />
                  {/* Subtle info overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <p className="text-white font-bold text-sm">{member.name}</p>
                    <p className="text-white/70 text-[10px] uppercase tracking-wider font-bold">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
