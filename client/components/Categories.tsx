import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, MapPin, Clock, Star, ChevronRight, Sparkles, X, Phone, Mail, User, Calendar, Users, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs-config';
import { useToast } from "@/hooks/use-toast";
import Autoplay from "embla-carousel-autoplay";

const categories = [
  {
    name: "Tirupati Temples",
    description: "Lord Venkateswara & nearby shrines",
    icon: "🛕",
    image: "/tirmula2.png",
    duration: "Full Day",
    rating: 4.9,
    visitors: "10k+ visitors",
    detailedDescription: "Experience the divine aura of Lord Venkateswara at the world-famous Tirumala Temple. This sacred pilgrimage includes darshan at the main temple, visits to nearby shrines, and exploration of the spiritual heritage of the Seven Hills. Witness ancient architecture, participate in traditional rituals, and immerse yourself in centuries-old devotional practices.",
    highlights: [
      "VIP darshan arrangements available",
      "Visit to Padmavathi Temple",
      "Guided tour of temple architecture",
      "Traditional prasadam included"
    ]
  },
  {
    name: "Sri Kalahasti",
    description: "Rahu–Ketu pooja temple tours",
    icon: "🕉️",
    image: "/srikalahasti.jpg",
    duration: "Half Day",
    rating: 4.8,
    visitors: "8k+ visitors",
    detailedDescription: "Discover the mystical Sri Kalahasteeswara Temple, renowned for Rahu–Ketu pooja and its unique Vayu Linga. This ancient Shiva temple showcases Dravidian architecture and is one of the Pancha Bhoota Sthalams representing air. Experience the eternal flame that burns without oil and witness the divine presence in this sacred abode.",
    highlights: [
      "Rahu–Ketu pooja arrangements",
      "Ancient Vayu Linga darshan",
      "Temple history guided tour",
      "Nearby Bharadwaja Tirtham visit"
    ]
  },
  {
    name: "Kanipakam",
    description: "Vinayaka darshan packages",
    icon: "🐘",
    image: "/kanipakam_vinayaka.jpg",
    duration: "Half Day",
    rating: 4.7,
    visitors: "6k+ visitors",
    detailedDescription: "Visit the miraculous Kanipakam Vinayaka Temple, home to the self-manifested and ever-growing idol of Lord Ganesha. Legend says the idol continues to grow in size, submerged in water. This powerful temple is known for fulfilling devotees’ wishes and removing obstacles from their lives.",
    highlights: [
      "Darshan of the growing Vinayaka idol",
      "Sacred temple tank visit",
      "Special abhishekam arrangements",
      "Temple legend storytelling"
    ]
  },
  {
    name: "Talakona Falls",
    description: "Waterfall & temple trek",
    icon: "💧",
    image: "/Talakona_waterfall.jpg",
    duration: "Full Day",
    rating: 4.8,
    visitors: "7k+ visitors",
    detailedDescription: "Explore Andhra Pradesh’s highest waterfall, cascading from 270 feet amidst the lush Sri Venkateswara National Park. Trek through dense forests, enjoy natural pools, visit the ancient Siddheswara Swamy Temple, and experience the therapeutic properties of the medicinal herbs surrounding the falls.",
    highlights: [
      "Guided nature trek to the waterfall",
      "Natural pool swimming opportunity",
      "Siddheswara Temple visit",
      "Wildlife spotting in the national park"
    ]
  },
  {
    name: "Chandragiri Fort",
    description: "Historical heritage site",
    icon: "🏰",
    image: "/chandragiri_fort.jpg",
    duration: "3–4 Hours",
    rating: 4.6,
    visitors: "5k+ visitors",
    detailedDescription: "Step back in time at the magnificent Chandragiri Fort, an 11th-century architectural marvel that served as a stronghold of the Vijayanagara Empire. Explore the Raja Mahal and Rani Mahal palaces, admire Indo-Saracenic architecture, and learn about the region’s rich history through the on-site museum and light & sound show.",
    highlights: [
      "Raja Mahal & Rani Mahal exploration",
      "Archaeological museum visit",
      "Panoramic fort views",
      "Historical light & sound show"
    ]
  },
  {
    name: "Nagalapuram Falls",
    description: "Trekking & waterfalls",
    icon: "🏞️",
    image: "/nagalapuramfalls.jpg",
    duration: "Full Day",
    rating: 4.7,
    visitors: "4k+ visitors",
    detailedDescription: "Embark on an adventurous trek through the Eastern Ghats to reach the pristine Nagalapuram waterfalls. This challenging yet rewarding journey takes you through rocky terrain, dense forests, and natural streams, culminating in a refreshing dip in crystal-clear pools surrounded by untouched natural beauty.",
    highlights: [
      "Guided trekking expedition",
      "Multiple waterfall points",
      "Natural rock pools for swimming",
      "Packed lunch in nature"
    ]
  },
  {
    name: "Sri Venkateswara Zoo",
    description: "Wildlife & nature park",
    icon: "🦁",
    image: "/zoo.jpg",
    duration: "3–4 Hours",
    rating: 4.5,
    visitors: "9k+ visitors",
    detailedDescription: "Discover diverse wildlife at the Sri Venkateswara Zoological Park, spread across 5,532 acres of natural habitat. Home to tigers, lions, elephants, and numerous exotic species, this conservation center offers safari rides, nature trails, and educational programs about wildlife preservation in the Eastern Ghats ecosystem.",
    highlights: [
      "Safari ride through animal enclosures",
      "Exotic animal viewing",
      "Nature interpretation center",
      "Children’s play area & cafeteria"
    ]
  },
  {
    name: "Papavinasanam",
    description: "Sacred waterfall temple",
    icon: "🙏",
    image: "/papa vinasanam.jpg",
    duration: "Half Day",
    rating: 4.8,
    visitors: "6k+ visitors",
    detailedDescription: "Experience spiritual cleansing at Papavinasanam, the sacred waterfall believed to wash away sins. Located in the Tirumala Hills, this holy site features a natural waterfall, an ancient temple, and serene surroundings. The water from here is used for abhishekam at the main Tirumala Temple, making it highly auspicious.",
    highlights: [
      "Holy waterfall darshan",
      "Participation in temple rituals",
      "Scenic hill views",
      "Spiritual purification experience"
    ]
  },
  {
    name: "Akasa Ganga",
    description: "Mountain spring trek",
    icon: "⛲",
    image: "/akasaganga.jpg",
    duration: "2–3 Hours",
    rating: 4.6,
    visitors: "5k+ visitors",
    detailedDescription: "Trek to the celestial Akasa Ganga waterfall, a natural spring emerging from rocks on the Tirumala Hills. According to legend, this is where Lord Rama caused water to gush forth to quench Sita’s thirst. The pristine water is considered sacred, and the trek offers breathtaking views of the surrounding valleys and forests.",
    highlights: [
      "Sacred mountain spring visit",
      "Mythological site exploration",
      "Panoramic valley views",
      "Photography opportunities"
    ]
  }
];


