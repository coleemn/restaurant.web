import { IMAGES } from '../assets/images';

export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Dishes' },
  { id: 'grill', name: 'From The Grill' },
  { id: 'local', name: 'Local Favourites' },
  { id: 'fish', name: 'Fish & Seafood' },
  { id: 'breakfast', name: 'Breakfast' },
  { id: 'fastfood', name: 'Fast Food' },
  { id: 'drinks', name: 'Drinks' },
];

export const MENU_ITEMS = [
  // BREAKFAST
  {
    id: 'kenyan-breakfast',
    name: 'Kenyan Breakfast',
    category: 'breakfast',
    price: 450,
    priceDisplay: 'KSh 450',
    description: 'Two fried or scrambled eggs, beef sausages, toast or sweet potato wedges, baked beans and a pot of hot Kenyan milk tea.',
    tag: 'House Special',
    image: IMAGES.kenyanBreakfast,
    servedWith: 'Served with hot Kenyan Tea or Coffee'
  },
  {
    id: 'mandazi',
    name: 'Mandazi (2 pieces)',
    category: 'breakfast',
    price: 100,
    priceDisplay: 'KSh 100',
    description: 'Golden, fluffy, cardamom-spiced East African style pastries freshly fried throughout the morning.',
    tag: 'Freshly Baked',
    image: IMAGES.mandazi,
    servedWith: 'Best paired with African Tea'
  },
  {
    id: 'chapati-beans',
    name: 'Chapati & Beans',
    category: 'breakfast',
    price: 300,
    priceDisplay: 'KSh 300',
    description: 'Two warm, soft flaky layered chapatis served with hearty yellow beans simmered in garlic, onions and mild coriander sauce.',
    tag: 'Classic',
    image: IMAGES.chapatiBeans,
    servedWith: 'Includes 2 soft chapatis'
  },
  {
    id: 'spanish-omelette',
    name: 'Spanish Omelette',
    category: 'breakfast',
    price: 350,
    priceDisplay: 'KSh 350',
    description: 'Fluffy three-egg omelette packed with diced red onions, ripe tomatoes, sweet peppers and fresh dania.',
    tag: 'Popular',
    image: IMAGES.spanishOmelette,
    servedWith: 'Served with 2 slices of buttered toast'
  },
  {
    id: 'tea-coffee',
    name: 'Tea / Coffee',
    category: 'breakfast',
    price: 150,
    priceDisplay: 'KSh 150',
    description: 'Freshly brewed aromatic Kenyan milk tea (Chai ya maziwa) or rich freshly brewed local highland coffee.',
    tag: 'Warm Beverage',
    image: IMAGES.teaAndCoffee,
    servedWith: 'Choice of Kenyan Tea or Black Coffee'
  },

  // LOCAL FAVOURITES
  {
    id: 'ugali-sukuma-beef',
    name: 'Ugali, Sukuma Wiki & Beef',
    category: 'local',
    price: 550,
    priceDisplay: 'KSh 550',
    description: 'The national staple. Freshly prepared white cornmeal ugali served with sautéed collard greens (sukuma wiki) and rich, tender beef stew.',
    tag: 'True Kenyan Staple',
    image: IMAGES.ugaliBeefSukuma,
    servedWith: 'Hot ugali & thick savoury gravy'
  },
  {
    id: 'githeri-special',
    name: 'Githeri Special',
    category: 'local',
    price: 350,
    priceDisplay: 'KSh 350',
    description: 'Slow-simmered tender maize and beans lightly fried with diced potatoes, onions, carrots and fresh Rift Valley herbs.',
    tag: 'Wholesome & Traditional',
    image: IMAGES.githeri,
    servedWith: 'Topped with ripe avocado slices upon request'
  },
  {
    id: 'beef-stew-chapati',
    name: 'Beef Stew & Chapati',
    category: 'local',
    price: 500,
    priceDisplay: 'KSh 500',
    description: 'Tender beef chunks slow-cooked in a rich, deeply savoury tomato and onion gravy, served with two golden layered chapatis.',
    tag: 'Guest Favourite',
    image: IMAGES.beefStewChapati,
    servedWith: 'Includes 2 flaky layered chapatis'
  },
  {
    id: 'pilau-kachumbari',
    name: 'Pilau & Kachumbari',
    category: 'local',
    price: 500,
    priceDisplay: 'KSh 500',
    description: 'Fragrant East African spiced rice simmered with tender beef cuts, whole cumin, cloves and cinnamon, paired with chilled zesty kachumbari.',
    tag: 'Signature Spiced',
    image: IMAGES.pilauKachumbari,
    servedWith: 'Served with fresh kachumbari & pilipili'
  },
  {
    id: 'chicken-biryani',
    name: 'Chicken Biryani',
    category: 'local',
    price: 750,
    priceDisplay: 'KSh 750',
    description: 'Aromatic coastal-style basmati rice served with richly spiced chicken curry, fried onions, boiled egg and seasoned tomato broth.',
    tag: 'Swahili Coastal Style',
    image: IMAGES.chickenBiryani,
    servedWith: 'Served with tomato salsa and lemon wedge'
  },
  {
    id: 'matoke-beef-stew',
    name: 'Matoke & Beef Stew',
    category: 'local',
    price: 500,
    priceDisplay: 'KSh 500',
    description: 'Soft green plantain bananas cooked gently into a thick, comforting stew with tender Kenyan beef cubes and garden herbs.',
    tag: 'Comfort Food',
    image: IMAGES.matokeBeef,
    servedWith: 'Hearty one-pot traditional meal'
  },

  // FROM THE GRILL
  {
    id: 'nyama-choma',
    name: 'Nyama Choma',
    category: 'grill',
    price: 1200,
    priceDisplay: 'KSh 1,200 per kg',
    description: 'Our iconic open-fire roasted meat (goat or beef). Seasoned only with sea salt, slow-roasted over acacia embers, and carved hot onto wooden platters.',
    tag: 'Chef Signature',
    image: IMAGES.mixedPlatter,
    servedWith: 'Served with hot Ugali, fresh Kachumbari & Pilipili'
  },
  {
    id: 'grilled-chicken',
    name: 'Grilled Chicken',
    category: 'grill',
    price: 850,
    priceDisplay: 'KSh 850',
    description: 'Half farm-raised spring chicken marinated in garlic, rosemary and lemon, grilled slowly over charcoal until golden and juicy.',
    tag: 'Charcoal Roasted',
    image: IMAGES.grilledChicken,
    servedWith: 'Choice of Chips or Ugali & Kachumbari'
  },
  {
    id: 'goat-ribs',
    name: 'Goat Ribs',
    category: 'grill',
    price: 1100,
    priceDisplay: 'KSh 1,100',
    description: 'Succulent mbuzi ribs roasted crisp on the outside, tender inside, with that unmistakable rich smoky charcoal char.',
    tag: 'Grill Master Choice',
    image: IMAGES.goatRibs,
    servedWith: 'Served with salt dip and fresh kachumbari'
  },
  {
    id: 'chicken-wings',
    name: 'Chicken Wings',
    category: 'grill',
    price: 650,
    priceDisplay: 'KSh 650',
    description: 'Char-grilled chicken wings glazed in a honey-barbecue and mild Kenyan chilli basting sauce.',
    tag: 'Crowd Pleaser',
    image: IMAGES.chickenWings,
    servedWith: 'Served with house dip and celery crisps'
  },
  {
    id: 'mixed-grill-platter',
    name: 'Mixed Grill Platter',
    category: 'grill',
    price: 1800,
    priceDisplay: 'KSh 1,800',
    description: 'Generous sharing platter with goat ribs, beef choma, quarter grilled chicken, grilled sausages, ugali, hand-cut chips and kachumbari bowl.',
    tag: 'Great For Sharing',
    image: IMAGES.mixedPlatter,
    servedWith: 'Feeds 2–3 people generously'
  },

  // FISH & SEAFOOD
  {
    id: 'fried-tilapia-ugali',
    name: 'Fried Tilapia & Ugali',
    category: 'fish',
    price: 900,
    priceDisplay: 'KSh 900',
    description: 'Whole fresh lake tilapia deeply fried to a golden crisp, served with piping hot ugali, sautéed sukuma wiki and fresh kachumbari.',
    tag: 'Lake Fresh',
    image: IMAGES.friedTilapia,
    servedWith: 'Served with Ugali, Sukuma Wiki & Lemon'
  },
  {
    id: 'fish-fillet-chips',
    name: 'Fish Fillet & Chips',
    category: 'fish',
    price: 850,
    priceDisplay: 'KSh 850',
    description: 'Tender boneless fish fillet coated in a crisp seasoned crust, served with freshly cut potato chips and creamy tartar sauce.',
    tag: 'Crispy & Tender',
    image: IMAGES.fishFilletChips,
    servedWith: 'Served with fresh hand-cut chips & tartar dip'
  },

  // FAST FOOD
  {
    id: 'beef-burger-chips',
    name: 'Beef Burger & Chips',
    category: 'fastfood',
    price: 750,
    priceDisplay: 'KSh 750',
    description: 'Hand-pressed 100% Kenyan ground beef patty grilled over coals, topped with melted cheese, crisp lettuce, tomato, caramelized onion and chips.',
    tag: 'House Burger',
    image: IMAGES.beefBurger,
    servedWith: 'Served with golden hand-cut potato chips'
  },
  {
    id: 'chicken-burger',
    name: 'Chicken Burger',
    category: 'fastfood',
    price: 650,
    priceDisplay: 'KSh 650',
    description: 'Tender grilled chicken breast with garlic herb mayo, crisp lettuce and pickled gherkins on a toasted sesame bun.',
    tag: 'Quick Bite',
    image: IMAGES.chickenBurger,
    servedWith: 'Served with golden chips'
  },
  {
    id: 'chicken-chips',
    name: 'Chicken & Chips',
    category: 'fastfood',
    price: 750,
    priceDisplay: 'KSh 750',
    description: 'Crisp seasoned quarter chicken served alongside a hearty portion of golden hand-cut Nakuru potato chips and tomato relish.',
    tag: 'Popular Lunch',
    image: IMAGES.chipsChicken,
    servedWith: 'Includes coleslaw & dipping sauce'
  },
  {
    id: 'sausage-chips',
    name: 'Sausage & Chips',
    category: 'fastfood',
    price: 350,
    priceDisplay: 'KSh 350',
    description: 'Two savoury beef sausages deep-fried to a golden sizzle, served with fresh potato chips.',
    tag: 'Quick Snack',
    image: IMAGES.sausageChips,
    servedWith: 'Served with chilli sauce and tomato ketchup'
  },
  {
    id: 'plain-chips',
    name: 'Plain Chips',
    category: 'fastfood',
    price: 250,
    priceDisplay: 'KSh 250',
    description: 'Generous serving of fresh hand-cut local potatoes, fried until crispy golden on the outside and soft inside.',
    tag: 'Side Dish',
    image: IMAGES.chipsChicken,
    servedWith: 'Lightly salted with tomato dipping sauce'
  },
  {
    id: 'bhajia',
    name: 'Bhajia',
    category: 'fastfood',
    price: 300,
    priceDisplay: 'KSh 300',
    description: 'Thinly sliced potatoes dipped in seasoned gram flour batter with turmeric, chillies and coriander, fried crisp.',
    tag: 'Street Favourite',
    image: IMAGES.bhajia,
    servedWith: 'Served with tangy tamarind or tomato dip'
  },

  // DRINKS
  {
    id: 'passion-juice',
    name: 'Fresh Passion Juice',
    category: 'drinks',
    price: 250,
    priceDisplay: 'KSh 250',
    description: 'Freshly extracted sweet and tangy Rift Valley passion fruit juice, chilled over crushed ice.',
    tag: 'Cold Pressed',
    image: IMAGES.passionJuice,
    servedWith: '100% natural, freshly squeezed daily'
  },
  {
    id: 'mango-juice',
    name: 'Mango Juice',
    category: 'drinks',
    price: 250,
    priceDisplay: 'KSh 250',
    description: 'Rich, smooth and naturally sweet pure mango pulp juice served chilled.',
    tag: 'Smooth & Sweet',
    image: IMAGES.mangoJuice,
    servedWith: 'No artificial preservatives'
  },
  {
    id: 'sugarcane-juice',
    name: 'Sugarcane Juice',
    category: 'drinks',
    price: 200,
    priceDisplay: 'KSh 200',
    description: 'Freshly pressed cold raw sugarcane juice crushed with real fresh ginger and a squeeze of lime.',
    tag: 'Refreshing & Energizing',
    image: IMAGES.sugarcaneJuice,
    servedWith: 'Crushed with fresh ginger & lime'
  },
  {
    id: 'african-tea',
    name: 'African Tea',
    category: 'drinks',
    price: 150,
    priceDisplay: 'KSh 150',
    description: 'Authentic Kenyan Chai ya maziwa brewed with rich whole milk, premium tea leaves and subtle crushed ginger/cardamom upon request.',
    tag: 'Traditional Brew',
    image: IMAGES.africanTea,
    servedWith: 'Steaming hot clay or ceramic mug'
  },
  {
    id: 'soda',
    name: 'Soda (300ml glass bottle)',
    category: 'drinks',
    price: 150,
    priceDisplay: 'KSh 150',
    description: 'Chilled classic 300ml bottle: Coca-Cola, Fanta Orange, Fanta Blackcurrant, Stoney Tangawizi, Sprite, or Krest Bitter Lemon.',
    tag: 'Chilled',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    servedWith: 'Ice and lemon slice on request'
  },
  {
    id: 'bottled-water',
    name: 'Bottled Water (500ml)',
    category: 'drinks',
    price: 100,
    priceDisplay: 'KSh 100',
    description: 'Pure still mineral drinking water, room temperature or chilled.',
    tag: 'Mineral Water',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80',
    servedWith: '500ml sealed bottle'
  }
];
