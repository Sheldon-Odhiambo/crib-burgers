
import React from 'react';
import { MenuItem, Testimonial } from './types';

export const PHONE_NUMBER = "+254 742 655 163";
export const WHATSAPP_NUMBER = "254742655163";
export const LOCATION = "Harare / Rongai Hub";

export const MENU_DATA: MenuItem[] = [
  {
    id: 's1',
    name: 'Crib Signature Duo',
    price: 430,
    description: 'Onions, tomato, lettuce, special sweet sauce, drip cheese, melted roasted bun, and 2 layers of seasoned beef/chicken patty.',
    category: 'Signature',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    type: 'food'
  },
  {
    id: 's2',
    name: 'Crib Signature Triple Hope',
    price: 550,
    description: 'Onions, tomato, lettuce, special sweet sauce, double melted cheese, 3 layers of seasoned beef/chicken patty and two roasted cheese buns layers.',
    category: 'Signature',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=800',
    type: 'food'
  },
  {
    id: 't1',
    name: 'Texas Big Batch',
    price: 330,
    description: 'Our premium Texas-style burger with bold flavors and hearty seasoning.',
    category: 'Texas',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800',
    type: 'food'
  },
  {
    id: 't2',
    name: 'Texas Junior',
    price: 210,
    description: 'A lighter Texas-style burger with that signature kick.',
    category: 'Texas',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800',
    type: 'food'
  },
  {
    id: 'mf1',
    name: 'My Friend Special',
    price: 190,
    description: 'A friendly favorite seasoned with love and the crib secret spices.',
    category: 'My Friend',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&q=80&w=800',
    type: 'food'
  },
  {
    id: 'mf2',
    name: 'My Friend Basic',
    price: 140,
    description: 'Simple, delicious, and perfectly budget-friendly for our friends.',
    category: 'My Friend',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    type: 'food'
  },
  {
    id: 'e1',
    name: 'Extra Patty',
    price: 60,
    description: 'Add an extra layer of seasoned beef or chicken patty to any burger.',
    category: 'Extras',
    type: 'food'
  },
  {
    id: 'e2',
    name: 'Special Egg',
    price: 40,
    description: 'A perfectly seasoned special egg to top your favorite burger.',
    category: 'Extras',
    type: 'food'
  },
  {
    id: 'e3',
    name: 'Cheese Slice',
    price: 70,
    description: 'An extra slice of delicious melted cheese.',
    category: 'Extras',
    type: 'food'
  },
  {
    id: 'e4',
    name: 'Seasoned Fries',
    price: 70,
    description: 'Crispy, hot, and seasoned to perfection.',
    category: 'Extras',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800',
    type: 'food'
  }
];

export const MERCH_DATA: MenuItem[] = [
  {
    id: 'm1',
    name: 'The Visionary T-Shirt',
    price: 1000,
    description: 'Premium heavy cotton tee featuring the Crib Burgers "Ministry Kitchen" logo on the chest.',
    category: 'Apparel',
    image: './assets/vision.jpeg',
    type: 'merch'
  },
  {
    id: 'm5',
    name: 'Congo Flag Edition Tee',
    price: 1200,
    description: 'The iconic Crib logo masked with the Kenyan flag. Celebrate our Rongai roots in style.',
    category: 'Apparel',
    image: './assets/congo.jpeg',
    type: 'merch'
  },
  {
    id: 'm6',
    name: 'Zimbabwe Flag Edition Tee',
    price: 1500,
    description: 'The iconic Crib logo masked with the Zimbabwe flag. Representing the Harare heartbeat.',
    category: 'Apparel',
    image: './assets/zimw.jpeg',
    type: 'merch'
  },
  {
    id: 'm2',
    name: 'Ministry Hoodie',
    price: 3500,
    description: 'Ultra-soft fleece hoodie with "A Story of Hope" embroidered on the sleeve. Perfect for chilly Rongai nights.',
    category: 'Apparel',
    image: './assets/mini-hoodie.jpeg',
    type: 'merch'
  },
  {
    id: 'm7',
    name: 'Streetwear Oversized Tee',
    price: 1800,
    description: 'Drop-shoulder relaxed fit with a large Crib Kitchen graphic on the back. Modern urban style.',
    category: 'Apparel',
    image: './assets/streetwear.jpeg',
    type: 'merch'
  },
  {
    id: 'm3',
    name: 'Crib Signature Cap',
    price: 800,
    description: 'Adjustable trucker cap with the classic orange and stone logo. Stay cool while you grill.',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800',
    type: 'merch'
  },
  {
    id: 'm8',
    name: 'Oversized Hoodie',
    price: 2500,
    description: 'cotton hoodies',
    category: 'Accessories',
    image: './assets/oversized-hoodie.jpeg',
    type: 'merch'
  },
  {
    id: 'm4',
    name: 'Master Griller Apron',
    price: 1200,
    description: 'Professional grade canvas apron with multiple pockets for your spatula and phone.',
    category: 'Utility',
    image: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?auto=format&fit=crop&q=80&w=800',
    type: 'merch'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Kynthia M.',
    text: '"Crib really does a good job l enjoy their Burgers.',
    rating: 5,
    tag: 'Regular Customer'
  },
  {
    id: 't2',
    name: 'Ramos M.',
    text: 'The Flavor and the texture of their Burgers are very good, definitely l will recommend Crib Burgers,Taste like',
    rating: 5,
    tag: 'Cribs Friend'
  },
  {
    id: 't3',
    name: 'Sheldon O.',
    text: 'Crib Burgers never misses. Its my favorite weekend treat.Fast ordering via WhatsApp and always fresh and hot when it arrives.',
    rating: 5,
    tag: 'Local Resident'
  },
  {
    id: 't4',
    name: 'Anesu_fr.',
    text: 'I bought the Ministry Hoodie and the quality is amazing. I wear it everywhere! Keep spreading the hope.',
    rating: 5,
    tag: 'Friend of Crib'
  }
];

export const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
