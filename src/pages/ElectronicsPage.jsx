import { Helmet } from 'react-helmet-async';
import AddToCartBtn from '../components/AddToCartBtn';

const products = [
  { id: 'e1',  name: "Smart 4K TV 55\"",        price: 4800, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=400&q=80" },
  { id: 'e2',  name: "Wireless Headphones",     price: 850,  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80" },
  { id: 'e3',  name: "Bluetooth Speaker",       price: 420,  image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&q=80" },
  { id: 'e4',  name: "Smartphone Stand",        price: 85,   image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=400&q=80" },
  { id: 'e5',  name: "USB-C Hub (7-in-1)",      price: 320,  image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=400&q=80" },
  { id: 'e6',  name: "Wireless Charger",        price: 190,  image: "https://images.unsplash.com/photo-1583394293214-0571c5b67f6f?auto=format&fit=crop&w=400&q=80" },
  { id: 'e7',  name: "Laptop Cooling Pad",      price: 210,  image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=400&q=80" },
  { id: 'e8',  name: "Power Bank 20000mAh",     price: 380,  image: "https://images.unsplash.com/photo-1583394293214-0571c5b67f6f?auto=format&fit=crop&w=400&q=80" },
  { id: 'e9',  name: "Smart Watch",             price: 1200, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80" },
  { id: 'e10', name: "Mechanical Keyboard",     price: 650,  image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=400&q=80" },
  { id: 'e11', name: "Webcam 1080p",            price: 290,  image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=400&q=80" },
  { id: 'e12', name: "Gaming Mouse",            price: 240,  image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=400&q=80" },
  { id: 'e13', name: "Ring Light (10\")",       price: 310,  image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=400&q=80" },
  { id: 'e14', name: "Smart Plug (4-Pack)",     price: 175,  image: "https://images.unsplash.com/photo-1583394293214-0571c5b67f6f?auto=format&fit=crop&w=400&q=80" },
  { id: 'e15', name: "Drone Camera",            price: 2800, image: "https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=400&q=80" },
  { id: 'e16', name: "Portable Projector",      price: 1500, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=400&q=80" },
  { id: 'e17', name: "TWS Earbuds",             price: 450,  image: "https://images.unsplash.com/photo-1605464315542-bac4f6a71f6c?auto=format&fit=crop&w=400&q=80" },
  { id: 'e18', name: "Action Camera",           price: 1800, image: "https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=400&q=80" },
  { id: 'e19', name: "Desk Lamp (USB)",         price: 130,  image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=400&q=80" },
  { id: 'e20', name: "Cable Management Kit",    price: 60,   image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=400&q=80" },
];

const ElectronicsPage = () => (
  <>
    <Helmet>
      <title>Modern Electronics | DNKA Supermarket</title>
      <meta name="description" content="Shop cutting-edge electronics and tech accessories at DNKA Supermarket." />
    </Helmet>
    <div className="post-header" style={{ backgroundImage: 'linear-gradient(rgba(8,28,21,0.8),rgba(8,28,21,0.9)),url("https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1920&q=80")', padding: '120px 0 80px' }}>
      <div className="container">
        <h1>Modern Electronics</h1>
        <p style={{ marginTop: '20px', fontFamily: "'Playfair Display',serif", fontSize: '20px', opacity: 0.9 }}>Cutting-edge tech for the modern lifestyle.</p>
      </div>
    </div>
    <section className="section bg-white" style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="sub-categories">
          <button className="category-pill active">All Electronics</button>
          <button className="category-pill">Audio</button>
          <button className="category-pill">Smart Home</button>
          <button className="category-pill">Accessories</button>
          <button className="category-pill">Cameras</button>
        </div>
        <div className="product-grid">
          {products.map(p => (
            <div className="product-card" key={p.id}>
              <div className="product-img" style={{ backgroundImage: `url("${p.image}")` }}></div>
              <h3>{p.name}</h3>
              <p className="product-price">GH₵ {p.price.toLocaleString()}</p>
              <AddToCartBtn product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ElectronicsPage;
