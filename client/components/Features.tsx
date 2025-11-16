import { Sparkles, Users, Zap } from "lucide-react";

export default function Features() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-24 py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-[hsl(var(--background))] via-white to-[hsl(var(--sacred-saffron))/3] relative overflow-hidden">
      {/* Top Wave Divider */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-10 sm:h-14" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-[hsl(var(--sacred-saffron))]/5"></path>
        </svg>
      </div> */}

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] bg-gradient-to-br from-[hsl(var(--sacred-saffron))/8] to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] bg-gradient-to-tr from-[hsl(var(--kumkum-red))/4] to-transparent rounded-full blur-3xl -z-10"></div>

      {/* Decorative Stroke Patterns */}
      <div className="absolute top-24 left-8 w-16 h-16 opacity-10 hidden lg:block">
        <svg viewBox="0 0 100 100" className="text-[hsl(var(--sacred-saffron))]">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" />
          <polygon points="50,25 75,75 25,75" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-12 w-20 h-20 opacity-10 hidden lg:block">
        <svg viewBox="0 0 100 100" className="text-[hsl(var(--kumkum-red))]">
          <path d="M50,10 L90,50 L50,90 L10,50 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6,3" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10 lg:gap-12">
        {/* Left side - Image section - Hidden on mobile & tablet, visible on desktop */}
        <div className="hidden lg:flex flex-1 w-full max-w-lg order-2 lg:order-1">
          <div className="relative group">
            {/* Decorative ring background */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[hsl(var(--sacred-saffron))] via-[hsl(var(--temple-gold))] to-[hsl(var(--kumkum-red))] opacity-15 blur-2xl scale-105 group-hover:scale-110 transition-transform duration-700"></div>

            {/* Main image with decorative elements */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl transform group-hover:scale-[1.02] transition-all duration-500">
              <img
                src="/cover_pic.png"
                alt="Pilgrims on spiritual journey"
                width={600}
                height={700}
                loading="lazy"
                className="w-full h-[300px] sm:h-[380px] lg:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              {/* Overlay pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            {/* Floating stats cards with enhanced design - Hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-3 sm:-right-6 bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 border-l-4 border-[hsl(var(--sacred-saffron))] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm bg-white/95 z-10">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[hsl(var(--sacred-saffron))]/20 to-[hsl(var(--kumkum-red))]/20 flex items-center justify-center animate-pulse">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[hsl(var(--sacred-saffron))]" />
                </div>
                <div>
                  <div className="text-[hsl(var(--sacred-saffron))] font-['Playfair_Display'] text-2xl sm:text-3xl font-bold leading-tight">
                    1000+
                  </div>
                  <div className="text-[hsl(var(--muted-foreground))] font-['Lato'] text-[10px] sm:text-xs font-medium">
                    Pilgrims
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute -top-4 sm:-top-6 -left-3 sm:-left-6 bg-gradient-to-br from-[hsl(var(--sacred-saffron))] to-[hsl(var(--kumkum-red))] rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 text-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 z-10">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 animate-pulse">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <div className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold leading-tight">
                    25+
                  </div>
                  <div className="font-['Lato'] text-[10px] sm:text-xs font-medium opacity-95">
                    Destinations
                  </div>
                </div>
              </div>
            </div>

            {/* Additional decorative element - experience badge - Hidden on desktop */}
            <div className="hidden md:flex lg:hidden absolute top-1/2 -translate-y-1/2 -left-4 bg-gradient-to-br from-[hsl(var(--temple-gold))] to-[hsl(var(--sacred-saffron))] rounded-full w-16 h-16 flex-col items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 z-10 border-4 border-white">
              <div className="font-['Playfair_Display'] text-lg font-bold leading-none">
                15+
              </div>
              <div className="font-['Lato'] text-[9px] font-semibold mt-0.5">
                YEARS
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content - Full width on mobile, shares width on desktop */}
        <div className="w-full lg:flex-1 order-1 lg:order-2">
          <div className="inline-flex bg-emerald-200 items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-[hsl(var(--sacred-saffron))/15] to-[hsl(var(--kumkum-red))/10] mb-3 sm:mb-4 border border-[hsl(var(--sacred-saffron))/20] hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[hsl(var(--sacred-saffron))]" />
            <span className="text-[hsl(var(--sacred-saffron))] font-['Lato'] font-bold text-xs sm:text-sm tracking-widest">
              ABOUT GUPTHA TRAVELS
            </span>
          </div>

          <h2 className="font-['Playfair_Display'] text-2xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-3 sm:mb-5">
            <span className="text-[hsl(var(--sacred-saffron))]">
              Best Travels in Tirupati -
            </span>
            <br />
            <span className="text-[hsl(var(--kumkum-red))]">
              Your Trusted Pilgrimage Partner
            </span>
          </h2>

          <p className="text-[hsl(var(--muted-foreground))] font-['Lato'] text-sm sm:text-base leading-relaxed mb-6 sm:mb-7 max-w-2xl">
            Guptha Travels is the top rated travel agency in Tirupati with over{" "}
            <span className="text-[hsl(var(--sacred-saffron))] font-bold">
              15 years of service
            </span>
            . We provide affordable Tirupati tour packages, car rentals, and comfortable transportation for pilgrims visiting
            Tirupati Balaji Temple and sacred destinations. Our commitment to excellence and
            customer satisfaction has made us the best travels in Tirupati, serving thousands
            of devotees with professional drivers and 24/7 support.
          </p>

          {/* Achievement stats with enhanced design */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="group text-center p-2 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-white via-[hsl(var(--sacred-saffron))/5] to-white border-2 border-[hsl(var(--sacred-saffron))/20] hover:border-[hsl(var(--sacred-saffron))] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--sacred-saffron))] to-[hsl(var(--temple-gold))] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[hsl(var(--sacred-saffron))]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-[hsl(var(--sacred-saffron))] font-['Playfair_Display'] text-2xl sm:text-3xl lg:text-4xl font-bold mb-0.5 sm:mb-1 group-hover:scale-110 transition-transform duration-300">
                15+
              </div>
              <div className="text-[hsl(var(--muted-foreground))] font-['Lato'] text-[10px] sm:text-xs font-semibold line-clamp-2">
                Years
              </div>
            </div>

            <div className="group text-center p-2 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-white via-[hsl(var(--temple-gold))/5] to-white border-2 border-[hsl(var(--temple-gold))/20] hover:border-[hsl(var(--temple-gold))] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--temple-gold))] to-[hsl(var(--sacred-saffron))] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[hsl(var(--temple-gold))]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-[hsl(var(--temple-gold))] font-['Playfair_Display'] text-2xl sm:text-3xl lg:text-4xl font-bold mb-0.5 sm:mb-1 group-hover:scale-110 transition-transform duration-300">
                5K+
              </div>
              <div className="text-[hsl(var(--muted-foreground))] font-['Lato'] text-[10px] sm:text-xs font-semibold line-clamp-2">
                Journeys
              </div>
            </div>

            <div className="group text-center p-2 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-white via-[hsl(var(--kumkum-red))/5] to-white border-2 border-[hsl(var(--kumkum-red))/20] hover:border-[hsl(var(--kumkum-red))] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--kumkum-red))] to-[hsl(var(--sacred-saffron))] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[hsl(var(--kumkum-red))]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-[hsl(var(--kumkum-red))] font-['Playfair_Display'] text-2xl sm:text-3xl lg:text-4xl font-bold mb-0.5 sm:mb-1 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-[hsl(var(--muted-foreground))] font-['Lato'] text-[10px] sm:text-xs font-semibold line-clamp-2">
                Satisfaction
              </div>
            </div>
          </div>

          {/* Key points with enhanced design */}
          <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-7">
            <div className="group flex items-start gap-3 p-2.5 sm:p-4 rounded-lg sm:rounded-xl hover:bg-gradient-to-r hover:from-[hsl(var(--sacred-saffron))/5] hover:to-transparent transition-all duration-300 hover:shadow-md hover:-translate-x-1 cursor-pointer border-l-4 border-transparent hover:border-[hsl(var(--sacred-saffron))]">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--sacred-saffron))]/20 to-[hsl(var(--kumkum-red))]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300 shadow-sm">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[hsl(var(--sacred-saffron))]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-['Lato'] font-bold text-[hsl(var(--foreground))] text-sm sm:text-base group-hover:text-[hsl(var(--sacred-saffron))] transition-colors">
                  Professional Drivers
                </h4>
                <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] font-['Lato'] leading-tight">
                  Experienced & courteous drivers familiar with all temple
                  routes
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-3 p-2.5 sm:p-4 rounded-lg sm:rounded-xl hover:bg-gradient-to-r hover:from-[hsl(var(--temple-gold))/5] hover:to-transparent transition-all duration-300 hover:shadow-md hover:-translate-x-1 cursor-pointer border-l-4 border-transparent hover:border-[hsl(var(--temple-gold))]">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--temple-gold))]/20 to-[hsl(var(--sacred-saffron))]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300 shadow-sm">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[hsl(var(--temple-gold))]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-['Lato'] font-bold text-[hsl(var(--foreground))] text-sm sm:text-base group-hover:text-[hsl(var(--temple-gold))] transition-colors">
                  Clean & Modern Fleet
                </h4>
                <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] font-['Lato'] leading-tight">
                  Well-maintained AC vehicles regularly serviced for comfort
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-3 p-2.5 sm:p-4 rounded-lg sm:rounded-xl hover:bg-gradient-to-r hover:from-[hsl(var(--kumkum-red))/5] hover:to-transparent transition-all duration-300 hover:shadow-md hover:-translate-x-1 cursor-pointer border-l-4 border-transparent hover:border-[hsl(var(--kumkum-red))]">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--kumkum-red))]/20 to-[hsl(var(--sacred-saffron))]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300 shadow-sm">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[hsl(var(--kumkum-red))]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-['Lato'] font-bold text-[hsl(var(--foreground))] text-sm sm:text-base group-hover:text-[hsl(var(--kumkum-red))] transition-colors">
                  Transparent Pricing
                </h4>
                <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] font-['Lato'] leading-tight">
                  No hidden costs - honest & affordable pricing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
