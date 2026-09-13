import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Calendar } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/services';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services & Rates', href: '#services' },
    { label: 'Client Workbook', href: '#workbook' },
    { label: 'Tanning Lotions', href: '#tanning-lotion-feature' },
    { label: 'Find Us', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm py-2.5 border-b border-[#EBDCC8]/60'
          : 'bg-gradient-to-b from-[#FAF7F2]/90 via-[#FAF7F2]/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            className="group flex items-center gap-3 shrink-0 transition-opacity hover:opacity-90"
            id="nav-logo-link"
          >
            <Logo variant="full" size="sm" />
            <div className="hidden sm:flex flex-col border-l border-[#D6BC94]/50 pl-3">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#8A5E22] font-medium font-sans">
                Professional
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-[#3D3530] font-light font-sans">
                Makeup & Tanning
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] text-[#4A403A] hover:text-[#A8752D] font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#A8752D] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs tracking-wider uppercase text-[#594B41] hover:text-[#A8752D] transition-colors"
              title="Call Marcelle"
              id="nav-call-btn"
            >
              <Phone className="w-3.5 h-3.5 text-[#A8752D]" />
              <span className="font-medium">{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-noewel-gold text-white text-xs font-semibold uppercase tracking-[0.18em] shadow-md hover:shadow-lg  active:scale-[0.98] transition-all cursor-pointer"
              id="nav-book-btn"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="p-2 rounded-full bg-[#A8752D] text-white shadow-sm "
              title="Book Appointment"
              id="mobile-quick-book-btn"
            >
              <Calendar className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#4A403A] hover:text-[#A8752D] focus:outline-none"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden bg-[#FAF7F2] border-b border-[#EADDCB] px-6 pt-4 pb-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200"
          id="mobile-drawer"
        >
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-[0.15em] uppercase text-[#4A403A] hover:text-[#A8752D] py-2 border-b border-[#F0E4D4]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#A8752D] text-white text-xs font-semibold uppercase tracking-[0.18em] shadow-md"
              id="mobile-drawer-book-btn"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#D6BC94] text-[#4A403A] text-xs font-medium uppercase tracking-wider"
              id="mobile-drawer-call-btn"
            >
              <Phone className="w-4 h-4 text-[#A8752D]" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
