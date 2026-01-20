
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image?: string;
  type: 'food' | 'merch';
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  tag: string;
}
