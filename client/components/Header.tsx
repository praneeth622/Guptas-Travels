import { useState, useEffect } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "destinations","testimonials", "fleet", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Premium header with warm gradient */}
      <header className={`w-full h-[90px] flex items-center justify-between px-4 sm:px-8 lg:px-24 relative sticky top-0 z-50 smooth-transition ${
        scrolled
          ? 'bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 shadow-xl border-b border-orange-100'
          : 'bg-gradient-to-r from-amber-50/95 via-orange-50/95 to-yellow-50/95 backdrop-blur-sm'
      }`}>
        {/* Animated gradient border on scroll */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-40"></div>
        )}

        {/* Logo and branding */}
        <div className="flex items-center gap-2 sm:gap-3 relative z-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            <img
              src="/Logo.png"
              alt="GUPTHA Travels"
              width={80}
              height={80}
              loading="eager"
              className="w-full h-full object-contain filter drop-shadow-lg hover:drop-shadow-[0_0_12px_rgba(251,146,60,0.4)] smooth-transition"
            />
          </div>
          <button
            onClick={() => scrollToSection('home')}
          >
            <div>
              <h1 className="text-gray-800 font-['Playfair_Display'] text-sm sm:text-lg lg:text-2xl font-bold leading-tight hover:text-orange-600 smooth-transition cursor-pointer">
                GUPTHA TRAVELS
              </h1>
              <span className="text-orange-600 text-[8px] sm:text-[10px] lg:text-xs font-['Lato'] tracking-widest font-medium">
                PREMIUM TRAVELS
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 relative z-10">
          {[
            { id: 'home', label: 'Home' },
            { id: 'fleet', label: 'Our Fleet' },
            { id: 'about', label: 'About Us' },
            { id: 'destinations', label: 'Destinations' },
            { id: 'testimonials', label: 'Testimonials' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 text-sm xl:text-base font-['Lato'] font-medium relative group cursor-pointer smooth-transition ${
                activeSection === item.id
                  ? 'text-orange-600'
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              {item.label}
              <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent smooth-transition ${
                activeSection === item.id
                  ? 'opacity-100 scale-x-100'
                  : 'opacity-0 scale-x-75 group-hover:opacity-100 group-hover:scale-x-100'
              }`}></div>
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-orange-100 smooth-transition relative z-10"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile menu with warm gradient styling */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[90px] left-0 right-0 bg-gradient-to-b from-orange-50 to-amber-50 shadow-2xl z-40 animate-in fade-in slide-in-from-top-2 duration-300 border-b border-orange-100">
          <nav className="flex flex-col p-4 space-y-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'fleet', label: 'Car Fleet' },
              { id: 'about', label: 'About Us' },
              { id: 'destinations', label: 'Destinations' },
              // { id: 'packages', label: 'Packages' },
              { id: 'testimonials', label: 'Testimonials' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-3 rounded-lg font-['Lato'] font-medium smooth-transition ${
                  activeSection === item.id
                    ? 'bg-orange-100 text-orange-700 border border-orange-300'
                    : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
