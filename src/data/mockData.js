import earbudsImg from '../assets/earbuds.jpg';
import watchImg from '../assets/watch.jpg';
import keyboardImg from '../assets/keyboard.jpg';
import shoesImg from '../assets/shoes.jpg';

export const categories = [
  'All',
  'Electronics',
  'Accessories',
  'Home & Living',
  'Apparel'
];

export const mockProducts = [
  {
    id: 1,
    name: 'AeroFit Pro Wireless Earbuds',
    category: 'Electronics',
    price: 129.99,
    salePrice: 99.99,
    rating: 4.8,
    reviewsCount: 124,
    image: earbudsImg,
    badge: 'Sale',
    description: 'Experience pure audio luxury with active noise cancellation, water resistance, and an ergonomic fit designed for all-day comfort. AeroFit Pro delivers crystal clear highs and deep, resonant bass.',
    features: [
      'Active Noise Cancellation (ANC) up to 40dB',
      'Ultra-low latency gaming mode (60ms)',
      'IPX7 water & sweat resistance',
      'Up to 36 hours of total playtime with charging case',
      'Smart touch controls & voice assistant support'
    ],
    variants: {
      colors: [
        { name: 'Charcoal Black', hex: '#1e293b' },
        { name: 'Arctic White', hex: '#f8fafc' },
        { name: 'Nordic Blue', hex: '#1d4ed8' }
      ]
    },
    reviews: [
      { id: 1, author: 'Sarah K.', rating: 5, comment: 'The sound quality is incredible, and the noise cancellation is better than my over-ear headphones!', date: '2026-06-15' },
      { id: 2, author: 'David L.', rating: 4, comment: 'Very comfortable for workouts. The battery life is phenomenal.', date: '2026-07-02' }
    ]
  },
  {
    id: 2,
    name: 'Classic Chronograph Leather Watch',
    category: 'Accessories',
    price: 199.99,
    rating: 4.6,
    reviewsCount: 88,
    image: watchImg,
    badge: 'Hot',
    description: 'An elegant statement piece combining classic style with modern functionality. Crafted with a premium Japanese quartz movement, genuine Italian leather strap, and water resistance up to 50 meters.',
    features: [
      'Genuine Italian top-grain leather strap',
      'Scratch-resistant sapphire crystal glass face',
      'Japanese Miyota quartz movement',
      'Chronograph stopwatch functions',
      'Water resistant up to 5ATM (50m)'
    ],
    variants: {
      colors: [
        { name: 'Cognac Brown', hex: '#7c2d12' },
        { name: 'Obsidian Black', hex: '#0f172a' }
      ]
    },
    reviews: [
      { id: 1, author: 'Marcus V.', rating: 5, comment: 'Absolutely gorgeous watch. I get compliments on it daily. Feels heavy and premium.', date: '2026-05-20' },
      { id: 2, author: 'Elena R.', rating: 4, comment: 'Beautiful design. The leather strap is a bit stiff at first but breaks in nicely.', date: '2026-06-10' }
    ]
  },
  {
    id: 3,
    name: 'NeoGlow Mechanical Keyboard',
    category: 'Electronics',
    price: 89.99,
    rating: 4.5,
    reviewsCount: 215,
    image: keyboardImg,
    badge: 'New',
    description: 'Boost your typing productivity and gaming experience with our hot-swappable 75% mechanical keyboard. Features custom linear switches, dynamic double-shot PBT keycaps, and vibrant per-key RGB backlighting.',
    features: [
      'Hot-swappable switch sockets (3-pin/5-pin compatible)',
      'Pre-lubed custom linear switches for smooth typing',
      'High-grade PBT double-shot keycaps',
      'Full RGB backlighting with 18 preset effects',
      'Detachable USB-C braided cable'
    ],
    variants: {
      colors: [
        { name: 'Cyber Neon', hex: '#ec4899' },
        { name: 'Retro Gray', hex: '#64748b' }
      ]
    },
    reviews: [
      { id: 1, author: 'Alex D.', rating: 5, comment: 'The typing feel is buttery smooth. The sound is perfect, not too loud but very satisfying.', date: '2026-07-10' },
      { id: 2, author: 'Clara W.', rating: 4, comment: 'Beautiful lights. Keyboard layout is perfect for a clean desk setup.', date: '2026-07-14' }
    ]
  },
  {
    id: 4,
    name: 'UltraBreath Running Shoes',
    category: 'Apparel',
    price: 149.99,
    salePrice: 119.99,
    rating: 4.7,
    reviewsCount: 340,
    image: shoesImg,
    badge: 'Sale',
    description: 'Designed for runners who demand responsiveness and lightness. The UltraBreath features a custom-knit upper that moves with your foot, combined with our CloudFoam midsole that absorbs impact and returns energy.',
    features: [
      'Breathable engineered knit mesh upper',
      'CloudFoam energy-return midsole technology',
      'Durable Continental rubber outsole for grip',
      'Lightweight design (only 240g per shoe)',
      'Ortholite comfort footbed'
    ],
    variants: {
      sizes: ['8', '9', '10', '11', '12'],
      colors: [
        { name: 'Coral Mesh', hex: '#fb923c' },
        { name: 'Slate Gray', hex: '#94a3b8' }
      ]
    },
    reviews: [
      { id: 1, author: 'Jordan M.', rating: 5, comment: 'Literally feels like running on clouds. Best running shoes I have owned in years.', date: '2026-06-25' },
      { id: 2, author: 'Emma T.', rating: 4, comment: 'Very lightweight and breathable. Fits slightly snug, so consider sizing up half a size.', date: '2026-07-08' }
    ]
  },
  {
    id: 5,
    name: 'Minimalist Leather Wallet',
    category: 'Accessories',
    price: 49.99,
    rating: 4.4,
    reviewsCount: 95,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&auto=format&fit=crop&q=80',
    description: 'Ditch the bulk with this slim-profile bifold wallet. Handcrafted from vegetable-tanned leather, it securely holds up to 8 cards and cash while maintaining a sleek, front-pocket friendly design with RFID protection.',
    features: [
      'Premium vegetable-tanned leather construction',
      'RFID blocking protection to secure your cards',
      'Quick-access outer card slots',
      'Slim dimensions: 4.2" x 3.1" x 0.3"',
      'Dedicated central cash compartment'
    ],
    variants: {
      colors: [
        { name: 'Tan Leather', hex: '#b45309' },
        { name: 'Charcoal Black', hex: '#1e293b' }
      ]
    },
    reviews: [
      { id: 1, author: 'Thomas B.', rating: 4, comment: 'Beautiful wallet, super slim. Barely notice it in my front pocket.', date: '2026-05-30' }
    ]
  },
  {
    id: 6,
    name: 'ZenCap Insulated Water Bottle',
    category: 'Accessories',
    price: 34.99,
    rating: 4.3,
    reviewsCount: 154,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80',
    description: 'Keep your drinks ice-cold for 24 hours or piping hot for 12 hours. The ZenCap is double-wall vacuum insulated and features a leak-proof magnetic lid and a durable powder-coated exterior.',
    features: [
      'Double-wall vacuum insulation technology',
      '18/8 food-grade stainless steel (BPA-free)',
      'Leak-proof magnetic cap keeps lid out of your face',
      'Sweat-proof powder coat finish',
      'Capacity: 32 oz / 950 ml'
    ],
    variants: {
      colors: [
        { name: 'Forest Green', hex: '#15803d' },
        { name: 'Ocean Teal', hex: '#0f766e' },
        { name: 'Lilac Dusk', hex: '#a855f7' }
      ]
    },
    reviews: [
      { id: 1, author: 'Lily H.', rating: 5, comment: 'Holds ice all day long even in hot weather! The magnetic cap is a game changer.', date: '2026-06-18' }
    ]
  },
  {
    id: 7,
    name: 'Nordic Waffle Knit Blanket',
    category: 'Home & Living',
    price: 79.99,
    rating: 4.8,
    reviewsCount: 67,
    image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=600&auto=format&fit=crop&q=80',
    description: 'Add warmth and texture to your living room or bedroom. Woven from 100% organic long-staple cotton, this throw blanket features a rich waffle knit structure that is exceptionally soft, breathable, and cozy.',
    features: [
      '100% GOTS-certified organic cotton',
      'Soft and lightweight waffle-weave texture',
      'Sized generously at 50" x 70"',
      'Machine washable and pre-washed for extra softness',
      'Eco-friendly dyes used'
    ],
    variants: {
      colors: [
        { name: 'Cream Waffle', hex: '#fef08a' },
        { name: 'Sage Green', hex: '#86efac' }
      ]
    },
    reviews: [
      { id: 1, author: 'Sophia G.', rating: 5, comment: 'Super soft, has the perfect weight. Looks very classy on our grey sofa.', date: '2026-04-12' }
    ]
  },
  {
    id: 8,
    name: 'ErgoDesk Pro Standing Desk',
    category: 'Home & Living',
    price: 499.99,
    rating: 4.9,
    reviewsCount: 56,
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=600&auto=format&fit=crop&q=80',
    badge: 'Popular',
    description: 'Transform your work-from-home routine. The ErgoDesk Pro features a powerful dual-motor lift system, a solid oak desktop, and a programmable keypad with 4 memory presets for quick, quiet adjustments.',
    features: [
      'Premium solid oak desktop with cable routing cutouts',
      'Dual-motor frame with 250 lbs lift capacity',
      'Adjustable height range: 24.5" to 50"',
      'Digital memory controller with 4 presets & USB charging',
      'Anti-collision safety sensor built-in'
    ],
    variants: {
      sizes: ['48" x 24"', '60" x 30"'],
      colors: [
        { name: 'Natural Oak', hex: '#d97706' },
        { name: 'Walnut Wood', hex: '#78350f' }
      ]
    },
    reviews: [
      { id: 1, author: 'Andrew S.', rating: 5, comment: 'Assembly was straightforward, motors are quiet and fast, desk feels rock solid.', date: '2026-05-15' }
    ]
  }
];
