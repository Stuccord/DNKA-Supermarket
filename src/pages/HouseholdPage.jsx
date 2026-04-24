import { Helmet } from 'react-helmet-async';
import AddToCartBtn from '../components/AddToCartBtn';

const products = [
  { id: 'h1',  name: "Egyptian Cotton Towels",  price: 350, image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&w=400&q=80" },
  { id: 'h2',  name: "Laundry Detergent",       price: 55,  image: "https://images.unsplash.com/photo-1585670084831-72d1f4a2e342?auto=format&fit=crop&w=400&q=80" },
  { id: 'h3',  name: "Premium Dish Soap",       price: 25,  image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
  { id: 'h4',  name: "Air Freshener Set",       price: 80,  image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=400&q=80" },
  { id: 'h5',  name: "Microfibre Cloth Pack",   price: 45,  image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80" },
  { id: 'h6',  name: "Floor Mop Set",           price: 130, image: "https://images.unsplash.com/photo-1585670084831-72d1f4a2e342?auto=format&fit=crop&w=400&q=80" },
  { id: 'h7',  name: "Storage Baskets (3pcs)",  price: 95,  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80" },
  { id: 'h8',  name: "Scented Candle Set",      price: 110, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80" },
  { id: 'h9',  name: "Trash Bins (2pcs)",       price: 75,  image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80" },
  { id: 'h10', name: "Bathroom Mat Set",        price: 120, image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&w=400&q=80" },
  { id: 'h11', name: "Clothes Hangers (20pcs)", price: 40,  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80" },
  { id: 'h12', name: "Dishwashing Gloves",      price: 20,  image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
  { id: 'h13', name: "Sponge & Scrubber Set",   price: 15,  image: "https://images.unsplash.com/photo-1585670084831-72d1f4a2e342?auto=format&fit=crop&w=400&q=80" },
  { id: 'h14', name: "Toilet Cleaner Bundle",   price: 35,  image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80" },
  { id: 'h15', name: "Kitchen Roll (6 Pack)",   price: 30,  image: "https://images.unsplash.com/photo-1585670084831-72d1f4a2e342?auto=format&fit=crop&w=400&q=80" },
  { id: 'h16', name: "Fabric Softener",         price: 45,  image: "https://images.unsplash.com/photo-1585670084831-72d1f4a2e342?auto=format&fit=crop&w=400&q=80" },
  { id: 'h17', name: "Broom & Dustpan Set",     price: 85,  image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80" },
  { id: 'h18', name: "Clothes Drying Rack",     price: 160, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80" },
  { id: 'h19', name: "Vacuum Bags (10pcs)",     price: 50,  image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
  { id: 'h20', name: "Ironing Board Cover",     price: 65,  image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&w=400&q=80" },
];

const HouseholdPage = () => (
  <>
    <Helmet>
      <title>Household Essentials | DNKA Supermarket</title>
      <meta name="description" content="Quality household supplies and cleaning essentials at DNKA Supermarket." />
    </Helmet>
    <div className="post-header" style={{ backgroundImage: 'linear-gradient(rgba(8,28,21,0.8),rgba(8,28,21,0.9)),url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80")', padding: '120px 0 80px' }}>
      <div className="container">
        <h1>Household Essentials</h1>
        <p style={{ marginTop: '20px', fontFamily: "'Playfair Display',serif", fontSize: '20px', opacity: 0.9 }}>Everything you need to keep your home pristine.</p>
      </div>
    </div>
    <section className="section bg-white" style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="sub-categories">
          <button className="category-pill active">All Essentials</button>
          <button className="category-pill">Cleaning</button>
          <button className="category-pill">Laundry</button>
          <button className="category-pill">Storage</button>
          <button className="category-pill">Home Décor</button>
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

export default HouseholdPage;
