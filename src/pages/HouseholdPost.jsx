import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ChevronRight } from 'lucide-react';

const HouseholdPost = () => {
  return (
    <>
      <Helmet>
        <title>Affordable Household Items in Ghana | DNKA Supermarket</title>
        <meta name="description" content="Decorating and maintaining your home in Ghana shouldn't be expensive. Find out how to get cheap household items at DNKA Supermarket in Koforidua." />
      </Helmet>

      <div className="post-header" style={{ backgroundImage: 'linear-gradient(rgba(8, 28, 21, 0.8), rgba(8, 28, 21, 0.9)), url("https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1920&q=80")' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', color: 'var(--primary-orange)', fontSize: '14px', marginBottom: '20px', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={16}/> May 10, 2024</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><User size={16}/> Grace Mensah</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Tag size={16}/> Lifestyle</span>
          </div>
          <h1>Affordable Household Items in Ghana</h1>
          <p style={{ marginTop: '20px', fontFamily: "'Playfair Display', serif", fontSize: '22px', opacity: 0.9 }}>Transform your home elegantly without emptying your wallet.</p>
        </div>
      </div>

      <div className="container post-content">
        <p className="lead-text" style={{ fontSize: '24px', fontStyle: 'italic', marginBottom: '50px', color: 'var(--primary-green)', borderLeft: '4px solid var(--primary-orange)', paddingLeft: '30px' }}>
          Whether you're moving into a new place in Koforidua or just looking to upgrade your current home, buying household items can quickly become expensive. However, with the right shopping strategy, you can find high-quality, elegant household items in Ghana that fit your budget.
        </p>

        <h2>1. Prioritize Your Needs</h2>
        <p>Before you start shopping, make a list of essential items. Kitchenware, cleaning supplies, and bathroom necessities should usually come first. At DNKA Supermarket, our Kitchenware Store section is fully stocked with durable pots, pans, and elegant utensils that offer both quality and value. Focusing on the "heart of the home" first ensures you build a functional living space immediately.</p>

        <h2>2. Look for Bundle Deals</h2>
        <p>Many stores offer discounts when you buy items in bulk or as a set. For instance, purchasing a complete classic cookware set is often cheaper than buying individual pots and pans. Keep an eye out for our "Weekly Specials" promotions for the best curated bundle deals. Our sets are specifically chosen for their timeless aesthetic and multi-functional use.</p>

        <h2>3. Quality vs. Price</h2>
        <p>While looking for affordable items, don't completely sacrifice quality. It's better to buy a finely crafted item that lasts for years than a cheap one you have to replace every month. We source our products carefully to ensure you get the best of both worlds: timeless design and lasting durability. Investing in quality today saves you significant costs over time.</p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '60px 0' }} />

        <h2>Conclusion</h2>
        <p>Building a comfortable, beautiful home in Koforidua is easily achievable with DNKA Supermarket. We are committed to providing our community with premium household items and elegant kitchenware that makes refined living accessible to everyone.</p>

        <div style={{ marginTop: '80px', padding: '50px', background: 'var(--white)', border: '1px solid var(--border-color)', borderRadius: '8px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '32px', marginBottom: '15px' }}>Explore Our Household Collection</h3>
          <p style={{ marginBottom: '30px', color: 'var(--text-light)', fontSize: '18px' }}>Visit us today to see our wide selection of refined household items!</p>
          <Link to="/" className="btn btn-primary" style={{padding: '16px 40px'}}>Visit Homepage</Link>
        </div>

        {/* More Articles */}
        <div style={{ marginTop: '100px' }}>
          <h3 style={{ fontSize: '28px', marginBottom: '30px', borderBottom: '2px solid var(--primary-orange)', paddingBottom: '10px', display: 'inline-block' }}>More from the Journal</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <Link to="/blog/grocery-koforidua" className="blog-card" style={{ display: 'block' }}>
              <div className="blog-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80")', height: '200px' }}></div>
              <div className="blog-content" style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>Best Places to Buy Groceries</h4>
                <span className="read-more" style={{ fontSize: '12px' }}>Read More <ChevronRight size={14}/></span>
              </div>
            </Link>
            <Link to="/blog/save-money-shopping" className="blog-card" style={{ display: 'block' }}>
              <div className="blog-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&w=600&q=80")', height: '200px' }}></div>
              <div className="blog-content" style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>How to Save Money on Shopping</h4>
                <span className="read-more" style={{ fontSize: '12px' }}>Read More <ChevronRight size={14}/></span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter */}
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
    </>
  );
};

export default HouseholdPost;
