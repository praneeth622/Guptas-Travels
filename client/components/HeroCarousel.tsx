import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, Sparkles, ChevronLeft, ChevronRight, Circle, X, Mail, User, Calendar, Loader2, MapPin, Users, MessageSquare } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs-config';

// Hero images data
const heroImages = [
  {
    id: 1,
    image: "/swami_image.png",
    title: "Lord Venkateswara Temple",
    subtitle: "Experience Divine Blessings at Tirupati",
    description: "Premium darshan packages with comfortable travel"
  },
  {
    id: 6,
    image: "/Tiger.png",
    title: "Zoo Park",
    subtitle: "Wildlife Sanctuary & Adventure",
    description: "Explore the rich biodiversity and wildlife"
  },
  {
    id: 2,
    image: "/gopuram.png",
    title: "Sri Kalahasti Temple",
    subtitle: "Rahu-Ketu Pooja & Sacred Rituals",
    description: "Expert guided tours to ancient Shiva temple"
  },
  {
    id: 3,
    image: "/kanipakam_vinayaka.jpg",
    title: "Kanipakam Vinayaka",
    subtitle: "Miraculous Self-Growing Deity",
    description: "Spiritual journey to Ganesha's sacred abode"
  },
  {
    id: 4,
    image: "/Talakona_waterfall.jpg",
    title: "Talakona Waterfalls",
    subtitle: "Nature's Beauty & Adventure",
    description: "Trekking and temple tours combined"
  },
  {
    id: 5,
    image: "/chandragiri_fort.jpg",
    title: "Chandragiri Fort",
    subtitle: "Historical Heritage & Architecture",
    description: "Explore ancient monuments and rich history"
  },
];
     
export default function HeroCarousel() {
  const { toast } = useToast();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    date: '',
    guests: '',
    message: ''
  });

  // Destinations list
  const destinations = [
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

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % heroImages.length);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset touch end
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10s
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePhoneClick = () => {
    toast({
      title: "📞 Call Us Now",
      description: (
        <div className="mt-2 space-y-2">
          <p className="font-semibold text-emerald-600">
            +91 9704466557
          </p>
          <p className="text-sm">
            We're available 24/7 to assist you
          </p>
        </div>
      ),
      duration: 5000,
    });
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
        description: "Please try again or call us directly at +91 9704466557",
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

  const currentSlide = heroImages[currentIndex];

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-black"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-[center_right_25%] sm:bg-center"
            style={{ backgroundImage: `url(${currentSlide.image})` }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-8 lg:px-24">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-emerald-400/30 shadow-xl">
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                  <span className="text-white font-['Lato'] font-semibold text-sm tracking-wider uppercase">
                    Premium Travel Partner
                  </span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-3">
                <motion.h1
                  className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl leading-tight"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {currentSlide.title}
                </motion.h1>
                
                <motion.p
                  className="text-2xl sm:text-3xl md:text-4xl font-light text-emerald-300 font-['Playfair_Display'] drop-shadow-xl"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {currentSlide.subtitle}
                </motion.p>

                <motion.p
                  className="text-lg sm:text-xl text-white/90 font-['Lato'] max-w-2xl drop-shadow-lg sm:leading-relaxed md:visibility-hidden sm:visibility-hidden"
                  style={{ visibility: 'hidden' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {currentSlide.description}
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.button
                  onClick={() => setShowBookingForm(true)}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-['Lato'] font-bold text-lg shadow-2xl relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative flex items-center justify-center gap-3">
                    Book Your Journey
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                </motion.button>
                
                <motion.button
                  onClick={handlePhoneClick}
                  className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border-2 border-emerald-400/40 text-white font-['Lato'] font-bold text-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="tel:+919704466557" className="flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>+91 9704466557</span>
                  </a>
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on tablet and up */}
      <button
        onClick={goToPrevious}
        className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300 shadow-xl items-center justify-center group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={goToNext}
        className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300 shadow-xl items-center justify-center group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${currentIndex === index 
                ? 'bg-emerald-500 scale-125' 
                : 'bg-white/50 hover:bg-white/80 group-hover:scale-110'
              }
            `} />
            {currentIndex === index && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-emerald-400"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-4 sm:right-8 z-20 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-['Lato'] text-sm font-semibold">
        {currentIndex + 1} / {heroImages.length}
      </div>

      {/* Auto-play Indicator */}
      {/* {isAutoPlaying && (
        <motion.div
          className="absolute bottom-8 right-4 sm:right-8 z-20 px-4 py-2 rounded-full bg-emerald-500/90 backdrop-blur-md text-white font-['Lato'] text-xs font-semibold flex items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-white"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          Auto-playing
        </motion.div>
      )} */}

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
                    {destinations.map((dest) => (
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
