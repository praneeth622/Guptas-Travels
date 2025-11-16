const vehicles = [
  {
    name: "Executive Sedan",
    subtitle: "Etios / Swift Dzire / Amaze / Ciaz",
    tier: "Business Class",
    capacity: "4 Executive Seats",
    localRent: "₹2,000",
    localDiesel: "₹10/km",
    outstationRate: "₹14/km",
    minKms: "300 kms",
    features: ["Premium AC Climate Control", "Leather Appointments", "Advanced GPS Navigation", "Premium Audio System", "USB Charging", "Water Bottle Service"],
    specs: ["Avg Mileage: 15-18 km/l", "Luggage: 400L", "Safety: 5-Star Rating"],
    image: "/redcar.png",
    badge: "Business Class",
    icon: "🎩",
    accentColor: "from-blue-500 to-blue-600",
  },
  {
    name: "Comfort Premium",
    subtitle: "Ertiga Premium 6-7 Seater",
    tier: "Business Class",
    capacity: "6-7 Premium Seats",
    localRent: "₹2,500",
    localDiesel: "₹10/km",
    outstationRate: "₹19/km",
    minKms: "300 kms",
    features: ["Dual-Zone Climate Control", "Panoramic Sunroof", "Ample Luggage Space", "Premium Upholstery", "Individual Reading Lights", "Refreshment Service"],
    specs: ["Avg Mileage: 14-16 km/l", "Luggage: 500L", "Safety: Advanced ABS"],
    image: "/redcar2.png",
    badge: "Family Premium",
    icon: "�‍👩‍👧‍👦",
    accentColor: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Innova Luxury",
    subtitle: "Toyota Innova Crysta - Enterprise Grade",
    tier: "Enterprise Grade",
    capacity: "6-7 Luxury Seats",
    localRent: "₹2,800",
    localDiesel: "₹10/km",
    outstationRate: "₹22/km",
    minKms: "300 kms",
    features: ["Triple-Zone Automatic AC", "Leather Interior", "Power Steering + Power Windows", "Premium Sound System", "Cup Holders & Storage", "Concierge Service Available"],
    specs: ["Avg Mileage: 12-14 km/l", "Luggage: 600L", "Safety: 6+ Airbags"],
    image: "/innova.png",
    badge: "Enterprise Grade",
    icon: "�",
    accentColor: "from-purple-500 to-purple-600",
  },
  {
    name: "Tempo Traveller",
    subtitle: "12 Seater - Executive Group Travel",
    tier: "Enterprise Grade",
    capacity: "12 Seats",
    localRent: "₹3,500",
    localDiesel: "₹100/8km",
    outstationRate: "₹25/km",
    minKms: "300 kms/day",
    features: ["Individual Pushback Seats", "Built-in Entertainment System", "Wide Aisles for Movement", "Multiple USB Charging Ports", "Premium Washroom Facility", "Dedicated Group Coordinator"],
    specs: ["Avg Mileage: 8 km/l", "Luggage: 1200L", "Safety: Anti-Skid Braking"],
    image: "/van_small.png",
    badge: "Corporate Grade",
    icon: "🏢",
    accentColor: "from-orange-500 to-orange-600",
  },
  {
    name: "Tempo Traveller",
    subtitle: "17 Seater - Premium Corporate Transport",
    tier: "Enterprise Grade",
    capacity: "17 Seats",
    localRent: "₹4,500",
    localDiesel: "₹100/7km",
    outstationRate: "₹35/km",
    minKms: "300 kms/day",
    features: ["Reclining Pushback Seats", "Full HD Entertainment Display", "Premium Cabin Lighting", "Advanced Safety Features", "Real-time GPS Tracking", "Executive Travel Protocol"],
    specs: ["Avg Mileage: 7 km/l", "Luggage: 1500L", "Safety: Stability Control"],
    image: "/van_big.png",
    badge: "Enterprise Premium",
    icon: "🌟",
    accentColor: "from-red-500 to-red-600",
  },
];

