import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, ChevronDown, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { cartCount } = useCart();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [navigate]);
 

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav-container">
          <button
            className="logo"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => {
              if (window.location.hash === '#/' || window.location.hash === '') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate('/');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }
            }}
          >
            <ShoppingCart size={28} color="#d4af37" />
            DNKA<span>Mart</span>
          </button>
        
        {/* Search Bar */}
        <form className="search-form" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Search products, categories, or brands..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-btn" aria-label="Search">
            <Search size={18} />
          </button>
        </form>

          <div className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <div className="dropdown">
              <button className="dropbtn">
                Directories <ChevronDown size={14} style={{ marginLeft: '5px' }} />
              </button>
              <div className="dropdown-content">
                <Link to="/produce">Fresh Produce</Link>
                <Link to="/kitchenware">Kitchen Elegance</Link>
                <Link to="/household">Household Essentials</Link>
                <Link to="/personal-care">Personal Care</Link>
                <Link to="/electronics">Modern Electronics</Link>
                <Link to="/gourmet">Gourmet Pantry</Link>
              </div>
            </div>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
         <div className="nav-icons">
            <Link to="/cart" className="icon-btn cart-icon-btn" aria-label="Cart">
              <ShoppingCart size={22} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
            <button className="icon-btn" aria-label="User Account"><User size={22} /></button>
            <button 
              className="icon-btn mobile-menu-btn" 
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <button
            className="logo"
            style={{ background: 'none', border: 'none', cursor: 'pointer', marginBottom: '30px', fontSize: '28px' }}
            onClick={() => {
              setIsMobileMenuOpen(false);
              if (window.location.hash === '#/' || window.location.hash === '') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate('/');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }
            }}
          >
            <ShoppingCart size={24} color="#d4af37" />
            DNKA<span>Mart</span>
          </button>
          
          <form className="mobile-search" onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" aria-label="Search"><Search size={18} /></button>
          </form>
          
          <nav className="mobile-nav">
            <Link to="/">Home</Link>
            <div className="mobile-nav-divider">Directories</div>
            <Link to="/produce">Fresh Produce</Link>
            <Link to="/kitchenware">Kitchen Elegance</Link>
            <Link to="/household">Household Essentials</Link>
            <Link to="/personal-care">Personal Care</Link>
            <Link to="/electronics">Modern Electronics</Link>
            <Link to="/gourmet">Gourmet Pantry</Link>
            <div className="mobile-nav-divider">Company</div>
            <Link to="/about">About Us</Link>
            <Link to="/blog">Our Journal</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <div className="mobile-drawer-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      </div>
    </header>
  );
};

export default Header;
