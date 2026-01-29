import React, { useState, useEffect, useMemo } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Star,
  ChevronRight,
  Menu,
  X,
  Utensils,
  Heart,
  Navigation,
  MessageCircle,
  Award,
  Coffee,
  Sun,
  Moon
} from 'lucide-react';

const RainEffect = () => {
  const drops = useMemo(() => {
    const rainDrops = [];
    let increment = 0;
    while (increment < 100) {
      const randoHundo = Math.floor(Math.random() * 98) + 1;
      const randoFiver = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
      increment += randoFiver;
      rainDrops.push({
        id: increment,
        left: increment,
        bottom: randoFiver + randoFiver - 1 + 100,
        delay: randoHundo / 100,
        duration: 0.5 + randoHundo / 1000,
      });
    }
    return rainDrops;
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="rain front-row">
        {drops.map((drop) => (
          <div
            key={`front-${drop.id}`}
            className="drop"
            style={{
              left: `${drop.left}%`,
              bottom: `${drop.bottom}%`,
              animationDelay: `${drop.delay}s`,
              animationDuration: `${drop.duration}s`,
            }}
          >
            <div className="stem" style={{ animationDelay: `${drop.delay}s`, animationDuration: `${drop.duration}s` }}></div>
            <div className="splat" style={{ animationDelay: `${drop.delay}s`, animationDuration: `${drop.duration}s` }}></div>
          </div>
        ))}
      </div>
      <div className="rain back-row">
        {drops.map((drop) => (
          <div
            key={`back-${drop.id}`}
            className="drop"
            style={{
              right: `${drop.left}%`,
              bottom: `${drop.bottom}%`,
              animationDelay: `${drop.delay}s`,
              animationDuration: `${drop.duration}s`,
            }}
          >
            <div className="stem" style={{ animationDelay: `${drop.delay}s`, animationDuration: `${drop.duration}s` }}></div>
            <div className="splat" style={{ animationDelay: `${drop.delay}s`, animationDuration: `${drop.duration}s` }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const restaurantInfo = {
    name: "The Monsoon House",
    rating: "4.4",
    reviews: "126",
    priceRange: "₹200–400",
    category: "North Indian Restaurant",
    phone: "078638 58716",
    address: "The Monsoon House, New Waghodia Road, Beside Doordarshan Tower, Near Aamodar, Pavlepur, Vadodara, Gujarat 390019",
    plusCode: "77RP+WQ Vadodara, Gujarat",
    timings: "Closed · Opens at 11:00 AM"
  };

  const menuCategories = ['All', 'Starters', 'Main Course', 'Breads & Rice', 'Desserts'];

  const fullMenu = [
    { name: "Pani Puri", price: "₹60", category: "Starters", description: "6 pcs of crispy puris with spicy water" },
    { name: "Crispy Onion Rings", price: "₹120", category: "Starters", description: "Battered and deep fried golden rings" },
    { name: "Hara Bhara Kabab", price: "₹180", category: "Starters", description: "Spinach and green pea patties" },
    { name: "Paneer Butter Masala", price: "₹260", category: "Main Course", description: "Cottage cheese in rich tomato gravy" },
    { name: "Dal Makhani", price: "₹220", category: "Main Course", description: "Slow cooked black lentils with cream" },
    { name: "Veg Diwani Handi", price: "₹240", category: "Main Course", description: "Mixed veggies in spinach-cashew gravy" },
    { name: "Butter Naan", price: "₹45", category: "Breads & Rice", description: "Tandoor baked leavened bread" },
    { name: "Garlic Kulcha", price: "₹60", category: "Breads & Rice", description: "Stuffed bread with garlic and herbs" },
    { name: "Jeera Rice", price: "₹140", category: "Breads & Rice", description: "Basmati rice tempered with cumin" },
    { name: "Gulab Jamun", price: "₹80", category: "Desserts", description: "Two pieces served warm in syrup" },
    { name: "Kesar Pista Kulfi", price: "₹110", category: "Desserts", description: "Traditional Indian frozen dessert" }
  ];

  const filteredMenu = activeCategory === 'All'
    ? fullMenu
    : fullMenu.filter(item => item.category === activeCategory);

  const menuHighlights = [
    {
      name: "Special Pani Puri",
      description: "Our signature crispy puris served with traditional chilled spicy mint water and sweet tamarind chutney.",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Pani_Puri1.JPG", // Updated with user's specific Pani Puri image
      tag: "Must Try"
    },
    {
      name: "Crispy Onion Rings",
      description: "Golden-fried battered onion rings seasoned with authentic North Indian spices.",
      image: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&q=80&w=400",
      tag: "Popular"
    },
    {
      name: "North Indian Meals",
      description: "Complete thalis featuring rich curries, buttery naans, and aromatic basmati rice.",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=400",
      tag: "Best Seller"
    }
  ];

  const reviews = [
    { text: "Awesome place, lovely staff, homely atmosphere. Loved it 😍", author: "Rahul Sharma" },
    { text: "Very good ambience, good staff, very good food quality & quantity.", author: "Priya Patel" },
    { text: "Food quality delicious, service was good, what an atmosphere & ambiance.", author: "Amit Varma" }
  ];

  const popularTimes = [
    { hour: '12 PM', level: 40 }, { hour: '1 PM', level: 70 }, { hour: '2 PM', level: 85 },
    { hour: '3 PM', level: 45 }, { hour: '4 PM', level: 30 }, { hour: '5 PM', level: 40 },
    { hour: '6 PM', level: 65 }, { hour: '7 PM', level: 95 }, { hour: '8 PM', level: 100 },
    { hour: '9 PM', level: 80 },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A3728] font-sans selection:bg-[#E2C08D] selection:text-white">
      {/* Sticky Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#8B4513] p-1.5 rounded-lg">
              <Utensils className="text-white w-5 h-5" />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-[#4A3728]' : 'text-white'}`}>
              The Monsoon House
            </span>
          </div>

          <div className={`hidden md:flex gap-8 items-center font-medium ${scrolled ? 'text-[#4A3728]' : 'text-white'}`}>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
            <a href="#menu-list" className="hover:text-[#D4AF37] transition-colors">Menu</a>
            <a href="#reviews" className="hover:text-[#D4AF37] transition-colors">Reviews</a>
            <a href="#contact" className="bg-[#D4AF37] text-white px-5 py-2 rounded-full hover:bg-[#B8962E] transition-all shadow-lg">Visit Us</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className={scrolled ? 'text-[#4A3728]' : 'text-white'} /> : <Menu className={scrolled ? 'text-[#4A3728]' : 'text-white'} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">About</a>
            <a href="#menu-list" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Menu</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Reviews</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-[#D4AF37] text-white text-center py-3 rounded-lg font-bold">Visit Us</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 scale-105"
              style={{ backgroundImage: `url(${import.meta.env.BASE_URL}rain.jpeg)` }}
            ></div>

            {/* Animated background glows */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#8B4513]/30 blur-[120px] animate-pulse"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#D4AF37]/20 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Advanced rain effects */}
            <RainEffect />

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/20 animate-bounce">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold">{restaurantInfo.rating} · {restaurantInfo.reviews} Reviews</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 drop-shadow-lg tracking-tight">The Monsoon House</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light opacity-90 italic drop-shadow-md">"Authentic flavors, homely warmth, and memories made over a meal."</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#B8962E] text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl">
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a href="#menu-list" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#4A3728] hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl">
              <Utensils className="w-5 h-5" /> Explore Menu
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800" className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]" alt="Inside" />
              <div className="absolute -bottom-8 -right-8 bg-[#8B4513] text-white p-8 rounded-2xl shadow-xl hidden lg:block max-w-xs">
                <Heart className="mb-4 text-[#D4AF37]" />
                <h3 className="text-xl font-bold mb-2">Homely Vibe</h3>
                <p className="text-sm opacity-80">Friendly staff and a cozy atmosphere that makes you feel right at home.</p>
              </div>
            </div>
            <div>
              <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4A3728] mb-8 leading-tight">Authentic Taste, <br />Crafted with Love</h2>
              <p className="text-lg text-gray-600 mb-6">Welcome to The Monsoon House. We bring the rich heritage of North India to Vadodara, focusing on quality ingredients and generous portions.</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#E2C08D]/20 rounded-lg"><Award className="text-[#D4AF37]" /></div>
                  <div><h4 className="font-bold">Premium Quality</h4><p className="text-xs text-gray-500">Hand-picked spices</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#E2C08D]/20 rounded-lg"><Utensils className="text-[#D4AF37]" /></div>
                  <div><h4 className="font-bold">Affordable Luxury</h4><p className="text-xs text-gray-500">Fine dining for all</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Menu List Section */}
      <section id="menu-list" className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4 block">Selection</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4A3728] mb-8">Our Full Menu</h2>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
              {menuCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                    ? 'bg-[#8B4513] text-white shadow-lg'
                    : 'bg-[#FDFBF7] text-[#4A3728] hover:bg-[#E2C08D]/30'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
            {filteredMenu.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center group p-4 rounded-2xl hover:bg-[#FDFBF7] transition-all border-b border-dashed border-gray-200 md:border-none">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-lg font-bold text-[#4A3728] group-hover:text-[#D4AF37] transition-colors">{item.name}</h4>
                    <span className="text-[10px] bg-[#E2C08D]/20 px-2 py-0.5 rounded text-[#8B4513] uppercase font-bold">{item.category}</span>
                  </div>
                  <p className="text-sm text-gray-400 font-light">{item.description}</p>
                </div>
                <div className="text-right ml-4">
                  <span className="text-lg font-bold text-[#4A3728]">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block p-8 bg-[#FDFBF7] rounded-[2rem] border border-[#E2C08D]/30 max-w-2xl">
              <p className="text-gray-500 italic mb-4">"Prices are inclusive of all taxes. We serve pure vegetarian delicacies prepared with the freshest ingredients."</p>
              <button className="flex items-center gap-2 mx-auto text-[#8B4513] font-bold hover:gap-4 transition-all">
                Download Menu PDF <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers Section (Highlights) */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4 block">Chef's Choice</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4A3728]">Bestsellers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {menuHighlights.map((item, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#8B4513]">{item.tag}</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                  <p className="text-gray-500 italic leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Times Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-[#FDFBF7] p-8 md:p-12 rounded-[3rem] shadow-inner">
            <h3 className="text-3xl font-serif font-bold mb-2">Popular Times</h3>
            <p className="text-gray-500 flex items-center gap-2 mb-12"><Clock className="w-4 h-4" /> Thursdays: Usually busy 12 PM – 9 PM</p>
            <div className="flex items-end justify-between h-48 gap-2 px-2">
              {popularTimes.map((time, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-[#E2C08D] hover:bg-[#D4AF37] rounded-t-lg transition-all cursor-pointer" style={{ height: `${time.level}%` }}></div>
                  <span className="text-[10px] md:text-xs text-gray-400 mt-4 whitespace-nowrap rotate-45 md:rotate-0">{time.hour}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-[#8B4513] text-white relative">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16">Customer Voices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-left flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />)}
                  </div>
                  <p className="text-lg italic mb-8">"{review.text}"</p>
                </div>
                <div className="font-bold text-[#D4AF37]">— {review.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
            <div className="p-8 md:p-16">
              <h2 className="text-4xl font-serif font-bold text-[#4A3728] mb-8">Visit Us</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#E2C08D]/20 p-3 rounded-xl"><MapPin className="text-[#8B4513] w-6 h-6" /></div>
                  <div><h4 className="font-bold mb-1">Our Address</h4><p className="text-gray-500 text-sm leading-relaxed">{restaurantInfo.address}<br /><span className="text-[#D4AF37] font-semibold">Plus Code: {restaurantInfo.plusCode}</span></p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#E2C08D]/20 p-3 rounded-xl"><Phone className="text-[#8B4513] w-6 h-6" /></div>
                  <div><h4 className="font-bold mb-1">Phone Number</h4><p className="text-gray-500">{restaurantInfo.phone}</p></div>
                </div>
              </div>
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`} className="flex-1 flex items-center justify-center gap-2 bg-[#8B4513] text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all">
                  <Phone className="w-5 h-5" /> Call Now
                </a>
                <a href="https://www.google.com/maps/dir/?api=1&destination=The+Monsoon+House+Vadodara" target="_blank" className="flex-1 flex items-center justify-center gap-2 bg-[#D4AF37] text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all">
                  <Navigation className="w-5 h-5" /> Get Directions
                </a>
              </div>
            </div>
            <div className="min-h-[400px] bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8080517812543!2d73.2842407!3d22.2852233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc30026e95275%3A0xe5a363d680327f12!2sThe%20Monsoon%20House!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale opacity-80"
                allowFullScreen="" loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A3728] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-2">The Monsoon House</h2>
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} The Monsoon House. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${restaurantInfo.phone.replace(/\s/g, '')}`}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all flex items-center gap-2 pr-6"
        target="_blank"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-bold text-sm">Order Now</span>
      </a>
    </div>
  );
};

export default App;