import { useState, useEffect } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function VehicleFleet() {
  const [currentVehicle, setCurrentVehicle] = useState<number>(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Auto-carousel effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentVehicle((prev) => (prev === vehicles.length - 1 ? 0 : prev + 1));
    }, 4000); // Change vehicle every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Touch handlers for swipe functionality
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
      // Swipe left - go to next
      setIsAutoPlaying(false);
      setCurrentVehicle(currentVehicle === vehicles.length - 1 ? 0 : currentVehicle + 1);
      setTimeout(() => setIsAutoPlaying(true), 5000);
    }

    if (isRightSwipe) {
      // Swipe right - go to previous
      setIsAutoPlaying(false);
      setCurrentVehicle(currentVehicle === 0 ? vehicles.length - 1 : currentVehicle - 1);
      setTimeout(() => setIsAutoPlaying(true), 5000);
    }
  };

  return (
    <section
      className="w-full px-4 sm:px-8 lg:px-24 py-16 sm:py-20 bg-gradient-to-b from-[hsl(var(--background))] via-white to-[hsl(var(--background))]"
      aria-label="Car Rental Fleet - Tirupati Vehicle Rentals"
    >
      {/* SEO-friendly hidden content */}
      <div className="sr-only">
        <h2>Car Rentals Tirupati - Best Vehicle Fleet by Guptha Travels</h2>
        <p>
          Guptha Travels offers the best car rental services in Tirupati with a premium fleet of sedans, SUVs,
          and tempo travellers. Our affordable car rentals include Etios, Swift Dzire, Ertiga, Toyota Innova Crysta,
          and tempo travellers for 12-17 passengers. Perfect for Tirupati to Tirumala cab services, temple tours,
          outstation trips, and group travel. All vehicles come with professional drivers, 24/7 support, and 5-star
          safety ratings. Book the best car rental in Tirupati for your pilgrimage and travel needs.
        </p>
      </div>

      {/* Premium Section Header */}
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Car Rentals Tirupati - Premium Vehicle Fleet
        </h2>
        <p className="text-[hsl(var(--muted-foreground))] text-lg sm:text-xl max-w-4xl mx-auto px-4 font-['Lato'] leading-relaxed">
          Best car rental services in Tirupati with sedans, SUVs, and tempo travellers for temple tours and outstation trips.
          <span className="text-emerald-700 font-semibold"> Affordable rates. Professional drivers. 24/7 service.</span>
        </p>

        {/* Premium Badges Row */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">
          <div className="px-4 py-2 rounded-lg bg-blue-50 border border-blue-200 backdrop-blur-sm">
            <p className="text-sm font-['Lato'] font-semibold text-blue-700">
              ✓ 5-Star Safety Rating
            </p>
          </div>
          <div className="px-4 py-2 rounded-lg bg-purple-50 border border-purple-200 backdrop-blur-sm">
            <p className="text-sm font-['Lato'] font-semibold text-purple-700">
              ✓ 24/7 Support
            </p>
          </div>
          <div className="px-4 py-2 rounded-lg bg-emerald-50 border border-emerald-200 backdrop-blur-sm">
            <p className="text-sm font-['Lato'] font-semibold text-emerald-700">
              ✓ Professional Drivers
            </p>
          </div>
        </div>
      </div>

      {/* Single Vehicle Carousel - Clean & Simple with Touch Support */}
      <div className="max-w-6xl mx-auto mb-16 sm:mb-20">
        <div
          className="relative h-[500px] sm:h-[550px] rounded-3xl overflow-hidden shadow-2xl group bg-white touch-pan-y select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ${
                index === currentVehicle
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {/* Full Screen Vehicle Image */}
              <div className="absolute inset-0 flex items-center justify-center bg-white p-4 sm:p-0">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.name} Car Rental Tirupati - ${vehicle.subtitle} - Guptha Travels Best Car Rental Service`}
                  title={`Book ${vehicle.name} in Tirupati - ${vehicle.capacity} - Starting from ${vehicle.localRent}`}
                  className="w-full h-full object-contain sm:object-cover"
                  loading="lazy"
                />
                {/* Gradient Overlay - Always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Vehicle Details - Always visible at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
                {/* Vehicle Name - SEO Optimized */}
                <h3 className="text-white font-['Playfair_Display'] text-3xl sm:text-5xl font-bold mb-2">
                  {vehicle.name} - Car Rental Tirupati
                </h3>
                <h4 className="text-emerald-300 text-lg sm:text-xl font-['Lato'] font-semibold mb-6">
                  {vehicle.subtitle} | {vehicle.capacity}
                </h4>

                {/* Pricing Cards */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20">
                    <p className="text-white/70 text-xs sm:text-sm font-['Lato'] mb-1">
                      Local/Day
                    </p>
                    <p className="text-emerald-300 font-['Playfair_Display'] font-bold text-lg sm:text-2xl">
                      {vehicle.localRent}
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20">
                    <p className="text-white/70 text-xs sm:text-sm font-['Lato'] mb-1">
                      Per KM
                    </p>
                    <p className="text-emerald-300 font-['Playfair_Display'] font-bold text-lg sm:text-2xl">
                      {vehicle.outstationRate}
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20">
                    <p className="text-white/70 text-xs sm:text-sm font-['Lato'] mb-1">
                      Capacity
                    </p>
                    <p className="text-emerald-300 font-['Playfair_Display'] font-bold text-lg sm:text-2xl">
                      {vehicle.capacity.split(" ")[0]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Vehicle Counter */}
              <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md rounded-full px-4 py-2 border border-white/30">
                <span className="text-white font-['Lato'] font-semibold text-sm">
                  {index + 1} / {vehicles.length}
                </span>
              </div>
            </div>
          ))}

          {/* Navigation Buttons - Hidden on mobile, visible on desktop */}
          <button
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentVehicle(currentVehicle === 0 ? vehicles.length - 1 : currentVehicle - 1);
              setTimeout(() => setIsAutoPlaying(true), 5000);
            }}
            className="hidden md:flex absolute top-1/2 left-4 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/30 items-center justify-center text-white text-2xl opacity-0 group-hover:opacity-100 hover:bg-black/60 transition-all z-30"
            aria-label="Previous vehicle"
          >
            ‹
          </button>
          <button
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentVehicle(currentVehicle === vehicles.length - 1 ? 0 : currentVehicle + 1);
              setTimeout(() => setIsAutoPlaying(true), 5000);
            }}
            className="hidden md:flex absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/30 items-center justify-center text-white text-2xl opacity-0 group-hover:opacity-100 hover:bg-black/60 transition-all z-30"
            aria-label="Next vehicle"
          >
            ›
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {vehicles.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentVehicle(index);
                setTimeout(() => setIsAutoPlaying(true), 5000);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentVehicle
                  ? "w-12 h-3 bg-emerald-500"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`View ${vehicles[index].name}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Premium Service Standards Section */}
      <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-6 sm:p-12 shadow-xl border-2 border-emerald-100/50">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-2xl sm:text-4xl font-bold mb-2 sm:mb-3">
            Enterprise Service Standards
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] text-base sm:text-lg font-['Lato'] max-w-2xl mx-auto">
            Every journey backed by our commitment to excellence
          </p>
        </div>

        {/* Optimized Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* What's Included */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border-2 border-emerald-100/50 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-md">
                <span className="text-white text-2xl">✓</span>
              </div>
              <h4 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-lg font-bold">
                Inclusions
              </h4>
            </div>
            <ul className="space-y-3">
              {[
                { icon: "👨‍💼", title: "Driver Batta", desc: "Included in price" },
                {
                  icon: "�",
                  title: "Garage to Garage",
                  desc: "Kms & days calculated",
                },
                {
                  icon: "�",
                  title: "Well-Maintained Vehicle",
                  desc: "Regular servicing",
                },
                {
                  icon: "📞",
                  title: "24/7 Support",
                  desc: "Always available",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 group">
                  <div className="min-w-0">
                    <p className="text-[hsl(var(--foreground))] font-['Lato'] font-semibold text-xs sm:text-sm">
                      {item.title}
                    </p>
                    <p className="text-[hsl(var(--muted-foreground))] text-xs font-['Lato']">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </ul>
          </div>

          {/* Safety & Quality */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border-2 border-blue-100/50 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h4 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-lg font-bold">
                Safety & Quality
              </h4>
            </div>
            <ul className="space-y-3">
              {[
                { icon: "⭐", title: "5-Star Safety", desc: "ABS & airbags" },
                { icon: "🔍", title: "Quality Audits", desc: "Monthly checks" },
                {
                  icon: "🧼",
                  title: "Hygiene Protocol",
                  desc: "ISO-certified",
                },
                { icon: "📋", title: "Compliance", desc: "Full insurance" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 group">
                  <div className="min-w-0">
                    <p className="text-[hsl(var(--foreground))] font-['Lato'] font-semibold text-xs sm:text-sm">
                      {item.title}
                    </p>
                    <p className="text-[hsl(var(--muted-foreground))] text-xs font-['Lato']">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </ul>
          </div>

          {/* Additional Charges */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border-2 border-orange-100/50 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md">
                <span className="text-white text-2xl">💳</span>
              </div>
              <h4 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-lg font-bold">
                Exclusions
              </h4>
            </div>
            <div className="space-y-3">
              {[
                { icon: "🛣️", title: "Tolls & Parking", cost: "Extra" },
                { icon: "🏛️", title: "State Taxes", cost: "Extra" },
                { icon: "�️", title: "Driver Food", cost: "₹300/day" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-start p-2 rounded-lg bg-orange-50/50 border border-orange-100/30"
                >
                  <div className="flex items-center gap-2">
                    <div className="min-w-0">
                      <p className="text-[hsl(var(--foreground))] font-['Lato'] font-semibold text-xs sm:text-sm">
                        {item.title}
                      </p>
                    </div>
                  </div>
                  <span className="text-orange-700 font-['Lato'] font-bold text-xs flex-shrink-0 ml-2">
                    {item.cost}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-10 border-t-2 border-emerald-100/50">
          <div className="text-center">
            <h4 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-2xl sm:text-3xl font-bold mb-3">
              Experience Premium Transportation
            </h4>
            <p className="text-[hsl(var(--muted-foreground))] mb-8 font-['Lato'] text-lg">
              Book your extraordinary journey with GUPTHA TRAVELS today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center flex-wrap">
              <a
                href="tel:+919959968116"
                className="px-10 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-['Lato'] font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                <span>Call: +91 9959968116</span>
              </a>
              <a
                href="https://wa.me/919959968116"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-xl border-2 border-emerald-600 text-emerald-700 font-['Lato'] font-bold text-lg hover:bg-emerald-600 hover:text-white transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="mailto:info@gupthatravels.com"
                className="px-10 py-4 rounded-xl bg-blue-50 border-2 border-blue-200 text-blue-700 font-['Lato'] font-bold text-lg hover:bg-blue-100 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <Mail className="w-5 h-5" />
                <span>Email Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
