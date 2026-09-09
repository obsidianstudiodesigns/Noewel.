import React, { useState } from 'react';
import { SERVICES, BUSINESS_INFO } from '../data/services';
import { Sun, Clock, Droplets, Sparkles, Check, MessageCircle, Calendar } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'tanning' | 'makeup'>('all');

  const filteredServices = selectedFilter === 'all' 
    ? SERVICES 
    : SERVICES.filter((s) => s.category === selectedFilter || (selectedFilter === 'tanning' && s.id === 'luxe-combo'));

  const sprayTanService = SERVICES.find((s) => s.id === 'spray-tan')!;

  return (
    <section id="services" className="py-24 relative bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D9C099] bg-[#F7F2EB] text-[#8C6D37] text-xs font-semibold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Service Menu & Rates</span>
          </div>
          <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2420]">
            Artistry & Sun-Kissed Perfection
          </h2>
          <p className="text-base text-[#61544C] font-light max-w-xl mx-auto">
            Transparent pricing for bespoke makeup transformations and luxury spray tanning in Kroonstad.
          </p>
        </div>

        {/* FEATURED HERO SPOTLIGHT: Flyer 2 - Professional Spray Tan */}
        <div className="mb-20 rounded-3xl bg-gradient-to-br from-[#FAF5EE] via-[#F4ECE0] to-[#EFE4D4] border border-[#DFCBB0] p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#E8D4B8]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Image from Flyer 2 */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-[#D8C09A] shadow-lg aspect-[3/4] relative bg-[#EADCCB]">
                <img
                  src="images/spray-tan.jpg"
                  alt="Noewel Sun-kissed Glow Professional Spray Tan"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#FAF7F2]/95 border border-[#D6BC94] text-[10px] uppercase font-bold tracking-widest text-[#8C6D37]">
                  Signature Treatment
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                  <span className="font-script-luxury text-3xl sm:text-4xl text-[#F9EAD1] drop-shadow-md">
                    Sun-kissed GLOW
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Authentic Data Extracted from Flyer 2 */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-1">
                <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#8C6D37]">
                  NOEWEL. Luxury Beauty
                </span>
                <h3 className="font-display-luxury text-3xl sm:text-4xl font-bold text-[#2A231E]">
                  Professional Spray Tan
                </h3>
                <p className="font-serif-luxury text-xl sm:text-2xl text-[#4A3D36] italic">
                  "A flawless, natural looking tan that enhances your confidence."
                </p>
              </div>

              {/* Price Callout */}
              <div className="inline-flex items-baseline gap-3 py-2 px-6 rounded-2xl bg-[#FAF7F2] border border-[#D9C4A1] shadow-xs">
                <span className="text-xs uppercase tracking-widest text-[#695B52]">Only</span>
                <span className="font-display-luxury text-4xl sm:text-5xl font-bold text-[#8C6D37]">
                  R380
                </span>
                <span className="text-xs uppercase tracking-wider text-[#695B52]">Per Spray Tan</span>
              </div>

              {/* 3 Pillar Features from Flyer 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FAF7F2]/90 border border-[#E2D1BD] text-center space-y-2">
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#F3E7D6] flex items-center justify-center text-[#9C7537]">
                    <Sun className="w-5 h-5" />
                  </div>
                  <h4 className="font-display-luxury text-xs font-bold uppercase tracking-wider text-[#3B3029]">
                    Natural Glow
                  </h4>
                  <p className="text-[11px] text-[#695C53] leading-tight">
                    Golden undertones with zero orange cast or patchy fade.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF7F2]/90 border border-[#E2D1BD] text-center space-y-2">
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#F3E7D6] flex items-center justify-center text-[#9C7537]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="font-display-luxury text-xs font-bold uppercase tracking-wider text-[#3B3029]">
                    Long Lasting Results
                  </h4>
                  <p className="text-[11px] text-[#695C53] leading-tight">
                    Lasts 7 to 10 days with effortless, natural wear-off.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF7F2]/90 border border-[#E2D1BD] text-center space-y-2">
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#F3E7D6] flex items-center justify-center text-[#9C7537]">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <h4 className="font-display-luxury text-xs font-bold uppercase tracking-wider text-[#3B3029]">
                    Hydrating & Nourishing
                  </h4>
                  <p className="text-[11px] text-[#695C53] leading-tight">
                    Infused with skin-loving botanicals for silky smooth touch.
                  </p>
                </div>
              </div>

              {/* Call to action */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  onClick={() => onSelectServiceForBooking(sprayTanService)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#B88B43] to-[#C9A255] text-white text-xs font-semibold uppercase tracking-[0.2em] shadow-md hover:shadow-lg hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer"
                  id="spray-tan-book-glow-btn"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book Your Glow: 063 227 1637</span>
                </button>

                <span className="text-xs text-[#6B5D55]">
                  Quick 30 min session · Preparation guide provided upon booking
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-[#EFE7DC] border border-[#DECBB3]">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-[#FAF7F2] text-[#2C2420] shadow-sm font-semibold'
                  : 'text-[#6E6157] hover:text-[#2C2420]'
              }`}
            >
              All Offerings
            </button>
            <button
              onClick={() => setSelectedFilter('tanning')}
              className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === 'tanning'
                  ? 'bg-[#FAF7F2] text-[#2C2420] shadow-sm font-semibold'
                  : 'text-[#6E6157] hover:text-[#2C2420]'
              }`}
            >
              Tanning Services
            </button>
            <button
              onClick={() => setSelectedFilter('makeup')}
              className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === 'makeup'
                  ? 'bg-[#FAF7F2] text-[#2C2420] shadow-sm font-semibold'
                  : 'text-[#6E6157] hover:text-[#2C2420]'
              }`}
            >
              Makeup Artistry
            </button>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl bg-[#FAF7F2] border transition-all duration-300 flex flex-col justify-between overflow-hidden relative group hover:-translate-y-1 hover:shadow-xl ${
                service.popular
                  ? 'border-[#CBA55B] shadow-md ring-1 ring-[#CBA55B]/40'
                  : 'border-[#E7D7C1] shadow-xs'
              }`}
              id={`service-card-${service.id}`}
            >
              {/* Popular / Flyer Badge */}
              {service.flyerHighlight && (
                <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-[#B88B43] text-white text-[10px] font-bold uppercase tracking-widest shadow-xs">
                  {service.flyerHighlight}
                </div>
              )}

              {/* Service Thumbnail Header */}
              {service.image && (
                <div className="h-48 w-full overflow-hidden bg-[#EFE8DD] relative">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent" />
                </div>
              )}

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display-luxury text-lg font-bold text-[#2A231E]">
                      {service.name}
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="font-display-luxury text-2xl font-bold text-[#8C6D37]">
                      {service.price}
                    </span>
                    {service.priceNote && (
                      <span className="text-xs text-[#736459] font-light">
                        ({service.priceNote})
                      </span>
                    )}
                    {service.duration && (
                      <span className="ml-auto text-[11px] text-[#85766C] px-2 py-0.5 rounded-full bg-[#F3E8DB]">
                        {service.duration}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C5047] font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2 pt-2 border-t border-[#EFE5D8]">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-[#8C6D37]">
                    Includes:
                  </p>
                  <ul className="space-y-1.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#4F443D]">
                        <Check className="w-3.5 h-3.5 text-[#B88B43] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Button */}
                <div className="pt-4">
                  <button
                    onClick={() => onSelectServiceForBooking(service)}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FAF7F2] border border-[#CBA55B] text-[#7A5B22] hover:bg-[#B88B43] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    id={`book-btn-${service.id}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Book on WhatsApp</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
