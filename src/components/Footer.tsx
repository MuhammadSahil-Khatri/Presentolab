import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Dribbble, Mail, Phone, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { SERVICES } from '../constants';

interface FooterProps {
  onServiceClick: (index: number) => void;
}

const Footer: React.FC<FooterProps> = ({ onServiceClick }) => {
  const socialHealth = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61584547089606' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/presentolab/' },
    { icon: Instagram, href: 'https://www.instagram.com/presentolab/' },
    // { icon: Dribbble, href: '#' },
  ];

  return (
    <footer className="bg-black/90 backdrop-blur-md pt-12 pb-4 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-10">
              <a
                href="/"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="inline-block"
              >
                <img src="/PresentoLab_Logo.png" alt="PresentoLab" className="h-20 w-auto" />
              </a>
            </div>
            <p className="text-gray-500 text-xl mb-12 max-w-md font-light leading-relaxed">
              Shaping the future of visual storytelling for startups and global brands. We turn complex visions into clear impact.
            </p>
            <div className="flex items-center gap-4">
              {socialHealth.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-zinc-900/50 flex items-center justify-center text-gray-500 hover:bg-[#FF006B] hover:text-white transition-all transform hover:scale-110 duration-200"
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-10 text-xl tracking-tighter">Quick Links</h4>
            <ul className="space-y-5 text-gray-500 font-medium">
              <li><a href="/work" className="hover:text-[#FF5C00] transition-colors">Our Work</a></li>
              <li><a href="/pricing" className="hover:text-[#FF5C00] transition-colors">Our Packages</a></li>
              {SERVICES.map((item, index) => (
                <li key={item.title}>
                  <button
                    onClick={() => onServiceClick(index)}
                    className="hover:text-[#FF5C00] transition-colors text-left"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-10 text-xl tracking-tighter">Get in touch</h4>
            <ul className="space-y-6 text-gray-500 font-medium">
              <li>
                <a href="mailto:info@presentolab.com" className="flex items-center gap-4 hover:text-[#FF5C00] transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900/50 flex items-center justify-center group-hover:bg-[#9E00FF]/10 transition-colors">
                    <Mail size={18} />
                  </div>
                  info@presentolab.com
                </a>
              </li>
              <li className="flex items-center gap-4 hover:text-[#FF5C00] transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-zinc-900/50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF006B]/10 transition-colors">
                  <MapPin size={18} />
                </div>
                <span className="">5900 Balcones Drive #15684, Austin, TX 78731</span>
              </li>
              <li>
                <a href="tel:+12812565434" className="flex items-center gap-4 hover:text-[#FF5C00] transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900/50 flex items-center justify-center group-hover:bg-[#FF5C00]/10 transition-colors">
                    <Phone size={18} />
                  </div>
                  +1 281 256 5434
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-sm font-medium">
            © {new Date().getFullYear()} PresentoLab. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-zinc-600 text-sm font-medium">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
