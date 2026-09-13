import React, { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';

const STORAGE_KEY = 'noewel-cookie-notice-dismissed';

interface CookieBannerProps {
  onOpenPolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPolicy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(localStorage.getItem(STORAGE_KEY) !== '1');
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* storage unavailable: just hide for this visit */
    }
    setVisible(false);
  };

  return (
    <div className="fixed bottom-24 sm:bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-40 rounded-2xl bg-[#241E1B]/95 backdrop-blur-md border border-[#5A4A3E] shadow-2xl p-4 text-[#E9DDD1]" role="region" aria-label="Cookie notice">
      <div className="flex items-start gap-3">
        <Cookie className="w-5 h-5 text-[#DDB27A] shrink-0 mt-0.5" />
        <div className="space-y-3">
          <p className="text-xs leading-relaxed">
            We don't use tracking or advertising cookies. This site loads Google Fonts and an OpenStreetMap map, and bookings are sent via WhatsApp.{' '}
            <button onClick={onOpenPolicy} className="underline text-[#DDB27A] hover:text-[#F3D3A6] cursor-pointer">
              Read our Privacy & Cookie notice
            </button>
            .
          </p>
          <button
            onClick={dismiss}
            className="btn-noewel-gold px-5 py-2 rounded-full text-white text-[11px] font-semibold uppercase tracking-wider cursor-pointer"
          >
            OK, got it
          </button>
        </div>
      </div>
    </div>
  );
};
