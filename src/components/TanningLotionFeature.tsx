import React from 'react';
import { Sparkles, Shield, Heart, Droplet, Sun, Flame, MessageCircle, AlertTriangle } from 'lucide-react';

interface TanningLotionFeatureProps {
  onOrderLotion: (productId: 'tanning-lotion' | 'hot-tingle-lotion') => void;
}

export const TanningLotionFeature: React.FC<TanningLotionFeatureProps> = ({ onOrderLotion }) => {
  return (
    <section id="tanning-lotion-feature" className="py-24 relative bg-[#FAF7F2] overflow-hidden border-t border-[#EBDBC6]">
      {/* Decorative Warm Ambient Elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#EFE2D1]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E8D4BB]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2420]">
            Noewel Tanning Lotions
          </h2>
          <p className="text-base text-[#61544C] font-light max-w-xl mx-auto">
            Premium 100ml sunbed lotions — available for studio pickup in Kroonstad or local delivery.
          </p>
        </div>

        {/* ——— Product 1: Premium Sunbed Tanning Lotion (Flyer 1) ——— */}
        <div className="rounded-3xl bg-gradient-to-br from-[#FAF5EE] via-[#F6ECE0] to-[#EFE2CE] border border-[#DFC8A8] p-8 sm:p-12 lg:p-16 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left: Product Bottle */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                <div className="absolute -inset-3 rounded-3xl border border-[#D2AE7C]/60 -z-10 transform -rotate-2" />

                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#D2AE7C] bg-gradient-to-b from-[#F7E7D6] via-[#F1DEC8] to-[#E6D0B6] aspect-[4/5] flex items-end justify-center pt-8 relative">
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#D9C1A2]/70 to-transparent" />
                  <img
                    src="images/sunbed-lotion-bottle.png"
                    alt="Noewel Premium Sunbed Tanning Lotion 100ml bottle"
                    className="relative h-[92%] w-auto object-contain drop-shadow-[0_18px_18px_rgba(80,50,20,0.3)] transform hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Price Sticker "ONLY R150" */}
                <div className="absolute -top-4 -right-4 sm:-right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FAF7F2] border-2 border-[#A8752D] shadow-xl flex flex-col items-center justify-center text-center p-2 transform rotate-6">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#786457]">Only</span>
                  <span className="font-display-luxury text-2xl sm:text-3xl font-bold text-[#8A5E22] leading-none">R150</span>
                  <span className="text-[9px] uppercase tracking-wider text-[#8C7B70] mt-0.5">100ml Bottle</span>
                </div>
              </div>
            </div>

            {/* Right: Data from Flyer 1 */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <h3 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A231E] leading-tight">
                  Premium Sunbed <br />
                  <span className="gold-gradient-text">Tanning Lotion</span>
                </h3>
                <p className="font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] text-[#8A5E22]">
                  Collagen Boost + UV Tan Enhancer
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2]/90 border-l-4 border-[#A8752D] shadow-xs">
                <p className="font-serif-luxury text-lg sm:text-xl italic text-[#473B33]">
                  "Boosts collagen synthesis for a deep, long-lasting UV tan. Enhance your tan. Nourish your skin. Glow with Noewel."
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E0CFB9] space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-[#936425]">
                    <Sparkles className="w-4 h-4" />
                    <h4 className="font-display-luxury text-xs font-bold uppercase tracking-wider text-[#362B25]">Collagen Boost</h4>
                  </div>
                  <p className="text-xs text-[#63554B] leading-relaxed">
                    Supports natural collagen for firmer, healthier skin.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E0CFB9] space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-[#936425]">
                    <Sun className="w-4 h-4" />
                    <h4 className="font-display-luxury text-xs font-bold uppercase tracking-wider text-[#362B25]">Enhanced Tanning</h4>
                  </div>
                  <p className="text-xs text-[#63554B] leading-relaxed">
                    Accelerates melanin production for a deeper, darker tan.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E5D2B8] flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#52443C] font-medium">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#8A5E22]" />
                  <span>Paraben Free</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#8A5E22]" />
                  <span>Cruelty Free</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Droplet className="w-4 h-4 text-[#8A5E22]" />
                  <span>Suitable for All Skin Types</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onOrderLotion('tanning-lotion')}
                  className="btn-noewel-gold w-full sm:w-auto sm:whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white text-xs font-semibold uppercase tracking-[0.2em] shadow-lg hover:shadow-xl active:scale-[0.99] transition-all cursor-pointer"
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

        {/* ——— Product 2: HOT Tingle Tanning Lotion (Flyer 3) ——— */}
        <div
          id="hot-tingle-lotion-feature"
          className="rounded-3xl bg-gradient-to-br from-[#F6E7DA] via-[#EFD9C6] to-[#E3C6AC] border border-[#D2AE7C] p-8 sm:p-12 lg:p-16 shadow-2xl relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left (desktop right): Data from Flyer 3 */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div className="space-y-2">
                <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#8A5E22]">
                  NOEWEL. · Beauty Beyond the Ordinary
                </span>
                <h3 className="font-display-luxury text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2A231E] leading-tight">
                  <span className="gold-gradient-text">HOT</span>
                </h3>
                <p className="font-script-luxury text-4xl sm:text-5xl text-[#3A2F28] leading-none">
                  ~ Tingle Tanning
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2]/90 border-l-4 border-[#A8752D] shadow-xs space-y-2">
                <h4 className="font-serif-luxury text-xl sm:text-2xl font-semibold text-[#7F5319]">
                  Bronzers ensure
                </h4>
                <p className="text-sm text-[#473B33] leading-relaxed">
                  Extraordinary tanning results and special heat complex stimulates the blood flow making your skin
                  feel warm and activated, this assists with the deep dark tanning process. Added vitamins A, C, E, F
                  and jojoba oil for a rich deep dark long-lasting tan and skin care.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E0CFB9] text-center space-y-2 shadow-xs">
                  <div className="w-10 h-10 mx-auto rounded-full border border-[#A8752D] flex items-center justify-center text-[#8A5E22]">
                    <Sun className="w-5 h-5" />
                  </div>
                  <h4 className="font-display-luxury text-xs font-bold uppercase tracking-wider text-[#362B25]">Deep Dark Tan</h4>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E0CFB9] text-center space-y-2 shadow-xs">
                  <div className="w-10 h-10 mx-auto rounded-full border border-[#A8752D] flex items-center justify-center text-[#8A5E22]">
                    <Flame className="w-5 h-5" />
                  </div>
                  <h4 className="font-display-luxury text-xs font-bold uppercase tracking-wider text-[#362B25]">Heat Activated</h4>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E0CFB9] text-center space-y-2 shadow-xs">
                  <div className="w-10 h-10 mx-auto rounded-full border border-[#A8752D] flex items-center justify-center text-[#8A5E22]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-display-luxury text-xs font-bold uppercase tracking-wider text-[#362B25]">Radiant Glow</h4>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs text-[#6B3F1D] bg-[#FAF1E6] border border-[#E3C6A4] rounded-lg px-3 py-2">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>This hyper tingle lotion is not for sensitive skin.</span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onOrderLotion('hot-tingle-lotion')}
                  className="btn-noewel-gold w-full sm:w-auto sm:whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white text-xs font-semibold uppercase tracking-[0.2em] shadow-lg hover:shadow-xl active:scale-[0.99] transition-all cursor-pointer"
                  id="order-hot-tingle-btn"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp to Order: 063 227 1637</span>
                </button>
                <span className="font-display-luxury text-[11px] uppercase tracking-[0.3em] text-[#6E5A4B]">
                  Glow Hotter · Darker. Bolder. You.
                </span>
              </div>
            </div>

            {/* Product Bottle */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative max-w-sm w-full">
                <div className="absolute -inset-3 rounded-3xl border border-[#C9A27A]/60 -z-10 transform rotate-2" />

                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#C9A27A] bg-gradient-to-b from-[#EBD3BD] via-[#E2C3A6] to-[#CFAE8C] aspect-[4/5] flex items-end justify-center pt-10 relative">
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#BF9C78]/70 to-transparent" />
                  <img
                    src="images/hot-tingle-bottle.png"
                    alt="Noewel HOT Tingle Tanning Lotion 100ml bottle"
                    className="relative h-[90%] w-auto object-contain drop-shadow-[0_18px_18px_rgba(60,35,15,0.35)] transform hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Price Sticker R220 (dark bronze, as on Flyer 3) */}
                <div className="absolute -top-4 -right-4 sm:-right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#5A3A22] to-[#2E1F16] border-2 border-[#C08A45] shadow-xl flex flex-col items-center justify-center text-center p-2 transform rotate-6">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#E8CFA8]">Only</span>
                  <span className="font-display-luxury text-2xl sm:text-3xl font-bold text-[#F6E3C3] leading-none">R220</span>
                  <span className="text-[9px] uppercase tracking-wider text-[#D9BE98] mt-0.5">100ml Bottle</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
