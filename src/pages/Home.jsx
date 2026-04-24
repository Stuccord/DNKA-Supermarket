import { Helmet } from 'react-helmet-async';
import { ShoppingCart, Heart, MapPin, Phone, Package, Tag, Clock, ShieldCheck, Award, ThumbsUp, Truck, Wifi, Coffee, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AddToCartBtn from '../components/AddToCartBtn';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Classic Quality, Modern Convenience",
      subtitle: "Experience the finest selection of premium groceries and fresh produce in the heart of Koforidua.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80",
      cta: "Explore Freshness",
      link: "/produce"
    },
    {
      title: "Elevate Your Home Lifestyle",
      subtitle: "Discover our curated collection of elegant kitchenware and premium household essentials.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1920&q=80",
      cta: "Shop Elegance",
      link: "/kitchenware"
    },
    {
      title: "The Ultimate Mall Experience",
      subtitle: "From modern electronics to gourmet pantry treasures, find everything you need under one roof.",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1920&q=80",
      cta: "View Directory",
      link: "#categories"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <Helmet>
        <title>DNKA Supermarket | Classic Quality in Koforidua</title>
        <meta name="description" content="Shop premium groceries, classic kitchenware, and fine household essentials at DNKA Supermarket in Koforidua. Quality selection, always open." />
        <meta name="keywords" content="supermarket in Koforidua, premium grocery Koforidua, classic household items Ghana" />
      </Helmet>

      {/* Professional Hero Slider */}
      <section className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(8, 28, 21, 0.6), rgba(8, 28, 21, 0.7)), url("${slide.image}")` }}
          >
            <div className="container">
              <div className="hero-slide-content">
                <span className="hero-tag animate-fade-in">Established Excellence</span>
                <h1 className="animate-fade-in">{slide.title}</h1>
                <p className="animate-fade-in">{slide.subtitle}</p>
                <div className="hero-btns animate-fade-in">
                  {slide.link.startsWith('#') ? (
                    <button onClick={() => document.querySelector(slide.link)?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary">{slide.cta}</button>
                  ) : (
                    <Link to={slide.link} className="btn btn-primary">{slide.cta}</Link>
                  )}
                  <button onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-outline">Visit Store</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <div className="slider-dots">
          {slides.map((_, i) => (
            <button 
              key={i} 
              className={`slider-dot ${i === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
            ></button>
          ))}
        </div>
      </section>

      {/* Featured Offers (Mall Feature) */}
      <section className="section bg-white" id="offers">
        <div className="container">
          <h2 className="section-title">Weekly Specials</h2>
          <p className="text-center" style={{fontFamily: "'Playfair Display', serif", fontSize: '18px'}}>Discover exceptional value on premium items.</p>
          
          <div className="product-grid">
            <div className="product-card hover-lift">
              <div className="product-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=400&q=80")' }}></div>
              <h3>Premium Olive Oil</h3>
              <p className="product-price">GH₵ 120 <span className="product-old-price">GH₵ 150</span></p>
              <AddToCartBtn product={{ id: 'home1', name: 'Premium Olive Oil', price: 120, image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=400&q=80' }} />
            </div>
            
            <div className="product-card hover-lift">
              <div className="product-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=400&q=80")' }}></div>
              <h3>Artisan Coffee Beans</h3>
              <p className="product-price">GH₵ 85 <span className="product-old-price">GH₵ 110</span></p>
              <AddToCartBtn product={{ id: 'home2', name: 'Artisan Coffee Beans', price: 85, image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=400&q=80' }} />
            </div>

            <div className="product-card hover-lift">
              <div className="product-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80")' }}></div>
              <h3>Classic Cookware Set</h3>
              <p className="product-price">GH₵ 450 <span className="product-old-price">GH₵ 600</span></p>
              <AddToCartBtn product={{ id: 'home3', name: 'Classic Cookware Set', price: 450, image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80' }} />
            </div>

            <div className="product-card hover-lift">
              <div className="product-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80")' }}></div>
              <h3>Luxury Bath Towels</h3>
              <p className="product-price">GH₵ 150 <span className="product-old-price">GH₵ 200</span></p>
              <AddToCartBtn product={{ id: 'home4', name: 'Luxury Bath Towels', price: 150, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories / Mall Directory */}
      <section className="section bg-light" id="categories">
        <div className="container">
          <h2 className="section-title">Store Directory</h2>
          <div className="category-grid">
            <Link to="/produce" className="img-card group hover-lift" style={{ display: 'block' }}>
              <div className="img-card-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80")' }}></div>
              <div className="img-card-content">
                <h3>Fresh Produce</h3>
                <p>The finest, farm-fresh vegetables and fruits selected daily.</p>
              </div>
            </Link>
            
            <Link to="/kitchenware" className="img-card group hover-lift" style={{ display: 'block' }}>
              <div className="img-card-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80")' }}></div>
              <div className="img-card-content">
                <h3>Kitchen Elegance</h3>
                <p>Premium cookware and elegant dining essentials for your home.</p>
              </div>
            </Link>

            <Link to="/household" className="img-card group hover-lift" style={{ display: 'block' }}>
              <div className="img-card-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80")' }}></div>
              <div className="img-card-content">
                <h3>Household Essentials</h3>
                <p>Refined cleaning and decor items to elevate your living space.</p>
              </div>
            </Link>

            <Link to="/personal-care" className="img-card group hover-lift" style={{ display: 'block' }}>
              <div className="img-card-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80")' }}></div>
              <div className="img-card-content">
                <h3>Personal Care</h3>
                <p>Luxury skincare and grooming products for your daily routine.</p>
              </div>
            </Link>

            <Link to="/electronics" className="img-card group hover-lift" style={{ display: 'block' }}>
              <div className="img-card-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=600&q=80")' }}></div>
              <div className="img-card-content">
                <h3>Modern Electronics</h3>
                <p>Reliable home appliances blending classic design with modern utility.</p>
              </div>
            </Link>

            <Link to="/gourmet" className="img-card group hover-lift" style={{ display: 'block' }}>
              <div className="img-card-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=600&q=80")' }}></div>
              <div className="img-card-content">
                <h3>Gourmet Pantry</h3>
                <p>Imported delicacies, fine wines, and artisanal baking supplies.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services & Amenities (Mall Feature) */}
      <section className="section bg-white" id="services">
        <div className="container">
          <h2 className="section-title">Guest Services & Amenities</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Truck size={36} />
              </div>
              <h3>Home Delivery</h3>
              <p>Enjoy same-day delivery across Koforidua directly to your doorstep.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Coffee size={36} />
              </div>
              <h3>In-Store Bakery & Café</h3>
              <p>Relax with artisanal coffee and freshly baked pastries while you shop.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <CreditCard size={36} />
              </div>
              <h3>Flexible Payments</h3>
              <p>We accept all major credit cards, mobile money, and contactless payments.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Wifi size={36} />
              </div>
              <h3>Free High-Speed Wi-Fi</h3>
              <p>Stay connected with our complimentary guest network throughout the store.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="section bg-white" id="blog">
        <div className="container">
          <h2 className="section-title">From the Journal</h2>
          <p className="text-center" style={{fontFamily: "'Playfair Display', serif", fontSize: '18px', marginBottom: '40px'}}>Expert insights on refined shopping and elegant living.</p>
          
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            <div className="blog-card hover-lift">
              <div className="blog-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80")' }}></div>
              <div className="blog-content">
                <span style={{ color: 'var(--primary-orange)', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Shopping Tips</span>
                <h3 style={{fontSize: '22px', marginTop: '10px'}}>Best Places to Buy Groceries in Koforidua</h3>
                <p style={{fontSize: '15px'}}>Discover why DNKA is the premier choice for fresh produce and elite value in the Eastern Region.</p>
                <Link to="/blog/grocery-koforidua" className="read-more">Read More</Link>
              </div>
            </div>

            <div className="blog-card hover-lift">
              <div className="blog-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80")' }}></div>
              <div className="blog-content">
                <span style={{ color: 'var(--primary-orange)', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Lifestyle</span>
                <h3 style={{fontSize: '22px', marginTop: '10px'}}>Affordable Household Items in Ghana</h3>
                <p style={{fontSize: '15px'}}>Decorating your home doesn't have to be expensive. Find our curated selection of elegant essentials.</p>
                <Link to="/blog/affordable-household" className="read-more">Read More</Link>
              </div>
            </div>

            <div className="blog-card hover-lift">
              <div className="blog-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&w=600&q=80")' }}></div>
              <div className="blog-content">
                <span style={{ color: 'var(--primary-orange)', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Finance</span>
                <h3 style={{fontSize: '22px', marginTop: '10px'}}>How to Save Money on Shopping</h3>
                <p style={{fontSize: '15px'}}>Learn premium tips and tricks to maximize your budget while shopping for everyday essentials.</p>
                <Link to="/blog/save-money-shopping" className="read-more">Read More</Link>
              </div>
            </div>
          </div>
          
          <div className="text-center" style={{marginTop: '60px'}}>
            <Link to="/blog" className="btn btn-outline" style={{borderColor: 'var(--primary-green)', color: 'var(--primary-green)'}}>View All Articles</Link>
          </div>
        </div>
      </section>

      {/* Newsletter (Mall Feature) */}
      <section className="newsletter">
        <div className="container">
          <h2>Join the DNKA VIP Club</h2>
          <p>Subscribe to receive exclusive access to sales, events, and new arrivals.</p>
          <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }}>
            <input type="email" placeholder="Enter your email address..." required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Location Section */}
      <section className="section bg-light" id="location">
        <div className="container">
          <h2 className="section-title">Visit Our Store</h2>
          <p className="text-center" style={{ marginBottom: '40px', fontSize: '18px', fontFamily: "'Playfair Display', serif" }}>
            Located in the heart of Koforidua, serving customers across the Eastern Region with distinction.
          </p>
          <div className="map-container">
            <iframe 
              title="DNKA Supermarket Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126839.29955375306!2d-0.34759685324632836!3d6.08415712170327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf7054f02882ad%3A0xbccdc81a95a8b75e!2sKoforidua%2C%20Ghana!5e0!3m2!1sen!2sus!4v1713838421000!5m2!1sen!2sus" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/233599087140" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <Phone size={30} color="white" />
      </a>
    </>
  );
};

export default Home;
