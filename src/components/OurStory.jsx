import React from 'react';
import { HeartHandshake, Utensils, Sparkles, Users } from 'lucide-react';
import { IMAGES } from '../assets/images';

export default function OurStory() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-cream text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-ember mb-3">
            <span className="w-6 h-0.5 bg-ember"></span>
            <span>OUR STORY & PHILOSOPHY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal leading-tight">
            ROOTED IN GOOD FOOD. <br className="hidden sm:inline" />
            <span className="text-earth">MADE FOR GOOD COMPANY.</span>
          </h2>
        </div>

        {/* Story Text and Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Natural Kenyan Story */}
          <div className="lg:col-span-6 space-y-6 text-charcoal-700 text-base sm:text-lg leading-relaxed text-left">
            <p>
              In Kenya, great food is never eaten in isolation. A meal is an invitation to slow down, share stories, catch up with old friends, and celebrate everyday milestones with the people who matter most.
            </p>

            <p>
              At <strong className="text-charcoal font-semibold">The Ember House Restaurant & Grill</strong> in Nakuru, we set out to create a dining space that honors genuine Kenyan food culture. From the aroma of seasoned goat meat sizzling over hot acacia coals to the comfort of slow-simmered beef stew paired with soft, flaky chapatis, our kitchen is dedicated to traditional recipes made with honesty, patience and fresh Rift Valley ingredients.
            </p>

            <p>
              Whether you are dropping by for a hearty Kenyan breakfast before work, gathering the family for a Sunday afternoon nyama choma feast with hot ugali and kachumbari, or unwinding over freshly crushed tropical juices with university colleagues, you will always find warm hospitality, attentive service and a comfortable table waiting for you.
            </p>

            {/* Core Values / Local Touch */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-cream-100 p-4 rounded-xl border border-earth/20 flex items-start space-x-3">
                <div className="p-2 bg-ember/10 text-ember rounded-lg flex-shrink-0">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal text-sm">Authentic Grilling</h3>
                  <p className="text-xs text-charcoal-600 mt-1">Carved fresh from the pit, seasoned simply with natural sea salt.</p>
                </div>
              </div>

              <div className="bg-cream-100 p-4 rounded-xl border border-earth/20 flex items-start space-x-3">
                <div className="p-2 bg-kenyanGreen/10 text-kenyanGreen rounded-lg flex-shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal text-sm">Local Ingredients</h3>
                  <p className="text-xs text-charcoal-600 mt-1">Sourcing fresh vegetables, meats and lake fish from Nakuru partners.</p>
                </div>
              </div>

              <div className="bg-cream-100 p-4 rounded-xl border border-earth/20 flex items-start space-x-3">
                <div className="p-2 bg-earth/10 text-earth rounded-lg flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal text-sm">Welcoming Atmosphere</h3>
                  <p className="text-xs text-charcoal-600 mt-1">Spacious indoor booths, garden terrace and relaxed seating.</p>
                </div>
              </div>

              <div className="bg-cream-100 p-4 rounded-xl border border-earth/20 flex items-start space-x-3">
                <div className="p-2 bg-ember/10 text-ember rounded-lg flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal text-sm">Pure Taste</h3>
                  <p className="text-xs text-charcoal-600 mt-1">No artificial concentrates—real food cooked the traditional way.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Real Photographs Showcase */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-5">
            
            {/* Image 1: Nyama Choma being grilled */}
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-warm border border-earth/20 group relative">
                <img
                  src={IMAGES.grillCharcoal}
                  alt="Nyama choma grilling over hot acacia coals at The Ember House"
                  className="w-full h-48 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-medium text-cream bg-charcoal-900/60 px-2 py-1 rounded backdrop-blur-sm">
                    Open Charcoal Grilling
                  </span>
                </div>
              </div>

              {/* Image 2: Food Preparation */}
              <div className="rounded-xl overflow-hidden shadow-warm border border-earth/20 group relative">
                <img
                  src={IMAGES.foodPrep}
                  alt="Kitchen preparation of fresh Kenyan dishes"
                  className="w-full h-36 sm:h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-medium text-cream bg-charcoal-900/60 px-2 py-1 rounded backdrop-blur-sm">
                    Fresh Daily Prep
                  </span>
                </div>
              </div>
            </div>

            {/* Image 3 & 4: Kenyan Restaurant Dining & Customers */}
            <div className="space-y-4 pt-4 sm:pt-6">
              <div className="rounded-xl overflow-hidden shadow-warm border border-earth/20 group relative">
                <img
                  src={IMAGES.interiorDining}
                  alt="Contemporary Kenyan restaurant dining interior in Nakuru"
                  className="w-full h-36 sm:h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-medium text-cream bg-charcoal-900/60 px-2 py-1 rounded backdrop-blur-sm">
                    Modern Nakuru Dining
                  </span>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-warm border border-earth/20 group relative">
                <img
                  src={IMAGES.familyDining}
                  alt="Kenyan families and friends enjoying a meal together"
                  className="w-full h-48 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-medium text-cream bg-charcoal-900/60 px-2 py-1 rounded backdrop-blur-sm">
                    Gathering over Good Food
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
