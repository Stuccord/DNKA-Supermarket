import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ChevronRight } from 'lucide-react';

const GroceryPost = () => {
  return (
    <>
      <Helmet>
        <title>Best Places to Buy Groceries in Koforidua | DNKA Supermarket</title>
        <meta name="description" content="Discover the best places to buy groceries in Koforidua. From fresh produce to imported goods, find out why DNKA Supermarket is your one-stop shop." />
      </Helmet>

      <div className="post-header" style={{ backgroundImage: 'linear-gradient(rgba(8, 28, 21, 0.8), rgba(8, 28, 21, 0.9)), url("https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80")' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', color: 'var(--primary-orange)', fontSize: '14px', marginBottom: '20px', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={16}/> May 12, 2024</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><User size={16}/> Admin</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Tag size={16}/> Shopping Tips</span>
          </div>
          <h1>Best Places to Buy Groceries in Koforidua</h1>
          <p style={{ marginTop: '20px', fontFamily: "'Playfair Display', serif", fontSize: '22px', opacity: 0.9 }}>Your ultimate guide to fresh and premium food shopping in the Eastern Region.</p>
        </div>
      </div>

      <div className="container post-content">
        <p className="lead-text" style={{ fontSize: '24px', fontStyle: 'italic', marginBottom: '50px', color: 'var(--primary-green)', borderLeft: '4px solid var(--primary-orange)', paddingLeft: '30px' }}>
          Finding the right place to buy fresh, high-quality groceries can make all the difference in your daily life. If you're living in or visiting Koforidua, you might be wondering where to get the best value for your money. Let's explore why choosing a reliable supermarket is key.
        </p>

        <h2>1. Fresh Produce Matters</h2>
        <p>A great grocery store should offer a wide variety of fresh vegetables, fruits, and meats. Koforidua has several local markets, but navigating them can be time-consuming. A dedicated supermarket brings the freshness of the local market into a clean, air-conditioned, and elegant environment. At DNKA, we source our produce daily from local farms to ensure maximum freshness.</p>

        <h2>2. Convenience and Variety</h2>
        <p>Instead of visiting multiple shops for your rice, canned goods, and cleaning supplies, the best supermarkets offer everything under one roof. At DNKA Supermarket, we pride ourselves on being the ultimate one-stop shop in Koforidua, offering both local staples and imported, gourmet brands that you won't find anywhere else in the region.</p>

        <h2>3. Affordable Prices and Weekly Deals</h2>
        <p>Premium grocery shopping shouldn't break the bank. Look for stores that offer regular discounts. We frequently run promotions that help families in Koforidua save significantly on their monthly grocery bills without compromising on quality. Our "Weekly Specials" are designed to give you elite value on everyday essentials.</p>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '60px 0' }} />

        <h2>Conclusion</h2>
        <p>When searching for the "best supermarket near me" in Koforidua, consider freshness, variety, and price. DNKA Supermarket checks all these boxes, making it the premier choice for residents who value their time and health.</p>

        <div style={{ marginTop: '80px', padding: '50px', background: 'var(--white)', border: '1px solid var(--border-color)', borderRadius: '8px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '32px', marginBottom: '15px' }}>Ready to experience premium shopping?</h3>
          <p style={{ marginBottom: '30px', color: 'var(--text-light)', fontSize: '18px' }}>Visit DNKA Supermarket today for the best grocery selections in Koforidua!</p>
          <Link to="/" className="btn btn-primary" style={{padding: '16px 40px'}}>Visit Our Store</Link>
        </div>

        {/* More Articles */}
        <div style={{ marginTop: '100px' }}>
          <h3 style={{ fontSize: '28px', marginBottom: '30px', borderBottom: '2px solid var(--primary-orange)', paddingBottom: '10px', display: 'inline-block' }}>More from the Journal</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <Link to="/blog/affordable-household" className="blog-card" style={{ display: 'block' }}>
              <div className="blog-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80")', height: '200px' }}></div>
              <div className="blog-content" style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>Affordable Household Items in Ghana</h4>
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

export default GroceryPost;
