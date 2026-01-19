
import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Phone, 
  Plus, 
  Minus, 
  X, 
  Clock, 
  MapPin, 
  Star,
  CheckCircle2,
  Instagram,
  Quote,
  Menu as MenuIcon,
  ChevronRight,
  Heart,
  Users,
  Utensils,
  Target,
  Rocket,
  Truck,
  Package,
  MapPinned
} from 'lucide-react';
import { 
  MenuItem, 
  CartItem 
} from './types';
import { 
  MENU_DATA, 
  TESTIMONIALS_DATA, 
  PHONE_NUMBER, 
  WHATSAPP_NUMBER, 
  WhatsAppIcon,
  LOCATION
} from './constants';

// --- Sub-Components ---

const Navbar = ({ cartCount, onOpenCart }: { cartCount: number, onOpenCart: () => void }) => {
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    if (cartCount > 0) {
      setIsBouncing(true);
      const timer = setTimeout(() => setIsBouncing(false), 500);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  return (
    <nav className="sticky top-0 z-40 bg-stone-900/90 backdrop-blur-md shadow-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <img
                  src="/images/crib-logo.png"
                  alt="Crib Burgers Logo"
                  className="w-12 h-12 rounded-xl object-contain shadow-lg"
                />
            <div>
              <h1 className="text-2xl font-heading text-white tracking-wider">CRIB BURGERS</h1>
              <p className="text-[10px] text-orange-500 font-bold tracking-[0.2em] uppercase -mt-1">The Crib Kitchen</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 font-semibold text-white">
            <a href="#about" className="hover:text-orange-500 transition-colors">Our Story</a>
            <a href="#menu" className="hover:text-orange-500 transition-colors">Menu</a>
            <a href="#impact" className="hover:text-orange-500 transition-colors">Mission</a>
            <a href="#team" className="hover:text-orange-500 transition-colors">Team</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenCart}
              className={`relative p-2 text-white hover:text-orange-500 transition-all active:scale-95 ${isBouncing ? 'animate-bounce' : ''}`}
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="hidden sm:flex items-center gap-2 bg-white text-stone-900 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-orange-600 hover:text-white transition-all shadow-md active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-stone-950 pt-16 pb-32 lg:pt-32 lg:pb-48">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1920" 
          alt="Hero Burger" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-widest mb-6">
            A Burger, A Smile, A Story of Hope
          </span>
          <h1 className="text-6xl md:text-8xl font-heading text-white mb-6 leading-tight drop-shadow-2xl">
            A SIMPLE <br />
            <span className="text-orange-500 underline decoration-white/20 underline-offset-8">BURGER CHANGED MY LIFE.</span>
          </h1>
          <p className="text-xl text-stone-300 mb-10 max-w-xl leading-relaxed">
            Watch how Crib Burgers turned a simple meal into a moment of kindness and connection. Born in 2021, currently serving <strong>Rongai</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#menu" 
              className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-orange-500 transition-all shadow-xl shadow-orange-900/40 hover:-translate-y-1 active:translate-y-0 text-center"
            >
              Order Your Burger
            </a>
            <button 
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'd like to see your menu and order some burgers.`)}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5 text-green-400" />
              Chat on WhatsApp
            </button>
          </div>
          
          <div className="mt-16 flex items-center justify-center lg:justify-start gap-10 border-t border-white/10 pt-10">
            <div>
              <p className="text-white text-3xl font-heading">Rongai</p>
              <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">Kenya</p>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div>
              <div className="flex text-orange-500 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">Mobile Burger Ministry</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StorySection = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl bg-stone-100 transform -rotate-3 hover:rotate-0 transition-transform duration-700">
              {/* <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" 
                alt="Grill Action" 
                className="w-full h-full object-cover"
              /> */}
            </div>
            <div className="absolute -bottom-10 -right-10 bg-stone-900 p-10 rounded-[2.5rem] shadow-2xl hidden sm:block transform rotate-3">
              <Heart className="text-orange-600 w-12 h-12 mb-4 animate-bounce" />
              <p className="text-white text-4xl font-heading mb-1 uppercase tracking-wider">Ministry</p>
              <p className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.2em] leading-tight">Serving People <br />Serving Purpose</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="mb-10">
               <h2 className="text-orange-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">The Origin Story</h2>
               <h3 className="text-5xl md:text-6xl font-heading text-stone-900 mb-6 uppercase leading-[0.9]">
                 A Burger, A Smile, <br />
                 <span className="text-stone-300">A Story of Hope.</span>
               </h3>
               <p className="text-stone-500 text-lg leading-relaxed font-serif italic mb-8 border-l-4 border-orange-600 pl-6 py-2">
                 "My name is Keith Tadiwanashe Manokore, and this is how a simple burger changed my life."
               </p>
            </div>
            
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>
                It all began in 2021 while I was studying Christian Ministries (Management option) at <strong>Africa Nazarene University</strong>. In between lectures and assignments, I started selling burgers to students, lecturers, and staff. What started as a small side hustle quickly became something much deeper.
              </p>
              <p>
                Every time I handed someone a burger, I also shared a smile, encouragement, and sometimes even a prayer. I began to see how food opens doors, brings people together, and creates meaningful conversations. <strong>I realized this wasn’t just business—it was ministry.</strong>
              </p>
              <p>
                That is the moment Crib Burgers was born: A dream to serve great food while serving people, bringing hope, building community, and creating opportunities for young people.
              </p>
              <p>
                Today, that dream continues to take shape. While my roots are in <strong>Harare, Zimbabwe</strong>, I am currently bringing this mobile burger ministry to the streets of <strong>Rongai, Kenya</strong>, creating jobs and supporting my urban ministry project, <strong>Crib Connection</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionImpactSection = () => {
  return (
    <section id="impact" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold uppercase tracking-[0.4em] text-xs mb-4">Our Core</h2>
          <h3 className="text-4xl md:text-5xl font-heading text-stone-900 mb-6 uppercase tracking-tight">Mission & <span className="text-stone-300">Market</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-stone-100 flex flex-col gap-6 group hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-600/20 group-hover:scale-110 transition-transform">
              <Rocket className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold font-heading tracking-widest uppercase">Our Mission</h4>
            <p className="text-stone-600 text-lg leading-relaxed">
              Our mission is to serve delicious and high-quality burgers to food enthusiasts on the go while providing a unique and memorable dining experience. We aim to cater to individuals who value quality ingredients and crave a satisfying burger experience.
            </p>
          </div>

          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-stone-100 flex flex-col gap-6 group hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold font-heading tracking-widest uppercase">Our Target Market</h4>
            <p className="text-stone-600 text-lg leading-relaxed">
              Our target market consists of busy professionals, adults, students, tourists and families in <strong>Rongai</strong> who appreciate convenient and tasty food options. We provide a bridge between great flavor and the community we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const staff = [
    { name: "Keith T. Manokore", role: "Founder & Visionary", bio: "Leading the ministry with a spatula and a prayer.", icon: <Users /> },
    { name: "Kitchen Ministry", role: "Lead Grill Team", bio: "Masters of the seasoned beef and chicken patty.", icon: <Utensils /> },
    { name: "Crib Connection", role: "Outreach & Community", bio: "Connecting the burgers to urban ministry projects.", icon: <Heart /> }
  ];

  return (
    <section id="team" className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-xl">
            <h2 className="text-orange-500 font-bold uppercase tracking-[0.4em] text-xs mb-4">The Hands Behind the Hope</h2>
            <h3 className="text-5xl md:text-7xl font-heading uppercase leading-tight tracking-tight">Meet the <br /><span className="text-stone-600">Crib Staff</span></h3>
          </div>
          <p className="text-stone-400 max-w-sm text-lg italic font-serif">
            "Creating jobs and supporting the vision of urban ministry through professional service in Rongai."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {staff.map((member, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all group">
              <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center text-white mb-8 group-hover:animate-bounce">
                {member.icon}
              </div>
              <h4 className="text-2xl font-bold font-heading tracking-widest uppercase mb-2">{member.name}</h4>
              <p className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">{member.role}</p>
              <p className="text-stone-400 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuCard: React.FC<{ item: MenuItem; onAdd: (item: MenuItem) => void }> = ({ item, onAdd }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAdd(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 600);
  };

  return (
    <div className="burger-card group bg-white rounded-[2rem] p-5 shadow-sm hover:shadow-2xl transition-all border border-stone-100 flex flex-col h-full overflow-hidden">
      {item.image && (
        <div className="relative h-56 -mx-5 -mt-5 mb-5 bg-stone-100 overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name} 
            className="burger-image w-full h-full object-cover transition-transform duration-700"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-white/95 backdrop-blur-md text-stone-950 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              KSh {item.price}
            </span>
          </div>
          <div className="absolute bottom-4 left-4">
            <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
              {item.category}
            </span>
          </div>
        </div>
      )}
      <div className="flex-1">
        {!item.image && (
           <div className="flex justify-between items-start mb-3">
             <h3 className="text-xl font-bold text-stone-900 leading-tight uppercase font-heading tracking-wide">{item.name}</h3>
             <span className="text-orange-600 font-bold whitespace-nowrap ml-2">KSh {item.price}</span>
           </div>
        )}
        {item.image && <h3 className="text-xl font-bold text-stone-900 leading-tight mb-2 uppercase font-heading tracking-wide">{item.name}</h3>}
        <p className="text-stone-500 text-sm mb-6 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
      </div>
      <button 
        onClick={handleAdd}
        className={`w-full font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-orange-600/20 ${
          isAdded 
          ? 'bg-green-500 text-white scale-95' 
          : 'bg-stone-50 text-stone-900 hover:bg-orange-600 hover:text-white'
        }`}
      >
        {isAdded ? <CheckCircle2 className="w-5 h-5 animate-in zoom-in" /> : <Plus className="w-5 h-5" />}
        {isAdded ? 'Added to Bag!' : 'Add to Order'}
      </button>
    </div>
  );
};

const CartDrawer = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQty, 
  onRemove 
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  items: CartItem[], 
  onUpdateQty: (id: string, delta: number) => void,
  onRemove: (id: string) => void
}) => {
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'delivery'>('pickup');
  const [address, setAddress] = useState('');
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const generateWhatsAppMessage = () => {
    let message = `*NEW ORDER - CRIB BURGERS*\n\n`;
    message += `*Method:* ${deliveryMethod === 'pickup' ? 'Local Pickup (Rongai Hub)' : 'Delivery'}\n`;
    if (deliveryMethod === 'delivery' && address) {
      message += `*Address:* ${address}\n`;
    }
    message += `\n`;
    items.forEach(item => {
      message += `• ${item.quantity}x ${item.name} - KSh ${item.price * item.quantity}\n`;
    });
    message += `\n*TOTAL: KSh ${total}*\n\n`;
    message += `Please confirm my order. I appreciate the amazing quality and the story of hope behind Crib Burgers!`;
    return encodeURIComponent(message);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div 
        className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500 ease-out">
        <div className="p-8 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-orange-600 p-2 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold uppercase font-heading tracking-widest">Your Bag</h2>
              <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">{items.length} Items Selected</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-xl transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-stone-50 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="w-12 h-12 text-stone-200" />
              </div>
              <h3 className="text-xl font-bold mb-2">Empty Bag</h3>
              <p className="text-stone-500 font-medium">Add some of our legendary burgers to get started.</p>
              <button onClick={onClose} className="mt-8 text-orange-600 font-bold hover:underline underline-offset-4">
                View the Menu
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-6">
                {items.map(item => (
                  <div key={item.id} className="flex gap-5 group animate-in slide-in-from-bottom-2 fade-in duration-300">
                    {item.image && (
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-20 h-20 rounded-2xl object-cover shadow-sm group-hover:shadow-md transition-shadow"
                      />
                    )}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold text-stone-900 uppercase font-heading tracking-wide text-md leading-none">{item.name}</h3>
                          <button onClick={() => onRemove(item.id)} className="text-stone-300 hover:text-red-500 p-1 transition-colors">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-stone-400 text-[10px] font-bold">KSh {item.price}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-stone-200 rounded-xl overflow-hidden bg-white">
                          <button onClick={() => onUpdateQty(item.id, -1)} className="px-3 py-1.5 hover:bg-stone-50 border-r border-stone-200 transition-colors">
                            <Minus className="w-2.5 h-2.5" />
                          </button>
                          <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                          <button onClick={() => onUpdateQty(item.id, 1)} className="px-3 py-1.5 hover:bg-stone-50 border-l border-stone-200 transition-colors">
                            <Plus className="w-2.5 h-2.5" />
                          </button>
                        </div>
                        <span className="font-bold text-stone-950 font-heading text-lg">KSh {item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Options Section */}
              <div className="pt-8 border-t border-stone-100 animate-in fade-in duration-500 delay-200">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-6 flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5" />
                  Order Method
                </h4>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <button 
                    onClick={() => setDeliveryMethod('pickup')}
                    className={`flex flex-col items-center gap-3 p-5 rounded-3xl border-2 transition-all ${
                      deliveryMethod === 'pickup' 
                      ? 'border-orange-600 bg-orange-50 text-orange-600 shadow-md scale-[1.02]' 
                      : 'border-stone-100 bg-stone-50 text-stone-500 hover:border-stone-200'
                    }`}
                  >
                    <Package className={`w-6 h-6 ${deliveryMethod === 'pickup' ? 'animate-bounce' : ''}`} />
                    <span className="text-xs font-bold uppercase tracking-widest text-center">Local Pickup</span>
                  </button>
                  <button 
                    onClick={() => setDeliveryMethod('delivery')}
                    className={`flex flex-col items-center gap-3 p-5 rounded-3xl border-2 transition-all ${
                      deliveryMethod === 'delivery' 
                      ? 'border-orange-600 bg-orange-50 text-orange-600 shadow-md scale-[1.02]' 
                      : 'border-stone-100 bg-stone-50 text-stone-500 hover:border-stone-200'
                    }`}
                  >
                    <Truck className={`w-6 h-6 ${deliveryMethod === 'delivery' ? 'animate-bounce' : ''}`} />
                    <span className="text-xs font-bold uppercase tracking-widest text-center">Delivery</span>
                  </button>
                </div>

                {deliveryMethod === 'pickup' && (
                  <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                    <MapPin className="w-5 h-5 text-orange-600 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-orange-900 uppercase tracking-widest">Pickup Location</p>
                      <p className="text-[10px] text-orange-700 mt-1">Available at our <strong>Harare</strong> location or current <strong>Rongai</strong> hub.</p>
                    </div>
                  </div>
                )}

                {deliveryMethod === 'delivery' && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="relative">
                      <MapPinned className="absolute left-4 top-4 w-5 h-5 text-stone-400" />
                      <textarea
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter your Rongai delivery address..."
                        className="w-full bg-stone-50 border-2 border-stone-100 rounded-2xl p-4 pl-12 text-sm font-medium focus:border-orange-600 focus:outline-none focus:bg-white transition-all min-h-[100px]"
                      />
                    </div>
                    <p className="text-[10px] text-stone-400 font-medium italic text-center">
                      Delivery fee will be calculated based on your location in Rongai.
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 bg-stone-50 border-t border-stone-200 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-stone-400 text-xs font-bold uppercase tracking-widest">
                <span>Subtotal</span>
                <span>KSh {total}</span>
              </div>
              <div className="flex justify-between text-stone-950 font-heading text-4xl">
                <span>Total</span>
                <span>KSh {total}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full bg-green-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-green-950/20 hover:bg-green-700 transition-all active:scale-[0.98] group ${
                  deliveryMethod === 'delivery' && !address ? 'opacity-50 pointer-events-none' : ''
                }`}
              >
                <WhatsAppIcon className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span className="uppercase tracking-widest font-heading text-lg">Send Order via WhatsApp</span>
              </a>
              {deliveryMethod === 'delivery' && !address && (
                <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest text-center animate-pulse">
                  Please enter your address to proceed
                </p>
              )}
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="w-full bg-stone-950 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-stone-800 transition-all active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 text-orange-600" />
                <span className="uppercase tracking-widest text-xs">Call to Confirm Order</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-stone-950 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <Quote className="w-12 h-12 text-orange-600 mx-auto mb-6" />
          <h2 className="text-orange-500 font-bold uppercase tracking-[0.4em] text-xs mb-4">Voices of the Crib</h2>
          <h3 className="text-5xl md:text-7xl font-heading text-white uppercase tracking-tight">
            Hear From <span className="text-stone-600">Our Family</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div key={item.id} className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-[3rem] shadow-2xl relative group hover:bg-white/10 transition-all">
              <div className="flex text-orange-500 mb-8">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-white text-xl italic leading-relaxed mb-10 font-serif">
                "{item.text}"
              </p>
              <div className="flex items-center gap-5 border-t border-white/10 pt-8">
                <div className="w-14 h-14 rounded-2xl bg-orange-600 flex items-center justify-center font-heading text-2xl text-white shadow-lg">
                  {item.name[0]}
                </div>
                <div>
                  <p className="font-bold text-white text-lg tracking-wide uppercase font-heading">{item.name}</p>
                  <p className="text-[10px] text-orange-500 font-bold uppercase tracking-[0.2em]">{item.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              {/* <img
                      src="/images/crib-logo.png"
                      alt="Crib Burgers Logo"
                      className="w-12 h-12 rounded-xl object-contain shadow-lg"
                    /> */}

              <div>
                <h1 className="text-3xl font-heading text-white tracking-widest uppercase">CRIB BURGERS</h1>
                <p className="text-[10px] text-orange-500 font-bold tracking-[0.3em] uppercase -mt-1">Ministry Kitchen</p>
              </div>
            </div>
            <p className="text-stone-500 leading-relaxed mb-10 max-w-md text-lg">
              Started from a simple dream, we're now bringing high-quality burgers and hope to the streets of Rongai and beyond.
            </p>
            <div className="flex items-center gap-6">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all shadow-lg active:scale-90">
                <WhatsAppIcon className="w-6 h-6" />
              </a>
              <a href={`tel:${PHONE_NUMBER}`} className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all shadow-lg active:scale-90">
                <Phone className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all shadow-lg active:scale-90">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest font-heading text-xl">Crib Links</h4>
            <ul className="space-y-5 text-sm font-medium">
              <li><a href="#about" className="hover:text-orange-500 transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" /> Our Story</a></li>
              <li><a href="#menu" className="hover:text-orange-500 transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" /> The Menu</a></li>
              <li><a href="#impact" className="hover:text-orange-500 transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" /> Our Mission</a></li>
              <li><a href="#team" className="hover:text-orange-500 transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" /> The Staff</a></li>
            </ul>
          </div>
          
          <div id="contact">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest font-heading text-xl">The Station</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
                <span className="leading-relaxed">Kenya Operations: Rongai<br />Global HQ: {LOCATION}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-orange-600 shrink-0" />
                <span className="text-lg font-bold text-white">{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-orange-600 shrink-0" />
                <span>Mon-Sat: 10AM - 7PM<br /><span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">Always Grilling</span></span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-center">
          <p className="text-stone-600">© 2026 Crib Burgers. Made with love by amazing</p>
          <div className="flex gap-8 text-stone-600">
             <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
             <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
          <p className="text-stone-600">A Story of Hope and Kindness.</p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const categories = ['All', 'Signature', 'Texas', 'My Friend', 'Extras'];
  
  const filteredMenu = activeCategory === 'All' 
    ? MENU_DATA 
    : MENU_DATA.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-stone-50 selection:bg-orange-100 selection:text-orange-900">
      <Navbar cartCount={cart.reduce((s, i) => s + i.quantity, 0)} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        
        <StorySection />

        <MissionImpactSection />

        {/* Menu Section */}
        <section id="menu" className="py-32 bg-stone-100/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-orange-600 font-bold uppercase tracking-[0.4em] text-xs mb-4">Crib Selection</h2>
              <h3 className="text-5xl md:text-7xl font-heading text-stone-900 mb-6 uppercase tracking-tight">The <span className="text-stone-300 underline decoration-orange-600/20 underline-offset-8">Burger Vault</span></h3>
              <p className="text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed font-serif italic">
                Discover our range of expertly crafted burgers, from our triple-layered signatures to the classic favorites that started it all.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded-2xl text-xs font-bold transition-all uppercase tracking-widest border-2 ${
                    activeCategory === cat 
                      ? 'bg-orange-600 border-orange-600 text-white shadow-xl shadow-orange-950/20 translate-y-[-2px]' 
                      : 'bg-white border-white text-stone-500 hover:border-stone-200 hover:text-stone-900 shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredMenu.map(item => (
                <MenuCard key={item.id} item={item} onAdd={addToCart} />
              ))}
            </div>
          </div>
        </section>

        <TeamSection />

        <Testimonials />

        {/* Global CTA */}
        <section className="py-32 bg-orange-600 relative overflow-hidden group">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-stone-950 opacity-10" />
          </div>
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-1000" />
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-8xl font-heading text-white mb-10 leading-[0.85] uppercase tracking-tight">
              Hungry? Let's Get <br />
              <span className="text-stone-900 underline decoration-white/30 underline-offset-8">A Burger to You.</span>
            </h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-serif italic">
              Experience the ministry of good food. Join us in our journey of hope and flavor.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="bg-stone-950 text-white px-12 py-6 rounded-[2rem] font-bold text-xl hover:bg-stone-800 transition-all flex items-center gap-4 shadow-2xl hover:scale-105 active:scale-95"
              >
                <Phone className="w-8 h-8 text-orange-600" />
                <span className="tracking-widest uppercase font-heading">{PHONE_NUMBER}</span>
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="bg-white text-orange-600 px-12 py-6 rounded-[2rem] font-bold text-xl hover:bg-stone-50 transition-all flex items-center gap-4 shadow-2xl hover:scale-105 active:scale-95"
              >
                <WhatsAppIcon className="w-8 h-8 text-green-500" />
                <span className="tracking-widest uppercase font-heading">WhatsApp Now</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* WhatsApp Floating FAB */}
      <div className="fixed bottom-8 right-8 z-30 flex items-center">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-green-500 text-white p-5 rounded-[1.5rem] shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-3 group overflow-hidden"
          aria-label="Order on WhatsApp"
        >
          <WhatsAppIcon className="w-8 h-8" />
          <div className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-in-out">
            <span className="whitespace-nowrap font-bold text-sm uppercase tracking-widest pl-2">
              Order via WhatsApp
            </span>
          </div>
        </a>
      </div>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onUpdateQty={updateQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
};

export default App;
