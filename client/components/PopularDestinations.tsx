import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useToast } from "@/hooks/use-toast";
import { Car, Users, ArrowRight, X, Mail, User, Calendar, Loader2, MapPin, MessageSquare, Phone, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs-config';

const destinations = [
  {
    title: "Sri Venkateswara Temple",
    subtitle: "Divine Darshan & Prasadam",
    price: "₹2,500",
    image: "/tirmula2.png",
    featured: true,
    description: "Experience the divine presence of Lord Balaji at Tirumala",
    duration: "1 Day",
  },
  {
    title: "Srikalahasti Temple",
    subtitle: "Rahu-Ketu Pooja Special",
    price: "₹2,800",
    image: "/srikalahasti.jpg",
    description: "Famous for Rahu-Ketu dosham removal, 36 km from Tirupati",
    duration: "Half Day",
  },
  {
    title: "Kanipakam Vinayaka",
    subtitle: "Swayambhu Ganesha Temple",
    price: "₹2,200",
    image: "/kanipakam_vinayaka.jpg",
    description: "Self-manifested Vinayaka idol, 70 km from Tirupati",
    duration: "Half Day",
  },
  {
    title: "Chandragiri Fort",
    subtitle: "Historical Heritage Site",
    price: "₹1,800",
    image: "/chandragiri_fort.jpg",
    description: "11th-century fort with palaces, just 15 km from Tirupati",
    duration: "Half Day",
  },
  {
    title: "Talakona Waterfalls",
    subtitle: "Highest Waterfall in AP",
    price: "₹3,200",
    image: "/Talakona_waterfall.jpg",
    featured: true,
    description:
      "270 feet waterfall in Sri Venkateswara National Park, 50 km away",
    duration: "1 Day",
  },
  {
    title: "Srinivasam Mangapuram",
    subtitle: "Ancient Vishnu Temple",
    price: "₹2,000",
    image: "/srinivasa_mangapuram.jpg",
    description:
      "Lord Venkateswara temple where He got ready for marriage, 12 km away",
    duration: "Half Day",
  },
  {
    title: "Sri Venkateswara Zoo",
    subtitle: "Wildlife & Nature Park",
    price: "₹1,500",
    image: "/zoo.jpg",
    description: "One of the best zoos in South India, within Tirupati city",
    duration: "Half Day",
  },
];

export default function PopularDestinations() {
  const { toast } = useToast();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    date: '',
    guests: '',
    message: ''
  });

  // Destinations list for dropdown
  const destinationsList = [
    "Tirupati Temples",
    "Sri Kalahasti",
    "Kanipakam",
    "Talakona Falls",
    "Chandragiri Fort",
    "Nagalapuram Falls",
    "Sri Venkateswara Zoo",
    "Papavinasanam",
    "Akasa Ganga",
    "Others"
  ];

  // Auto-scroll plugin
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    })
  );

  const handleBooking = (destinationTitle: string) => {
    setSelectedDestination(destinationTitle);
    setFormData(prev => ({
      ...prev,
      destination: destinationTitle
    }));
    setShowBookingForm(true);
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.destination) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Email, Phone, Destination)",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        destination: formData.destination,
        travel_date: formData.date || 'Not specified',
        guests: formData.guests || 'Not specified',
        message: formData.message || 'No additional message',
        to_email: 'praneeth622@gmail.com'
      };

      // Send email via EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      if (response.status === 200) {
        toast({
          title: "✅ Booking Request Sent!",
          description: (
            <div className="mt-2 space-y-2">
              <p className="text-sm font-semibold">
                Thank you for choosing Guptha Travels!
              </p>
              <p className="text-sm">
                We'll contact you within 24 hours to confirm your {formData.destination} trip.
              </p>
              <p className="text-xs text-gray-500">
                Check your email for confirmation.
              </p>
            </div>
          ),
          duration: 6000,
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          destination: '',
          date: '',
          guests: '',
          message: ''
        });
        setShowBookingForm(false);
      }
    } catch (error) {
      console.error('Email send error:', error);
      toast({
        title: "❌ Sending Failed",
        description: "Please try again or call us directly at +91 9959968116",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-24 py-12 sm:py-20 bg-[hsl(var(--background))] relative overflow-hidden">
      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12 sm:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-white/50"></path>
        </svg>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-[hsl(var(--sacred-saffron))]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-72 h-72 bg-[hsl(var(--kumkum-red))]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Decorative Stroke Patterns */}
      <div className="absolute top-20 left-5 w-20 h-20 opacity-10">
        <svg viewBox="0 0 100 100" className="text-[hsl(var(--sacred-saffron))]">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
        </svg>
      </div>
      <div className="absolute bottom-32 right-10 w-24 h-24 opacity-10">
        <svg viewBox="0 0 100 100" className="text-[hsl(var(--kumkum-red))]">
          <path d="M10,50 Q30,10 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M10,60 Q30,20 50,60 T90,60" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 sm:mb-12 gap-4 sm:gap-6 px-2 sm:px-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block px-4 py-2 rounded-full bg-[hsl(var(--sacred-saffron))/10] mb-4 border border-[hsl(var(--sacred-saffron))/20]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="text-[hsl(var(--sacred-saffron))] font-['Lato'] font-semibold text-sm tracking-wide">
              SACRED DESTINATIONS
            </span>
          </motion.div>
          <h2 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Tirupati Region
            <br />
          </h2>
          {/* Decorative line with dots */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--sacred-saffron))]"></div>
            <div className="h-0.5 w-16 bg-gradient-to-r from-[hsl(var(--sacred-saffron))] to-[hsl(var(--kumkum-red))]"></div>
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--kumkum-red))]"></div>
          </div>
          <p className="text-[hsl(var(--muted-foreground))] font-['Lato'] text-sm sm:text-base max-w-xl">
            Explore divine temples, historic forts, and scenic waterfalls in and around Tirupati
          </p>
        </motion.div>
      </div>

      <div className="relative z-10">
        <Carousel
          plugins={[autoplayPlugin.current]}
          opts={{
            align: "start",
            loop: true,
            dragFree: false,
            skipSnaps: false,
            containScroll: "trimSnaps",
            duration: 30,
            inViewThreshold: 0.7,
          }}
          className="w-full px-2 sm:px-0"
          onMouseEnter={() => autoplayPlugin.current.stop()}
          onMouseLeave={() => autoplayPlugin.current.play()}
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {destinations.map((destination, index) => (
              <CarouselItem key={index} className="pl-2 sm:pl-4 basis-[90%] sm:basis-[80%] md:basis-1/2 lg:basis-1/3">
                <motion.div 
                  className="group h-full bg-gradient-to-br from-white to-[#f9f9f9] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] border border-[#e0e0e0] hover:border-[#34a870] relative hover:scale-[1.02] will-change-transform"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  {/* Featured badge - premium style */}
                  {destination.featured && (
                    <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#34a870] to-[#5dbd7f] text-white text-[11px] font-bold uppercase tracking-widest shadow-lg transition-transform duration-300 ease-out group-hover:scale-110">
                      ⭐ Popular
                    </div>
                  )}

                  {/* Decorative corner strokes */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Image - premium styling with overlay */}
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.title}
                      width={724}
                      height={480}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] ease-out"></div>

                    {/* Duration badge - premium positioning */}
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-white/50 transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-xl">
                      <span className="text-[10px] font-bold text-[#34a870] font-['Lato'] uppercase tracking-wide">
                        ⏱ {destination.duration}
                      </span>
                    </div>
                  </div>

                  {/* Content - premium layout */}
                  <div className="p-5 sm:p-6 flex flex-col">
                    {/* Title section */}
                    <div className="mb-3">
                      <h3 className="text-[#1a4d32] font-['Playfair_Display'] text-lg sm:text-xl font-bold mb-1 leading-tight group-hover:text-[#34a870] transition-colors duration-300 ease-out">
                        {destination.title}
                      </h3>
                      <p className="text-[#34a870] font-['Lato'] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ease-out group-hover:tracking-widest">
                        {destination.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-[#666666] font-['Lato'] text-sm leading-relaxed mb-4 line-clamp-2 transition-colors duration-300 ease-out group-hover:text-[#555555]">
                      {destination.description}
                    </p>

                    {/* Highlights/Benefits */}
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center gap-2 text-xs transition-transform duration-300 ease-out group-hover:translate-x-1">
                        <span className="text-[#34a870] transition-transform duration-300 ease-out group-hover:scale-125">✓</span>
                        <span className="text-[#555555] font-['Lato']">Guided tours included</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs transition-transform duration-300 ease-out group-hover:translate-x-1" style={{ transitionDelay: '50ms' }}>
                        <span className="text-[#34a870] transition-transform duration-300 ease-out group-hover:scale-125">✓</span>
                        <span className="text-[#555555] font-['Lato']">Comfortable transportation</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-[#34a870]/20 via-[#34a870] to-[#34a870]/20 rounded-full mb-4 transition-all duration-500 ease-out group-hover:via-[#5dbd7f]"></div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-[#34a870] font-['Playfair_Display'] text-2xl sm:text-3xl font-bold transition-all duration-300 ease-out group-hover:scale-105 inline-block">
                          {destination.price}
                        </span>
                        <span className="text-[#999999] font-['Lato'] text-xs ml-1">/person</span>
                      </div>
                      <button
                        onClick={() => handleBooking(destination.title)}
                        className="px-5 py-2.5 rounded-xl font-['Lato'] font-bold text-sm transition-all duration-[350ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-gradient-to-r from-[#34a870] to-[#5dbd7f] text-white hover:shadow-lg hover:shadow-[#34a870]/40 hover:-translate-y-1 hover:scale-105 uppercase tracking-wide active:scale-95 active:translate-y-0"
                      >
                        Explore
                      </button>
                    </div>

                    {/* Premium features row - compact */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#e8e8e8]">
                      <div className="flex items-center gap-1.5 text-[#34a870] transition-all duration-300 ease-out group-hover:scale-105">
                        <Car className="w-4 h-4 transition-transform duration-300 ease-out group-hover:rotate-3" />
                        <span className="text-xs font-['Lato'] font-medium">Transfer</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#34a870] transition-all duration-300 ease-out group-hover:scale-105" style={{ transitionDelay: '50ms' }}>
                        <Users className="w-4 h-4 transition-transform duration-300 ease-out group-hover:rotate-3" />
                        <span className="text-xs font-['Lato'] font-medium">Guide</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#34a870] transition-all duration-300 ease-out group-hover:scale-105" style={{ transitionDelay: '100ms' }}>
                        <Users className="w-4 h-4 transition-transform duration-300 ease-out group-hover:rotate-3" />
                        <span className="text-xs font-['Lato'] font-medium">Darshan</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Enhanced Premium carousel controls with gradient - Left and Right Navigation Buttons */}
          <CarouselPrevious className="-left-4 sm:-left-6 lg:-left-12 w-12 h-12 sm:w-14 sm:h-14 border-2 border-[#34a870] bg-white/95 backdrop-blur-sm text-[#34a870] hover:bg-gradient-to-br hover:from-[#34a870] hover:to-[#2d9660] hover:text-white transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-lg hover:shadow-[#34a870]/50 hover:shadow-xl hover:scale-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 z-20" />
          <CarouselNext className="-right-4 sm:-right-6 lg:-right-12 w-12 h-12 sm:w-14 sm:h-14 border-2 border-[#34a870] bg-white/95 backdrop-blur-sm text-[#34a870] hover:bg-gradient-to-br hover:from-[#34a870] hover:to-[#2d9660] hover:text-white transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-lg hover:shadow-[#34a870]/50 hover:shadow-xl hover:scale-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 z-20" />
        </Carousel>
        
        {/* Enhanced Mobile swipe indicator with auto-play status */}
        <motion.div 
          className="flex sm:hidden justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-[#34a870] blur-lg"
              animate={{ 
                opacity: [0.15, 0.3, 0.15],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative text-[#34a870] text-xs font-['Lato'] flex items-center gap-3 px-5 py-3 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#34a870]/30 font-semibold shadow-lg">
              <motion.div
                animate={{ x: [-3, 0, -3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4 -scale-x-100" />
              </motion.div>
              <span className="bg-gradient-to-r from-[#34a870] to-[#2d9660] bg-clip-text text-transparent uppercase tracking-wider">
                Auto-playing • Swipe
              </span>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-12 sm:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="fill-white/30"></path>
        </svg>
      </div>

      {/* Booking Form Modal */}
      <AnimatePresence>
        {showBookingForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowBookingForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowBookingForm(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Form Header */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 rounded-t-2xl">
                <h2 className="text-3xl font-['Playfair_Display'] font-bold text-white mb-2">
                  Book Your Journey
                </h2>
                <p className="text-white/90 font-['Lato']">
                  Fill in your details and we'll contact you within 24 hours
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleBookingSubmit} className="p-6 space-y-5">
                {/* Name */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 text-emerald-600" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 text-emerald-600" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="+91 9876543210"
                  />
                </div>

                {/* Destination */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    Destination *
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
                  >
                    <option value="">Select your destination</option>
                    {destinationsList.map((dest) => (
                      <option key={dest} value={dest}>
                        {dest}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date and Guests Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      Travel Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    />
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Users className="w-4 h-4 text-emerald-600" />
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      min="1"
                      max="50"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      placeholder="e.g., 4"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                    placeholder="Any special requests or questions?"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Confirm Booking Request
                      </>
                    )}
                  </button>
                </div>

                {/* Footer Note */}
                <p className="text-center text-sm text-gray-500 pt-2">
                  We'll contact you within 24 hours to confirm your booking
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
