import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WorkbookGallery } from './components/WorkbookGallery';
import { TanningLotionFeature } from './components/TanningLotionFeature';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceItem } from './types';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('spray-tan');
  const [initialBookingNotes, setInitialBookingNotes] = useState<string>('');

  const handleOpenBooking = (serviceId?: string, notes?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    if (notes) {
      setInitialBookingNotes(notes);
    } else if (!notes && !serviceId) {
      setInitialBookingNotes('');
    }
    setIsBookingModalOpen(true);
  };

  const handleSelectServiceForBooking = (service: ServiceItem) => {
    setSelectedServiceId(service.id);
    setInitialBookingNotes(`Inquiring about ${service.name} (${service.price}).`);
    setIsBookingModalOpen(true);
  };

  const handleOrderLotion = (productId: 'tanning-lotion' | 'hot-tingle-lotion') => {
    setSelectedServiceId(productId);
    setInitialBookingNotes(
      productId === 'hot-tingle-lotion'
        ? 'I would like to order the HOT Tingle Tanning Lotion (R220, 100ml).'
        : 'I would like to order the Premium Sunbed Tanning Lotion (R150, 100ml).'
    );
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2420] relative selection:bg-[#E8D8C3] selection:text-[#2C2420]">
      {/* Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Landing Page Hero (Responsive for Desktop & Mobile) */}
        <Hero onOpenBooking={() => handleOpenBooking('spray-tan')} />

        {/* Brand Story & Mission (About us flyer extract) */}
        <AboutSection />

        {/* Services Menu & Rates (Flyer 2 Professional Spray Tan highlight + Makeup Menu) */}
        <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* Client Workbook (Before & After Transformations 1 - 4) */}
        <WorkbookGallery />

        {/* Exclusive Retail Product Feature (Flyer 1 Sunbed Tanning Lotion) */}
        <TanningLotionFeature onOrderLotion={handleOrderLotion} />

        {/* Contact, Location & Studio Details */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive WhatsApp Booking System Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialServiceId={selectedServiceId}
        initialNotes={initialBookingNotes}
      />
    </div>
  );
}

