import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Award, ThumbsUp, Heart, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Heritage & Vision | DNKA Supermarket</title>
        <meta name="description" content="Learn more about DNKA Supermarket, Koforidua's premier destination for quality groceries and household essentials." />
      </Helmet>

      <div className="post-header" style={{ backgroundImage: 'linear-gradient(rgba(8, 28, 21, 0.8), rgba(8, 28, 21, 0.9)), url("https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80")', padding: '150px 0 100px' }}>
        <div className="container">
          <h1 style={{fontSize: '64px'}}>Our Heritage</h1>
          <p style={{ marginTop: '20px', fontFamily: "'Playfair Display', serif", fontSize: '24px', opacity: 0.9 }}>A legacy of quality and community service in the heart of Koforidua.</p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container">
          <div className="about-layout-1">
            <div>
              <h2 className="about-title-large">Defining the Standard of Excellence</h2>
              <p className="lead-text" style={{ fontSize: '22px', fontStyle: 'italic', marginBottom: '30px', color: 'var(--primary-green)' }}>
                At DNKA Supermarket, we believe that everyday shopping should be an exceptional experience.
              </p>
              <p style={{marginBottom: '20px', fontSize: '18px'}}>
                Founded with a vision to revolutionize the retail landscape in the Eastern Region, DNKA has grown from a local initiative into Koforidua's premier shopping destination. We bridge the gap between premium international quality and local accessibility, ensuring that our community has access to the very best the world has to offer.
              </p>
              <p style={{fontSize: '18px'}}>
                Our curated selection spans from the freshest farm-to-table produce to artisanal gourmet imports and high-end electronics. Every item on our shelves is a testament to our commitment to quality.
              </p>
            </div>
            <div style={{ padding: '20px' }}>
              <div className="about-img-1" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80")' }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container text-center">
          <h2 className="section-title">Our Core Values</h2>
          <p style={{fontFamily: "'Playfair Display', serif", fontSize: '20px', marginBottom: '60px'}}>The principles that guide our service every day.</p>
          
          <div className="feature-grid">
            <div className="feature-item" style={{background: 'var(--white)'}}>
              <div className="feature-icon-wrapper">
                <Target size={36} />
              </div>
              <h3>Precision Sourcing</h3>
              <p>We work directly with local farmers and global suppliers to ensure only the highest grade of products reach our shelves.</p>
            </div>
            
            <div className="feature-item" style={{background: 'var(--white)'}}>
              <div className="feature-icon-wrapper">
                <Users size={36} />
              </div>
              <h3>Guest-Centricity</h3>
              <p>Our customers are our guests. We provide a refined, comfortable shopping environment tailored to your needs.</p>
            </div>
            
            <div className="feature-item" style={{background: 'var(--white)'}}>
              <div className="feature-icon-wrapper">
                <Heart size={36} />
              </div>
              <h3>Community Growth</h3>
              <p>We reinvest in Koforidua, supporting local education, health initiatives, and sustainable agriculture.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="about-layout-2">
            <div className="blog-featured-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80")' }}></div>
            <div className="about-featured-content">
              <span className="blog-featured-tag">Our Impact</span>
              <h2 className="about-title-medium">A Pillar of the Eastern Region</h2>
              <p style={{fontSize: '18px'}}>
                Beyond retail, DNKA Supermarket serves as an economic engine for Koforidua. By prioritizing local employment and providing a platform for regional producers, we are helping build a more resilient and prosperous community.
              </p>
              <div className="about-stats-flex">
                <div>
                  <h4 style={{fontSize: '32px', color: 'var(--primary-orange)'}}>100%</h4>
                  <p style={{fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold'}}>Freshness Guarantee</p>
                </div>
                <div>
                  <h4 style={{fontSize: '32px', color: 'var(--primary-orange)'}}>24/7</h4>
                  <p style={{fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold'}}>Service Access</p>
                </div>
                <div>
                  <h4 style={{fontSize: '32px', color: 'var(--primary-orange)'}}>50+</h4>
                  <p style={{fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold'}}>Local Suppliers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light" style={{padding: '80px 0'}}>
        <div className="container text-center">
          <h2 className="about-cta-title">Ready to Experience DNKA?</h2>
          <p style={{fontSize: '18px', color: 'var(--text-light)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px'}}>Join thousands of satisfied shoppers who have made us their primary choice for quality and elegance.</p>
          <div className="about-cta-buttons">
            <Link to="/contact" className="btn btn-primary">Visit Our Store</Link>
            <Link to="/blog" className="btn btn-outline" style={{borderColor: 'var(--primary-green)', color: 'var(--primary-green)'}}>Read Our Journal</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
