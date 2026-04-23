import { Helmet } from 'react-helmet-async';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ShoppingBag, ChevronRight, Filter } from 'lucide-react';
import { useMemo } from 'react';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // Mock data for search results across different categories
  const allProducts = [
    { id: 1, name: "Premium Basmati Rice", price: "₵85.00", category: "Gourmet Pantry", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80", path: "/gourmet" },
    { id: 2, name: "Organic Extra Virgin Olive Oil", price: "₵120.00", category: "Gourmet Pantry", image: "https://images.unsplash.com/photo-1474979266404-7eaacbadcbaf?auto=format&fit=crop&w=600&q=80", path: "/gourmet" },
    { id: 3, name: "Le Creuset Signature Cocotte", price: "₵2,450.00", category: "Kitchen Elegance", image: "https://images.unsplash.com/photo-1584990344468-ca4ccfb15860?auto=format&fit=crop&w=600&q=80", path: "/kitchenware" },
    { id: 4, name: "Fresh Koforidua Pineapples", price: "₵15.00", category: "Fresh Produce", image: "https://images.unsplash.com/photo-1550258114-68bd299768c5?auto=format&fit=crop&w=600&q=80", path: "/produce" },
    { id: 5, name: "Smart LED 4K UHD TV 55\"", price: "₵4,800.00", category: "Modern Electronics", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80", path: "/electronics" },
    { id: 6, name: "Egyptian Cotton Towel Set", price: "₵350.00", category: "Household Essentials", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&w=600&q=80", path: "/household" },
  ];

  const results = useMemo(() => {
    if (!query) return [];
    return allProducts.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) || 
      p.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <>
      <Helmet>
        <title>Search Results for "{query}" | DNKA Supermarket</title>
      </Helmet>

      <div className="post-header" style={{ padding: '120px 0 60px', background: 'var(--primary-green)' }}>
        <div className="container">
          <h1 style={{fontSize: '42px'}}>Search Results</h1>
          <p style={{ marginTop: '10px', fontSize: '18px', opacity: 0.9 }}>
            {results.length} results found for "{query}"
          </p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
            {/* Main Content */}
            <div style={{ flex: 1 }}>
              {results.length > 0 ? (
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
                  {results.map(product => (
                    <div className="product-card hover-lift" key={product.id}>
                      <div className="product-img" style={{ backgroundImage: `url("${product.image}")` }}>
                        <div className="product-badge">{product.category}</div>
                      </div>
                      <div className="product-info">
                        <h3>{product.name}</h3>
                        <p className="price">{product.price}</p>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                          <button className="btn btn-primary" style={{ flex: 1, padding: '10px' }}>Add to Cart</button>
                          <Link to={product.path} className="btn btn-outline" style={{ padding: '10px' }}>View</Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '100px 0' }}>
                  <Search size={64} color="var(--border-color)" style={{ marginBottom: '20px' }} />
                  <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>We couldn't find any matches</h2>
                  <p style={{ color: 'var(--text-light)', fontSize: '18px', maxWidth: '500px', margin: '0 auto 30px' }}>
                    Double check your spelling or try searching for more general terms like "groceries" or "electronics".
                  </p>
                  <Link to="/" className="btn btn-primary" style={{ width: 'auto' }}>Return to Homepage</Link>
                </div>
              )}
            </div>

            {/* Sidebar Suggestions */}
            <aside style={{ width: '300px', display: 'none', '@media (min-width: 1024px)': { display: 'block' } }}>
               <div style={{ background: 'var(--white)', padding: '30px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <h4 style={{ marginBottom: '20px', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}><Filter size={18}/> Popular Categories</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <li><Link to="/produce" style={{ color: 'var(--text-dark)', display: 'flex', justifyContent: 'space-between' }}><span>Fresh Produce</span> <ChevronRight size={14}/></Link></li>
                    <li><Link to="/gourmet" style={{ color: 'var(--text-dark)', display: 'flex', justifyContent: 'space-between' }}><span>Gourmet Pantry</span> <ChevronRight size={14}/></Link></li>
                    <li><Link to="/kitchenware" style={{ color: 'var(--text-dark)', display: 'flex', justifyContent: 'space-between' }}><span>Kitchen Elegance</span> <ChevronRight size={14}/></Link></li>
                    <li><Link to="/electronics" style={{ color: 'var(--text-dark)', display: 'flex', justifyContent: 'space-between' }}><span>Modern Electronics</span> <ChevronRight size={14}/></Link></li>
                  </ul>
               </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchPage;
