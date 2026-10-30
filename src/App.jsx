import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import GrillExperience from './components/GrillExperience';
import KenyanMenu from './components/KenyanMenu';
import Gallery from './components/Gallery';
import Reservations from './components/Reservations';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';

export default function App() {
  const [activeMenuCategory, setActiveMenuCategory] = useState('all');

  const scrollToReservations = () => {
    const el = document.getElementById('reservations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryAndScroll = (category) => {
    setActiveMenuCategory(category);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col selection:bg-ember selection:text-cream">
      {/* Navigation */}
      <Navbar onOpenReservation={scrollToReservations} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Homepage Hero */}
        <Hero onOpenReservation={scrollToReservations} />

        {/* Our Story */}
        <OurStory />

        {/* The Grill Experience */}
        <GrillExperience onSelectCategory={handleSelectCategoryAndScroll} />

        {/* Full Kenyan Menu */}
        <KenyanMenu 
          activeCategory={activeMenuCategory} 
          setActiveCategory={setActiveMenuCategory} 
        />

        {/* Restaurant Gallery */}
        <Gallery />

        {/* Reservations Request */}
        <Reservations />

        {/* Contact & Location Map */}
        <ContactLocation />
      </main>

      {/* Footer */}
      <Footer 
        onSelectCategory={handleSelectCategoryAndScroll} 
        onOpenReservation={scrollToReservations} 
      />

      {/* Floating WhatsApp Action for Kenyan Customers */}
      <WhatsAppFloating />
    </div>
  );
}
