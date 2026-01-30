import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import logoImage from '../assets/PresentoLab_Logo.png';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const ctaTextRef = useRef<HTMLDivElement>(null);
  const ctaIconRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const lastScrollY = useRef(0);
  const isCompact = useRef(false);
  const isHidden = useRef(false);

  useEffect(() => {
    // Initial setup
    const duration = 0.5;
    const ease = "power2.out";

    const isMobile = window.innerWidth < 768;
    // Initialize GSAP values
    // Start with glass effect active
    gsap.set(headerRef.current, {
      width: isMobile ? "95%" : "90%",
      paddingLeft: isMobile ? "1rem" : "1.5rem",
      paddingRight: isMobile ? "1rem" : "1.5rem",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(16px)",
      borderColor: "rgba(255, 255, 255, 0.08)",
      boxShadow: "0 8px 32px 0 rgba(0,0,0,0.36)"
    });

    gsap.set(containerRef.current, { top: "2.5rem", y: 0, opacity: 1 });
    gsap.set(logoWrapperRef.current, { scale: 0.75, transformOrigin: "left center" });

    // Initial CTA state
    gsap.set(ctaTextRef.current, { height: "2.75rem", paddingLeft: "1.5rem", paddingRight: "1.5rem" });
    gsap.set(ctaIconRef.current, { height: "2.75rem", width: "2.75rem" });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // --- 1. Background & Glass Effect Logic (> 50px) ---
      // We keep the glass effect constant or slightly intensify it
      if (currentScrollY > 50) {
        gsap.to(headerRef.current, {
          backgroundColor: "rgba(255, 255, 255, 0.08)", // Slightly more visible
          backdropFilter: "blur(24px)",
          borderColor: "rgba(255, 255, 255, 0.08)",
          boxShadow: "0 8px 32px 0 rgba(0,0,0,0.36)",
          duration: 0.3,
          ease: "power1.out"
        });
      } else {
        gsap.to(headerRef.current, {
          backgroundColor: "rgba(255, 255, 255, 0.05)", // Revert to initial glass
          backdropFilter: "blur(16px)",
          borderColor: "rgba(255, 255, 255, 0.08)",
          boxShadow: "0 8px 32px 0 rgba(0,0,0,0.36)",
          duration: 0.3,
          ease: "power1.out"
        });
      }

      // --- 2. Compact/Expand Logic (> 150px) ---
      if (currentScrollY > 150) {
        if (!isCompact.current) {
          isCompact.current = true;

          // Shrink Header
          gsap.to(headerRef.current, {
            width: isMobile ? "90%" : "75%",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            duration: duration,
            ease: ease
          });

          // Move Container Up
          gsap.to(containerRef.current, {
            top: "1.25rem",
            duration: duration,
            ease: ease
          });

          // Scale Down Logo
          gsap.to(logoWrapperRef.current, {
            scale: 0.65,
            duration: duration,
            ease: ease
          });

          // Shrink CTA
          gsap.to(ctaTextRef.current, {
            height: "2.5rem",       // h-10
            paddingLeft: "1.25rem", // px-5
            paddingRight: "1.25rem",
            duration: duration,
            ease: ease
          });
          gsap.to(ctaIconRef.current, {
            height: "2.5rem",
            width: "2.5rem",
            duration: duration,
            ease: ease
          });
        }
      } else {
        if (isCompact.current) {
          isCompact.current = false;

          // Expand Header
          gsap.to(headerRef.current, {
            width: isMobile ? "95%" : "90%",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            duration: duration,
            ease: ease
          });

          // Move Container Down
          gsap.to(containerRef.current, {
            top: "2.5rem",
            duration: duration,
            ease: ease
          });

          // Scale Up Logo
          gsap.to(logoWrapperRef.current, {
            scale: 0.75,
            duration: duration,
            ease: ease
          });

          // Restore CTA
          gsap.to(ctaTextRef.current, {
            height: "2.75rem",      // h-11
            paddingLeft: "1.5rem",  // px-6
            paddingRight: "1.5rem",
            duration: duration,
            ease: ease
          });
          gsap.to(ctaIconRef.current, {
            height: "2.75rem",
            width: "2.75rem",
            duration: duration,
            ease: ease
          });
        }
      }

      // --- 3. Smart Hide/Show Logic ---
      const delta = currentScrollY - lastScrollY.current;

      // Only trigger if scroll difference is significant (prevents jitter)
      if (Math.abs(delta) > 10) {
        if (currentScrollY > 80) {
          if (delta > 0) {
            // Scrolling Down -> Hide
            if (!isHidden.current) {
              isHidden.current = true;
              gsap.to(containerRef.current, {
                y: -140, // Move out of view
                opacity: 0,
                duration: duration,
                ease: ease
              });
            }
          } else {
            // Scrolling Up -> Show
            if (isHidden.current) {
              isHidden.current = false;
              gsap.to(containerRef.current, {
                y: 0, // Bring back to view
                opacity: 1,
                duration: duration,
                ease: ease
              });
            }
          }
        }
      }

      // Always show at origin (safeguard)
      if (currentScrollY < 80 && isHidden.current) {
        isHidden.current = false;
        gsap.to(containerRef.current, {
          y: 0,
          opacity: 1,
          duration: duration,
          ease: ease
        });
      }

      // Close mobile menu on scroll
      if (currentScrollY > 10) {
        setIsMobileMenuOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    // Run once on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Not pushing state to history to ensure "Back" exits the site immediately if no modal is open
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed left-0 right-0 z-[60] flex justify-center pointer-events-none"
    >
      <header
        ref={headerRef}
        className="relative rounded-full px-2 py-1 flex items-center justify-between pointer-events-auto overflow-hidden border border-transparent"
        style={{ maxWidth: '1440px', width: '85%' }}
      >
        {/* Left Section: Logo */}
        <div ref={logoWrapperRef} className="flex-shrink-0 origin-left ml-2">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src={logoImage} alt="PresentoLab" className="h-[4.5rem] w-auto cursor-pointer" />
          </a>
        </div>

        {/* Right Actions Group */}
        <div className="flex items-center gap-3">


          {/* Wrapper for Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <button
                onClick={onContactClick}
                aria-label="Contact us"
                className="
        group relative flex items-center
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
        active:scale-[0.98] transition-transform duration-200
      "
              >
                {/* Text pill */}
                <span
                  className="
          bg-cta-gradient text-white
          h-11 px-6
          rounded-full
          flex items-center justify-center
          font-semibold text-sm
          relative z-20
          shadow-md
          transition-all duration-300
          group-hover:brightness-110
        "
                >
                  Let’s talk
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

            {/* Mobile Hamburger */}
            <button
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="
      md:hidden
      w-10 h-10
      flex items-center justify-center
      text-white/80 hover:text-white
      transition-colors
      focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
    "
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>

        </div>

        {/* Center Section: Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8 absolute left-1/2 -translate-x-1/2">
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, 'services')}
            className="relative group flex items-center gap-1.5 cursor-pointer no-underline px-4 py-2.5 rounded-full hover:bg-white/5 transition-all"
          >
            <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors tracking-tight">Services</span>

          </a>
          <a
            href="#work"
            onClick={(e) => scrollToSection(e, 'work')}
            className="text-sm font-bold text-white/80 hover:text-white no-underline px-4 py-2.5 rounded-full hover:bg-white/5 transition-all tracking-tight"
          >
            Our Work
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="text-sm font-bold text-white/80 hover:text-white no-underline px-4 py-2.5 rounded-full hover:bg-white/5 transition-all tracking-tight"
          >
            Our Team
          </a>
        </nav>

        {/* Slide-Down Menu - Outside Header Pill but inside Container */}
      </header>

      <div
        className={`absolute top-[calc(100%+8px)] w-[90%] md:hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top ${isMobileMenuOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}
      >
        <div className="bg-[#111]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-4 shadow-2xl flex flex-col">
          <a href="#services" onClick={(e) => { scrollToSection(e, 'services'); setIsMobileMenuOpen(false); }} className="px-6 pb-4 pt-2 rounded-xl hover:bg-white/5 text-lg font-bold text-white/90 hover:text-white transition-colors">Services</a>
          <a href="#work" onClick={(e) => { scrollToSection(e, 'work'); setIsMobileMenuOpen(false); }} className="px-6 pb-4 pt-2 rounded-xl hover:bg-white/5 text-lg font-bold text-white/90 hover:text-white transition-colors">Our Work</a>
          <a href="#about" onClick={(e) => { scrollToSection(e, 'about'); setIsMobileMenuOpen(false); }} className="px-6 pb-4 pt-2 rounded-xl hover:bg-white/5 text-lg font-bold text-white/90 hover:text-white transition-colors">Our Team</a>
          <div className="h-[1px] bg-white/5 my-2"></div>
          <button
            onClick={() => { onContactClick(); setIsMobileMenuOpen(false); }}
            aria-label="Contact us"
            className="
              group relative flex items-center justify-center pt-2
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
              active:scale-[0.98] transition-transform duration-200
            "
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
                shadow-lg
                transition-all duration-300
                group-hover:brightness-110
              "
            >
              Let’s talk
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
                shadow-lg
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
    </div>
  );
};

export default Header;
