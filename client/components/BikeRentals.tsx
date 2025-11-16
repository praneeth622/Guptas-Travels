import { Bike, ArrowRight, MessageCircle, CheckCircle2, Phone } from "lucide-react";

const bikes = [
  {
    name: "Honda Activa",
    subtitle: "Most Popular Scooter",
    type: "Automatic Scooter",
    dailyRate: "₹400",
    weeklyRate: "₹2,500",
    monthlyRate: "₹8,000",
    mileage: "45-50 kmpl",
    features: ["Automatic", "Comfortable Seat", "Storage Space", "Easy to Ride"],
    image: "https://cdn.bikedekho.com/processedimages/honda/activa-6g/source/activa-6g68f31abe30932.jpg",
    badge: "Most Popular",
    icon: "🛵",
    color: "from-[hsl(var(--sacred-saffron))] to-[hsl(var(--kumkum-red))]"
  },
  {
    name: "TVS Jupiter",
    subtitle: "Premium Comfort",
    type: "Automatic Scooter",
    dailyRate: "₹400",
    weeklyRate: "₹2,500",
    monthlyRate: "₹8,000",
    mileage: "50-55 kmpl",
    features: ["Smooth Ride", "Spacious Storage", "LED Lights", "Bluetooth"],
    image: "https://cdn.bikedekho.com/processedimages/tvs/jupiter-125/640X309/jupiter-12568d3dc5f864c7.jpg?tr=w-300",
    badge: "Premium",
    icon: "🛵",
    color: "from-[hsl(var(--temple-gold))] to-[hsl(var(--sacred-saffron))]"
  },
  {
    name: "Hero Splendor",
    subtitle: "Fuel Efficient",
    type: "Standard Bike",
    dailyRate: "₹350",
    weeklyRate: "₹2,200",
    monthlyRate: "₹7,000",
    mileage: "60-65 kmpl",
    features: ["Best Mileage", "Reliable", "Low Maintenance", "Comfortable"],
    image: "https://cdn.bikedekho.com/processedimages/hero-motocorp/hero-motocorp-splendor/source/hero-motocorp-splendor68a6fbffe9b01.jpg?imwidth=400&impolicy=resize",
    badge: "Eco-Friendly",
    icon: "🏍️",
    color: "from-[hsl(var(--sacred-saffron))] to-[hsl(var(--temple-gold))]"
  },
  {
    name: "Bajaj Pulsar",
    subtitle: "Sports Performance",
    type: "Sports Bike",
    dailyRate: "₹500",
    weeklyRate: "₹3,200",
    monthlyRate: "₹10,000",
    mileage: "40-45 kmpl",
    features: ["Powerful Engine", "Sporty Design", "Digital Display", "Great Handling"],
    image: "https://cdn.bikedekho.com/processedimages/bajaj/pulsar-125/640X309/pulsar-12568a6c4ea16bb2.jpg?tr=w-300",
    badge: "Sports",
    icon: "🏍️",
    color: "from-[hsl(var(--kumkum-red))] to-[hsl(var(--sacred-saffron))]"
  },
  {
    name: "Royal Enfield",
    subtitle: "Classic Cruiser",
    type: "Cruiser Bike",
    dailyRate: "₹800",
    weeklyRate: "₹5,000",
    monthlyRate: "₹16,000",
    mileage: "35-40 kmpl",
    features: ["Premium Feel", "Long Distance", "Classic Design", "Powerful"],
    image: "https://cdn.bikedekho.com/processedimages/royal-enfield/2021-bullet-350/640X309/2021-bullet-35068a70ff776218.jpg?tr=w-300",
    badge: "Premium Classic",
    icon: "🏍️",
    color: "from-[hsl(var(--temple-gold))] to-[hsl(var(--kumkum-red))]"
  },
  {
    name: "Honda Dio",
    subtitle: "Stylish & Sporty",
    type: "Automatic Scooter",
    dailyRate: "₹400",
    weeklyRate: "₹2,500",
    monthlyRate: "₹8,000",
    mileage: "50-55 kmpl",
    features: ["Stylish Design", "LED Lights", "Digital Console", "Quick Acceleration"],
    image: "https://cdn.bikedekho.com/processedimages/honda/2025-dio/source/2025-dio68a6fc727cfae.jpg?imwidth=400&impolicy=resize",
    badge: "Trendy",
    icon: "🛵",
    color: "from-[hsl(var(--sacred-saffron))] to-[hsl(var(--kumkum-red))]"
  }
];

