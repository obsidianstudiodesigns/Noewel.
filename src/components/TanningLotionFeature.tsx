import React from 'react';
import { Sparkles, Shield, Heart, Droplet, Sun, Check, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';

interface TanningLotionFeatureProps {
  onOrderLotion: () => void;
}

export const TanningLotionFeature: React.FC<TanningLotionFeatureProps> = ({ onOrderLotion }) => {
  return (
    <section id="tanning-lotion-feature" className="py-24 relative bg-[#FAF7F2] overflow-hidden border-t border-[#EBDBC6]">
      {/* Decorative Warm Ambient Elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#EFE2D1]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E8D4BB]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Luxury Gold Border Showcase Frame */}
        <div className="rounded-3xl bg-gradient-to-br from-[#FAF5EE] via-[#F6ECE0] to-[#EFE2CE] border border-[#DFC8A8] p-8 sm:p-12 lg:p-16 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Product Image Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                
                {/* Decorative Frame */}
                <div className="absolute -inset-3 rounded-3xl border border-[#D9BF97]/60 -z-10 transform -rotate-2" />
                
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#D8C09A] bg-[#FAF7F2] aspect-square">
                  <img
                    src="images/tanning-lotion.jpg"
                    alt="Noewel Premium Sunbed Tanning Lotion"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Price Sticker matching Flyer 1 "ONLY R150" */}
                <div className="absolute -top-4 -right-4 sm:-right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FAF7F2] border-2 border-[#C69A4C] shadow-xl flex flex-col items-center justify-center text-center p-2 transform rotate-6">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#786457]">
                    Only
                  </span>
                  <span className="font-display-luxury text-2xl sm:text-3xl font-bold text-[#8C6D37] leading-none">
                    R150
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-[#8C7B70] mt-0.5">
                    100ml Bottle
                  </span>
                </div>

              </div>
            </div>

            {/* Right: Data extracted directly from Flyer 1 */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <h3 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A231E] leading-tight">
                  Premium Sunbed <br />
                  <span className="gold-gradient-text">Tanning Lotion</span>
                </h3>

                <p className="font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] text-[#916E34]">
                  Collagen Boost + UV Tan Enhancer
                </p>
              </div>

              {/* Tagline from Flyer */}
              <div className="p-4 rounded-xl bg-[#FAF7F2]/90 border-l-4 border-[#C69A4C] shadow-xs">
                <p className="font-serif-luxury text-lg sm:text-xl italic text-[#473B33]">
                  "Boosts collagen synthesis for a deep, long-lasting UV tan. Enhance your tan. Nourish your skin. Glow with Noewel."
                </p>
              </div>

              {/* 2 Core Dual-Action Benefits from Flyer */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E0CFB9] space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-[#9C7537]">
                    <Sparkles className="w-4 h-4" />
                    <h4 className="font-display-luxury text-xs font-bold uppercase tracking-wider text-[#362B25]">
                      Collagen Boost
                    </h4>
                  </div>
                  <p className="text-xs text-[#63554B] leading-relaxed">
                    Supports natural collagen synthesis for noticeably firmer, plumper, and healthier skin during exposure.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E0CFB9] space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-[#9C7537]">
                    <Sun className="w-4 h-4" />
                    <h4 className="font-display-luxury text-xs font-bold uppercase tracking-wider text-[#362B25]">
                      Enhanced Tanning
                    </h4>
                  </div>
                  <p className="text-xs text-[#63554B] leading-relaxed">
                    Accelerates natural melanin production for a rich, uniform, deeper sunbed bronze in less time.
                  </p>
                </div>
              </div>

              {/* Clean Formulation Seals from Flyer */}
              <div className="pt-2 border-t border-[#E5D2B8] flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#52443C] font-medium">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#8C6D37]" />
                  <span>Paraben Free</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#8C6D37]" />
                  <span>Cruelty Free</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Droplet className="w-4 h-4 text-[#8C6D37]" />
                  <span>Suitable for All Skin Types</span>
                </div>
              </div>

              {/* WhatsApp Order Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOrderLotion}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#B88B43] via-[#C99F53] to-[#BA8D45] text-white text-xs font-semibold uppercase tracking-[0.2em] shadow-lg hover:shadow-xl hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer"
                  id="order-lotion-btn"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp to Order: 063 227 1637</span>
                </button>
                <span className="text-xs text-[#736357]">
                  Available for studio pickup in Kroonstad or local delivery
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
