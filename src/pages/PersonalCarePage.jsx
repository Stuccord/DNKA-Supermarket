import { Helmet } from 'react-helmet-async';
import AddToCartBtn from '../components/AddToCartBtn';

const products = [
  { id: 'pc1',  name: "Luxury Face Cream",       price: 180, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80" },
  { id: 'pc2',  name: "Organic Shampoo",         price: 75,  image: "https://images.unsplash.com/photo-1585670084831-72d1f4a2e342?auto=format&fit=crop&w=400&q=80" },
  { id: 'pc3',  name: "Vitamin C Serum",         price: 250, image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=400&q=80" },
  { id: 'pc4',  name: "Natural Deodorant",       price: 55,  image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80" },
  { id: 'pc5',  name: "Electric Toothbrush",     price: 320, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
  { id: 'pc6',  name: "Body Scrub",              price: 90,  image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80" },
  { id: 'pc7',  name: "Hair Conditioner",        price: 60,  image: "https://images.unsplash.com/photo-1585670084831-72d1f4a2e342?auto=format&fit=crop&w=400&q=80" },
  { id: 'pc8',  name: "Cologne (100ml)",         price: 450, image: "https://images.unsplash.com/photo-1585478259715-876579d13367?auto=format&fit=crop&w=400&q=80" },
  { id: 'pc9',  name: "Lip Balm Set",            price: 35,  image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=400&q=80" },
  { id: 'pc10', name: "Sunscreen SPF 50",        price: 120, image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80" },
  { id: 'pc11', name: "Facial Cleanser",         price: 85,  image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80" },
  { id: 'pc12', name: "Cotton Buds (200pcs)",    price: 20,  image: "https://images.unsplash.com/photo-1585478259715-876579d13367?auto=format&fit=crop&w=400&q=80" },
  { id: 'pc13', name: "Foot Cream",              price: 70,  image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80" },
  { id: 'pc14', name: "Shower Gel Bundle",       price: 95,  image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80" },
  { id: 'pc15', name: "Hair Styling Wax",        price: 65,  image: "https://images.unsplash.com/photo-1585670084831-72d1f4a2e342?auto=format&fit=crop&w=400&q=80" },
  { id: 'pc16', name: "Razor Set (5pcs)",        price: 45,  image: "https://images.unsplash.com/photo-1585478259715-876579d13367?auto=format&fit=crop&w=400&q=80" },
  { id: 'pc17', name: "Moisturiser SPF 30",      price: 140, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80" },
  { id: 'pc18', name: "Mouthwash (500ml)",       price: 40,  image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
  { id: 'pc19', name: "Eye Cream",               price: 200, image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=400&q=80" },
  { id: 'pc20', name: "Body Lotion (500ml)",     price: 80,  image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80" },
];

const PersonalCarePage = () => (
  <>
    <Helmet>
      <title>Personal Care | DNKA Supermarket</title>
      <meta name="description" content="Premium personal care products at DNKA Supermarket." />
    </Helmet>
    <div className="post-header" style={{ backgroundImage: 'linear-gradient(rgba(8,28,21,0.8),rgba(8,28,21,0.9)),url("https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1920&q=80")', padding: '120px 0 80px' }}>
      <div className="container">
        <h1>Personal Care</h1>
        <p style={{ marginTop: '20px', fontFamily: "'Playfair Display',serif", fontSize: '20px', opacity: 0.9 }}>Premium grooming and beauty essentials curated for you.</p>
      </div>
    </div>
    <section className="section bg-white" style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="sub-categories">
          <button className="category-pill active">All Care</button>
          <button className="category-pill">Skin Care</button>
          <button className="category-pill">Hair Care</button>
          <button className="category-pill">Grooming</button>
          <button className="category-pill">Fragrance</button>
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

export default PersonalCarePage;
