import { IMAGES } from '../assets/images';

export const GALLERY_CATEGORIES = [
  { id: 'all', name: 'All Photos' },
  { id: 'food', name: 'Food & Meals' },
  { id: 'grill', name: 'From The Grill' },
  { id: 'ambience', name: 'Restaurant & Seating' },
  { id: 'drinks', name: 'Fresh Juices' }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Signature Nyama Choma & Kachumbari',
    caption: 'Slow-roasted mbuzi cut fresh from the charcoal grill, seasoned with coarse sea salt and served with chilled tomato-coriander kachumbari.',
    category: 'grill',
    image: IMAGES.mixedPlatter,
    badge: 'Grill Special'
  },
  {
    id: 2,
    title: 'Modern Kenyan Restaurant Dining',
    caption: 'Warm wooden finishes, comfortable seating and relaxed lighting designed for comfortable dining in Nakuru.',
    category: 'ambience',
    image: IMAGES.interiorDining,
    badge: 'Interior'
  },
  {
    id: 3,
    title: 'Ugali, Beef Stew & Braised Sukuma Wiki',
    caption: 'The heart of Kenyan lunch: steaming cornmeal ugali, tender slow-cooked beef stew and fresh local greens.',
    category: 'food',
    image: IMAGES.ugaliBeefSukuma,
    badge: 'Local Favourite'
  },
  {
    id: 4,
    title: 'Whole Crispy Fried Tilapia',
    caption: 'Fresh lake tilapia fried golden crisp, garnished with lemon and served with hot ugali and kachumbari.',
    category: 'food',
    image: IMAGES.friedTilapia,
    badge: 'Lake Fresh'
  },
  {
    id: 5,
    title: 'Charcoal Grilling in Action',
    caption: 'Open embers, seasoned meat cuts and skilled pitmasters preparing choma with authentic smoky aromas.',
    category: 'grill',
    image: IMAGES.grillCharcoal,
    badge: 'The Pit'
  },
  {
    id: 6,
    title: 'Fragrant Beef Pilau with Kachumbari',
    caption: 'Traditional spiced rice loaded with tender meat chunks and whole aromatic spices.',
    category: 'food',
    image: IMAGES.pilauKachumbari,
    badge: 'Traditional'
  },
  {
    id: 7,
    title: 'Outdoor Garden & Terrace Seating',
    caption: 'Breezy open-air seating perfect for sunny afternoon lunches and relaxed weekend family choma.',
    category: 'ambience',
    image: IMAGES.outdoorGarden,
    badge: 'Outdoor Terrace'
  },
  {
    id: 8,
    title: 'Flaky Layered Chapati & Beef Stew',
    caption: 'Soft, golden hand-rolled chapatis served with rich, aromatic beef gravy.',
    category: 'food',
    image: IMAGES.beefStewChapati,
    badge: 'House Favourite'
  },
  {
    id: 9,
    title: 'Freshly Crushed Passion & Mango Juices',
    caption: 'Pure, chilled tropical juices squeezed from ripe Rift Valley fruit with no artificial concentrates.',
    category: 'drinks',
    image: IMAGES.passionJuice,
    badge: 'Freshly Squeezed'
  },
  {
    id: 10,
    title: 'Char-Grilled Chicken & Goat Ribs',
    caption: 'Tender marinated cuts charred to perfection over natural acacia charcoal coals.',
    category: 'grill',
    image: IMAGES.goatRibs,
    badge: 'On The Embers'
  },
  {
    id: 11,
    title: 'Warm Evening Ambience',
    caption: 'Cozy and intimate lighting for couples, groups of colleagues and evening dinner conversations.',
    category: 'ambience',
    image: IMAGES.eveningWarmth,
    badge: 'Evenings'
  },
  {
    id: 12,
    title: 'Kitchen Craft & Fresh Preparation',
    caption: 'Every meal cooked fresh to order using quality local ingredients sourced daily in Nakuru.',
    category: 'ambience',
    image: IMAGES.foodPrep,
    badge: 'Fresh Prep'
  }
];
