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
      window.history.pushState({ modal: 'team' }, '', window.location.href);
      setTimeout(() => setIsAnimating(true), 10);

      const handlePopState = () => {
        onClose();
      };
      window.addEventListener('popstate', handlePopState);

      return () => {
        document.body.style.overflow = 'unset';
        setIsAnimating(false);
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-6 md:p-8 transition-all duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500"
        onClick={() => window.history.back()}
      />

      {/* Modal Content */}
      <div
        className={`relative bg-white text-black
        sm:max-w-[780px]
        h-[92vh] sm:max-h-[85vh] sm:h-auto
        rounded-2xl
        overflow-y-auto shadow-2xl
        transition-all duration-500 transform
        ${isAnimating ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}
      >
        {/* Close Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 right-4 sm:top-0 sm:right-0 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full hover:bg-black/5 text-black/40 hover:text-black transition-colors z-50"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row min-h-0">
          {/* Left Content Side */}
          <div className="flex-1 p-6 md:p-8 flex flex-col">
            <div className="text-gradient-brand">
              <h2 className="text-3xl sm:text-5xl md:text-3xl font-[900] tracking-tighter uppercase leading-[0.9] mb-4 md:mb-6">
                Our team,<br />
                <span className="">your vision</span>
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              {/* Teamwork Block */}
              <div className="flex-1">
                <p className="text-gray-500 text-base md:pr-6 font-medium">
                  We thrive on teamwork, turning individual strengths into shared success. Together, we turn ideas into digital solutions that solve real problems for real people.
                </p>
              </div>
            </div>
          </div>

          {/* Right Portrait Grid Side */}
          <div className="w-full lg:w-[380px] p-6 md:p-8 bg-transparent flex items-start sm:items-center">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-white font-bold text-lg leading-none mb-1">{member.name}</p>
                        <p className="text-white/70 text-[10px] uppercase tracking-wider font-bold">{member.role}</p>
                      </div>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-900/50 text-gray-500 p-2 rounded-xl hover:bg-[#FF006B] hover:text-white transition-all transform hover:scale-110 duration-200"
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
