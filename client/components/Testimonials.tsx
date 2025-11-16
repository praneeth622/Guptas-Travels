import { motion, useInView } from "framer-motion";
import { Star, Quote, Sparkles, Heart, ThumbsUp, Award } from "lucide-react";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name : "Chandra Reddy",
    location : "Godavari, Andhra Pradesh",
    rating: 5,
    text: "Guptha Travels provided an exceptional experience for our Tirupati pilgrimage. The vehicle was comfortable and clean, and the driver was courteous and knowledgeable about the route. Highly recommend their services for a hassle-free journey!",
    image: "👨‍💼",
    date: "September 2024",
    package: "Tirupati Darshan Package"
  },
  {
    name: "Rajesh Kumar",
    location: "Hyderabad, Telangana",
    rating: 5,
    text: "Exceptional service! The driver was punctual, the car was spotlessly clean, and the journey to Tirupati was comfortable. Guptha Travels made our pilgrimage truly memorable. Highly recommended for family trips!",
    image: "👴",
    date: "October 2024",
    package: "Tirupati Darshan Package"
  },
  {
    name: "Priya Sharma",
    location: "Bangalore, Karnataka",
    rating: 5,
    text: "Amazing experience with Guptha Travels! The team was very professional and helped us plan our entire trip. The vehicle was luxurious and the driver knew all the best routes. Will definitely book again!",
    image: "👩‍💼",
    date: "November 2024",
    package: "Sri Kalahasti Tour"
  },
  {
    name: "Venkatesh Reddy",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    text: "Best travel service in the region! We booked for a family of 8 and got a spacious tempo traveller. The driver was courteous and very knowledgeable about all the temples. Great value for money!",
    image: "👨‍👨‍👧‍👦",
    date: "September 2024",
    package: "Multi-Temple Tour"
  },
  {
    name: "Lakshmi Devi",
    location: "Vijayawada, Andhra Pradesh",
    rating: 5,
    text: "Wonderful spiritual journey! Guptha Travels took care of everything - from booking to drop. The vehicle was well-maintained and comfortable. The staff was very helpful and respectful. Blessed experience!",
    image: "👵",
    date: "October 2024",
    package: "Tirupati Special Darshan"
  },
  {
    name: "Arun Krishnan",
    location: "Coimbatore, Tamil Nadu",
    rating: 5,
    text: "Highly professional service! Booked a last-minute trip and they arranged everything perfectly. The driver was excellent, knew the shortest routes, and made our journey smooth and enjoyable. Five stars!",
    image: "🧔",
    date: "November 2024",
    package: "Talakona Falls Trek"
  },
  {
    name: "Meena Patel",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "Fantastic experience from start to finish! The booking process was easy, the vehicle was premium quality, and the driver was very friendly. Guptha Travels exceeded our expectations in every way. Highly recommended!",
    image: "👩",
    date: "August 2024",
    package: "Chandragiri Fort Tour"
  }
];

