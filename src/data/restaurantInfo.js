// Centralized configuration and business information for The Ember House Restaurant & Grill
// Location: Nakuru, Kenya

export const RESTAURANT_INFO = {
  name: "The Ember House Restaurant & Grill",
  shortName: "The Ember House",
  tagline: "The Taste of Good Times.",
  heroSubtext: "From traditional Kenyan favourites to freshly grilled meals, there's always something delicious waiting for you at The Ember House.",
  locationCity: "NAKURU, KENYA",
  
  // Editable contact placeholders as requested
  contact: {
    address: "[Editable: Off Kenyatta Avenue, Opp. Nakuru Athletics Club, Nakuru, Kenya]",
    addressShort: "Off Kenyatta Avenue, Nakuru, Kenya",
    phone: "+254 712 345 678", // Editable Kenyan phone number
    whatsapp: "+254712345678", // Configurable format for WhatsApp links
    whatsappDisplay: "+254 712 345 678",
    email: "info@emberhouserestaurant.co.ke", // Editable placeholder
    postal: "P.O. Box 1420-20100, Nakuru, Kenya"
  },

  // Operating Hours
  hours: {
    weekdays: "Monday – Friday: 7:00 AM – 11:00 PM",
    weekends: "Saturday – Sunday: 7:00 AM – 11:30 PM",
    breakfast: "Breakfast served daily: 7:00 AM – 11:00 AM",
    grill: "Charcoal Grill fires up daily from 11:30 AM till late"
  },

  // Social Links
  socials: [
    { name: "Instagram", url: "https://instagram.com", handle: "@emberhousenakuru" },
    { name: "Facebook", url: "https://facebook.com", handle: "The Ember House Nakuru" },
    { name: "TikTok", url: "https://tiktok.com", handle: "@emberhouse_ke" },
    { name: "X (Twitter)", url: "https://twitter.com", handle: "@EmberHouseKe" }
  ],

  // Key Features
  features: [
    {
      title: "Freshly Grilled on Acacia Charcoal",
      description: "Our signature nyama choma and goat ribs are seasoned simply with sea salt and grilled over open embers to seal in natural tenderness and smoky depth."
    },
    {
      title: "Locally Sourced Rift Valley Produce",
      description: "From farm-fresh sukuma wiki and sweet Nakuru potatoes to fresh Lake fish, every dish supports local Rift Valley growers and producers."
    },
    {
      title: "Warm Nakuru Hospitality",
      description: "A welcoming, comfortable space tailored for lively family gatherings, weekend choma with friends, casual student lunches and evening date nights."
    },
    {
      title: "Authentic Kenyan Recipes",
      description: "Prepared without shortcuts—aromatic beef pilau, slow-simmered rich stews, soft layered chapati and freshly crushed tropical juices."
    }
  ]
};
