import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowDown, Phone, MapPin, Eye, EyeOff } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';
import desktopWallpaper from '../assets/images/landing page.jpg';
import mobileWallpaper from '../assets/images/landing page mobile.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-10"
    >
      {/* Responsive First Page Wallpaper:
          - landing page mobile.jpg for mobile phones and devices (< 768px)
          - landing page.jpg for desktop version wallpaper (>= 768px)
      */}
      <div className="absolute inset-0 w-full h-full -z-10 bg-[#251E1A] overflow-hidden">
        <picture className="w-full h-full block">
          {/* Mobile phones and handheld devices */}
          <source media="(max-width: 767px)" srcSet={mobileWallpaper} />
          {/* Desktop and larger screens */}
          <source media="(min-width: 768px)" srcSet={desktopWallpaper} />
          <img
            src={desktopWallpaper}
            alt="Noewel Professional Makeup & Tanning - First Page Wallpaper"
            className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000"
            referrerPolicy="no-referrer"
            id="hero-first-page-wallpaper"
          />
        </picture>

        {/* Subtle Luxury Gradient Vignette for Contrast & Readability */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
            showOverlay
              ? 'bg-gradient-to-t from-black/75 via-black/30 to-black/45 md:from-black/70 md:via-black/25 md:to-black/35'
              : 'bg-black/10'
          }`}
        />
      </div>

      {/* Floating Wallpaper Controls (View Full Image Toggle) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end z-10 pt-2">
        <button
          onClick={() => setShowOverlay(!showOverlay)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white/90 hover:text-white backdrop-blur-md border border-white/20 text-[11px] uppercase tracking-wider transition-all shadow-md cursor-pointer"
          title={showOverlay ? 'Hide text overlay to view full wallpaper' : 'Show booking details'}
          id="toggle-wallpaper-overlay-btn"
        >
          {showOverlay ? (
            <>
              <Eye className="w-3.5 h-3.5 text-[#E6C687]" />
              <span className="hidden sm:inline">View Clean Wallpaper</span>
              <span className="sm:hidden">Clean View</span>
            </>
          ) : (
            <>
              <EyeOff className="w-3.5 h-3.5 text-[#E6C687]" />
              <span>Show Details</span>
            </>
          )}
        </button>
      </div>

      {/* Main Interactive Content Layer */}
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto transition-all duration-500 ${
          showOverlay ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'
        }`}
      >
        <div className="max-w-3xl mx-auto md:mx-0 space-y-5 text-center md:text-left py-6">
          
          {/* Haute Beauty Location Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-[#E6C687]/40 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#E6C687]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F3DEB8]">
              Kroonstad, Free State · Haute Artistry
            </span>
          </div>

          {/* Editorial Heading */}
          <div className="space-y-2 drop-shadow-md">
            <h2 className="font-script-luxury text-3xl sm:text-5xl text-[#F5DCAC] italic font-normal tracking-wide">
              Timeless Radiance & Natural Glow
            </h2>
            <h1 className="font-display-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Professional Makeup <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7E2B8] via-[#E2B768] to-[#CD9A48]">
                & Sun-Kissed Tanning
              </span>
            </h1>
          </div>

          {/* Luxury Description */}
          <p className="text-sm sm:text-base lg:text-lg text-white/90 font-light leading-relaxed max-w-xl mx-auto md:mx-0 drop-shadow-sm">
            Welcome to <strong className="font-semibold text-white">NOEWEL</strong> by Marcelle Klopper. 
            Bespoke bridal artistry, matric farewell glam, and natural streak-free spray tanning 
            in Kroonstad crafted to let your natural beauty illuminate.
          </p>

          {/* Direct WhatsApp Booking & Exploration Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3.5 pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#C29548] via-[#D8AD5D] to-[#BF9144] text-white text-xs font-semibold uppercase tracking-[0.22em] shadow-xl hover:shadow-2xl hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer"
              id="hero-book-glow-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Glow via WhatsApp</span>
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/30 text-xs font-medium uppercase tracking-[0.2em] transition-all"
              id="hero-view-services-btn"
            >
              <span>Explore Services & Rates</span>
            </a>
          </div>

          {/* Quick Rates Highlight Bar */}
          <div className="pt-4 border-t border-white/20 grid grid-cols-3 gap-3 max-w-md mx-auto md:mx-0 text-center md:text-left">
            <div className="bg-black/30 backdrop-blur-xs p-2.5 rounded-lg border border-white/10">
              <span className="block font-display-luxury text-base sm:text-lg font-bold text-[#F3DEB8]">R380</span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/80">Spray Tan</span>
            </div>
            <div className="bg-black/30 backdrop-blur-xs p-2.5 rounded-lg border border-white/10">
              <span className="block font-display-luxury text-base sm:text-lg font-bold text-[#F3DEB8]">R150</span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/80">Tanning Lotion</span>
            </div>
            <div className="bg-black/30 backdrop-blur-xs p-2.5 rounded-lg border border-white/10">
              <span className="block font-display-luxury text-base sm:text-lg font-bold text-[#F3DEB8]">From R420</span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/80">Special Glam</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Studio Address & Scroll Indicator */}
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 transition-all duration-500 ${
          showOverlay ? 'opacity-100' : 'opacity-80'
        }`}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/15 text-white/80 text-xs">
          
          <div className="flex items-center gap-4 text-[11px] tracking-wider uppercase">
            <span className="inline-flex items-center gap-1.5 text-white/90">
              <MapPin className="w-3.5 h-3.5 text-[#E6C687]" />
              {BUSINESS_INFO.address}, {BUSINESS_INFO.city}
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors text-white/90"
            >
              <Phone className="w-3.5 h-3.5 text-[#E6C687]" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>

          <a
            href="#about"
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#F3DEB8] hover:text-white transition-colors"
            id="hero-scroll-prompt"
          >
            <span>Scroll to Discover</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#E6C687] group-hover:translate-y-1 transition-transform animate-bounce-subtle" />
          </a>
        </div>
      </div>
    </section>
  );
};

