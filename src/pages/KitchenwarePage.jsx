import { Helmet } from 'react-helmet-async';
import AddToCartBtn from '../components/AddToCartBtn';

const products = [
  { id: 'k1',  name: "Classic Cookware Set",    price: 450, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80" },
  { id: 'k2',  name: "Stainless Steel Knives",  price: 120, image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=400&q=80" },
  { id: 'k3',  name: "Elegant Plates (Set 4)",  price: 200, image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80" },
  { id: 'k4',  name: "Crystal Wine Glasses",    price: 180, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80" },
  { id: 'k5',  name: "Non-Stick Frying Pan",    price: 150, image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=400&q=80" },
  { id: 'k6',  name: "Bamboo Cutting Board",    price: 85,  image: "https://images.unsplash.com/photo-1594385208974-2e75f9d8a847?auto=format&fit=crop&w=400&q=80" },
  { id: 'k7',  name: "Ceramic Soup Bowls",      price: 130, image: "https://images.unsplash.com/photo-1574633285116-43d839352107?auto=format&fit=crop&w=400&q=80" },
  { id: 'k8',  name: "Coffee Mugs (Set 6)",     price: 95,  image: "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?auto=format&fit=crop&w=400&q=80" },
  { id: 'k9',  name: "Silicone Baking Mat",     price: 40,  image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80" },
  { id: 'k10', name: "Cast Iron Skillet",       price: 220, image: "https://images.unsplash.com/photo-1585244433332-76220d3f305c?auto=format&fit=crop&w=400&q=80" },
  { id: 'k11', name: "Silverware Set (24pc)",   price: 350, image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=400&q=80" },
  { id: 'k12', name: "Glass Pitcher",           price: 110, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80" },
  { id: 'k13', name: "Measuring Spoons",        price: 35,  image: "https://images.unsplash.com/photo-1591122822187-5768809228ec?auto=format&fit=crop&w=400&q=80" },
  { id: 'k14', name: "Mixing Bowls Set",        price: 145, image: "https://images.unsplash.com/photo-1574633285116-43d839352107?auto=format&fit=crop&w=400&q=80" },
  { id: 'k15', name: "Dutch Oven",              price: 480, image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=400&q=80" },
  { id: 'k16', name: "Pepper Grinder",          price: 65,  image: "https://images.unsplash.com/photo-1591122822187-5768809228ec?auto=format&fit=crop&w=400&q=80" },
  { id: 'k17', name: "Salad Spinner",           price: 120, image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80" },
  { id: 'k18', name: "Roasting Pan",            price: 190, image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=400&q=80" },
  { id: 'k19', name: "Whiskey Glasses",         price: 160, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80" },
  { id: 'k20', name: "Cake Stand",              price: 140, image: "https://images.unsplash.com/photo-1574633285116-43d839352107?auto=format&fit=crop&w=400&q=80" },
];

const KitchenwarePage = () => (
  <>
    <Helmet>
      <title>Kitchen Elegance | DNKA Supermarket</title>
      <meta name="description" content="Shop premium cookware and elegant dining essentials at DNKA Supermarket." />
    </Helmet>

    <div className="post-header" style={{ backgroundImage: 'linear-gradient(rgba(8,28,21,0.8),rgba(8,28,21,0.9)),url("https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1920&q=80")', padding: '120px 0 80px' }}>
      <div className="container">
        <h1>Kitchen Elegance</h1>
        <p style={{ marginTop: '20px', fontFamily: "'Playfair Display',serif", fontSize: '20px', opacity: 0.9 }}>Premium cookware and elegant dining essentials.</p>
      </div>
    </div>

    <section className="section bg-white" style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="sub-categories">
          <button className="category-pill active">All Kitchenware</button>
          <button className="category-pill">Cookware</button>
          <button className="category-pill">Cutlery &amp; Knives</button>
          <button className="category-pill">Glassware</button>
          <button className="category-pill">Bakeware</button>
        </div>
        <div className="product-grid">
          {products.map(p => (
            <div className="product-card" key={p.id}>
              <div className="product-img" style={{ backgroundImage: `url("${p.image}")` }}></div>
              <h3>{p.name}</h3>
              <p className="product-price">GH₵ {p.price}</p>
              <AddToCartBtn product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default KitchenwarePage;
