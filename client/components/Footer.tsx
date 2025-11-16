import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const { toast } = useToast();

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
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handlePhoneClick = () => {
    toast({
      title: "📞 Contact Us",
      description: (
        <div className="mt-2 space-y-2">
          <p className="font-semibold text-[#34a870]">
            +91 9959968116
          </p>
          <p className="text-sm text-[#1a4d32]">
            Call us 24/7 for bookings & assistance
          </p>
          <p className="text-xs text-[#666666]">
            Our team is ready to help you plan your journey.
          </p>
        </div>
      ),
      duration: 5000,
    });
  };

  return (
    <footer className="w-full px-4 sm:px-8 lg:px-24 py-12 sm:py-16 bg-gradient-to-br from-[#f0f9f6] to-white border-t-2 border-[#34a870]/20">
      <div className="flex flex-col lg:flex-row justify-between mb-8 sm:mb-12 gap-8 sm:gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
              <img
                src="/Logo.png"
                alt="guptha TRAVELS"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-[#1a4d32] font-['Playfair_Display'] text-lg sm:text-xl font-bold block leading-tight">
                GUPTHA TRAVELS
              </span>
              <span className="text-[#34a870] text-[10px] sm:text-xs font-['Lato'] tracking-wider font-medium">
                YOUR JOURNEY PARTNER
              </span>
            </div>
          </div>
          <p className="text-[#4d4d4d] font-['Lato'] text-sm sm:text-base leading-relaxed">
            Your trusted travel partner for all journeys. We provide comfortable
            transportation and reliable service for memorable travel experiences
            across Andhra Pradesh and beyond.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-8 sm:gap-12 lg:gap-16">
          <div>
            <h3 className="text-[#1a4d32] font-['Playfair_Display'] font-bold text-base sm:text-lg mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-[#4d4d4d] font-['Lato'] text-sm">
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-[#34a870] transition-colors smooth-transition cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("fleet")}
                  className="hover:text-[#34a870] transition-colors smooth-transition cursor-pointer"
                >
                  Our Fleet
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-[#34a870] transition-colors smooth-transition cursor-pointer"
                >
                  About Us
                </button>
              </li>
              {/* <li>
                <button
                  onClick={() => scrollToSection("packages")}
                  className="hover:text-[#34a870] transition-colors smooth-transition cursor-pointer"
                >
                  Packages
                </button>
              </li> */}
              <li>
                <button
                  onClick={() => scrollToSection("destinations")}
                  className="hover:text-[#34a870] transition-colors smooth-transition cursor-pointer"
                >
                  Destinations
                </button>
              </li>
              
            </ul>
          </div>

          <div>
            <h3 className="text-[#1a4d32] font-['Playfair_Display'] font-bold text-base sm:text-lg mb-4 sm:mb-6">
              Services
            </h3>
            <ul className="space-y-4 text-[#4d4d4d] font-['Lato'] text-sm">
              <li className="hover:text-[#34a870] transition-colors smooth-transition cursor-pointer">
                Temple Tours
              </li>
              <li className="hover:text-[#34a870] transition-colors smooth-transition cursor-pointer">
                Outstation Trips
              </li>


            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-[#1a4d32] font-['Playfair_Display'] font-bold text-base sm:text-lg mb-4 sm:mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-[#4d4d4d] font-['Lato'] text-sm">
              <li className="flex items-center gap-2 hover:text-[#34a870] transition-colors smooth-transition">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#34a870]" />
                <a href="tel:+919959968116" className="hover:underline">
                  +91 9959968116
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-[#34a870] transition-colors smooth-transition">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#34a870]" />
                <a href="mailto:info@gupthaagency.com" className="hover:underline">
                  info@gupthaagency.com
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-[#34a870] transition-colors smooth-transition cursor-pointer">
                <MessageCircle className="w-4 h-4 flex-shrink-0 text-[#34a870]" />
                <a href="https://wa.me/919959968116" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-[#34a870] transition-colors smooth-transition cursor-pointer">
                <MapPin className="w-4 h-4 flex-shrink-0 text-[#34a870]" />
                <a href="https://maps.app.goo.gl/sEgPj8a31e4AhNZq6" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Tirupati, Andhra Pradesh
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0 text-[#34a870]" /> 24/7 Available
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-[#34a870]/20 pt-6 sm:pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
        <p className="text-[#666666] font-['Lato'] text-xs sm:text-sm text-center lg:text-left">
          © 2025 GUPTHA AGENCY. All rights reserved.
        </p>
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full border-2 border-[#34a870] flex items-center justify-center hover:bg-[#34a870] hover:text-white transition-all smooth-transition group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.89464 16V8.70175H11.1636L11.4284 5.85965H8.89455V4.04105C8.89455 3.21852 9.11975 2.66004 10.2594 2.66004L11.5204 2.65945V0.111403C11.2844 0.0780029 10.4706 0 9.51613 0C7.52226 0 6.15476 1.15868 6.15476 3.28538V5.85965H4V8.70175H6.15476V16H8.89464Z"
                className="fill-[#34a870] group-hover:fill-white"
              />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border-2 border-[#34a870] flex items-center justify-center hover:bg-[#34a870] hover:text-white transition-all smooth-transition group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.07 2.315C4.45122 2.16667 4.88771 2.06538 5.52647 2.03631C6.16661 2.00683 6.37118 2 8.00068 2C9.63018 2 9.83475 2.00724 10.4745 2.03631C11.1128 2.06491 11.549 2.16667 11.9309 2.315C12.325 2.46824 12.6599 2.67317 12.9933 3.00711C13.3268 3.34104 13.5319 3.67539 13.6855 4.06996C13.8338 4.45113 13.9351 4.88754 13.9641 5.52631C13.9932 6.16613 14 6.37063 14 8C14 9.62937 13.9932 9.83345 13.9641 10.4737C13.9355 11.1124 13.8338 11.5487 13.6855 11.9301C13.5319 12.3245 13.3273 12.6595 12.9933 12.9929C12.6594 13.3263 12.325 13.5314 11.9305 13.685C11.549 13.8333 11.1128 13.9346 10.474 13.9637C9.83432 13.9932 9.62975 14 8.00025 14C6.37075 14 6.16661 13.9927 5.52647 13.9637C4.88771 13.9346 4.45192 13.8333 4.07 13.685C3.67534 13.5314 3.34104 13.3262 3.00711 12.9929C2.67317 12.6597 2.46824 12.3245 2.315 11.9301C2.16667 11.5487 2.06538 11.1125 2.03631 10.4737C2.00683 9.83388 2 9.62937 2 8C2 6.37063 2.00683 6.16613 2.03631 5.52631C2.06538 4.88761 2.16667 4.45142 2.315 4.06996C2.46824 3.67517 2.67317 3.34047 3.00711 3.00711C3.34111 2.67374 3.67534 2.46824 4.07 2.315ZM7.99968 5.33333C6.89526 5.33333 6 6.22903 6 7.33333C6 8.43763 6.89526 9.33333 7.99968 9.33333C9.10431 9.33333 10 8.43742 10 7.33333C10 6.22924 9.10431 5.33333 7.99968 5.33333ZM4.66667 7.33333C4.66667 5.49279 6.15856 4 7.99968 4C9.84052 4 11.3333 5.49258 11.3333 7.33333C11.3333 9.17408 9.84052 10.6667 7.99968 10.6667C6.15856 10.6667 4.66667 9.17387 4.66667 7.33333ZM12 4C12.3682 4 12.6667 3.70152 12.6667 3.33333C12.6667 2.96515 12.3682 2.66667 12 2.66667C11.6318 2.66667 11.3333 2.96515 11.3333 3.33333C11.3333 3.70152 11.6318 4 12 4Z"
                className="fill-[#34a870] group-hover:fill-white"
              />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border-2 border-[#34a870] flex items-center justify-center hover:bg-[#34a870] hover:text-white transition-all smooth-transition group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 3.03937C15.405 3.3 14.771 3.473 14.11 3.557C14.79 3.151 15.309 2.513 15.553 1.744C14.919 2.122 14.219 2.389 13.473 2.538C12.871 1.897 12.013 1.5 11.077 1.5C9.261 1.5 7.799 2.974 7.799 4.781C7.799 5.041 7.821 5.291 7.875 5.529C5.148 5.396 2.735 4.089 1.114 2.098C0.831 2.589 0.665 3.151 0.665 3.756C0.665 4.892 1.25 5.899 2.122 6.482C1.595 6.472 1.078 6.319 0.64 6.078C0.64 6.088 0.64 6.101 0.64 6.114C0.64 7.708 1.777 9.032 3.268 9.337C3.001 9.41 2.71 9.445 2.408 9.445C2.198 9.445 1.986 9.433 1.787 9.389C2.212 10.688 3.418 11.643 4.852 11.674C3.736 12.547 2.319 13.073 0.785 13.073C0.516 13.073 0.258 13.061 0 13.028C1.453 13.965 3.175 14.5 5.032 14.5C11.068 14.5 14.368 9.5 14.368 5.166C14.368 5.021 14.363 4.881 14.356 4.742C15.007 4.28 15.554 3.703 16 3.03937Z"
                className="fill-[#34a870] group-hover:fill-white"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Watermark */}
      {/* <div className="mt-4 text-center">
        <p className="text-[#999999] font-['Lato'] text-xs">
          Designed and Developed by
          <a href="https://srnritsolutions.com/" target="_blank" rel="noopener noreferrer" className="text-[#34a870] hover:underline ml-1">
            SRNR IT SOLUTIONS
          </a>
          .
        </p>
      </div> */}
    </footer>
  );
}
