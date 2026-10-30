import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Clock, MapPin, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export default function Navbar({ onOpenReservation }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Menu', href: '#menu' },
    { name: 'The Grill', href: '#grill' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Banner with Nakuru Location & Quick Hours */}
      <div className="bg-charcoal text-cream-200 text-xs py-2 px-4 border-b border-charcoal-700 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-cream-300">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-ember" />
              Nakuru, Kenya &bull; Off Kenyatta Avenue
            </span>
            <span className="flex items-center text-cream-300">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-ember" />
              Open Daily: 7:00 AM – 11:00 PM (Grill from 11:30 AM)
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${RESTAURANT_INFO.contact.phone.replace(/\s+/g, '')}`} 
              className="hover:text-ember transition-colors flex items-center"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-ember" />
              {RESTAURANT_INFO.contact.phone}
            </a>
            <span className="text-charcoal-600">|</span>
            <a 
              href={`https://wa.me/${RESTAURANT_INFO.contact.whatsapp}?text=Hello%20The%20Ember%20House,%20I%20would%20like%20to%20inquire%20about%20a%20table%20or%20food%20order.`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-kenyanGreen-light hover:text-white font-medium transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-cream-100/95 backdrop-blur-md shadow-warm py-3 border-b border-earth-pale' 
            : 'bg-cream py-4 border-b border-earth-pale/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Brand Logo */}
            <a href="#home" className="flex items-center space-x-3 group text-left">
              <div className="w-11 h-11 rounded-lg bg-ember flex items-center justify-center text-cream shadow-md group-hover:bg-ember-hover transition-colors">
                <Flame className="w-6 h-6 text-cream" />
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-charcoal leading-none">
                  THE EMBER HOUSE
                </span>
                <span className="block text-[11px] font-semibold tracking-widest uppercase text-earth mt-1">
                  Restaurant & Grill &bull; Nakuru
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-charcoal-700 hover:text-ember transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-ember hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Book Table Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={onOpenReservation}
                className="bg-ember hover:bg-ember-hover text-cream text-sm font-semibold px-5 py-2.5 rounded-md shadow-ember hover:shadow-warm-lg transition-all duration-200 flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>ORDER / BOOK A TABLE</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-charcoal hover:text-ember p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-ember"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-cream-100 border-b border-earth/20 px-4 pt-3 pb-6 shadow-warm">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-base font-medium text-charcoal-800 hover:text-ember py-2 border-b border-cream-300/50"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-2 flex flex-col space-y-2">
                <button
                  onClick={() => {
                    handleLinkClick();
                    onOpenReservation();
                  }}
                  className="w-full bg-ember hover:bg-ember-hover text-cream text-center font-semibold py-3 rounded-md shadow-ember transition-all"
                >
                  ORDER / BOOK A TABLE
                </button>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.contact.whatsapp}?text=Hello%20The%20Ember%20House,%20I%20would%20like%20to%20place%20an%20order%20or%20make%20a%20table%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-kenyanGreen hover:bg-kenyanGreen-dark text-cream text-center font-medium py-2.5 rounded-md text-sm transition-colors"
                >
                  Message on WhatsApp
                </a>
              </div>

              <div className="text-xs text-charcoal-500 pt-2 text-center">
                <span>📍 Nakuru, Kenya &bull; 📞 {RESTAURANT_INFO.contact.phone}</span>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Decorative Brand Accent Line */}
      <div className="african-pattern-line w-full"></div>
    </>
  );
}
