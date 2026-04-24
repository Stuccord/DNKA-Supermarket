import { Helmet } from 'react-helmet-async';
import AddToCartBtn from '../components/AddToCartBtn';

const products = [
  { id: 'g1',  name: "Imported Chocolates",   price: 85,  image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=400&q=80" },
  { id: 'g2',  name: "Artisan Coffee Beans",  price: 110, image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=400&q=80" },
  { id: 'g3',  name: "Organic Honey",         price: 65,  image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80" },
  { id: 'g4',  name: "Fine Red Wine",         price: 250, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80" },
  { id: 'g5',  name: "Truffle Oil",           price: 180, image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=400&q=80" },
  { id: 'g6',  name: "Balsamic Vinegar",      price: 120, image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80" },
  { id: 'g7',  name: "Aged Cheddar",          price: 95,  image: "https://images.unsplash.com/photo-1485962391905-dc37bb36001a?auto=format&fit=crop&w=400&q=80" },
  { id: 'g8',  name: "Prosciutto",            price: 150, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=400&q=80" },
  { id: 'g9',  name: "Kalamata Olives",       price: 55,  image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80" },
  { id: 'g10', name: "Saffron Threads",       price: 320, image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=400&q=80" },
  { id: 'g11', name: "Vanilla Beans",         price: 140, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=400&q=80" },
  { id: 'g12', name: "Pesto Sauce",           price: 65,  image: "https://images.unsplash.com/photo-1594315513237-ef831518f972?auto=format&fit=crop&w=400&q=80" },
  { id: 'g13', name: "Macadamia Nuts",        price: 110, image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80" },
  { id: 'g14', name: "Maple Syrup",           price: 130, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80" },
  { id: 'g15', name: "Gourmet Pasta",         price: 45,  image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=400&q=80" },
  { id: 'g16', name: "Artisanal Jam",         price: 55,  image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=400&q=80" },
  { id: 'g17', name: "Sea Salt Flakes",       price: 40,  image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80" },
  { id: 'g18', name: "Matcha Green Tea",      price: 160, image: "https://images.unsplash.com/photo-1594631252845-29fc4586b51c?auto=format&fit=crop&w=400&q=80" },
  { id: 'g19', name: "White Truffle Salt",    price: 190, image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=400&q=80" },
  { id: 'g20', name: "Caviar Substitute",     price: 220, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80" },
];

const GourmetPage = () => (
  <>
    <Helmet>
      <title>Gourmet Pantry | DNKA Supermarket</title>
      <meta name="description" content="Discover fine imported foods and artisanal gourmet pantry items at DNKA Supermarket." />
    </Helmet>
    <div className="post-header" style={{ backgroundImage: 'linear-gradient(rgba(8,28,21,0.8),rgba(8,28,21,0.9)),url("https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=1920&q=80")', padding: '120px 0 80px' }}>
      <div className="container">
        <h1>Gourmet Pantry</h1>
        <p style={{ marginTop: '20px', fontFamily: "'Playfair Display',serif", fontSize: '20px', opacity: 0.9 }}>Artisanal and imported fine foods for the discerning palate.</p>
      </div>
    </div>
    <section className="section bg-white" style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="sub-categories">
          <button className="category-pill active">All Gourmet</button>
          <button className="category-pill">Fine Oils</button>
          <button className="category-pill">Cheeses &amp; Charcuterie</button>
          <button className="category-pill">Condiments</button>
          <button className="category-pill">Beverages</button>
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

export default GourmetPage;
