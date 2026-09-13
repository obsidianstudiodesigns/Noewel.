import React from 'react';
import { Logo } from './Logo';
import { Heart, Award, CheckCircle } from 'lucide-react';
import { ABOUT_STORY, BUSINESS_INFO } from '../data/services';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-[#F7F2EB]/70 overflow-hidden border-y border-[#EADBCA]/60">
      {/* Decorative Warm Ambient Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-[#EEDDC4]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-[#EADBCA]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Luxury Invitation Letter Card */}
        <div className="relative rounded-3xl bg-[#FAF7F2] p-8 sm:p-12 lg:p-16 border border-[#DFCBB0] shadow-xl text-center">
          
          {/* Inner Decorative Corner Filigree Borders */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#B07B38]/60 rounded-tl-lg pointer-events-none" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#B07B38]/60 rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#B07B38]/60 rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#B07B38]/60 rounded-br-lg pointer-events-none" />

          {/* Centered Brand Emblem */}
          <div className="flex justify-center mb-6">
            <Logo variant="full" size="lg" />
          </div>

          {/* Subheading / Title */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2420] tracking-tight">
              {ABOUT_STORY.title}
            </h2>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 max-w-xs mx-auto mb-8">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#B07B38] to-transparent w-full" />
            <span className="text-[#B07B38] text-xs">✦</span>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#B07B38] to-transparent w-full" />
          </div>

          {/* The Vision & Story */}
          <div className="max-w-2xl mx-auto space-y-6 text-[#4A3E36] leading-relaxed text-base sm:text-lg font-light">
            <p className="text-[#3A2F28] font-normal leading-relaxed">
              {ABOUT_STORY.paragraph1}
            </p>

            <p className="leading-relaxed">
              {ABOUT_STORY.paragraph2}
            </p>

            <p className="leading-relaxed">
              {ABOUT_STORY.paragraph3}
            </p>

            <p className="font-serif-luxury text-lg sm:text-xl text-[#8A5E22] italic font-medium pt-2">
              {ABOUT_STORY.tagline}
            </p>
          </div>

          {/* Signature Sign-off */}
          <div className="mt-12 pt-8 border-t border-[#EBDBC6] max-w-md mx-auto space-y-2">
            <span className="font-script-luxury text-3xl text-[#936425]">
              {ABOUT_STORY.signoff}
            </span>
            <h3 className="font-display-luxury text-xl font-bold tracking-[0.25em] text-[#2C2420]">
              {ABOUT_STORY.brand}
            </h3>
            <p className="text-xs tracking-widest uppercase text-[#876F58]">
              Marcelle Van Wyk · Kroonstad, South Africa
            </p>
          </div>

          {/* Pillars */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-6 border-t border-[#F0E2D1]">
            <div className="p-4 rounded-xl bg-[#F7F1E7]/50 border border-[#EBDCC8] flex items-start gap-3">
              <Award className="w-5 h-5 text-[#A8752D] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display-luxury text-xs font-bold uppercase tracking-wider text-[#3D332D]">
                  Bespoke Color Harmony
                </h4>
                <p className="text-xs text-[#6B5E55] mt-1 leading-normal">
                  Custom-tailored tan shades and personalized makeup palette matching your exact skin undertone.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F1E7]/50 border border-[#EBDCC8] flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#A8752D] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display-luxury text-xs font-bold uppercase tracking-wider text-[#3D332D]">
                  High-End & Sophisticated
                </h4>
                <p className="text-xs text-[#6B5E55] mt-1 leading-normal">
                  Exceptional beauty products, refined artistry and flawless, long-lasting results.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F1E7]/50 border border-[#EBDCC8] flex items-start gap-3">
              <Heart className="w-5 h-5 text-[#A8752D] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display-luxury text-xs font-bold uppercase tracking-wider text-[#3D332D]">
                  Elevated Client Sanctuary
                </h4>
                <p className="text-xs text-[#6B5E55] mt-1 leading-normal">
                  A calming, high-end private environment where you are pampered and celebrated.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
