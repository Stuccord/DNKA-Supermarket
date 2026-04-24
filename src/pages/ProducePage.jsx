import { Helmet } from 'react-helmet-async';
import { ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const products = [
  { id: 'p1', name: "Organic Tomatoes", price: 45, unit: "/ kg", image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=400&q=80" },
  { id: 'p2', name: "Fresh Bananas", price: 25, unit: "/ bunch", image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=400&q=80" },
  { id: 'p3', name: "Sweet Oranges", price: 30, unit: "/ net", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=400&q=80" },
  { id: 'p4', name: "Mixed Greens", price: 20, unit: "/ pack", image: "https://images.unsplash.com/photo-1556801712-76c820633d12?auto=format&fit=crop&w=400&q=80" },
  { id: 'p5', name: "Red Apples", price: 50, unit: "/ kg", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bccb?auto=format&fit=crop&w=400&q=80" },
  { id: 'p6', name: "Fresh Carrots", price: 15, unit: "/ pack", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80" },
  { id: 'p7', name: "Green Bell Peppers", price: 25, unit: "/ kg", image: "https://images.unsplash.com/photo-1566275529824-cca6d00a2175?auto=format&fit=crop&w=400&q=80" },
  { id: 'p8', name: "Organic Garlic", price: 30, unit: "/ net", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=400&q=80" },
  { id: 'p9', name: "Red Onions", price: 40, unit: "/ sack", image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=400&q=80" },
  { id: 'p10', name: "Fresh Ginger", price: 20, unit: "/ kg", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80" },
  { id: 'p11', name: "Juicy Pineapples", price: 15, unit: "/ each", image: "https://images.unsplash.com/photo-1550258114-68bd484d69ae?auto=format&fit=crop&w=400&q=80" },
  { id: 'p12', name: "Ripe Mangoes", price: 35, unit: "/ kg", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=80" },
  { id: 'p13', name: "Local Yams", price: 60, unit: "/ tuber", image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=400&q=80" },
  { id: 'p14', name: "Plantains", price: 40, unit: "/ bunch", image: "https://images.unsplash.com/photo-1621971038166-03f9050d033e?auto=format&fit=crop&w=400&q=80" },
  { id: 'p15', name: "Fresh Cabbage", price: 12, unit: "/ head", image: "https://images.unsplash.com/photo-1594282486512-ad58f92911b5?auto=format&fit=crop&w=400&q=80" },
  { id: 'p16', name: "Green Beans", price: 18, unit: "/ pack", image: "https://images.unsplash.com/photo-1600850056064-a8b380df8395?auto=format&fit=crop&w=400&q=80" },
  { id: 'p17', name: "Lemons", price: 25, unit: "/ net", image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=400&q=80" },
  { id: 'p18', name: "Spring Onions", price: 10, unit: "/ bunch", image: "https://images.unsplash.com/photo-1615485240384-552e404e9c44?auto=format&fit=crop&w=400&q=80" },
  { id: 'p19', name: "Fresh Mint", price: 8, unit: "/ pack", image: "https://images.unsplash.com/photo-1594488687196-035fee82182a?auto=format&fit=crop&w=400&q=80" },
  { id: 'p20', name: "Cucumbers", price: 15, unit: "/ kg", image: "https://images.unsplash.com/photo-1449333214652-3d88ca3c6c9a?auto=format&fit=crop&w=400&q=80" },
];

const AddToCartBtn = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      className={`btn ${added ? 'btn-secondary' : 'btn-primary'}`}
      style={{ padding: '10px 20px', fontSize: '12px', width: '100%', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', transition: 'all 0.3s ease' }}
      onClick={handleAdd}
    >
      {added ? <><Check size={14} /> Added!</> : <><ShoppingCart size={14} /> Add to Cart</>}
    </button>
  );
};

const ProducePage = () => {
  return (
    <>
      <Helmet>
        <title>Fresh Produce | DNKA Supermarket</title>
        <meta name="description" content="Shop the finest, farm-fresh vegetables and fruits selected daily at DNKA Supermarket." />
      </Helmet>

      <div className="post-header" style={{ backgroundImage: 'linear-gradient(rgba(8, 28, 21, 0.8), rgba(8, 28, 21, 0.9)), url("https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80")', padding: '120px 0 80px' }}>
        <div className="container">
          <h1>Fresh Produce</h1>
          <p style={{ marginTop: '20px', fontFamily: "'Playfair Display', serif", fontSize: '20px', opacity: 0.9 }}>The finest, farm-fresh vegetables and fruits selected daily.</p>
        </div>
      </div>

      <section className="section bg-white" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="sub-categories">
            <button className="category-pill active">All Produce</button>
            <button className="category-pill">Fresh Fruits</button>
            <button className="category-pill">Vegetables</button>
            <button className="category-pill">Organic Farm</button>
            <button className="category-pill">Herbs &amp; Spices</button>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-img" style={{ backgroundImage: `url("${product.image}")` }}></div>
                <h3>{product.name}</h3>
                <p className="product-price">GH₵ {product.price} <span style={{ fontSize: '12px', fontWeight: 400 }}>{product.unit}</span></p>
                <AddToCartBtn product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProducePage;
