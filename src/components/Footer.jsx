import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Globe, Users, MessageCircle, ShoppingCart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="logo" style={{ color: 'var(--white)', marginBottom: '25px', display: 'flex' }}>
              <ShoppingCart size={28} color="#d4af37" />
              DNKA<span style={{ color: 'var(--primary-orange)' }}>Mart</span>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '25px', fontSize: '15px', lineHeight: '1.8' }}>
              Defining the standard of excellence in Koforidua. We provide a curated selection of premium groceries, elegant kitchenware, and fine household essentials.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              {[Globe, Users, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--primary-orange)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}>
                  <Icon size={18} color="white" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Quick Selection</h4>
            <ul>
              <li><Link to="/produce">Fresh Produce</Link></li>
              <li><Link to="/kitchenware">Kitchen Elegance</Link></li>
              <li><Link to="/household">Household Essentials</Link></li>
              <li><Link to="/electronics">Modern Electronics</Link></li>
              <li><Link to="/gourmet">Gourmet Pantry</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Journal</h4>
            <ul>
              <li><Link to="/blog/grocery-koforidua">Best Places to Buy Groceries</Link></li>
              <li><Link to="/blog/affordable-household">Affordable Household Items</Link></li>
              <li><Link to="/blog/save-money-shopping">How to Save Money</Link></li>
              <li><Link to="/blog">View All Articles</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>The Concierge</h4>
            <ul style={{ gap: '15px', display: 'flex', flexDirection: 'column' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={20} color="#d4af37" style={{ flexShrink: 0 }} /> 
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>Box 1255, Koforidua,<br/>Eastern Region, Ghana</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={20} color="#d4af37" style={{ flexShrink: 0 }} /> 
                <a href="tel:0599087140" style={{ color: 'rgba(255,255,255,0.8)' }}>059 908 7140</a>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Clock size={20} color="#d4af37" style={{ flexShrink: 0 }} /> 
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>Open 24/7, Always Here</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} DNKA Supermarket. All rights reserved. | Refined Shopping in Koforidua.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
