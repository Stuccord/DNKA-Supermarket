import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, Calendar, User, Tag, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const posts = [
    {
      id: 1,
      title: "Best Places to Buy Groceries in Koforidua",
      excerpt: "Looking for fresh produce and affordable groceries in the Eastern Region? Here is why DNKA is your best choice.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
      link: "/blog/grocery-koforidua",
      category: "Shopping Tips",
      date: "May 12, 2024",
      author: "Admin"
    },
    {
      id: 2,
      title: "Affordable Household Items in Ghana",
      excerpt: "Decorating your home doesn't have to be expensive. Find out where to get the cheapest yet elegant household items.",
      image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80",
      link: "/blog/affordable-household",
      category: "Lifestyle",
      date: "May 10, 2024",
      author: "Grace Mensah"
    },
    {
      id: 3,
      title: "How to Save Money on Shopping in Koforidua",
      excerpt: "Learn premium tips and tricks to maximize your budget while shopping for everyday essentials in Koforidua.",
      image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&w=600&q=80",
      link: "/blog/save-money-shopping",
      category: "Finance",
      date: "May 05, 2024",
      author: "David K."
    }
  ];

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, posts]);

  const categories = [
    { name: 'All', count: posts.length },
    { name: 'Shopping Tips', count: 12 },
    { name: 'Lifestyle', count: 9 },
    { name: 'Finance', count: 5 },
    { name: 'Home & Decor', count: 8 },
    { name: 'Recipes', count: 15 }
  ];

  return (
    <>
      <Helmet>
        <title>Journal & Tips | DNKA Supermarket Koforidua</title>
        <meta name="description" content="Read our latest tips on grocery shopping, finding affordable household items, and saving money in Koforidua, Ghana." />
      </Helmet>

      <div className="post-header" style={{ padding: '120px 0 80px', marginBottom: '0' }}>
        <div className="container">
          <h1 style={{fontSize: '56px'}}>The DNKA Journal</h1>
          <p style={{ marginTop: '20px', fontSize: '22px', fontFamily: "'Playfair Display', serif", opacity: 0.9 }}>Expert advice on premium shopping, home elegance, and refined living.</p>
        </div>
      </div>

      <section className="section bg-light" style={{ paddingTop: '80px' }}>
        <div className="container animate-fade-in">
          
          {/* Featured Post */}
          <div className="blog-featured hover-lift">
            <div className="blog-featured-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80")' }}></div>
            <div className="blog-featured-content">
              <span className="blog-featured-tag">Featured Article</span>
              <h2>Mastering the Art of Grocery Shopping</h2>
              <p>Discover how to navigate the modern supermarket like a pro, ensuring you always get the freshest picks and the best value for your home.</p>
              <Link to="/blog/grocery-koforidua" className="btn btn-primary" style={{width: 'fit-content'}}>Read Full Story</Link>
            </div>
          </div>

          <div className="blog-layout">
            {/* Main Content: Post Grid */}
            <div className="blog-main">
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '40px' }}>
                {filteredPosts.length > 0 ? filteredPosts.map(post => (
                  <div className="blog-card hover-lift" key={post.id}>
                    <div className="blog-img" style={{ backgroundImage: `url("${post.image}")` }}>
                      <span style={{ position: 'absolute', top: '20px', left: '20px', background: 'var(--primary-green)', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
                        {post.category}
                      </span>
                    </div>
                    <div className="blog-content">
                      <div style={{ display: 'flex', gap: '15px', color: 'var(--text-light)', fontSize: '13px', marginBottom: '15px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={14}/> {post.date}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><User size={14}/> {post.author}</span>
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <Link to={post.link} className="read-more">Read Article <ChevronRight size={16}/></Link>
                    </div>
                  </div>
                )) : (
                  <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '80px 0' }}>
                    <Search size={48} color="var(--border-color)" style={{ marginBottom: '20px' }} />
                    <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>No articles found</h3>
                    <p style={{ color: 'var(--text-light)' }}>Try adjusting your search or category filters.</p>
                    <button 
                      onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                      className="btn btn-primary" 
                      style={{ marginTop: '20px', width: 'auto' }}
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              {/* Search Widget */}
              <div className="blog-sidebar-widget">
                <h4>Search Journal</h4>
                <div className="search-form" style={{ display: 'flex', maxWidth: '100%' }}>
                  <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search articles..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="search-btn"><Search size={18}/></button>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="blog-sidebar-widget">
                <h4>Categories</h4>
                <ul className="category-list">
                  {categories.map(cat => (
                    <li key={cat.name}>
                      <button 
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`category-link ${selectedCategory === cat.name ? 'active' : ''}`}
                        style={{ 
                          width: '100%', 
                          background: 'none', 
                          border: 'none', 
                          cursor: 'pointer',
                          color: selectedCategory === cat.name ? 'var(--primary-orange)' : 'inherit',
                          fontWeight: selectedCategory === cat.name ? 'bold' : 'normal'
                        }}
                      >
                        <span>{cat.name}</span>
                        <span>({cat.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts Widget */}
              <div className="blog-sidebar-widget">
                <h4>Recent Arrivals</h4>
                <div className="recent-posts">
                  {posts.map(post => (
                    <div className="recent-post-item" key={post.id}>
                      <div className="recent-post-thumb" style={{ backgroundImage: `url("${post.image}")` }}></div>
                      <div className="recent-post-info">
                        <h5><Link to={post.link}>{post.title}</Link></h5>
                        <span className="recent-post-date">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags Widget */}
              <div className="blog-sidebar-widget">
                <h4>Popular Tags</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
                  {['Koforidua', 'Groceries', 'Savings', 'Gourmet', 'Home Decor', 'Cooking'].map(tag => (
                    <span key={tag} style={{ background: '#f0f0f0', padding: '5px 12px', borderRadius: '20px', fontSize: '12px', color: 'var(--text-dark)', cursor: 'pointer' }}>#{tag}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2>Join the DNKA VIP Club</h2>
          <p>Subscribe to receive exclusive access to sales, events, and new arrivals.</p>
          <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }}>
            <input type="email" placeholder="Enter your email address..." required />
            <button type="submit" className="btn btn-primary">Subscribe Now</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Blog;
