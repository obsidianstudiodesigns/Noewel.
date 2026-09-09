import React, { useState } from 'react';
import { WORKBOOK_TRANSFORMATIONS } from '../data/services';
import { Sparkles, ZoomIn, X, MessageCircle, Heart, Tag } from 'lucide-react';
import { TransformationItem } from '../types';

interface WorkbookGalleryProps {
  onSelectLookForBooking: (lookTitle: string) => void;
}

export const WorkbookGallery: React.FC<WorkbookGalleryProps> = ({ onSelectLookForBooking }) => {
  const [activeModalItem, setActiveModalItem] = useState<TransformationItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Mature Elegance', 'Matric Farewell', 'Red Carpet & Evening', 'Bridal & Occasion'];

  const filteredItems = activeCategory === 'All'
    ? WORKBOOK_TRANSFORMATIONS
    : WORKBOOK_TRANSFORMATIONS.filter((item) => item.category === activeCategory);

  return (
    <section id="workbook" className="py-24 relative bg-[#F7F2EB] border-t border-[#EBDBC6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D9BF97] bg-[#FAF7F2] text-[#8C6D37] text-xs font-semibold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Workbook & Transformations</span>
          </div>

          <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2420]">
            Before & After Artistry
          </h2>

          <p className="text-base text-[#5E5148] font-light max-w-2xl mx-auto leading-relaxed">
            Real clients, true beauty unlocked. Each look is customized to honor your natural features, 
            skin type, and the sentiment of your celebration.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#B88B43] text-white shadow-sm'
                  : 'bg-[#FAF7F2] text-[#594B41] hover:bg-[#EFE5D6] border border-[#E0CFB9]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of 4 Transformations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-[#FAF7F2] border border-[#DFCBB0] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
              id={`workbook-card-${item.id}`}
            >
              {/* Image Container with Before & After presentation */}
              <div
                className="relative aspect-[3/4] sm:aspect-[4/3] bg-[#E8DDD0] overflow-hidden cursor-pointer"
                onClick={() => setActiveModalItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                {/* Badges on image */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#FAF7F2]/95 backdrop-blur-sm border border-[#D6BC94] text-[#8C6D37] text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="p-2.5 rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 transition-colors inline-flex items-center justify-center">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>

                {/* Title overlay on bottom of photo */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#ECC577] font-semibold">
                    {item.subtitle}
                  </p>
                  <h3 className="font-display-luxury text-lg sm:text-xl font-bold text-white drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Transformation Details & Notes */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm text-[#544840] leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F2E8DA] text-[#695648] text-[11px] font-medium"
                      >
                        <Tag className="w-2.5 h-2.5 text-[#B88B43]" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Artist Insight */}
                  <div className="p-3.5 rounded-xl bg-[#F7F1E7] border-l-2 border-[#B88B43] text-xs text-[#52453C]">
                    <span className="font-semibold text-[#8C6D37] block text-[10px] uppercase tracking-wider mb-1">
                      Artist Note · Marcelle Klopper
                    </span>
                    <p className="italic">"{item.artistNote}"</p>
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-3 border-t border-[#EBDDCB] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="text-xs font-semibold uppercase tracking-wider text-[#8C6D37] hover:text-[#5E471F] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full Look Details</span>
                  </button>

                  <button
                    onClick={() => onSelectLookForBooking(item.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#B88B43] hover:bg-[#A37834] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire for This Look</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* High-Resolution Zoom & Details Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FAF7F2] rounded-3xl border border-[#D9C4A1] shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#EDE0D0] text-[#3D332D] hover:bg-[#DBCABA] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              
              {/* Header */}
              <div>
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#8C6D37]">
                  {activeModalItem.category} · Client Transformation
                </span>
                <h3 className="font-display-luxury text-2xl sm:text-3xl font-bold text-[#2C2420] mt-1">
                  {activeModalItem.title}
                </h3>
              </div>

              {/* Large Image */}
              <div className="rounded-2xl overflow-hidden border border-[#D6C1A4] shadow-md bg-[#EADCCB]">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-auto max-h-[550px] object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Detailed Explanation */}
              <div className="space-y-4">
                <p className="text-sm text-[#4A3E36] leading-relaxed">
                  {activeModalItem.description}
                </p>

                <div className="p-4 rounded-xl bg-[#F4EDE2] border border-[#DFCEB7]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6D37] block mb-1">
                    Technique & Products
                  </span>
                  <p className="text-xs text-[#52443C] italic">
                    "{activeModalItem.artistNote}"
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {activeModalItem.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-[#EFE4D4] text-[#695648] text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-[#E5D4BE] flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-[#D6BC94] text-xs uppercase tracking-wider text-[#52453C] hover:bg-[#EDE1D1] transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = activeModalItem.title;
                    setActiveModalItem(null);
                    onSelectLookForBooking(title);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-full bg-[#B88B43] hover:bg-[#9E732F] text-white text-xs font-semibold uppercase tracking-wider shadow-md transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book This Look via WhatsApp</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
