
import React from 'react';
import { MenuItem, Testimonial } from './types';

export const PHONE_NUMBER = '0742655163';
export const WHATSAPP_NUMBER = '254742655163';
export const LOCATION = 'Harare, Zimbabwe';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.335 11.897-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export const MENU_DATA: MenuItem[] = [
  {
    id: 'sig-1',
    name: 'Crib Signature Burger #1',
    category: 'Signature',
    price: 430,
    description: '2 layers seasoned beef, chicken patty, bacon, drip cheese, special sweet sauce, onions, tomato, lettuce on a roasted bun.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sig-2',
    name: 'Crib Signature Burger #2',
    category: 'Signature',
    price: 550,
    description: '3 layers seasoned beef, chicken patty, double melted cheese, special sweet sauce, onions, tomatoes, lettuce on double roasted cheese buns.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tex-1',
    name: 'Texas Burger Deluxe',
    category: 'Texas',
    price: 330,
    description: 'Seasoned beef & chicken patty, special egg, melted cheese, special sauce, roasted bun, onions, tomatoes, lettuce.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tex-2',
    name: 'Texas Burger Standard',
    category: 'Texas',
    price: 220,
    description: 'Seasoned beef & chicken patty, melted cheese, special sauce, roasted bun, onions, tomatoes, lettuce.',
    image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mf-1',
    name: 'My Friend Burger Deluxe',
    category: 'My Friend',
    price: 190,
    description: 'Seasoned beef & chicken patty, melted cheese, special sauce, roasted bun, onions, tomato, lettuce.',
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mf-2',
    name: 'My Friend Burger Lite',
    category: 'My Friend',
    price: 140,
    description: 'Seasoned beef & chicken patty, special sauce, roasted bun, onions, tomato, lettuce.',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=800'
  },
  { id: 'ex-1', name: 'Extra Beef/Chicken Patty', category: 'Extras', price: 60, description: 'Single seasoned patty' },
  { id: 'ex-2', name: 'Special Seasoned Egg', category: 'Extras', price: 60, description: 'Perfectly fried egg' },
  { id: 'ex-3', name: 'Melted Cheese Slice', category: 'Extras', price: 70, description: 'Extra cheesy goodness' },
  { id: 'ex-4', name: 'Roasted Bun', category: 'Extras', price: 25, description: 'Perfectly toasted' },
  { id: 'ex-5', name: 'Crib Fries', category: 'Extras', price: 70, description: 'Crispy golden fries' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: "Kynthia M.",
    tag: "Regular Customer",
    rating: 5,
    text: "Crib really does a good job l enjoy their Burgers."
  },
  {
    id: 2,
    name: "Ramos R.",
    tag: "Customer",
    rating: 5,
    text: "The Flavor and the texture of their Burgers are very good, definitely l will recommend Crib Burgers, You Can't Eat Only One, Taste like Africa"
  },
  {
    id: 3,
    name: "Sheldon O.",
    tag: "Local Resident",
    rating: 5,
    text: "Crib Burgers never misses. It's my favorite weekend treat. Fast ordering via WhatsApp and always fresh and hot when it arrives."
  }
];
