
import React, { useState, useEffect, useRef } from 'react';
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
  ChevronRight,
  Heart,
  Users,
  Utensils,
  Target,
  Rocket,
  Truck,
  Package,
  MapPinned,
  Shirt,
  Maximize2,
  Eye,
  Zap,
  Gift,
  HandHeart,
  Calendar,
  ArrowRight,
  ChevronDown,
  Loader2,
  Menu as MenuIcon
} from 'lucide-react';
import { 
  MenuItem, 
  CartItem 
} from './types';
import { 
  MENU_DATA, 
  MERCH_DATA,
  TESTIMONIALS_DATA, 
  PHONE_NUMBER, 
  WHATSAPP_NUMBER, 
  WhatsAppIcon,
  LOCATION
} from './constants';

type AppView = 'home' | 'merch' | 'hope';

// --- Loading Components ---

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-stone-950 flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-orange-600/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
      
      <div className="relative text-center animate-in zoom-in-95 duration-1000">
        <div className="mb-8 relative inline-block">
          <div className="w-24 h-24 bg-orange-600 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-orange-900/50 float-animation">
            <Utensils className="w-12 h-12 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <Heart className="w-4 h-4 text-red-500 fill-current" />
          </div>
        </div>
         <img
                  src="/assets/crib-logo.png"
                  alt="Crib Burgers Logo"
                  className="w-26 h-26 rounded-xl object-contain shadow-lg"
                />
        <h1 className="text-5xl md:text-7xl font-heading text-white tracking-widest mb-2">CRIB BURGERS</h1>
        <p className="text-xs text-orange-500 font-bold tracking-[0.4em] uppercase mb-12">The Kitchen Ministry</p>
        
        <div className="w-64 md:w-80 h-1.5 bg-white/5 rounded-full overflow-hidden relative border border-white/10">
          <div 
            className="h-full bg-gradient-to-r from-orange-600 to-orange-400 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
          {/* Sizzle particles */}
          <div className="absolute top-0 right-0 h-full w-2 bg-white/40 blur-sm animate-pulse" style={{ left: `${progress}%` }} />
        </div>
        <p className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-4 flex items-center justify-center gap-2">
          {progress < 100 ? (
            <>
              <Loader2 className="w-3 h-3 animate-spin" />
              Grilling Your Experience... {progress}%
            </>
          ) : (
            <>
              <CheckCircle2 className="w-3 h-3 text-green-500" />
              Hot & Fresh!
            </>
          )}
        </p>
      </div>
    </div>
  );
};

// --- Sub-Components ---

