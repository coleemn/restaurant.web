import React from 'react';
import { Flame, Clock, Award, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export default function GrillExperience({ onSelectCategory }) {
  const grillHighlights = [
    {
      title: "Signature Nyama Choma",
      subtitle: "Slow-Roasted Mbuzi or Beef",
      price: "KSh 1,200 / kg",
      image: IMAGES.mixedPlatter,
      description: "Tender local goat or prime beef cuts seasoned lightly with sea salt, slow-roasted over glowing acacia embers until caramelized on the outside and wonderfully juicy inside.",
      servedWith: "Served with hot Ugali, fresh Kachumbari & Pilipili"
    },
    {
      title: "Grilled Goat Ribs",
      subtitle: "Crispy Edge, Smoky Depth",
      price: "KSh 1,100",
      image: IMAGES.goatRibs,
      description: "Rich, succulent mbuzi ribs cooked patiently on the grill. A true Kenyan meat lover's favourite, carved straight from the fire onto traditional wooden platters.",
      servedWith: "Served with coarse sea salt & tomato-coriander salsa"
    },
    {
      title: "Charcoal Chicken Wings",
      subtitle: "Glazed & Crispy",
      price: "KSh 650",
      image: IMAGES.chickenWings,
      description: "Plump chicken wings grilled over coals and brushed with our mild house basting of honey, garlic and Kenyan bird's eye chilli glaze.",
      servedWith: "Served with creamy garlic herb dipping sauce"
    },
    {
      title: "The Ember House Mixed Platter",
      subtitle: "The Ultimate Sharing Feast",
      price: "KSh 1,800",
      image: IMAGES.heroPlatter,
      description: "An abundant sharing board loaded with goat ribs, beef choma, quarter grilled chicken, grilled sausages, ugali wedges, hand-cut chips and kachumbari.",
      servedWith: "Generously feeds 2–3 friends or family members"
    }
  ];

  return (
    <section id="grill" className="py-20 sm:py-24 bg-charcoal text-cream relative overflow-hidden">
      
      {/* Decorative Warm Ember Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-ember/15 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-earth/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-charcoal-700/80 border border-ember/40 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-ember-light mb-4">
            <Flame className="w-3.5 h-3.5 text-ember" />
            <span>THE NAKURU PIT EXPERIENCE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-cream mb-4">
            STRAIGHT FROM THE GRILL.
          </h2>

          <p className="text-cream-300 text-base sm:text-lg leading-relaxed">
            In Nakuru, nyama choma is more than just meat—it is a shared ritual. We source prime cuts from local pastoralists, carve each portion to order, and grill slowly over natural charcoal to preserve every drop of flavour.
          </p>
        </div>

        {/* 4 Grill Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {grillHighlights.map((item, index) => (
            <div 
              key={index}
              className="bg-charcoal-800 rounded-2xl overflow-hidden border border-earth/30 hover:border-ember/60 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent"></div>
                <div className="absolute top-3 right-3 bg-charcoal-900/90 backdrop-blur-md border border-ember/50 text-ember-light font-bold text-xs px-3 py-1.5 rounded-full">
                  {item.price}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-4">
                <div>
                  <span className="text-[11px] font-semibold text-ember uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-cream mb-2 group-hover:text-ember-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Accompaniment Note */}
                <div className="pt-3 border-t border-charcoal-700/80">
                  <span className="text-[11px] text-kenyanGreen-light flex items-center font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-kenyanGreen-light flex-shrink-0" />
                    {item.servedWith}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Grill Ritual Banner */}
        <div className="mt-14 bg-gradient-to-r from-charcoal-800 via-charcoal-700 to-charcoal-800 border border-earth/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-2xl">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-cream flex items-center">
              <Flame className="w-6 h-6 text-ember mr-2.5" />
              Pre-ordering Nyama Choma for a Large Group?
            </h4>
            <p className="text-sm text-cream-300 leading-relaxed">
              For gatherings of 5 or more people, you can let our pitmasters know your preferred cuts in advance so your mbuzi platter is carved and piping hot the moment your party arrives.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={`https://wa.me/${RESTAURANT_INFO.contact.whatsapp}?text=Hello%20The%20Ember%20House,%20I%20would%20like%20to%20order%20Nyama%20Choma%20or%20a%20Mixed%20Platter.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-kenyanGreen hover:bg-kenyanGreen-dark text-cream font-medium px-5 py-3 rounded-lg text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Grill Order
            </a>

            <a
              href="#menu"
              onClick={() => onSelectCategory && onSelectCategory('grill')}
              className="inline-flex items-center justify-center bg-ember hover:bg-ember-hover text-cream font-medium px-5 py-3 rounded-lg text-sm transition-colors"
            >
              <span>Explore All Grill Items</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
