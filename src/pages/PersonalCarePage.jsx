import { Helmet } from 'react-helmet-async';
import { ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: "Hydrating Face Lotion", price: "GH₵ 85", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Organic Shampoo", price: "GH₵ 60", image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Luxury Bar Soap", price: "GH₵ 35", image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Nourishing Body Wash", price: "GH₵ 70", image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Anti-Aging Serum", price: "GH₵ 150", image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Conditioner", price: "GH₵ 60", image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=400&q=80" },
  { id: 7, name: "Exfoliating Scrub", price: "GH₵ 80", image: "https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?auto=format&fit=crop&w=400&q=80" },
  { id: 8, name: "Deodorant Stick", price: "GH₵ 45", image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=400&q=80" },
  { id: 9, name: "Shaving Cream", price: "GH₵ 55", image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&w=400&q=80" },
  { id: 10, name: "Aftershave Balm", price: "GH₵ 90", image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&w=400&q=80" },
  { id: 11, name: "Toothpaste", price: "GH₵ 25", image: "https://images.unsplash.com/photo-1559594861-16383c8990c6?auto=format&fit=crop&w=400&q=80" },
  { id: 12, name: "Mouthwash", price: "GH₵ 40", image: "https://images.unsplash.com/photo-1559594861-16383c8990c6?auto=format&fit=crop&w=400&q=80" },
  { id: 13, name: "Sunscreen SPF 50", price: "GH₵ 110", image: "https://images.unsplash.com/photo-1556228578-837ad4c1bb6b?auto=format&fit=crop&w=400&q=80" },
  { id: 14, name: "Body Lotion", price: "GH₵ 75", image: "https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?auto=format&fit=crop&w=400&q=80" },
  { id: 15, name: "Hair Gel", price: "GH₵ 50", image: "https://images.unsplash.com/photo-1522336572018-ed23465ef1b7?auto=format&fit=crop&w=400&q=80" },
  { id: 16, name: "Lip Balm", price: "GH₵ 20", image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=400&q=80" },
  { id: 17, name: "Makeup Remover", price: "GH₵ 65", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80" },
  { id: 18, name: "Cotton Pads", price: "GH₵ 15", image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=400&q=80" },
  { id: 19, name: "Bath Bombs", price: "GH₵ 45", image: "https://images.unsplash.com/photo-1600857560242-79a16100c8f3?auto=format&fit=crop&w=400&q=80" },
  { id: 20, name: "Hand Cream", price: "GH₵ 35", image: "https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?auto=format&fit=crop&w=400&q=80" },
];

const PersonalCarePage = () => {
  return (
    <>
      <Helmet>
        <title>Personal Care | DNKA Supermarket</title>
        <meta name="description" content="Shop luxury skincare and grooming products for your daily routine at DNKA Supermarket." />
      </Helmet>

      <div className="post-header" style={{ backgroundImage: 'linear-gradient(rgba(8, 28, 21, 0.8), rgba(8, 28, 21, 0.9)), url("https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1920&q=80")', padding: '120px 0 80px' }}>
        <div className="container">
          <h1>Personal Care</h1>
          <p style={{ marginTop: '20px', fontFamily: "'Playfair Display', serif", fontSize: '20px', opacity: 0.9 }}>Luxury skincare and grooming products for your daily routine.</p>
        </div>
      </div>

      <section className="section bg-white" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="sub-categories">
            <button className="category-pill active">All Personal Care</button>
            <button className="category-pill">Skincare</button>
            <button className="category-pill">Haircare</button>
            <button className="category-pill">Bath & Body</button>
            <button className="category-pill">Men's Grooming</button>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-img" style={{ backgroundImage: `url("${product.image}")` }}></div>
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '12px', width: '100%', marginTop: '10px' }}>
                  <ShoppingCart size={14} style={{display: 'inline', marginRight: '5px', verticalAlign: 'middle'}}/> Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalCarePage;
