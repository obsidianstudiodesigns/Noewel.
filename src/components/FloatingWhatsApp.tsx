import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Floating Tooltip */}
      <div className="hidden sm:block px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#D6BC94] text-[#2C2420] text-xs shadow-lg animate-pulse">
        <span className="font-medium text-[#8A5E22]">Book Your Glow</span> · WhatsApp
      </div>

      {/* Floating WhatsApp Action Button */}
      <button
        onClick={onOpenBooking}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#1ebe5d] text-white shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer"
        aria-label="Book on WhatsApp"
        id="floating-whatsapp-trigger"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white text-transparent drop-shadow-sm" />
      </button>
    </div>
  );
};