const Navbar = ({ cartCount, onOpenCart, currentView, setView }: { cartCount: number, onOpenCart: () => void, currentView: AppView, setView: (v: AppView) => void }) => {
  const [isBouncing, setIsBouncing] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (cartCount > 0) {
      setIsBouncing(true);
      const timer = setTimeout(() => setIsBouncing(false), 500);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  const handleNavClick = (view: AppView, hash?: string) => {
    setView(view);
    setIsMobileMenuOpen(false);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-stone-900/90 backdrop-blur-md shadow-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <img
                  src="/assets/crib-logo.png"
                  alt="Crib Burgers Logo"
                  className="w-20 h-20 rounded-xl object-contain shadow-lg"
                />
            <div>
              <h1 className="text-3xl font-heading text-white tracking-wider group-hover:text-orange-500 transition-colors">CRIB BURGERS</h1>
              <p className="text-[10px] text-orange-500 font-bold tracking-[0.2em] uppercase -mt-1">The Crib Kitchen</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-white">
            <button onClick={() => handleNavClick('home')} className={`hover:text-orange-500 transition-colors ${currentView === 'home' ? 'text-orange-500' : ''}`}>Our Story</button>
            <button 
              onClick={() => handleNavClick('home', '#menu')} 
              className="hover:text-orange-500 transition-colors flex items-center gap-1"
            >
              <Utensils className="w-4 h-4" />
              Menu
            </button>
            <button onClick={() => handleNavClick('hope')} className={`hover:text-orange-500 transition-colors flex items-center gap-1 ${currentView === 'hope' ? 'text-orange-500 underline underline-offset-4' : ''}`}>
              <HandHeart className="w-4 h-4" />
              Burger of Hope
            </button>
            <button onClick={() => handleNavClick('merch')} className={`hover:text-orange-500 transition-colors flex items-center gap-1 ${currentView === 'merch' ? 'text-orange-500 underline underline-offset-4' : ''}`}>
              <Shirt className="w-4 h-4" />
              Crib Merch
            </button>
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
              <span>Call</span>
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-orange-500 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-stone-900 border-b border-white/10 animate-in slide-in-from-top-4 duration-300 shadow-2xl overflow-hidden">
          <div className="px-4 py-8 flex flex-col gap-6 font-heading text-2xl uppercase tracking-widest text-white">
            <button 
              onClick={() => handleNavClick('home')} 
              className={`flex items-center gap-4 text-left ${currentView === 'home' ? 'text-orange-500' : ''}`}
            >
              <ChevronRight className={`w-6 h-6 ${currentView === 'home' ? 'text-orange-500' : 'text-stone-700'}`} />
              Our Story
            </button>
            <button 
              onClick={() => handleNavClick('home', '#menu')} 
              className="flex items-center gap-4 text-left"
            >
              <Utensils className="w-6 h-6 text-stone-700" />
              Burger Vault
            </button>
            <button 
              onClick={() => handleNavClick('hope')} 
              className={`flex items-center gap-4 text-left ${currentView === 'hope' ? 'text-orange-500' : ''}`}
            >
              <HandHeart className="w-6 h-6 text-stone-700" />
              Burger of Hope
            </button>
            <button 
              onClick={() => handleNavClick('merch')} 
              className={`flex items-center gap-4 text-left ${currentView === 'merch' ? 'text-orange-500' : ''}`}
            >
              <Shirt className="w-6 h-6 text-stone-700" />
              Crib Merch
            </button>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-4 text-left"
            >
              <MapPin className="w-6 h-6 text-stone-700" />
              Contact
            </a>
            <div className="pt-6 border-t border-white/5 mt-4">
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-3 bg-white text-stone-900 py-4 rounded-2xl"
              >
                <Phone className="w-6 h-6" />
                <span>Call Kitchen</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ onShopMerch, onMissionClick }: { onShopMerch: () => void, onMissionClick: () => void }) => {
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
          <button 
            onClick={onMissionClick}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-widest mb-6 hover:bg-orange-500 transition-colors group"
          >
            <Zap className="w-3 h-3 group-hover:animate-pulse" />
            A Burger, A Smile, A Story of Hope
          </button>
          <h1 className="text-6xl md:text-9xl font-heading text-white mb-6 leading-none drop-shadow-2xl">
            The Burger <br />
            <span className="text-orange-500 underline decoration-white/20 underline-offset-8 text-6xl md:text-9xl">YOUR SOUL CRAVES FOR.</span>
          </h1>
          <p className="text-xl text-stone-300 mb-10 max-w-xl leading-relaxed">
           Fresh ingredients, seasoned to perfection, and stacked high.
At Crib Burgers, every burger is made to spark smiles, bring people together, and reflect God’s love through genuine community. <strong>Ouuuuch!</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#menu" 
              className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-orange-500 transition-all shadow-xl shadow-orange-900/40 hover:-translate-y-1 active:translate-y-0 text-center"
            >
              Order Your Burger
            </a>
            <button 
              onClick={onShopMerch}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Shirt className="w-5 h-5 text-orange-400" />
              Shop Official Merch
            </button>
          </div>
          
          <div className="mt-16 flex items-center justify-center lg:justify-start gap-10 border-t border-white/10 pt-10">
            <div>
              <p className="text-white text-4xl font-heading tracking-widest">Burger</p>
              <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">Buzz</p>
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

const BurgerOfHopePage = ({ onHelpReachGoal }: { onHelpReachGoal: () => void }) => {
  const currentCount = 205;
  const targetCount = 1000;
  const progressPercentage = (currentCount / targetCount) * 100;

  const episodes = [
    {
      id: 1,
      title: "The First Batch",
      count: 38,
      description: "Our humble beginning. 38 amazing souls reached, 38 burgers served. The seed of hope was planted.",
      tag: "The Spark",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "The Biker Outreach",
      count: 47,
      description: "Dedicated to the motorcycle riders who risk so much for us. 47 riders fueled with flavor and love on this special day.",
      tag: "Road Warriors",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Boychild Matters",
      count: 20,
      description: "Focusing on 20 amazing boychilds. Driving home the message that boychild matters in our community and beyond.",
      tag: "Empowerment",
      image: "https://images.unsplash.com/photo-1484186139897-d5fc6b908812?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "The Century Mark",
      count: 100,
      description: "Our biggest milestone yet. Feeding 100 amazing people. A massive wave of hope delivered across the streets.",
      tag: "Community Power",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-white min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Hero Header */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1920" 
            alt="Burger of Hope" 
            className="w-full h-full object-cover opacity-30 scale-110 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-transparent to-stone-900" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
           <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-orange-500 text-xs font-bold uppercase tracking-widest mb-6 border border-white/10">
             Mission: Feed 1000 Souls
           </span>
           <h1 className="text-7xl md:text-9xl font-heading text-white uppercase mb-4 leading-none tracking-tight drop-shadow-2xl">
             THE BURGER <span className="text-orange-600">OF HOPE</span>
           </h1>
           <p className="text-stone-300 text-xl md:text-2xl font-serif italic max-w-2xl mx-auto leading-relaxed">
             "More than a meal, it's a message of kindness. Season 1 reached Episode 4, and we're just getting started."
           </p>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-24 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border border-stone-100">
            <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-12">
              <div className="flex-1">
                <h2 className="text-orange-600 font-bold uppercase tracking-[0.4em] text-xs mb-4">Live Tracking</h2>
                <h3 className="text-5xl md:text-7xl font-heading text-stone-900 uppercase leading-none mb-6">Progress Tracker</h3>
                <p className="text-stone-500 text-lg leading-relaxed max-w-xl">
                  We are taking steps closer to our mission of feeding 1000 people. Every burger served is a soul reached, a smile sparked, and a shared story of hope.
                </p>
              </div>
              <div className="text-right">
                <p className="text-stone-300 font-heading text-8xl md:text-9xl leading-none animate-pulse">{currentCount}</p>
                <p className="text-orange-600 font-bold uppercase tracking-widest text-sm -mt-4">Burgers Served</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative pt-1">
              <div className="flex mb-4 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200">
                    {progressPercentage.toFixed(1)}% Complete
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-stone-400">
                    {targetCount - currentCount} Still To Go!
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-6 mb-4 text-xs flex rounded-full bg-stone-100 border-2 border-stone-50">
                <div 
                  style={{ width: `${progressPercentage}%` }} 
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-600 transition-all duration-1000 relative"
                >
                  <div className="absolute top-0 right-0 h-full w-4 bg-white/40 blur-sm animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
             <div>
                <h2 className="text-orange-600 font-bold uppercase tracking-[0.4em] text-xs mb-4">Season One History</h2>
                <h3 className="text-6xl md:text-8xl font-heading text-stone-900 uppercase leading-none">The <span className="text-stone-300">Episodes</span></h3>
             </div>
             <p className="text-stone-400 font-serif italic text-xl max-w-sm">
               "Small acts, when multiplied by many people, can transform the world."
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {episodes.map((ep) => (
              <div key={ep.id} className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100 flex flex-col md:flex-row h-full">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img src={ep.image} alt={ep.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-stone-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Episode {ep.id}</span>
                    <span className="text-orange-600 font-heading text-4xl">{ep.count}</span>
                  </div>
                  <h4 className="text-3xl font-heading text-stone-900 uppercase mb-3 tracking-wide">{ep.title}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6 italic">{ep.description}</p>
                  <div className="mt-auto flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4" />
                    {ep.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Season 2 Teaser */}
      <section className="py-32 bg-stone-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-orange-500 font-bold uppercase tracking-[0.4em] text-xs mb-6">Fifth Edition Incoming</h2>
          <h3 className="text-7xl md:text-9xl font-heading text-white uppercase mb-8 leading-none tracking-tight">
            SEASON <span className="text-stone-600">TWO</span>
          </h3>
          <p className="text-stone-400 text-2xl font-serif italic max-w-2xl mx-auto mb-12">
            Watch out for the Fifth Edition coming soon! Help us reach the next 795 souls. Your orders fuel the mission.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={onHelpReachGoal}
              className="bg-orange-600 text-white px-12 py-6 rounded-[2rem] font-bold text-xl hover:bg-orange-500 transition-all flex items-center gap-4 shadow-2xl hover:scale-105 active:scale-95 group"
            >
              <span className="tracking-widest uppercase font-heading text-2xl">Help Us Reach Season 2</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
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
               <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" 
                alt="Grill Action" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-stone-900 p-10 rounded-[2.5rem] shadow-2xl hidden sm:block transform rotate-3">
              <Heart className="text-orange-600 w-12 h-12 mb-4 animate-bounce" />
              <p className="text-white text-4xl font-heading mb-1 uppercase tracking-wider">Ministry</p>
              <p className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.2em] leading-tight">Serving People <br />Serving Purpose</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="mb-10">
               <h2 className="text-orange-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">Our Story</h2>
               <h3 className="text-6xl md:text-8xl font-heading text-stone-900 mb-6 uppercase leading-[0.85]">
                 A Burger, A Smile, <br />
                 <span className="text-stone-300">A Story of Hope.</span>
               </h3>
               <p className="text-stone-500 text-lg leading-relaxed font-serif italic mb-8 border-l-4 border-orange-600 pl-6 py-2">
                 "I am because we are, and this is how a simple burger changed my life."
               </p>
            </div>
            
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>
                Crib Burgers started with one burger shared to make a friend.
What began as simple connection grew into a business that creates space for community, joy, and faith. Through great food and genuine relationships, we exist to bring smiles, build friendships, and share hope—one burger at a time.
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
          <h3 className="text-5xl md:text-7xl font-heading text-stone-900 mb-6 uppercase tracking-tight">Mission & <span className="text-stone-300">Market</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-stone-100 flex flex-col gap-6 group hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-600/20 group-hover:scale-110 transition-transform">
              <Rocket className="w-8 h-8" />
            </div>
            <h4 className="text-3xl font-bold font-heading tracking-widest uppercase">Our Mission</h4>
            <p className="text-stone-600 text-lg leading-relaxed">
              Our mission is to serve delicious and high-quality burgers to food enthusiasts on the go while providing a unique and memorable dining experience. We aim to cater to individuals who value quality ingredients and crave a satisfying burger experience.
            </p>
          </div>

          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-stone-100 flex flex-col gap-6 group hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8" />
            </div>
            <h4 className="text-3xl font-bold font-heading tracking-widest uppercase">Our Target Market</h4>
            <p className="text-stone-600 text-lg leading-relaxed">
             Our target market consists of busy professionals, adults, students, tourists and families around <strong>Crib</strong> who appreciate convenient and tasty food options. We provide a bridge between great flavor and the community we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const staff = [
    { name: "Tadiwanashe", role: "Founder & Visionary", bio: "Leading the ministry with a spatula and a prayer.", icon: <Users /> },
    { name: "Kitchen Ministry", role: "Lead Grill Team", bio: "Masters of the seasoned beef and chicken patty.", icon: <Utensils /> },
    { name: "Crib kitchen", role: "Outreach & Community", bio: "Connecting the burgers to urban ministry projects.", icon: <Heart /> }
  ];

  return (
    <section id="team" className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-xl">
            <h2 className="text-orange-500 font-bold uppercase tracking-[0.4em] text-xs mb-4">The Hands Behind the Hope</h2>
            <h3 className="text-6xl md:text-9xl font-heading uppercase leading-[0.85] tracking-tight">Meet the <br /><span className="text-stone-600">Crib Staff</span></h3>
          </div>
          <p className="text-stone-400 max-w-sm text-lg italic font-serif">
            "Creating jobs and supporting the vision of urban ministry through professional service."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {staff.map((member, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all group">
              <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center text-white mb-8 group-hover:animate-bounce">
                {member.icon}
              </div>
              <h4 className="text-3xl font-bold font-heading tracking-widest uppercase mb-2">{member.name}</h4>
              <p className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">{member.role}</p>
              <p className="text-stone-400 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MagnifierModal = ({ item, onClose, onAdd }: { item: MenuItem, onClose: () => void, onAdd: (item: MenuItem) => void }) => {
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({});
  const [showLens, setShowLens] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    
    setZoomStyle({
      backgroundPosition: `${x}% ${y}%`,
      backgroundImage: `url(${item.image || 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800'})`,
      left: `${e.pageX - left - window.scrollX - 75}px`,
      top: `${e.pageY - top - window.scrollY - 75}px`
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-stone-950/90 backdrop-blur-xl" onClick={onClose} />
      <div className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-500 ease-out">
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 z-10 p-3 bg-stone-100 hover:bg-orange-600 hover:text-white rounded-full transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        <div 
          className="md:w-3/5 relative bg-stone-50 cursor-crosshair overflow-hidden group h-[400px] md:h-auto"
          onMouseEnter={() => setShowLens(true)}
          onMouseLeave={() => setShowLens(false)}
          onMouseMove={handleMouseMove}
          ref={containerRef}
        >
          <img 
            src={item.image || 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800'} 
            alt={item.name} 
            className="w-full h-full object-cover select-none"
          />
          {showLens && (
            <div 
              className="absolute w-[150px] h-[150px] border-4 border-white rounded-full pointer-events-none shadow-2xl bg-no-repeat z-20"
              style={{
                ...zoomStyle,
                backgroundSize: '400%' // 4x zoom
              }}
            />
          )}
          <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
            <Eye className="w-4 h-4 text-white" />
            <span className="text-[10px] text-white font-bold uppercase tracking-widest">Hover to Magnify Detail</span>
          </div>
        </div>

        <div className="md:w-2/5 p-10 md:p-12 flex flex-col justify-center">
          <span className="text-orange-600 font-bold uppercase tracking-[0.3em] text-xs mb-4">{item.category}</span>
          <h3 className="text-4xl font-heading text-stone-900 mb-4 leading-none uppercase tracking-tight">{item.name}</h3>
          <p className="text-4xl font-heading text-orange-600 mb-8 tracking-wider">KSh {item.price}</p>
          <p className="text-stone-500 text-lg leading-relaxed mb-10 font-serif italic">
            "{item.description}"
          </p>
          
          <div className="space-y-4">
             <button 
                onClick={() => {
                  onAdd(item);
                  onClose();
                }}
                className="w-full bg-orange-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-orange-700 transition-all shadow-xl shadow-orange-900/20 active:scale-[0.98]"
              >
                <ShoppingBag className="w-6 h-6" />
                <span className="uppercase tracking-widest font-heading text-lg">Add to Bag</span>
              </button>
              <div className="flex items-center gap-2 text-stone-400 justify-center">
                 <CheckCircle2 className="w-4 h-4 text-green-500" />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Official Crib Authenticity Guaranteed</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuCard: React.FC<{ item: MenuItem; onAdd: (item: MenuItem) => void; onView?: (item: MenuItem) => void }> = ({ item, onAdd, onView }) => {
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
          <div 
            onClick={() => onView && onView(item)}
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center cursor-pointer"
          >
            <div className="bg-white/90 p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <Maximize2 className="w-6 h-6 text-stone-900" />
            </div>
          </div>
          <div className="absolute top-4 right-4 pointer-events-none">
            <span className="bg-white/95 backdrop-blur-md text-stone-950 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              KSh {item.price}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 pointer-events-none">
            <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
              {item.category}
            </span>
          </div>
        </div>
      )}
      <div className="flex-1">
        {!item.image && (
           <div className="flex justify-between items-start mb-3">
             <h3 className="text-2xl font-bold text-stone-900 leading-none uppercase font-heading tracking-wide">{item.name}</h3>
             <span className="text-orange-600 font-bold font-heading text-xl whitespace-nowrap ml-2">KSh {item.price}</span>
           </div>
        )}
        {item.image && <h3 className="text-2xl font-bold text-stone-900 leading-none mb-2 uppercase font-heading tracking-wide">{item.name}</h3>}
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
        {isAdded ? 'Added to Bag!' : (item.type === 'merch' ? 'Add to Merch Bag' : 'Add to Order')}
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
    let message = `*NEW ORDER - CRIB BURGERS & MERCH*\n\n`;
    message += `*Method:* ${deliveryMethod === 'pickup' ? 'Local Pickup (Rongai Hub)' : 'Delivery'}\n`;
    if (deliveryMethod === 'delivery' && address) {
      message += `*Address:* ${address}\n`;
    }
    message += `\n`;
    items.forEach(item => {
      const prefix = item.type === 'merch' ? '[MERCH]' : '[FOOD]';
      message += `• ${item.quantity}x ${prefix} ${item.name} - KSh ${item.price * item.quantity}\n`;
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
              <h2 className="text-2xl font-bold uppercase font-heading tracking-widest">Your Bag</h2>
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
              <p className="text-stone-500 font-medium">Add some of our legendary burgers or merch to get started.</p>
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
                        <span className="font-bold text-stone-950 font-heading text-xl">KSh {item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

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
                      <p className="text-[10px] text-orange-700 mt-1">Available at our <strong>Crib</strong> location or current <strong>Kitchen</strong> hub.</p>
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
                      Delivery fee will be calculated based on your locatio.
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

const MerchPage = ({ onAdd, onQuickView }: { onAdd: (item: MenuItem) => void, onQuickView: (item: MenuItem) => void }) => {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'Apparel', 'Accessories', 'Utility'];
  const filtered = activeTab === 'All' ? MERCH_DATA : MERCH_DATA.filter(m => m.category === activeTab);

  return (
    <div className="min-h-screen animate-in fade-in slide-in-from-right-4 duration-700">
      <section className="relative h-[60vh] bg-stone-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1920" 
            alt="Merch Background" 
            className="w-full h-full object-cover animate-slow-zoom"
          />
        </div>
        <div className="absolute inset-0 bg-stone-950/60" />
        <div className="relative z-10 text-center px-4">
           <h2 className="text-orange-500 font-bold uppercase tracking-[0.4em] text-xs mb-4">Official Gear</h2>
           <h3 className="text-6xl md:text-9xl font-heading text-white uppercase mb-6">Crib <span className="text-orange-600">Apparel</span></h3>
           <p className="text-stone-300 max-w-xl mx-auto text-lg italic font-serif">Wear the story. Support the vision. High-quality threads for the burger soul.</p>
        </div>
      </section>

      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all border-2 ${
                    activeTab === cat 
                    ? 'bg-orange-600 border-orange-600 text-white shadow-xl shadow-orange-600/20' 
                    : 'bg-white border-stone-200 text-stone-500 hover:border-orange-600 hover:text-orange-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filtered.map(item => (
                <MenuCard key={item.id} item={item} onAdd={onAdd} onView={onQuickView} />
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-stone-950 text-stone-400 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
               <img
                  src="/assets/crib-logo.png"
                  alt="Crib Burgers Logo"
                  className="w-24 h-24 rounded-xl object-contain shadow-lg"
                />
              <div>
                <h1 className="text-4xl font-heading text-white tracking-widest uppercase">CRIB BURGERS</h1>
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
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest font-heading text-2xl">Quick Links</h4>
            <ul className="space-y-5 text-sm font-medium">
              <li><a href="#about" className="hover:text-orange-500 transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" /> Our Story</a></li>
              <li><a href="#menu" className="hover:text-orange-500 transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" /> Menu</a></li>
              <li><a href="#impact" className="hover:text-orange-500 transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" /> Our Mission</a></li>
              <li><a href="#team" className="hover:text-orange-500 transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" /> The Staff</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest font-heading text-2xl">The Station</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
                <span className="leading-relaxed">Operations<br />Crib Kitchen:Rongai Hub</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-orange-600 shrink-0" />
                <span className="text-xl font-bold text-white">{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-orange-600 shrink-0" />
                <span>Mon-Sat: 10AM - 7PM<br /><span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">Always Grilling</span></span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-center">
          <p className="text-stone-600">© 2026 Crib Burgers. Seasoned with Love.</p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [view, setView] = useState<AppView>('home');
  const [quickViewItem, setQuickViewItem] = useState<MenuItem | null>(null);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

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

  const burgerCategories = ['All', 'Signature', 'Texas', 'My Friend', 'Extras'];
  const filteredMenu = activeCategory === 'All' 
    ? MENU_DATA 
    : MENU_DATA.filter(item => item.category === activeCategory);

  const handleHelpMission = () => {
    setView('home');
    setTimeout(() => {
      const el = document.getElementById('menu');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (isInitialLoading) {
    return <SplashScreen onComplete={() => setIsInitialLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-stone-50 selection:bg-orange-100 selection:text-orange-900">
      <Navbar 
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
        currentView={view}
        setView={setView}
      />
      
      <main className="overflow-x-hidden">
        {view === 'home' && (
          <div className="animate-in fade-in duration-1000">
            <Hero onShopMerch={() => setView('merch')} onMissionClick={() => setView('hope')} />
            <StorySection />
            <MissionImpactSection />
            <section id="menu" className="py-32 bg-stone-100/50 relative scroll-mt-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                  <h2 className="text-orange-600 font-bold uppercase tracking-[0.4em] text-xs mb-4">Crib Selection</h2>
                  <h3 className="text-6xl md:text-9xl font-heading text-stone-900 mb-6 uppercase tracking-tight">The <span className="text-stone-300 underline decoration-orange-600/20 underline-offset-8">Burger Vault</span></h3>
                </div>
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                  {burgerCategories.map(cat => (
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
                    <MenuCard key={item.id} item={item} onAdd={addToCart} onView={(item) => setQuickViewItem(item)} />
                  ))}
                </div>
              </div>
            </section>
            <TeamSection />
            <Testimonials />
          </div>
        )}
        {view === 'hope' && <BurgerOfHopePage onHelpReachGoal={handleHelpMission} />}
        {view === 'merch' && <MerchPage onAdd={addToCart} onQuickView={(item) => setQuickViewItem(item)} />}
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

      {quickViewItem && (
        <MagnifierModal 
          item={quickViewItem} 
          onClose={() => setQuickViewItem(null)} 
          onAdd={addToCart} 
        />
      )}
    </div>
  );
};

export default App;