export default function BikeRentals() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-24 py-16 sm:py-20 bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--sandalwood))/20] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[hsl(var(--sacred-saffron))]/10 to-[hsl(var(--temple-gold))]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[hsl(var(--kumkum-red))]/10 to-[hsl(var(--sacred-saffron))]/10 rounded-full blur-3xl"></div>

      {/* Hero Section for Bike Rentals */}
      <div className="relative z-10 text-center mb-12 sm:mb-16">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-[hsl(var(--sacred-saffron))/10] to-[hsl(var(--kumkum-red))/10] border-2 border-[hsl(var(--sacred-saffron))/30] mb-6 shadow-lg backdrop-blur-sm">
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--sacred-saffron))] opacity-30 animate-ping"></span>
            <Bike className="w-7 h-7 text-[hsl(var(--sacred-saffron))]" />
          </span>
          <span className="text-[hsl(var(--sacred-saffron))] font-['Lato'] font-bold text-sm sm:text-base tracking-wider uppercase">
            Premium Bike Rentals
          </span>
        </div>

        <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span className="text-gradient">
            Ride Your Way
          </span>
          <br />
          <span className="text-[hsl(var(--foreground))]">
            Explore on Two Wheels
          </span>
        </h2>
        
        <p className="text-[hsl(var(--muted-foreground))] text-lg sm:text-xl max-w-3xl mx-auto px-4 font-['Lato'] leading-relaxed mb-8">
          Choose from our premium collection of bikes and scooters. Whether it's a quick city ride or a long journey, 
          we have the perfect two-wheeler for every adventure.
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-8">
          <div className="text-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-[hsl(var(--sacred-saffron))]/20">
            <div className="text-3xl sm:text-4xl font-bold text-[hsl(var(--sacred-saffron))] font-['Playfair_Display']">
              50+
            </div>
            <div className="text-sm text-[hsl(var(--muted-foreground))] font-['Lato'] font-medium">
              Bikes Available
            </div>
          </div>
          <div className="text-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-[hsl(var(--temple-gold))]/20">
            <div className="text-3xl sm:text-4xl font-bold text-[hsl(var(--temple-gold))] font-['Playfair_Display']">
              ₹350+
            </div>
            <div className="text-sm text-[hsl(var(--muted-foreground))] font-['Lato'] font-medium">
              Starting Price
            </div>
          </div>
          <div className="text-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-[hsl(var(--kumkum-red))]/20">
            <div className="text-3xl sm:text-4xl font-bold text-[hsl(var(--kumkum-red))] font-['Playfair_Display']">
              24/7
            </div>
            <div className="text-sm text-[hsl(var(--muted-foreground))] font-['Lato'] font-medium">
              Booking Support
            </div>
          </div>
        </div>

        {/* Quick CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[hsl(var(--sacred-saffron))] to-[hsl(var(--kumkum-red))] text-white font-['Lato'] font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group">
            <Bike className="w-6 h-6" />
            <span>Book Your Bike Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
          <a href="https://wa.me/919959968116" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full border-3 border-[hsl(var(--sacred-saffron))] text-[hsl(var(--sacred-saffron))] font-['Lato'] font-bold text-lg hover:bg-[hsl(var(--sacred-saffron))] hover:text-white transition-all duration-300 flex items-center gap-3 backdrop-blur-sm bg-white/50">
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Inquiry</span>
          </a>
        </div>
      </div>

      {/* Bike Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10 mb-16">
        {bikes.map((bike, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-transparent hover:border-blue-500/30 backdrop-blur-sm"
          >
            {/* Bike Image */}
            <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[hsl(var(--sacred-saffron))]/5 to-[hsl(var(--kumkum-red))]/5">
              <img 
                src={bike.image} 
                alt={`${bike.name} available for rent`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              {/* Premium Badge */}
              <div className={`absolute top-4 right-4 bg-gradient-to-r ${bike.color} text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl backdrop-blur-sm`}>
                {bike.badge}
              </div>
              {/* Icon Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-xl">
                <span className="text-3xl">{bike.icon}</span>
              </div>
              {/* Mileage Badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <span className="text-lg">⛽</span>
                <span className="text-[hsl(var(--foreground))] font-bold text-sm">
                  {bike.mileage}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              {/* Bike Name */}
              <div className="mb-4">
                <h3 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-2xl font-bold mb-1 group-hover:text-[hsl(var(--sacred-saffron))] transition-colors">
                  {bike.name}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm font-['Lato'] font-medium">
                  {bike.subtitle}
                </p>
                <span className="inline-block mt-2 px-3 py-1 bg-gradient-to-r from-[hsl(var(--sacred-saffron))]/10 to-[hsl(var(--kumkum-red))]/10 text-[hsl(var(--sacred-saffron))] text-xs font-semibold rounded-full border border-[hsl(var(--sacred-saffron))]/30">
                  {bike.type}
                </span>
              </div>
              
              {/* Pricing Section */}
              <div className="bg-gradient-to-r from-[hsl(var(--sacred-saffron))]/5 to-[hsl(var(--kumkum-red))]/5 rounded-2xl p-5 mb-5 border-2 border-[hsl(var(--sacred-saffron))]/20 shadow-inner">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm">
                    <p className="text-[hsl(var(--muted-foreground))] text-xs mb-1 font-medium">Daily</p>
                    <p className="text-[hsl(var(--sacred-saffron))] font-bold text-lg">
                      {bike.dailyRate}
                    </p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm">
                    <p className="text-[hsl(var(--muted-foreground))] text-xs mb-1 font-medium">Weekly</p>
                    <p className="text-[hsl(var(--temple-gold))] font-bold text-lg">
                      {bike.weeklyRate}
                    </p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm">
                    <p className="text-[hsl(var(--muted-foreground))] text-xs mb-1 font-medium">Monthly</p>
                    <p className="text-[hsl(var(--kumkum-red))] font-bold text-lg">
                      {bike.monthlyRate}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Features */}
              <ul className="space-y-2.5 mb-6">
                {bike.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-[hsl(var(--muted-foreground))] text-sm font-['Lato']"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="10"
                        fill="hsl(var(--sacred-saffron))"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M6 10L9 13L14 7"
                        stroke="hsl(var(--sacred-saffron))"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Book Button */}
              <button className={`w-full py-3.5 rounded-xl bg-gradient-to-r ${bike.color} text-white font-['Lato'] font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2.5 group/btn`}>
                <span>Rent Now</span>
                <span className="text-xl group-hover/btn:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Rental Terms Section */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-[hsl(var(--temple-gold))]/20 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-[hsl(var(--sacred-saffron))]/10 to-[hsl(var(--kumkum-red))]/10 border border-[hsl(var(--sacred-saffron))]/30 mb-4">
            <CheckCircle2 className="w-5 h-5 text-[hsl(var(--sacred-saffron))]" />
            <span className="text-[hsl(var(--sacred-saffron))] font-['Lato'] font-bold text-sm tracking-wide">RENTAL INFORMATION</span>
          </div>
          <h3 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-3xl sm:text-4xl font-bold">
            Simple & Transparent Process
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* What You Need */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(var(--sacred-saffron))] to-[hsl(var(--kumkum-red))] flex items-center justify-center shadow-xl">
                <span className="text-white text-2xl">📄</span>
              </div>
              <h4 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-2xl font-bold">
                Documents Required
              </h4>
            </div>
            <ul className="space-y-4">
              {[
                { icon: "🪪", title: "Valid Driving License", desc: "Original DL with at least 1 year validity" },
                { icon: "🆔", title: "ID Proof", desc: "Aadhar Card, PAN Card, or Passport" },
                { icon: "📱", title: "Contact Details", desc: "Valid mobile number and email address" },
                { icon: "🔐", title: "Security Deposit", desc: "Refundable deposit based on bike model" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group/item">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--sacred-saffron))]/10 to-[hsl(var(--kumkum-red))]/10 flex items-center justify-center flex-shrink-0 group-hover/item:from-[hsl(var(--sacred-saffron))]/20 group-hover/item:to-[hsl(var(--kumkum-red))]/20 transition-all border border-[hsl(var(--sacred-saffron))]/20">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-[hsl(var(--foreground))] font-semibold font-['Lato'] mb-1">
                      {item.title}
                    </p>
                    <p className="text-[hsl(var(--muted-foreground))] text-sm">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Rental Terms */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(var(--temple-gold))] to-[hsl(var(--sacred-saffron))] flex items-center justify-center shadow-xl">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h4 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-2xl font-bold">
                Rental Benefits
              </h4>
            </div>
            <ul className="space-y-4">
              {[
                { icon: "⛽", title: "Full Tank Fuel", desc: "Bike delivered with full fuel tank" },
                { icon: "🛡️", title: "Insurance Coverage", desc: "Comprehensive insurance included" },
                { icon: "🔧", title: "Free Maintenance", desc: "24/7 roadside assistance available" },
                { icon: "🔄", title: "Flexible Returns", desc: "Easy pickup and drop-off locations" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group/item">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--temple-gold))]/10 to-[hsl(var(--sacred-saffron))]/10 flex items-center justify-center flex-shrink-0 group-hover/item:from-[hsl(var(--temple-gold))]/20 group-hover/item:to-[hsl(var(--sacred-saffron))]/20 transition-all border border-[hsl(var(--temple-gold))]/20">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-[hsl(var(--foreground))] font-semibold font-['Lato'] mb-1">
                      {item.title}
                    </p>
                    <p className="text-[hsl(var(--muted-foreground))] text-sm">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 pt-10 border-t-2 border-[hsl(var(--border))]">
          <div className="text-center">
            <h4 className="text-[hsl(var(--foreground))] font-['Playfair_Display'] text-3xl font-bold mb-4">
              Ready to Hit the Road?
            </h4>
            <p className="text-[hsl(var(--muted-foreground))] text-lg mb-8 font-['Lato'] max-w-2xl mx-auto">
              Book your perfect ride today and experience the freedom of two-wheelers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+919959968116" className="px-10 py-5 rounded-full bg-gradient-to-r from-[hsl(var(--sacred-saffron))] to-[hsl(var(--kumkum-red))] text-white font-['Lato'] font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group w-full sm:w-auto justify-center">
                <Phone className="w-6 h-6" />
                <span>Call: +91 9959968116</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="https://wa.me/919959968116" target="_blank" rel="noopener noreferrer" className="px-10 py-5 rounded-full border-3 border-[hsl(var(--sacred-saffron))] text-[hsl(var(--sacred-saffron))] font-['Lato'] font-bold text-lg hover:bg-[hsl(var(--sacred-saffron))] hover:text-white transition-all duration-300 flex items-center gap-3 bg-white shadow-lg">
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
