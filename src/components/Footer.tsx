
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-32 pb-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-10">
              <Logo scale={1} />
            </div>
            <p className="text-gray-500 text-xl mb-12 max-w-md font-light leading-relaxed">
              Shaping the future of visual storytelling for startups and global brands. We turn complex visions into clear impact.
            </p>
            <div className="flex items-center gap-4">
              {['FB', 'TW', 'LI', 'IG', 'DR'].map(social => (
                <a key={social} href="#" className="w-12 h-12 rounded-2xl bg-zinc-900/50 flex items-center justify-center text-xs font-black text-gray-500 hover:bg-[#FF006B] hover:text-white transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-10 text-xl tracking-tighter">Our Services</h4>
            <ul className="space-y-5 text-gray-500 font-medium">
              {['Pitch Deck Design', 'Presentation Design', 'UI/UX Design', 'Documentation Design', 'Brand Design'].map(item => (
                <li key={item}><a href="#" className="hover:text-[#FF5C00] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-10 text-xl tracking-tighter">Get in Touch</h4>
            <ul className="space-y-5 text-gray-500 font-medium">
              <li><a href="mailto:info@presentolab.com" className="text-xl text-white hover:text-[#9E00FF] transition-colors">info@presentolab.com</a></li>
              <li><a href="tel:+923000000000" className="hover:text-[#9E00FF] transition-colors">+92 XXX XXXXXXX</a></li>
              <li className="pt-8">
                <p className="text-zinc-600 font-black mb-4 uppercase text-[10px] tracking-[0.4em]">Do you like?</p>
                <button className="text-[#FFB800] hover:text-[#FFB800]/80 font-black transition-colors underline underline-offset-8 decoration-2">Visit Our Studio</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900/50 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-sm font-medium">
            © {new Date().getFullYear()} Presento Lab. Crafted for impact.
          </p>
          <div className="flex gap-10 text-sm text-zinc-600 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
