import React from 'react';
import { Flame, MapPin, Clock, ArrowRight, UtensilsCrossed } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export default function Hero({ onOpenReservation }) {
  return (
    <section id="home" className="relative bg-charcoal text-cream overflow-hidden">
      {/* Background Graphic & Atmosphere Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none subtle-grid-bg"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Small Location Badge */}
            <div className="inline-flex items-center space-x-2 bg-charcoal-700/80 border border-ember/40 rounded-full px-3.5 py-1.5 text-xs tracking-wider uppercase text-cream-200">
              <MapPin className="w-3.5 h-3.5 text-ember" />
              <span className="font-semibold text-ember-light">{RESTAURANT_INFO.locationCity}</span>
              <span className="text-charcoal-500">&bull;</span>
              <span>CONTEMPORARY KENYAN GRILL</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cream leading-[1.12]">
              THE TASTE OF <br />
              <span className="text-ember">GOOD TIMES.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-cream-300 font-normal leading-relaxed max-w-2xl">
              From traditional Kenyan favourites to freshly grilled meals, there's always something delicious waiting for you at The Ember House.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center justify-center bg-ember hover:bg-ember-hover text-cream font-semibold px-7 py-3.5 rounded-md shadow-ember transition-all duration-200 group text-center"
              >
                <span>VIEW OUR MENU</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-charcoal-700 hover:bg-charcoal-600 border border-earth text-cream font-medium px-7 py-3.5 rounded-md transition-colors text-center"
              >
                <MapPin className="w-4 h-4 mr-2 text-ember" />
                <span>FIND US</span>
              </a>

              <button
                onClick={onOpenReservation}
                className="inline-flex items-center justify-center bg-transparent hover:bg-cream/10 border border-cream/30 text-cream text-sm font-medium px-5 py-3.5 rounded-md transition-colors text-center sm:hidden"
              >
                BOOK A TABLE
              </button>
            </div>

            {/* Quick Highlights / Proof Points */}
            <div className="pt-6 border-t border-charcoal-700/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-cream-300">
              <div className="flex items-center space-x-2">
                <Flame className="w-4 h-4 text-ember flex-shrink-0" />
                <span>Acacia Charcoal Nyama Choma Daily</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-ember flex-shrink-0" />
                <span>Grill Ready From 11:30 AM</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                <UtensilsCrossed className="w-4 h-4 text-ember flex-shrink-0" />
                <span>Families, Groups & Couples Welcome</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Nyama Choma & Ugali Platter Image */}
          <div className="lg:col-span-5 relative">
            
            {/* Decorative background glow & frame */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-ember/30 to-earth/20 rounded-2xl filter blur-xl opacity-70"></div>

            <div className="relative rounded-2xl overflow-hidden border-2 border-earth-light/40 shadow-2xl bg-charcoal-800">
              <img
                src={IMAGES.heroPlatter}
                alt="Kenyan Nyama Choma platter with roast meat, fresh kachumbari salad and ugali"
                className="w-full h-[380px] sm:h-[450px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                loading="eager"
              />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-charcoal-900/90 backdrop-blur-md border border-earth/60 p-3.5 rounded-xl flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-ember/20 border border-ember flex items-center justify-center">
                    <Flame className="w-5 h-5 text-ember" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-cream">Signature Mbuzi & Beef Choma</h2>
                    <p className="text-xs text-cream-400">Carved fresh &bull; KSh 1,200 per kg</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold bg-kenyanGreen/90 text-cream px-2.5 py-1 rounded-md">
                  HOT ON GRILL
                </span>
              </div>
            </div>

            {/* Small corner decorative note */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-cream text-charcoal font-serif font-bold text-xs py-2 px-3 rounded-lg shadow-warm border border-earth/30">
              Nakuru's Favorite Grill
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
