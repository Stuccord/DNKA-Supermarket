import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, ChevronDown, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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
    <header className="header">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <ShoppingCart size={28} color="#d4af37" />
          DNKA<span>Mart</span>
        </Link>
        
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

        <nav className="nav-links">
          <Link to="/">Home</Link>
          
          {/* Dropdown Menu */}
          <div className="dropdown">
            <button className="dropbtn">
              Directory <ChevronDown size={14} style={{ marginLeft: '4px' }} />
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

          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          
          <div className="nav-icons">
            <Link to="/cart" className="icon-btn" aria-label="Cart"><ShoppingCart size={22} /></Link>
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

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-drawer-content">
            <form className="mobile-search" onSubmit={handleSearch}>
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit"><Search size={18} /></button>
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
              <Link to="/contact">Contact Concierge</Link>
            </nav>
          </div>
          <div className="mobile-drawer-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