// Enhanced Card Component
function EnhancedDestinationCard({
  category,
  index,
  onExplore
}: {
  category: typeof categories[0];
  index: number;
  onExplore: (category: typeof categories[0]) => void;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl h-72 sm:h-80 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -8 }}
    >
      {/* Background Image with Parallax Zoom - SEO Optimized */}
      <motion.img
        src={category.image}
        alt={`${category.name} Tour Package Tirupati - ${category.description} - Guptha Travels Best Tours`}
        title={`Book ${category.name} Tour - ${category.duration} - ${category.rating} Rating`}
        className="absolute inset-0 w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        loading="lazy"
      />

      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 group-hover:to-black/90 transition-all duration-500" />

      {/* Animated Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-400/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top Badge Section */}
      <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
        {/* Emoji Icon Badge with Pop Animation */}
        {/* <motion.div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/95 backdrop-blur-md shadow-lg flex items-center justify-center text-2xl sm:text-3xl"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {category.icon}
        </motion.div> */}

        {/* Rating Badge with Shine */}
        <motion.div
          className="px-3 py-1.5 rounded-full bg-emerald-500/95 backdrop-blur-md shadow-lg flex items-center gap-1.5 relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          <Star className="w-3.5 h-3.5 fill-white text-white relative z-10" />
          <span className="text-white font-bold text-sm relative z-10">{category.rating}</span>
        </motion.div>
      </div>

      {/* Content Container - Bottom Section */}
      <div className="absolute inset-0 flex items-end p-5 sm:p-6">
        <div className="w-full relative">
          {/* Title Section - Always visible */}
          <div className="flex items-center justify-between text-white mb-2">
            <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display'] line-clamp-1 flex-1">
              {category.name}
            </h3>
            {/* Arrow Icon */}
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronRight className="w-6 h-6 text-emerald-400" />
            </motion.div>
          </div>

          {/* Description - Subtle Always Visible */}
          <p className="text-white/80 text-sm font-['Lato'] mb-3 line-clamp-1">
            {category.description}
          </p>

          {/* Expandable Section - Shown on hover with smooth animation */}
          <div className="max-h-0 group-hover:max-h-32 transition-all duration-500 ease-out overflow-hidden">
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
              initial={false}
            >
              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {/* Duration */}
                <div className="flex items-center gap-2 text-white">
                  <div className="p-1.5 rounded-lg bg-white/20 backdrop-blur-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs opacity-80 font-['Lato']">Duration</p>
                    <p className="font-semibold text-sm font-['Lato']">{category.duration}</p>
                  </div>
                </div>

                {/* Visitors */}
                <div className="flex items-center gap-2 text-white">
                  <div className="p-1.5 rounded-lg bg-white/20 backdrop-blur-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs opacity-80 font-['Lato']">Popular</p>
                    <p className="font-semibold text-sm font-['Lato']">{category.visitors}</p>
                  </div>
                </div>
              </div>

              {/* Explore Button */}
              <motion.button
                onClick={() => onExplore(category)}
                className="w-full py-2.5 rounded-xl font-['Lato'] font-bold text-sm bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg flex items-center justify-center gap-2 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Button Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                />
                <Sparkles className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Explore Destination</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Corner Accent - Animated on Hover */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl" />
    </motion.div>
  );
}

