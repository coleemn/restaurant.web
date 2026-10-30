import React, { useState } from 'react';
import { X, ZoomIn, Eye, Sparkles } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos = GALLERY_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-cream-100 text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-ember mb-3">
            <span className="w-6 h-0.5 bg-ember"></span>
            <span>EXPERIENCE OUR RESTAURANT</span>
            <span className="w-6 h-0.5 bg-ember"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-4">
            RESTAURANT GALLERY
          </h2>

          <p className="text-charcoal-600 text-base sm:text-lg leading-relaxed">
            Take a visual tour through our contemporary Nakuru restaurant, the warmth of open wood-fired embers, and our authentic Kenyan culinary creations.
          </p>
        </div>

        {/* Gallery Categories Tabs */}
        <div className="flex justify-center items-center overflow-x-auto no-scrollbar space-x-2 mb-10 pb-2">
          {GALLERY_CATEGORIES.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-charcoal text-cream shadow-md'
                  : 'bg-cream text-charcoal-700 hover:bg-cream-300 border border-earth/20'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden shadow-warm bg-cream-50 border border-earth/20 cursor-pointer hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-w-4 aspect-h-3 h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay with Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-left">
                <div className="flex justify-between items-start">
                  <span className="text-[11px] font-semibold bg-ember text-cream px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                  <div className="p-2 rounded-full bg-cream/20 text-cream backdrop-blur-sm">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-cream mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-cream-300 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Subtle Static Caption on Mobile / Default bottom bar */}
              <div className="p-3.5 border-t border-earth/10 bg-cream-50 sm:hidden">
                <h4 className="font-semibold text-charcoal text-sm truncate">{item.title}</h4>
                <p className="text-xs text-earth mt-0.5">{item.badge}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-charcoal-900/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-charcoal-800 rounded-2xl overflow-hidden border border-earth/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-charcoal-900/80 text-cream hover:bg-ember transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="max-h-[65vh] w-full bg-charcoal-900 flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[65vh] w-full object-contain"
              />
            </div>

            {/* Modal Details */}
            <div className="p-6 bg-charcoal-800 text-left border-t border-earth/30">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-xs font-semibold bg-ember text-cream px-2.5 py-1 rounded-md">
                  {selectedPhoto.badge}
                </span>
                <span className="text-xs text-cream-400">The Ember House &bull; Nakuru</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-cream mb-2">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-cream-300 leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
