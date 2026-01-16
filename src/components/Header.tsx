import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Logo from './Logo';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const ctaTextRef = useRef<HTMLDivElement>(null);
  const ctaIconRef = useRef<HTMLDivElement>(null);

  const lastScrollY = useRef(0);
  const isCompact = useRef(false);
  const isHidden = useRef(false);

  useEffect(() => {
    // Initial setup
    const duration = 0.5;
    const ease = "power2.out";

    // Initialize GSAP values
    // Start with glass effect active
    gsap.set(headerRef.current, {
      width: "90%",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
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
            width: "75%",
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
            width: "90%",
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
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed left-0 right-0 z-[60] flex justify-center pointer-events-none"
    >
      <header
        ref={headerRef}
        className="rounded-full px-2 py-2 flex items-center justify-between pointer-events-auto overflow-hidden border border-transparent"
        style={{ maxWidth: '1440px', width: '90%' }}
      >
        {/* Left Section: Logo */}
        <div ref={logoWrapperRef} className="flex-shrink-0 origin-left">
          <Logo scale={1} />
        </div>

        {/* Center Section: Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
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
            className="text-sm font-bold text-white/80 hover:text-white transition-colors no-underline px-4 py-2.5 rounded-full hover:bg-white/5 transition-all tracking-tight"
          >
            Our Work
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="text-sm font-bold text-white/80 hover:text-white transition-colors no-underline px-4 py-2.5 rounded-full hover:bg-white/5 transition-all tracking-tight"
          >
            Our Team
          </a>
        </nav>

        {/* Right Section: Icons & CTA */}
        <div className="flex items-center gap-4 lg:gap-6">
          <button className="text-white/60 hover:text-white transition-colors hidden sm:flex w-11 h-11 items-center justify-center rounded-full hover:bg-white/5" aria-label="Toggle Theme">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </button>

          <button
            onClick={onContactClick}
            className="group relative flex items-center active:scale-95 transition-transform duration-200"
          >
            <div
              ref={ctaTextRef}
              className="bg-cta-gradient group-hover:brightness-110 text-white rounded-full flex items-center font-bold text-sm relative z-20 transition-all duration-500 shadow-lg"
            >
              Let's talk
            </div>

            <div
              ref={ctaIconRef}
              className="bg-cta-gradient group-hover:brightness-110 rounded-full flex items-center justify-center relative z-10 -ml-4 group-hover:ml-2 transition-all duration-500 ease-spring"
            >
              <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
