import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function AlAmeenVegetableShop() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className={`font-bold text-2xl md:text-3xl ${isScrolled ? 'text-green-600' : 'text-white'}`}>
              Al Ameen
              <span className="text-green-500">.</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Products', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`${isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-300'} 
                font-medium transition-colors duration-200`}
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isNavOpen && (
          <div className="md:hidden bg-white shadow-lg animate-slideDown">
            <div className="flex flex-col px-4 py-4 space-y-4">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-800 hover:text-green-600 font-medium"
                  onClick={() => setIsNavOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
          <img 
            src="https://unicityhealthcare.com/wp-content/uploads/2021/06/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg" 
            alt="Fresh vegetables" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Al Ameen</h1>
          <p className="text-xl md:text-2xl text-green-300 mb-8">Freshness You Can Trust</p>
          <p className="text-gray-200 max-w-2xl mx-auto mb-12">
            Bringing the farm's freshness directly to your table. We hand-pick every vegetable to ensure you get only the best quality.
          </p>
          <a href="#products" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 inline-block">
            View Products
          </a>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <ChevronDown className="text-white" size={32} />
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Al Ameen?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the highest quality vegetables with exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Farm Fresh', desc: 'All our vegetables are sourced directly from local farms, ensuring maximum freshness.', icon: '🌱' },
              { title: 'Organic Options', desc: 'We offer a wide range of certified organic vegetables grown without harmful pesticides.', icon: '🥬' },
              { title: 'Daily Delivery', desc: 'We stock fresh vegetables daily, so you always get produce at its peak freshness.', icon: '🚚' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Browse our extensive collection of farm-fresh vegetables.
            </p>
            
            {/* Category Filter */}
            <div className="inline-flex flex-wrap justify-center gap-2 bg-gray-100 p-2 rounded-full mb-8">
              {['all', 'leafy', 'root', 'organic', 'fruits', 'herbs'].map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full capitalize text-sm transition-all duration-200 ${
                    activeCategory === category 
                      ? 'bg-green-500 text-white' 
                      : 'bg-transparent text-gray-700 hover:bg-green-100'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Organic Tomatoes', price: '₹20/lb', image: 'https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-02-24/Tomato.jpg', category: 'organic' },
              { name: 'Fresh Spinach', price: '₹249/bunch', image: 'https://storage.googleapis.com/pluckk/uploads/22876-14.jpg', category: 'leafy' },
              { name: 'Red Bell Peppers', price: '₹199/each', image: 'https://fruitboxco.com/cdn/shop/products/Red_bell_pepper.jpg?v=1579689969', category: 'fruits' },
              { name: 'Fresh Carrots', price: '₹49/lb', image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/JY/SK/TN/161422039/fresh-carrots-fresh-red-carrot-for-sale-1513637912-3529401.jpeg', category: 'root' },
              { name: 'Broccoli', price: '₹299/head', image: 'https://www.healthyfood.com/wp-content/uploads/2017/03/What_to_do_with_broccoli-1-1024x768.jpg', category: 'leafy' },
              { name: 'Fresh Basil', price: '₹25/bunch', image: 'https://m.media-amazon.com/images/I/61feQSqWbWL._AC_UF1000,1000_QL80_.jpg', category: 'herbs' },
              { name: 'Organic Potatoes', price: '₹35/lb', image: 'https://pacificnorthwestfresh.com/cdn/shop/products/potatoes.jpg?v=1584484781', category: 'root' },
              { name: 'Fresh Cucumber', price: '₹30/each', image: 'https://5.imimg.com/data5/SELLER/Default/2021/5/OH/JZ/GU/44009489/fresh-cucumbers.jpg', category: 'fruits' },
            ]
            .filter(item => activeCategory === 'all' || item.category === activeCategory)
            .map((product, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-green-600 font-bold">{product.price}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="max-w-2xl mx-auto opacity-90">
              Don't just take our word for it. See what our satisfied customers have to say about our products and service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', comment: "The freshest vegetables I've ever bought! Their tomatoes are especially amazing and taste just like from my grandmother's garden.", image: '/api/placeholder/100/100' },
              { name: 'Ahmed Hassan', comment: 'Al Ameen has been my go-to vegetable shop for the past year. Their produce is consistently fresh and the staff are always helpful.', image: '/api/placeholder/100/100' },
              { name: 'Priya Sharma', comment: 'I appreciate how they source from local farms. You can really taste the difference in quality and freshness. Highly recommend!', image: '/api/placeholder/100/100' },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-gray-800">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <h3 className="font-semibold">{testimonial.name}</h3>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Us */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Al Ameen Vegetable Shop was founded in 1995 with a simple mission: to bring the freshest, highest-quality vegetables directly from farm to table.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small family-run stand at the local farmers' market has grown into a beloved community shop. Despite our growth, we've maintained our commitment to quality, freshness, and personal service.
              </p>
              <p className="text-gray-600 mb-8">
                Today, we work with over 20 local farms to ensure we offer the best seasonal produce year-round. We're proud to be part of this community and thank our loyal customers for their continued support.
              </p>
            </div>
            {/* <div className="grid grid-cols-2 gap-4">
              <img 
                src="/api/placeholder/400/400" 
                alt="Shop exterior" 
                className="rounded-2xl shadow-md h-full object-cover"
              />
              <img 
                src="/api/placeholder/400/400" 
                alt="Farmers working" 
                className="rounded-2xl shadow-md h-full object-cover"
              />
              <img 
                src="/api/placeholder/800/400" 
                alt="Shop interior" 
                className="rounded-2xl shadow-md h-full object-cover col-span-2"
              />
            </div> */}
          </div>
        </div>
      </section>
      
      {/* Contact Us */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Visit Our Store</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We'd love to see you! Stop by our store to browse our fresh selection of vegetables.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-2xl overflow-hidden shadow-md h-96">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1441519512996!2d75.9823032760555!3d10.876638689278272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b1f1bdd39561%3A0x9a1665805ed28890!2sAl%20Ameen%20Vegitables!5e0!3m2!1sen!2sin!4v1745509245105!5m2!1sen!2sin"
    className="w-full h-full"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

            
<div className="bg-white rounded-2xl shadow-md p-8 space-y-8">
  <h3 className="text-2xl font-bold text-gray-900">Store Information</h3>

  <div className="space-y-6">
    {/* Address */}
    <div className="flex items-start gap-4">
      <div className="bg-green-100 p-3 rounded-full">
        <MapPin className="text-green-600 w-5 h-5" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
        <p className="text-gray-600 leading-relaxed">
          Edakkulam<br />
          Old Market Road<br />
          676301
        </p>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-start gap-4">
      <div className="bg-green-100 p-3 rounded-full">
        <Phone className="text-green-600 w-5 h-5" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
        <p className="text-gray-600">+91 9846983700</p>
        <p className="text-gray-600">+91 9446767217</p>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-start gap-4">
      <div className="bg-green-100 p-3 rounded-full">
        <Mail className="text-green-600 w-5 h-5" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
        <p className="text-gray-600">alameen@gmail.com</p>
      </div>
    </div>

    {/* Hours */}
    <div className="flex items-start gap-4">
      <div className="bg-green-100 p-3 rounded-full">
        {/* <Clock className="text-green-600 w-5 h-5" /> */}
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-1">Opening Hours</h4>
        <p className="text-gray-600">
          Open Daily: <span className="font-medium text-gray-700">6:00 AM - 9:00 PM</span>
        </p>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="font-bold text-2xl mb-4">
                Al Ameen<span className="text-green-500">.</span>
              </h2>
              <p className="text-gray-400 mb-4">
                Bringing fresh vegetables from our farms to your table since 1995.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Products', 'About Us', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                {['Organic', 'Leafy Greens', 'Root Vegetables', 'Fruits', 'Herbs', 'Seasonal'].map((item) => (
                  <li key={item}>
                    <a href="#products" className="text-gray-400 hover:text-white transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Al Ameen Vegetable Shop. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}