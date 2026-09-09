import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#241E1B] text-[#D4C7BC] pt-16 pb-12 border-t border-[#3D332D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#3D332D]">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-start">
              <Logo variant="full" size="md" className="items-start" />
            </div>
            <p className="text-xs text-[#A89A8E] leading-relaxed font-light">
              Timeless beauty, effortless elegance, and elevated professional makeup and spray tanning artistry in Kroonstad, South Africa.
            </p>
            <div className="pt-2 text-[11px] text-[#8C7D72]">
              Founded by Marcelle Klopper.
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-display-luxury text-xs font-bold uppercase tracking-[0.2em] text-[#C9A255]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#B5A599]">
              <li>
                <a href="#home" className="hover:text-[#E2C582] transition-colors">Home Landing</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E2C582] transition-colors">A Beautiful New Beginning (About)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#E2C582] transition-colors">Professional Spray Tan (R380)</a>
              </li>
              <li>
                <a href="#workbook" className="hover:text-[#E2C582] transition-colors">Client Workbook (Before & After)</a>
              </li>
              <li>
                <a href="#tanning-lotion-feature" className="hover:text-[#E2C582] transition-colors">Sunbed Tanning Lotion (R150)</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E2C582] transition-colors">Kroonstad Studio Location</a>
              </li>
            </ul>
          </div>

          {/* Services & Offerings */}
          <div className="space-y-3">
            <h4 className="font-display-luxury text-xs font-bold uppercase tracking-[0.2em] text-[#C9A255]">
              Artistry Menu
            </h4>
            <ul className="space-y-2 text-xs text-[#B5A599]">
              <li>Professional Spray Tan — <span className="text-[#E2C582]">R380</span></li>
              <li>Sunbed Tanning Lotion (100ml) — <span className="text-[#E2C582]">R150</span></li>
              <li>Bridal Glam & Trial Consultation — <span className="text-[#E2C582]">R650</span></li>
              <li>Matric Farewell Glam — <span className="text-[#E2C582]">R450</span></li>
              <li>Evening & Event Makeup — <span className="text-[#E2C582]">R420</span></li>
              <li>Luxe Glow (Tan + Full Glam) — <span className="text-[#E2C582]">R750</span></li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="space-y-3">
            <h4 className="font-display-luxury text-xs font-bold uppercase tracking-[0.2em] text-[#C9A255]">
              Contact Details
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B5A599]">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C9A255] shrink-0 mt-0.5" />
                <span>Kiepersol Street, Kroonstad, South Africa</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C9A255] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-[#E2C582] transition-colors">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C9A255] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#E2C582] transition-colors break-all">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#A8998C] hover:text-[#C9A255] transition-colors cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Credit Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#786C63] gap-4">
          <div>
            © {new Date().getFullYear()} Noewel. All rights reserved. Professional Makeup & Tanning Artistry.
          </div>

          <div className="flex items-center gap-1">
            <span>Designed & Built with elegance for Noewel by</span>
            <a
              href="https://obsidianstudiodesigns.github.io/Noewel./"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A255] hover:underline font-medium"
            >
              Obsidian Studio Designs
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
