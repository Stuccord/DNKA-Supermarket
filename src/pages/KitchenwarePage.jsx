import { Helmet } from 'react-helmet-async';
import { ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: "Classic Cookware Set", price: "GH₵ 450", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Stainless Steel Knives", price: "GH₵ 120", image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Elegant Plates (Set of 4)", price: "GH₵ 200", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Crystal Wine Glasses", price: "GH₵ 180", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Non-Stick Frying Pan", price: "GH₵ 150", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Bamboo Cutting Board", price: "GH₵ 85", image: "https://images.unsplash.com/photo-1594385208974-2e75f9d8a847?auto=format&fit=crop&w=400&q=80" },
  { id: 7, name: "Ceramic Soup Bowls", price: "GH₵ 130", image: "https://images.unsplash.com/photo-1574633285116-43d839352107?auto=format&fit=crop&w=400&q=80" },
  { id: 8, name: "Coffee Mugs (Set of 6)", price: "GH₵ 95", image: "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?auto=format&fit=crop&w=400&q=80" },
  { id: 9, name: "Silicone Baking Mat", price: "GH₵ 40", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80" },
  { id: 10, name: "Cast Iron Skillet", price: "GH₵ 220", image: "https://images.unsplash.com/photo-1585244433332-76220d3f305c?auto=format&fit=crop&w=400&q=80" },
  { id: 11, name: "Silverware Set (24pc)", price: "GH₵ 350", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=400&q=80" },
  { id: 12, name: "Glass Pitcher", price: "GH₵ 110", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80" },
  { id: 13, name: "Measuring Spoons", price: "GH₵ 35", image: "https://images.unsplash.com/photo-1591122822187-5768809228ec?auto=format&fit=crop&w=400&q=80" },
  { id: 14, name: "Mixing Bowls Set", price: "GH₵ 145", image: "https://images.unsplash.com/photo-1574633285116-43d839352107?auto=format&fit=crop&w=400&q=80" },
  { id: 15, name: "Dutch Oven", price: "GH₵ 480", image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=400&q=80" },
  { id: 16, name: "Pepper Grinder", price: "GH₵ 65", image: "https://images.unsplash.com/photo-1591122822187-5768809228ec?auto=format&fit=crop&w=400&q=80" },
  { id: 17, name: "Salad Spinner", price: "GH₵ 120", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80" },
  { id: 18, name: "Roasting Pan", price: "GH₵ 190", image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=400&q=80" },
  { id: 19, name: "Whiskey Glasses", price: "GH₵ 160", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80" },
  { id: 20, name: "Cake Stand", price: "GH₵ 140", image: "https://images.unsplash.com/photo-1574633285116-43d839352107?auto=format&fit=crop&w=400&q=80" },
];

const KitchenwarePage = () => {
  return (
    <>
      <Helmet>
        <title>Kitchen Elegance | DNKA Supermarket</title>
        <meta name="description" content="Shop premium cookware and elegant dining essentials at DNKA Supermarket." />
      </Helmet>

      <div className="post-header" style={{ backgroundImage: 'linear-gradient(rgba(8, 28, 21, 0.8), rgba(8, 28, 21, 0.9)), url("https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1920&q=80")', padding: '120px 0 80px' }}>
        <div className="container">
          <h1>Kitchen Elegance</h1>
          <p style={{ marginTop: '20px', fontFamily: "'Playfair Display', serif", fontSize: '20px', opacity: 0.9 }}>Premium cookware and elegant dining essentials for your home.</p>
        </div>
      </div>

      <section className="section bg-white" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="sub-categories">
            <button className="category-pill active">All Kitchenware</button>
            <button className="category-pill">Cookware</button>
            <button className="category-pill">Cutlery & Knives</button>
            <button className="category-pill">Glassware</button>
            <button className="category-pill">Bakeware</button>
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

export default KitchenwarePage;
