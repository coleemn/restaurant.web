import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Friendly Tooltip */}
      {showTooltip && (
        <div className="mb-2 bg-charcoal text-cream text-xs py-2 px-3.5 rounded-xl shadow-warm border border-earth/40 max-w-xs flex items-center space-x-2 animate-bounce">
          <span>👋 Inquire about today's choma or book via WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-cream-400 hover:text-white ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${RESTAURANT_INFO.contact.whatsapp}?text=Hello%20The%20Ember%20House%20Nakuru,%20I%20would%20like%20to%20inquire%20about%20a%20table%20or%20food%20order.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-kenyanGreen hover:bg-kenyanGreen-dark text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/20"
        title="Chat on WhatsApp"
        aria-label="Chat with The Ember House on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
