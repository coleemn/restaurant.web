import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink, Compass, Navigation, Edit3 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export default function ContactLocation() {
  const [showEmbedInfo, setShowEmbedInfo] = useState(false);

  return (
    <section id="contact" className="py-20 sm:py-24 bg-cream-100 text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-ember mb-3">
            <span className="w-6 h-0.5 bg-ember"></span>
            <span>GET IN TOUCH & VISIT US</span>
            <span className="w-6 h-0.5 bg-ember"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-4">
            LOCATION & CONTACT
          </h2>

          <p className="text-charcoal-600 text-base sm:text-lg leading-relaxed">
            Conveniently located in Nakuru, welcoming local residents, business diners, university groups and travelers heading across the Great Rift Valley.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Details & Contact Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Restaurant Official Name & City Banner */}
            <div className="bg-cream-50 p-6 sm:p-7 rounded-2xl border border-earth/20 shadow-warm">
              <h3 className="font-serif text-2xl font-bold text-charcoal">
                {RESTAURANT_INFO.name}
              </h3>
              <p className="text-sm font-semibold text-ember mt-1 uppercase tracking-wider">
                {RESTAURANT_INFO.locationCity}
              </p>
              <p className="text-xs text-charcoal-500 mt-2">
                Contemporary Kenyan dining, Nyama Choma pit & fresh juices.
              </p>
            </div>

            {/* Editable Contact Placeholders */}
            <div className="bg-cream-50 p-6 rounded-2xl border border-earth/20 shadow-warm space-y-5">
              
              {/* Physical Address */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-ember/10 text-ember rounded-xl flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      Physical Address
                    </span>
                    <span className="text-[10px] bg-cream-300 text-charcoal-700 px-1.5 py-0.5 rounded text-xs">
                      Editable
                    </span>
                  </div>
                  <p className="text-sm text-charcoal-800 font-medium mt-1">
                    {RESTAURANT_INFO.contact.address}
                  </p>
                  <p className="text-xs text-charcoal-500 mt-0.5">
                    Easy parking available for cars and family vans.
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start space-x-3.5 pt-4 border-t border-earth/10">
                <div className="p-2.5 bg-charcoal/10 text-charcoal rounded-xl flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      Telephone
                    </span>
                    <span className="text-[10px] bg-cream-300 text-charcoal-700 px-1.5 py-0.5 rounded text-xs">
                      Editable
                    </span>
                  </div>
                  <a 
                    href={`tel:${RESTAURANT_INFO.contact.phone.replace(/\s+/g, '')}`}
                    className="text-sm text-charcoal-900 font-semibold mt-1 block hover:text-ember transition-colors"
                  >
                    {RESTAURANT_INFO.contact.phone}
                  </a>
                  <p className="text-xs text-charcoal-500 mt-0.5">
                    For direct calls, large party bookings & takeaways.
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-3.5 pt-4 border-t border-earth/10">
                <div className="p-2.5 bg-kenyanGreen/15 text-kenyanGreen rounded-xl flex-shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      WhatsApp Line
                    </span>
                    <span className="text-[10px] bg-cream-300 text-charcoal-700 px-1.5 py-0.5 rounded text-xs">
                      Configurable
                    </span>
                  </div>
                  <p className="text-sm text-charcoal-900 font-semibold mt-1">
                    {RESTAURANT_INFO.contact.whatsappDisplay}
                  </p>
                  <p className="text-xs text-charcoal-500 mt-0.5">
                    Chat with our team for fast responses & daily specials.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3.5 pt-4 border-t border-earth/10">
                <div className="p-2.5 bg-earth/10 text-earth rounded-xl flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      Email Address
                    </span>
                    <span className="text-[10px] bg-cream-300 text-charcoal-700 px-1.5 py-0.5 rounded text-xs">
                      Editable
                    </span>
                  </div>
                  <a 
                    href={`mailto:${RESTAURANT_INFO.contact.email}`}
                    className="text-sm text-charcoal-900 font-semibold mt-1 block hover:text-ember transition-colors"
                  >
                    {RESTAURANT_INFO.contact.email}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start space-x-3.5 pt-4 border-t border-earth/10">
                <div className="p-2.5 bg-ember/10 text-ember rounded-xl flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      Opening Hours
                    </span>
                    <span className="text-[10px] bg-cream-300 text-charcoal-700 px-1.5 py-0.5 rounded text-xs">
                      Editable
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-charcoal-800 space-y-1 mt-1">
                    <p><strong>Mon – Fri:</strong> 7:00 AM – 11:00 PM</p>
                    <p><strong>Sat – Sun:</strong> 7:00 AM – 11:30 PM</p>
                    <p className="text-xs text-ember font-medium pt-1">
                      * Charcoal Grill fired up daily from 11:30 AM
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Call-to-Action Button */}
            <a
              href={`https://wa.me/${RESTAURANT_INFO.contact.whatsapp}?text=Hello%20The%20Ember%20House%20Nakuru,%20I%20would%20like%20to%20inquire%20about%20directions,%20menu%20or%20make%20an%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-kenyanGreen hover:bg-kenyanGreen-dark text-cream font-semibold py-3.5 px-6 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>CHAT ON WHATSAPP: {RESTAURANT_INFO.contact.whatsappDisplay}</span>
            </a>

          </div>

          {/* Right Column: Editable Map & Nakuru Area Guide */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="bg-cream-50 rounded-2xl overflow-hidden border border-earth/20 shadow-warm">
              
              {/* Map Header Bar */}
              <div className="bg-charcoal text-cream px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Compass className="w-5 h-5 text-ember" />
                  <span className="font-serif text-base font-bold">Nakuru Location Map Preview</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowEmbedInfo(!showEmbedInfo)}
                  className="text-xs text-cream-300 hover:text-white flex items-center space-x-1 underline"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>How to edit map</span>
                </button>
              </div>

              {/* Map Instructions Box (collapsible) */}
              {showEmbedInfo && (
                <div className="bg-cream-200 p-4 border-b border-earth/20 text-xs text-charcoal-700 leading-relaxed">
                  <p className="font-semibold text-charcoal mb-1">
                    Editable Map Placeholder Notice:
                  </p>
                  <p>
                    This section does not use invented GPS coordinates. To link your restaurant's exact Google Maps pin:
                  </p>
                  <ol className="list-decimal list-inside mt-1 space-y-1">
                    <li>Find your restaurant location on Google Maps.</li>
                    <li>Click <strong>Share &gt; Embed a map</strong> and copy the iframe HTML.</li>
                    <li>Paste your embed URL into the <code>ContactLocation.jsx</code> component.</li>
                  </ol>
                </div>
              )}

              {/* Styled Realistic Nakuru Regional Map Graphic / Embed Frame */}
              <div className="relative h-[340px] sm:h-[380px] bg-charcoal-800 overflow-hidden">
                
                {/* Fallback stylized map background representing Nakuru town grid */}
                <iframe
                  title="Nakuru Kenya Map Placeholder"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7567702444654!2d36.066224!3d-0.283333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298d94943f9ff7%3A0x6b7724a873528b8b!2sNakuru%2C%20Kenya!5e0!3m2!1sen!2ske!4v1698000000000!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
                ></iframe>

                {/* Overlay Pin Card */}
                <div className="absolute top-4 left-4 bg-charcoal-900/90 backdrop-blur-md border border-earth/40 text-cream p-3.5 rounded-xl max-w-xs shadow-warm">
                  <div className="flex items-center space-x-2 text-ember text-xs font-semibold uppercase">
                    <MapPin className="w-4 h-4 text-ember flex-shrink-0" />
                    <span>The Ember House</span>
                  </div>
                  <p className="text-xs text-cream-300 mt-1">
                    {RESTAURANT_INFO.contact.addressShort}
                  </p>
                  <p className="text-[11px] text-cream-400 mt-0.5">
                    Nakuru, Kenya
                  </p>
                </div>

              </div>

              {/* Landmark Guidance Points */}
              <div className="p-5 sm:p-6 bg-cream-50 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-earth/10 text-xs">
                <div className="space-y-1">
                  <span className="font-semibold text-charcoal block">From Nakuru CBD:</span>
                  <p className="text-charcoal-600">5 minutes drive via Kenyatta Avenue.</p>
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-charcoal block">From Milimani / Section 58:</span>
                  <p className="text-charcoal-600">Quick, quiet access with ample parking.</p>
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-charcoal block">Highway Stopover:</span>
                  <p className="text-charcoal-600">Ideal meal stop for Nairobi-Eldoret travelers.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
