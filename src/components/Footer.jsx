import React from 'react';
import { Flame, MapPin, Phone, Mail, Clock, MessageCircle, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export default function Footer({ onSelectCategory, onOpenReservation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-cream relative border-t-2 border-ember">
      {/* Subtle brand pattern line */}
      <div className="african-pattern-line w-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 text-left">
          
          {/* Brand & Story Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-ember flex items-center justify-center text-cream shadow-md">
                <Flame className="w-6 h-6 text-cream" />
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-tight text-cream leading-none">
                  THE EMBER HOUSE
                </span>
                <span className="block text-[11px] font-semibold tracking-widest uppercase text-ember-light mt-1">
                  Restaurant & Grill &bull; Nakuru
                </span>
              </div>
            </div>

            <p className="text-sm text-cream-300 leading-relaxed">
              {RESTAURANT_INFO.tagline} From traditional Kenyan staples and fresh Lake Victoria tilapia to open-charcoal nyama choma and chilled tropical juices, we bring people together over real food.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-earth-light font-semibold block mb-2">
                Connect With Us
              </span>
              <div className="flex space-x-3">
                {RESTAURANT_INFO.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-charcoal-700 hover:bg-ember text-cream flex items-center justify-center text-xs transition-colors border border-charcoal-600"
                    title={social.name}
                  >
                    {social.name.substring(0, 2)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg font-bold text-cream border-b border-charcoal-700 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-cream-300">
              <li>
                <a href="#home" className="hover:text-ember transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-ember transition-colors">About Us</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-ember transition-colors">Our Menu</a>
              </li>
              <li>
                <a href="#grill" className="hover:text-ember transition-colors">The Grill</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-ember transition-colors">Photo Gallery</a>
              </li>
              <li>
                <button 
                  onClick={onOpenReservation} 
                  className="hover:text-ember text-left transition-colors"
                >
                  Table Reservations
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-ember transition-colors">Contact & Map</a>
              </li>
            </ul>
          </div>

          {/* Menu Shortcuts */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-cream border-b border-charcoal-700 pb-2">
              Menu Shortcuts
            </h4>
            <ul className="space-y-2.5 text-sm text-cream-300">
              <li>
                <a 
                  href="#menu" 
                  onClick={() => onSelectCategory && onSelectCategory('grill')} 
                  className="hover:text-ember transition-colors flex items-center justify-between"
                >
                  <span>Nyama Choma & Ribs</span>
                  <span className="text-xs text-cream-400">From KSh 1,100</span>
                </a>
              </li>
              <li>
                <a 
                  href="#menu" 
                  onClick={() => onSelectCategory && onSelectCategory('local')} 
                  className="hover:text-ember transition-colors flex items-center justify-between"
                >
                  <span>Ugali, Sukuma & Beef</span>
                  <span className="text-xs text-cream-400">KSh 550</span>
                </a>
              </li>
              <li>
                <a 
                  href="#menu" 
                  onClick={() => onSelectCategory && onSelectCategory('fish')} 
                  className="hover:text-ember transition-colors flex items-center justify-between"
                >
                  <span>Fried Tilapia & Ugali</span>
                  <span className="text-xs text-cream-400">KSh 900</span>
                </a>
              </li>
              <li>
                <a 
                  href="#menu" 
                  onClick={() => onSelectCategory && onSelectCategory('local')} 
                  className="hover:text-ember transition-colors flex items-center justify-between"
                >
                  <span>Beef Stew & Chapati</span>
                  <span className="text-xs text-cream-400">KSh 500</span>
                </a>
              </li>
              <li>
                <a 
                  href="#menu" 
                  onClick={() => onSelectCategory && onSelectCategory('breakfast')} 
                  className="hover:text-ember transition-colors flex items-center justify-between"
                >
                  <span>Kenyan Breakfast</span>
                  <span className="text-xs text-cream-400">KSh 450</span>
                </a>
              </li>
              <li>
                <a 
                  href="#menu" 
                  onClick={() => onSelectCategory && onSelectCategory('drinks')} 
                  className="hover:text-ember transition-colors flex items-center justify-between"
                >
                  <span>Fresh Passion Juice</span>
                  <span className="text-xs text-cream-400">KSh 250</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Summary */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-cream border-b border-charcoal-700 pb-2">
              Visit The Ember House
            </h4>
            <div className="space-y-3 text-sm text-cream-300">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 text-ember mr-2 flex-shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.contact.addressShort}</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 text-ember mr-2 flex-shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {RESTAURANT_INFO.contact.phone}
                </a>
              </p>
              <p className="flex items-center">
                <MessageCircle className="w-4 h-4 text-kenyanGreen-light mr-2 flex-shrink-0" />
                <a 
                  href={`https://wa.me/${RESTAURANT_INFO.contact.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-kenyanGreen-light hover:underline"
                >
                  WhatsApp: {RESTAURANT_INFO.contact.whatsappDisplay}
                </a>
              </p>
              <p className="flex items-start">
                <Clock className="w-4 h-4 text-ember mr-2 flex-shrink-0 mt-0.5" />
                <span>Open daily: 7:00 AM – 11:00 PM (Grill from 11:30 AM)</span>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="w-full bg-ember hover:bg-ember-hover text-cream text-xs font-semibold py-2.5 rounded-lg transition-colors shadow-ember"
              >
                BOOK A TABLE NOW
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-14 pt-8 border-t border-charcoal-700/80 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} The Ember House Restaurant & Grill. All rights reserved. Nakuru, Kenya.
          </p>

          <p className="text-earth-light font-medium italic">
            Karibu The Ember House &mdash; Rooted in Good Food, Made for Good Company.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-cream-300 hover:text-ember transition-colors bg-charcoal-700 px-3 py-1.5 rounded-full"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
