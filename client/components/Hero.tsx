import { useToast } from "@/hooks/use-toast";
import { Phone, ArrowRight, Sparkles, Star, MapPin, Users, Award, Clock, Heart, X, Mail, User, Calendar, Loader2 } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs-config';

export default function Hero() {
  const { toast } = useToast();
  const containerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  // Smooth scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms with spring physics for smoothness
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 300]), springConfig);
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 200]), springConfig);
  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 1.1]), springConfig);

  // Mouse parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x, y });
  };

  const handlePhoneClick = () => {
    toast({
      title: "📞 Call Us Now",
      description: (
        <div className="mt-2 space-y-2">
          <p className="font-semibold text-emerald-600">
            +91 9959968116
          </p>
          <p className="text-sm">
            We're available 24/7 to assist you
          </p>
          <p className="text-xs text-gray-500">
            Talk to our travel experts and book your Tirupati Trip today!
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
        travel_date: formData.date || 'Not specified',
        guests: formData.guests || 'Not specified',
        destination: formData.destination,
        message: formData.message || 'No special requirements',
        to_email: 'admin@gupthatravels.com',
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      if (response.status === 200) {
        toast({
          title: "✅ Booking Request Sent!",
          description: "Thank you! We will contact you soon to confirm your journey.",
          className: "bg-emerald-50 border-emerald-500",
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

        // Close modal after short delay
        setTimeout(() => {
          setShowBookingForm(false);
        }, 1500);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "❌ Sending Failed",
        description: "Unable to send your request. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"
      onMouseMove={handleMouseMove}
    >
      {/* Parallax Background Layers */}
      
      {/* Layer 1: Deep background with temple image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: y1, scale }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(/tirmula5.avif)',
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-emerald-900/40 to-black/80" />
      </motion.div>

      {/* Layer 2: Animated gradient orbs */}
      <motion.div 
        className="absolute inset-0 z-[1]"
        style={{ y: y2 }}
      >
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-[32rem] h-[32rem] bg-teal-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-emerald-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Layer 3: Floating particles */}
      <motion.div 
        className="absolute inset-0 z-[2]"
        style={{ y: y3 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Main Content Layer */}
      <motion.div 
        className="relative z-10 w-full min-h-screen flex items-center px-4 sm:px-8 lg:px-24 py-20"
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-emerald-400/30 shadow-xl hover:bg-white/15 transition-all group">
                  <motion.div
                    className="relative flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 shadow-lg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.span 
                      className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <Sparkles className="relative w-3.5 h-3.5 text-white" />
                  </motion.div>
                  <span className="text-white font-['Lato'] font-semibold text-sm tracking-wider uppercase">
                    Premium Travel Partner Since 2010
                  </span>
                </div>
              </motion.div>

              {/* Main Heading with gradient animation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <motion.span 
                    className="block text-white mb-3 drop-shadow-2xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Your Journey to
                  </motion.span>
                  <motion.span 
                    className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent drop-shadow-2xl mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  >
                    <motion.span
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        backgroundImage: 'linear-gradient(90deg, #34d399, #2dd4bf, #34d399)',
                        backgroundSize: '200% 200%',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Divine Destinations
                    </motion.span>
                  </motion.span>
                  <motion.span 
                    className="block text-white/95 text-2xl sm:text-3xl md:text-4xl font-light drop-shadow-2xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Begins with Guptha Travels
                  </motion.span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-emerald-100 text-lg sm:text-xl leading-relaxed font-['Lato'] max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Experience premium travel services with our world-class fleet, professional chauffeurs, and unwavering commitment to your spiritual journey.
              </motion.p>

              {/* Stats Grid */}
              <motion.div 
                className="grid grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {[
                  { number: "15+", label: "Years Experience", icon: Award },
                  { number: "10K+", label: "Happy Travelers", icon: Users },
                  { number: "50+", label: "Premium Vehicles", icon: MapPin },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-emerald-400/20 p-4 shadow-xl">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      <div className="relative">
                        <stat.icon className="w-8 h-8 text-emerald-400 mb-2" />
                        <div className="text-3xl font-bold text-white font-['Playfair_Display'] mb-1">
                          {stat.number}
                        </div>
                        <div className="text-emerald-200 text-sm font-['Lato'] uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <motion.button
                  onClick={() => setShowBookingForm(true)}
                  className="relative group px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-['Lato'] font-bold text-lg shadow-2xl overflow-hidden"
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
                  className="relative group px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border-2 border-emerald-400/40 text-white font-['Lato'] font-bold text-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="tel:+919959968116" className="flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>+91 9959968116</span>
                  </a>
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              {/* <motion.div
                className="flex items-center gap-6 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1 + i * 0.1, type: "spring" }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-white font-['Lato'] text-sm font-semibold">
                    4.9/5.0 (2.5k+ reviews)
                  </span>
                </div>
              </motion.div> */}
            </div>

            {/* Right Column - Interactive Card */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                className="relative"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                {/* Decorative background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-3xl blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Main card */}
                <div className="relative bg-white/10 backdrop-blur-xl border border-emerald-400/30 rounded-3xl p-8 shadow-2xl">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                    <motion.img
                      src="/tirmula5.avif"
                      alt="Tirupati Temple"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  <div className="left-4">
                    <div className="relative">
                      {/* <div className="absolute top-4 right-4 border-white/20 border-t rounded-lg px-3 py-1 bg-black/30 backdrop-blur-md shadow-lg">
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="text-white text-sm">4.9</span>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Heart className="w-7 h-7 text-white absolute top-4 right-4 z-10" />
                      </div>
                      <div className="absolute top-4 right-4 border-white/20 border-t rounded-lg px-3 py-1 bg-black/30 backdrop-blur-md shadow-lg">
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="text-white text-sm">4.9</span>
                          <span className="text-white text-sm">(2.5k+)</span>
                          <span className="text-white text-sm">Reviews</span>
                          <span className="text-white text-sm">|</span>
                          <span className="text-white text-sm">Verified</span>
                          <span className="text-white text-sm">Tours</span>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white font-['Playfair_Display']">
                      Sacred Temple Tours
                    </h3>
                    <p className="text-emerald-100 font-['Lato']">
                      Experience divine darshan with comfortable transportation and expert guidance.
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-emerald-400" />
                        <span className="text-white text-sm">Full Day Tours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-emerald-400" />
                        <span className="text-white text-sm">10+ Destinations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-24 overflow-hidden"
        style={{ opacity }}
      >
        <div className="relative w-full h-32 sm:h-40 lg:h-48 mb-12 sm:mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <div >
          <style>{`
            @keyframes car-move {
              0% { transform: translate(-100%, -50%); }
              100% { transform: translate(calc(100vw + 100%), -50%); }
            }
          `}</style>
          </div>

        {/* Top White Edge Line */}
        {/* <div className="absolute top-3 left-0 w-full h-1 bg-white"></div> */}

        {/* Bottom White Edge Line */}
        {/* <div className="absolute bottom-3 left-0 w-full h-1 bg-white"></div> */}

        {/* Center Lane - Static White Dashed Lines */}
        {/* <div
          className="absolute top-1/2 left-0 w-full flex justify-around items-center"
          style={{ transform: "translateY(-50%)" }}
        >
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-8 sm:w-12 h-1 bg-white"></div>
          ))}
        </div> */}

        {/* Animated Car with Marquee */}
        <div
          className="absolute top-1/4 -translate-y-1/2"
          style={{
            animation: "car-move 8s linear infinite",
          }}
        >
          {/* Car Image */}
          <img
            src="/car.png"
            alt="Moving Car"
            className="h-20 sm:h-24 lg:h-28 w-auto drop-shadow-2xl"
          />
        </div>
        <div
          className="absolute top-1/4 translate-y-1/2"
          style={{
            animation: "car-move 6s linear infinite",
          }}
        >
          {/* Van Image */}
          {/* <img
            src="/van-flip-removebg.png"
            alt="Moving Van"
            className="h-22 w-auto sm:h-24 lg:h-28 w-auto drop-shadow-2xl"
          /> */}
        </div>

        {/* Speed Lines Effect */}
        {/* <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 h-0.5 bg-white/30"
              style={{
                left: `${i * 20}%`,
                width: "15%",
                transform: "translateY(-50%)",
                animation: `speed-line ${1 + i * 0.2}s linear infinite`,
              }}
            ></div>
          ))}
        </div> */}
        {/* <style>{`
          @keyframes speed-line {
            0% { transform: translateX(100vw) translateY(-50%); opacity: 0; }
            10% { opacity: 0.3; }
            90% { opacity: 0.3; }
            100% { transform: translateX(-100%) translateY(-50%); opacity: 0; }
          }
        `}</style> */}

        {/* Text Overlay */}
        {/* <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="text-center">
            <h3 className="text-white font-['Playfair_Display'] text-2xl sm:text-3xl lg:text-4xl font-bold drop-shadow-lg">
              Your Journey Awaits!
            </h3>
            <p className="text-white/90 font-['Lato'] text-sm sm:text-base mt-1 pb-5 drop-shadow-lg">
              Premium vehicles for every destination
            </p>
          </div>
        </div> */}
      </div>
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-emerald-300 text-sm font-['Lato'] uppercase tracking-wider">
            Scroll to Explore
          </span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-emerald-400 flex items-start justify-center p-2"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Booking Form Modal */}
      <AnimatePresence>
        {showBookingForm && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBookingForm(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-full sm:w-[550px] bg-white shadow-2xl z-[60] overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white z-10">
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-white/20">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold">
                    Book Your Journey
                  </h2>
                </div>
                <p className="font-['Lato'] text-emerald-50 ml-14">
                  Fill in your details and we'll contact you shortly
                </p>
              </div>

              {/* Form Content */}
              <form onSubmit={handleBookingSubmit} className="p-6 space-y-5">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 font-['Lato'] mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none font-['Lato']"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 font-['Lato'] mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none font-['Lato']"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 font-['Lato'] mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none font-['Lato']"
                      placeholder="+91 xxxxx xxxxx"
                    />
                  </div>
                </div>

                {/* Destination Dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 font-['Lato'] mb-2">
                    Choose Destination *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                    <select
                      required
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none font-['Lato'] appearance-none bg-white cursor-pointer"
                    >
                      <option value="">Select your destination</option>
                      {destinations.map((dest) => (
                        <option key={dest} value={dest}>
                          {dest}
                        </option>
                      ))}
                    </select>
                    <ArrowRight className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 rotate-90 pointer-events-none" />
                  </div>
                </div>

                {/* Date & Guests Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 font-['Lato'] mb-2">
                      Travel Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none font-['Lato'] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 font-['Lato'] mb-2">
                      Guests
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        min="1"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none font-['Lato']"
                        placeholder="2"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 font-['Lato'] mb-2">
                    Special Requirements
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none font-['Lato'] resize-none"
                    placeholder="Any special requests or questions..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 rounded-xl font-['Lato'] font-bold bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg relative overflow-hidden ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {!isSubmitting && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                  )}
                  <span className="relative flex items-center justify-center gap-2">
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
                  </span>
                </motion.button>

                {/* Info Text */}
                <p className="text-center text-sm text-gray-500 font-['Lato']">
                  We'll contact you within 24 hours to confirm your booking
                </p>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
