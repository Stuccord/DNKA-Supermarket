import { Helmet } from 'react-helmet-async';
import { ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: "Organic Tomatoes", price: "GH₵ 45 / kg", image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Fresh Bananas", price: "GH₵ 25 / bunch", image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Sweet Oranges", price: "GH₵ 30 / net", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Mixed Greens", price: "GH₵ 20 / pack", image: "https://images.unsplash.com/photo-1556801712-76c820633d12?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Red Apples", price: "GH₵ 50 / kg", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bccb?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Fresh Carrots", price: "GH₵ 15 / pack", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80" },
  { id: 7, name: "Green Bell Peppers", price: "GH₵ 25 / kg", image: "https://images.unsplash.com/photo-1566275529824-cca6d00a2175?auto=format&fit=crop&w=400&q=80" },
  { id: 8, name: "Organic Garlic", price: "GH₵ 30 / net", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=400&q=80" },
  { id: 9, name: "Red Onions", price: "GH₵ 40 / sack", image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=400&q=80" },
  { id: 10, name: "Fresh Ginger", price: "GH₵ 20 / kg", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80" },
  { id: 11, name: "Juicy Pineapples", price: "GH₵ 15 / each", image: "https://images.unsplash.com/photo-1550258114-68bd484d69ae?auto=format&fit=crop&w=400&q=80" },
  { id: 12, name: "Ripe Mangoes", price: "GH₵ 35 / kg", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=80" },
  { id: 13, name: "Local Yams", price: "GH₵ 60 / tuber", image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=400&q=80" },
  { id: 14, name: "Plantains", price: "GH₵ 40 / bunch", image: "https://images.unsplash.com/photo-1621971038166-03f9050d033e?auto=format&fit=crop&w=400&q=80" },
  { id: 15, name: "Fresh Cabbage", price: "GH₵ 12 / head", image: "https://images.unsplash.com/photo-1594282486512-ad58f92911b5?auto=format&fit=crop&w=400&q=80" },
  { id: 16, name: "Green Beans", price: "GH₵ 18 / pack", image: "https://images.unsplash.com/photo-1600850056064-a8b380df8395?auto=format&fit=crop&w=400&q=80" },
  { id: 17, name: "Lemons", price: "GH₵ 25 / net", image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=400&q=80" },
  { id: 18, name: "Spring Onions", price: "GH₵ 10 / bunch", image: "https://images.unsplash.com/photo-1615485240384-552e404e9c44?auto=format&fit=crop&w=400&q=80" },
  { id: 19, name: "Fresh Mint", price: "GH₵ 8 / pack", image: "https://images.unsplash.com/photo-1594488687196-035fee82182a?auto=format&fit=crop&w=400&q=80" },
  { id: 20, name: "Cucumbers", price: "GH₵ 15 / kg", image: "https://images.unsplash.com/photo-1449333214652-3d88ca3c6c9a?auto=format&fit=crop&w=400&q=80" },
];

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
            <button className="category-pill">Herbs & Spices</button>
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

export default ProducePage;
