import React, { useEffect, useState } from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Linkedin } from 'lucide-react';

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
              <h2 className="text-5xl md:text-7xl font-[900] tracking-tighter uppercase leading-[0.9] mb-4 text-black">
                Our team,<br />
                <span className="text-zinc-400">your vision</span>
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              {/* Teamwork Block */}
              <div className="flex-1">
                <p className="text-zinc-500 text-lg lg:text-2xl leading-[1.3] font-medium max-w-lg">
                  We thrive on teamwork, turning individual strengths into shared success. Together, we turn ideas into digital solutions that solve real problems for real people.
                </p>
              </div>

              {/* Mission Block */}
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold tracking-tight mb-2">Join our mission</h3>
                <p className="text-gray-500 text-lg leading-snug mb-6 pr-10">
                  If you want to collaborate with us, we'd love to hear from you.
                </p>

                {/* Apply Now Button - Consistent Style */}
                <button
                  className="group relative flex items-center active:scale-95 transition-transform duration-200"
                >
                  <div className="bg-cta-gradient group-hover:brightness-110 text-white h-12 px-8 rounded-full flex items-center font-bold text-sm relative z-20 transition-all duration-500 ease-spring shadow-lg">
                    Apply Now
                  </div>
                  <div className="bg-cta-gradient group-hover:brightness-110 h-12 w-12 rounded-full flex items-center justify-center relative z-10 -ml-4 group-hover:ml-4 transition-all duration-500 ease-spring">
                    <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Portrait Grid Side */}
          <div className="w-full lg:w-[450px] p-6 lg:p-12 bg-transparent flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {TEAM_MEMBERS.map((member, i) => (
                <div
                  key={i}
                  className="relative group aspect-[4/5] rounded-[1.2rem] overflow-hidden bg-zinc-300 shadow-sm"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-white font-bold text-lg leading-none mb-1">{member.name}</p>
                        <p className="text-white/70 text-[10px] uppercase tracking-wider font-bold">{member.role}</p>
                      </div>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-2 rounded-full hover:bg-[#0077b5] hover:text-white transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin size={16} />
                      </a>
                    </div>
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
