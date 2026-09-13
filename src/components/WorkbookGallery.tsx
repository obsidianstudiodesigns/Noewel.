import React, { useState } from 'react';
import { WORKBOOK_TRANSFORMATIONS } from '../data/services';
import { ZoomIn, X } from 'lucide-react';
import { TransformationItem } from '../types';

export const WorkbookGallery: React.FC = () => {
  const [activeModalItem, setActiveModalItem] = useState<TransformationItem | null>(null);

  return (
    <section id="workbook" className="py-24 relative bg-[#F7F2EB] border-t border-[#EBDBC6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2420]">
            Before & After Artistry
          </h2>

          <p className="text-base text-[#5E5148] font-light max-w-2xl mx-auto leading-relaxed">
            Real clients, true beauty unlocked. Each look is customized to honor your natural features,
            skin type, and the sentiment of your celebration.
          </p>
        </div>

        {/* Before & After images only */}
        <div
          className={`grid gap-8 lg:gap-10 ${
            WORKBOOK_TRANSFORMATIONS.length === 1
              ? 'grid-cols-1 max-w-2xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2'
          }`}
        >
          {WORKBOOK_TRANSFORMATIONS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveModalItem(item)}
              className="relative block w-full rounded-3xl bg-[#FAF7F2] border border-[#DFCBB0] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              id={`workbook-card-${item.id}`}
              aria-label="View before and after image"
            >
              <img
                src={item.image}
                alt="Noewel makeup before and after"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 text-white backdrop-blur-sm group-hover:bg-black/60 transition-colors inline-flex items-center justify-center">
                <ZoomIn className="w-4 h-4" />
              </span>
            </button>
          ))}
        </div>

      </div>

      {/* Full-size image viewer */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute -top-3 -right-3 z-10 p-2 rounded-full bg-[#FAF7F2] text-[#3D332D] hover:bg-[#EDE0D0] shadow-lg transition-colors cursor-pointer"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeModalItem.image}
              alt="Noewel makeup before and after"
              className="w-full h-auto max-h-[88vh] object-contain rounded-2xl border border-[#D6C1A4] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </section>
  );
};