// Destination Details Modal - Landscape Layout
function DestinationModal({
  category,
  isOpen,
  onClose,
  onContactClick
}: {
  category: typeof categories[0] | null;
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}) {
  if (!category) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal - Landscape Layout */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110 active:scale-95 group"
              >
                <X className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
              </button>

              {/* Landscape Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 flex-1 min-h-0">
                {/* LEFT SIDE - Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
                  <motion.img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

                  {/* Rating Badge - Top Left */}
                  <motion.div
                    className="absolute top-6 left-6 px-4 py-2.5 rounded-full bg-emerald-500 shadow-2xl flex items-center gap-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Star className="w-5 h-5 fill-white text-white" />
                    <span className="text-white font-bold text-lg">{category.rating}</span>
                  </motion.div>

                  {/* Title Overlay - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h2 className="text-white font-['Playfair_Display'] text-3xl lg:text-4xl font-bold mb-2 drop-shadow-lg">
                        {category.name}
                      </h2>
                      <p className="text-white/95 font-['Lato'] text-base lg:text-lg drop-shadow-md">
                        {category.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-400/20 to-transparent" />
                </div>

                {/* RIGHT SIDE - Details */}
                <div className="overflow-y-auto p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-white to-gray-50 flex flex-col min-h-0 space-y-6">
                  {/* Info Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg hover:shadow-xl transition-shadow"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="w-6 h-6" />
                        <p className="text-sm font-semibold font-['Lato'] opacity-90">Duration</p>
                      </div>
                      <p className="text-2xl font-bold font-['Lato']">{category.duration}</p>
                    </motion.div>

                    <motion.div
                      className="p-5 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-shadow"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Users className="w-6 h-6" />
                        <p className="text-sm font-semibold font-['Lato'] opacity-90">Visitors</p>
                      </div>
                      <p className="text-2xl font-bold font-['Lato']">{category.visitors}</p>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 font-['Playfair_Display'] mb-4 flex items-center gap-2">
                      <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full" />
                      About This Destination
                    </h3>
                    <p className="text-gray-700 font-['Lato'] leading-relaxed text-base">
                      {category.detailedDescription}
                    </p>
                  </motion.div>

                  {/* Highlights */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 font-['Playfair_Display'] mb-4 flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-emerald-500" />
                      Tour Highlights
                    </h3>
                    <div className="space-y-3">
                      {category.highlights.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-4 p-3 rounded-xl bg-white border border-emerald-100 hover:border-emerald-300 transition-colors"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                          <p className="text-gray-800 font-['Lato'] font-medium">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons - Prominent CTA */}
                  <motion.div
                    className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200 mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    {/* Primary CTA - Contact Us Button */}
                    <motion.button
                      onClick={onContactClick}
                      className="flex-1 px-6 py-3 rounded-xl font-['Lato'] font-semibold text-base bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg relative overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Animated Shimmer */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      />
                      
                      <span className="relative flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        Contact Us
                      </span>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Contact Form Modal (Slides from Right)
function ContactFormModal({
  isOpen,
  onClose,
  category
}: {
  isOpen: boolean;
  onClose: () => void;
  category: typeof categories[0] | null;
}) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Email, Phone)",
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
        destination: category?.name || 'General Inquiry',
        message: formData.message || 'No special requirements',
        to_email: 'admin@gupthatravels.com', // Your admin email
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      if (response.status === 200) {
        // Success
        toast({
          title: "✅ Booking Request Sent!",
          description: "Thank you for your submission! We will contact you soon.",
          className: "bg-emerald-50 border-emerald-500",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          guests: '',
          message: ''
        });

        // Close modal after short delay
        setTimeout(() => {
          onClose();
        }, 1500);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "❌ Sending Failed",
        description: "Unable to send your request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Slide-in Panel */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white shadow-2xl z-[60] overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 text-white">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold mb-2">
                Book Your Journey
              </h2>
              <p className="font-['Lato'] text-emerald-100">
                {category ? `to ${category.name}` : 'Contact us for details'}
              </p>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
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
                className={`w-full px-6 py-4 rounded-xl font-['Lato'] font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg relative overflow-hidden ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
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
                      Sending...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Submit Booking Request
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
  );
}

export default function Categories() {
  const [selectedDestination, setSelectedDestination] = useState<typeof categories[0] | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  // Auto-scroll plugin with emerald theme
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    })
  );

  const handleExplore = (category: typeof categories[0]) => {
    setSelectedDestination(category);
    setShowDetailsModal(true);
  };

  const handleContactClick = () => {
    // Open WhatsApp instead of contact form
    const message = selectedDestination
      ? `Hi, I'm interested in booking a tour to ${selectedDestination.name}. Can you provide more details?`
      : `Hi, I'm interested in booking a tour. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/919959968116?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowDetailsModal(false);
  };

  const handleCloseContact = () => {
    setShowContactModal(false);
  };

  const handleCloseDetails = () => {
    setShowDetailsModal(false);
    setSelectedDestination(null);
  };
  return (
    <section
      className="w-full px-4 sm:px-8 lg:px-24 py-16 sm:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
      aria-label="Tirupati Tour Packages - Popular Destinations"
    >
      {/* SEO-friendly hidden content for search engines */}
      <div className="sr-only">
        <h2>Tirupati Tour Packages - Popular Destinations Near Tirupati</h2>
        <p>
          Explore the best tourist destinations near Tirupati with Guptha Travels. Our affordable tour packages include
          visits to Tirupati Balaji Temple, Sri Kalahasti Temple, Kanipakam Vinayaka Temple, Talakona Waterfalls,
          Chandragiri Fort, and more. We offer customized pilgrimage tours, temple darshan packages, and sightseeing
          tours with comfortable car rentals and professional guides. Book the best Tirupati tour packages for one day
          trips, full day tours, and multi-day pilgrimage journeys.
        </p>
        <ul>
          <li>Tirupati Balaji Temple Tours - Premium darshan packages with VIP arrangements</li>
          <li>Sri Kalahasti Temple Tours - Rahu-Ketu pooja and ancient Shiva temple visits</li>
          <li>Kanipakam Vinayaka Darshan - Miraculous self-growing Ganesha deity temple</li>
          <li>Talakona Waterfalls Tours - Nature trekking and waterfall adventures</li>
          <li>Chandragiri Fort Tours - Historical heritage site exploration</li>
          <li>Tirupati One Day Tour Package - Affordable temple and sightseeing tours</li>
        </ul>
      </div>

      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16 sm:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                className="fill-emerald-500/10"></path>
        </svg>
      </div>

      {/* Background Decorative Elements - Enhanced with animation */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "circInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Decorative Stroke Elements */}
      <div className="absolute top-40 right-20 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="text-emerald-500">
          <path d="M20,50 L40,30 L60,50 L80,30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20,70 L40,50 L60,70 L80,50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="absolute bottom-40 left-16 w-28 h-28 opacity-10">
        <svg viewBox="0 0 100 100" className="text-teal-500">
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8,4" rx="10" />
          <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,3" rx="8" />
        </svg>
      </div>

      {/* Enhanced Header Section */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Animated Badge */}
        <motion.div
          className="inline-block mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 blur-xl opacity-30 animate-pulse" />
            <div className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-50 to-emerald-100 border-2 border-emerald-200">
              <span className="text-emerald-700 font-['Lato'] font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Popular Destinations
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Title - SEO Optimized */}
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-gray-900">Tirupati Tour Packages - </span>
          <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Popular Destinations
          </span>
        </motion.h2>

        {/* Subtitle - SEO Optimized */}
        <motion.p
          className="text-lg text-gray-600 font-['Lato'] max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Affordable Tirupati tour packages for temple darshan, pilgrimage tours, and sightseeing.
          Explore Tirupati Balaji, Sri Kalahasti, Kanipakam, waterfalls, and heritage sites with the best travels in Tirupati.
        </motion.p>

        {/* Decorative Line with Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <motion.div
            className="w-2 h-2 rounded-full bg-emerald-400"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          />
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-teal-500"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.9 }}
          />
        </div>
      </motion.div>

      {/* Enhanced Carousel Section */}
      <motion.div
        className="relative px-2 sm:px-0 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      >
        <Carousel
          plugins={[autoplayPlugin.current]}
          opts={{
            align: "start",
            loop: true,
            dragFree: false,
            containScroll: "trimSnaps",
            skipSnaps: false,
            duration: 25,
          }}
          className="w-full"
          onMouseEnter={() => autoplayPlugin.current.stop()}
          onMouseLeave={() => autoplayPlugin.current.play()}
        >
          <CarouselContent className="-ml-4 sm:-ml-6">
            {categories.map((category, index) => (
              <CarouselItem
                key={index}
                className="pl-4 sm:pl-6 basis-[85%] sm:basis-[70%] md:basis-[48%] lg:basis-[32%] xl:basis-[25%]"
              >
                <EnhancedDestinationCard
                  category={category}
                  index={index}
                  onExplore={handleExplore}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Enhanced Custom Navigation Buttons with emerald theme - Hidden on mobile */}
          <CarouselPrevious className="hidden md:flex -left-6 lg:-left-12 w-12 h-12 sm:w-14 sm:h-14 border-2 border-emerald-500 bg-white/95 backdrop-blur-sm text-emerald-600 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-600 hover:text-white transition-all duration-500 shadow-xl hover:shadow-emerald-500/50 hover:shadow-2xl hover:scale-110 active:scale-95" />
          <CarouselNext className="hidden md:flex -right-6 lg:-right-12 w-12 h-12 sm:w-14 sm:h-14 border-2 border-emerald-500 bg-white/95 backdrop-blur-sm text-emerald-600 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-600 hover:text-white transition-all duration-500 shadow-xl hover:shadow-emerald-500/50 hover:shadow-2xl hover:scale-110 active:scale-95" />
        </Carousel>

        {/* Enhanced Mobile Swipe Indicator with auto-play status */}
        <motion.div
          className="flex sm:hidden justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-emerald-400 blur-lg"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* <div className="relative text-emerald-600 text-sm font-['Lato'] flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/95 backdrop-blur-md border-2 border-emerald-300 font-bold shadow-lg">
              <motion.div
                animate={{ x: [-3, 0, -3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5 -scale-x-100 text-emerald-500" />
              </motion.div>
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                Auto-playing • Swipe to Explore
              </span>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5 text-emerald-500" />
              </motion.div>
            </div> */}
          </div>
        </motion.div>
      </motion.div>

      {/* Modals */}
      <DestinationModal
        category={selectedDestination}
        isOpen={showDetailsModal}
        onClose={handleCloseDetails}
        onContactClick={handleContactClick}
      />

      {/* Contact Form Modal - Commented out, using WhatsApp instead */}
      {/* <ContactFormModal
        category={selectedDestination}
        isOpen={showContactModal}
        onClose={handleCloseContact}
      /> */}
    </section>
  );
}
