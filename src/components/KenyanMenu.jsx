import React, { useState } from 'react';
import { Search, Flame, Coffee, Utensils, Fish, Sandwich, GlassWater, MessageCircle, Info } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export default function KenyanMenu({ activeCategory, setActiveCategory }) {
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'grill': return <Flame className="w-4 h-4 mr-1.5" />;
      case 'local': return <Utensils className="w-4 h-4 mr-1.5" />;
      case 'fish': return <Fish className="w-4 h-4 mr-1.5" />;
      case 'breakfast': return <Coffee className="w-4 h-4 mr-1.5" />;
      case 'fastfood': return <Sandwich className="w-4 h-4 mr-1.5" />;
      case 'drinks': return <GlassWater className="w-4 h-4 mr-1.5" />;
      default: return null;
    }
  };

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-20 sm:py-24 bg-cream text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-ember mb-3">
            <span className="w-6 h-0.5 bg-ember"></span>
            <span>PREPARED FRESH DAILY IN NAKURU</span>
            <span className="w-6 h-0.5 bg-ember"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-4">
            OUR KENYAN MENU
          </h2>

          <p className="text-charcoal-600 text-base sm:text-lg leading-relaxed">
            From sunrise Kenyan breakfast and slow-cooked home-style meals to sizzling nyama choma and chilled freshly squeezed juices.
          </p>
        </div>

        {/* Search Bar & Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Filter Pills */}
          <div className="flex items-center overflow-x-auto no-scrollbar w-full md:w-auto space-x-2 py-1">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center whitespace-nowrap px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-ember text-cream shadow-ember'
                    : 'bg-cream-100 text-charcoal-700 hover:bg-cream-300 border border-earth/20'
                }`}
              >
                {getCategoryIcon(category.id)}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-charcoal-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-cream-100 border border-earth/30 text-charcoal rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent placeholder:text-charcoal-400"
            />
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-cream-100 rounded-2xl border border-earth/20">
            <p className="text-base font-medium text-charcoal-600">No dishes matched your search.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-3 text-sm text-ember hover:underline font-semibold"
            >
              Reset filters and view all dishes
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((dish) => (
              <div
                key={dish.id}
                className="bg-cream-50 rounded-2xl overflow-hidden border border-earth/20 hover:border-ember/60 transition-all duration-300 shadow-warm flex flex-col group hover:-translate-y-1"
              >
                {/* Food Image */}
                <div className="relative h-48 overflow-hidden bg-charcoal-700">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent"></div>
                  
                  {/* Badge */}
                  {dish.tag && (
                    <span className="absolute top-3 left-3 bg-charcoal-900/80 backdrop-blur-md text-cream text-[11px] font-semibold px-2.5 py-1 rounded-md border border-cream/20">
                      {dish.tag}
                    </span>
                  )}

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 bg-ember text-cream font-bold text-sm sm:text-base px-3 py-1 rounded-lg shadow-md">
                    {dish.priceDisplay}
                  </div>
                </div>

                {/* Dish Info */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-4">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal group-hover:text-ember transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 mt-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  {/* Bottom Accompaniment & WhatsApp Order Option */}
                  <div className="pt-3 border-t border-earth/10 flex items-center justify-between">
                    <span className="text-[11px] text-earth font-medium italic">
                      {dish.servedWith}
                    </span>

                    <a
                      href={`https://wa.me/${RESTAURANT_INFO.contact.whatsapp}?text=Hello%20The%20Ember%20House,%20I%20would%20like%20to%20order:%20${encodeURIComponent(dish.name)}%20(${encodeURIComponent(dish.priceDisplay)})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-kenyanGreen hover:text-kenyanGreen-dark hover:bg-kenyanGreen/10 rounded-full transition-colors flex items-center text-xs font-semibold"
                      title="Order this dish via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span className="hidden sm:inline">Order</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pricing Notice & Custom Requests Banner */}
        <div className="mt-12 bg-cream-100 border border-earth/30 rounded-xl p-4 sm:p-5 flex items-start space-x-3 text-left">
          <Info className="w-5 h-5 text-ember flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            <span className="font-semibold text-charcoal">Note for diners: </span>
            All sample prices are listed in Kenyan Shillings (KSh) and are inclusive of standard local taxes. For custom meat cuts, whole goat butchering, or catering inquiries in Nakuru, please speak directly to our grill master or message our team via WhatsApp.
          </div>
        </div>

      </div>
    </section>
  );
}