// Testimonial Card Component
function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className="relative group h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {/* Floating gradient background */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"
        animate={{
          scale: [1, 1.02, 1],
          rotate: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main card */}
      <div className="relative h-full bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 transition-all duration-500 overflow-hidden">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-100 to-transparent opacity-50 rounded-bl-[100px]" />
        
        {/* Animated sparkle on hover */}
        <motion.div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Sparkles className="w-6 h-6 text-emerald-500" />
        </motion.div>

        {/* Quote icon */}
        <motion.div
          className="absolute top-6 left-6 opacity-10"
          initial={{ scale: 0, rotate: -45 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
        >
          <Quote className="w-16 h-16 text-emerald-500" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header - User info */}
          <div className="flex items-start gap-4 mb-4">
            {/* Avatar with gradient border */}
            <motion.div
              className="relative flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 p-0.5 shadow-lg">
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center text-3xl">
                  {testimonial.image}
                </div>
              </div>
              {/* Verified badge */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                <Award className="w-3.5 h-3.5 text-white" />
              </div>
            </motion.div>

            {/* Name and location */}
            <div className="flex-1 pt-1">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-['Playfair_Display'] mb-1">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 font-['Lato'] flex items-center gap-1">
                📍 {testimonial.location}
              </p>
            </div>
          </div>

          {/* Star rating with stagger animation */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.15 + 0.4 + i * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              </motion.div>
            ))}
          </div>

          {/* Review text */}
          <motion.p
            className="text-gray-700 font-['Lato'] leading-relaxed mb-4 flex-1 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
          >
            "{testimonial.text}"
          </motion.p>

          {/* Footer - Package and date */}
          <div className="pt-4 border-t border-gray-100 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                <span className="text-emerald-700 font-['Lato'] font-semibold text-xs">
                  {testimonial.package}
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 font-['Lato']">
              Traveled in {testimonial.date}
            </p>
          </div>

          {/* Hover like effect */}
          <motion.div
            className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1.2 }}
          >
            <Heart className="w-6 h-6 text-emerald-500 fill-emerald-500" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Auto-scroll plugin
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    })
  );

  return (
    <section 
      ref={sectionRef}
      className="w-full px-4 sm:px-8 lg:px-24 py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-40 right-20 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Header Section */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Badge */}
        <motion.div
          className="inline-block mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-600 blur-xl opacity-30 animate-pulse" />
            <div className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200">
              <span className="text-emerald-700 font-['Lato'] font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                <ThumbsUp className="w-4 h-4" />
                Customer Testimonials
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Title - SEO Optimized */}
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-gray-900">Customer Reviews - </span>
          <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
            Best Travels in Tirupati
          </span>
        </motion.h2>

        {/* Subtitle - SEO Optimized */}
        <motion.p
          className="text-lg text-gray-600 font-['Lato'] max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Join thousands of satisfied customers who have experienced exceptional Tirupati tour packages and car rental services with Guptha Travels - the top rated travel agency in Tirupati
        </motion.p>

        {/* Decorative line */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <motion.div
            className="w-2 h-2 rounded-full bg-emerald-400"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          />
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-teal-500"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.4, delay: 1 }}
          />
        </div>
      </motion.div>

      {/* Testimonials Carousel */}
      <motion.div
        className="max-w-7xl mx-auto relative z-10 px-2 sm:px-0"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
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
            duration: 30,
          }}
          className="w-full"
          onMouseEnter={() => autoplayPlugin.current.stop()}
          onMouseLeave={() => autoplayPlugin.current.play()}
        >
          <CarouselContent className="-ml-4 sm:-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 sm:pl-6 basis-[90%] sm:basis-[85%] md:basis-[60%] lg:basis-[45%] xl:basis-[33.333%]"
              >
                <TestimonialCard testimonial={testimonial} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Enhanced Custom Navigation Buttons - Hidden on mobile */}
          <CarouselPrevious className="hidden md:flex -left-6 lg:-left-12 w-12 h-12 sm:w-14 sm:h-14 border-2 border-emerald-500 bg-white/95 backdrop-blur-sm text-emerald-600 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-600 hover:text-white transition-all duration-500 shadow-xl hover:shadow-emerald-500/50 hover:shadow-2xl hover:scale-110 active:scale-95" />
          <CarouselNext className="hidden md:flex -right-6 lg:-right-12 w-12 h-12 sm:w-14 sm:h-14 border-2 border-emerald-500 bg-white/95 backdrop-blur-sm text-emerald-600 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-600 hover:text-white transition-all duration-500 shadow-xl hover:shadow-emerald-500/50 hover:shadow-2xl hover:scale-110 active:scale-95" />
        </Carousel>

        {/* Auto-play Indicator */}
        <motion.div
          className="flex sm:hidden justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
            {/* <div className="relative text-emerald-600 text-sm font-['Lato'] flex items-center gap-3 px-6 py-3 rounded-full bg-white/95 backdrop-blur-md border-2 border-emerald-300 font-bold shadow-lg">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              <span>Auto-playing • Swipe to explore</span>
            </div> */}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom stats */}
      <motion.div
        className="max-w-4xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        {[
          { number: "10,000+", label: "Happy Customers" },
          { number: "4.9/5", label: "Average Rating" },
          { number: "100%", label: "Satisfaction Rate" },
          { number: "15+", label: "Years Experience" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-lg"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="text-2xl sm:text-3xl font-bold text-emerald-600 font-['Playfair_Display'] mb-1">
              {stat.number}
            </div>
            <div className="text-sm text-gray-600 font-['Lato']">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
