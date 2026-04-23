import { Helmet } from 'react-helmet-async';
import { ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: "Luxury Bath Towels", price: "GH₵ 150", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Premium Detergent", price: "GH₵ 65", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Scented Candles", price: "GH₵ 40", image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Microfiber Cloths", price: "GH₵ 25", image: "https://images.unsplash.com/photo-1585672840611-66774e50882e?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Fabric Softener", price: "GH₵ 45", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Glass Cleaner", price: "GH₵ 30", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80" },
  { id: 7, name: "Air Freshener", price: "GH₵ 35", image: "https://images.unsplash.com/photo-1528740561666-dc2479bd08bd?auto=format&fit=crop&w=400&q=80" },
  { id: 8, name: "Dishwashing Liquid", price: "GH₵ 20", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d1a?auto=format&fit=crop&w=400&q=80" },
  { id: 9, name: "Floor Cleaner", price: "GH₵ 50", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=400&q=80" },
  { id: 10, name: "Paper Towels", price: "GH₵ 40", image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=400&q=80" },
  { id: 11, name: "Trash Bags", price: "GH₵ 25", image: "https://images.unsplash.com/photo-1591193512964-4072210519de?auto=format&fit=crop&w=400&q=80" },
  { id: 12, name: "Sponges (Pack of 4)", price: "GH₵ 15", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&w=400&q=80" },
  { id: 13, name: "Bathroom Cleaner", price: "GH₵ 35", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80" },
  { id: 14, name: "Bleach", price: "GH₵ 28", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80" },
  { id: 15, name: "Laundry Baskets", price: "GH₵ 85", image: "https://images.unsplash.com/photo-1558603668-6570496b66f8?auto=format&fit=crop&w=400&q=80" },
  { id: 16, name: "Ironing Board Cover", price: "GH₵ 60", image: "https://images.unsplash.com/photo-1560614382-3334f3477ef3?auto=format&fit=crop&w=400&q=80" },
  { id: 17, name: "Hand Towels", price: "GH₵ 45", image: "https://images.unsplash.com/photo-1604176354204-926873ff3da9?auto=format&fit=crop&w=400&q=80" },
  { id: 18, name: "Decorative Pillows", price: "GH₵ 110", image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=400&q=80" },
  { id: 19, name: "Vase", price: "GH₵ 130", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=400&q=80" },
  { id: 20, name: "Picture Frames", price: "GH₵ 75", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=400&q=80" },
];

const HouseholdPage = () => {
  return (
    <>
      <Helmet>
        <title>Household Essentials | DNKA Supermarket</title>
        <meta name="description" content="Shop refined cleaning and decor items to elevate your living space at DNKA Supermarket." />
      </Helmet>

      <div className="post-header" style={{ backgroundImage: 'linear-gradient(rgba(8, 28, 21, 0.8), rgba(8, 28, 21, 0.9)), url("https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1920&q=80")', padding: '120px 0 80px' }}>
        <div className="container">
          <h1>Household Essentials</h1>
          <p style={{ marginTop: '20px', fontFamily: "'Playfair Display', serif", fontSize: '20px', opacity: 0.9 }}>Refined cleaning and decor items to elevate your living space.</p>
        </div>
      </div>

      <section className="section bg-white" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="sub-categories">
            <button className="category-pill active">All Household</button>
            <button className="category-pill">Cleaning Supplies</button>
            <button className="category-pill">Towels & Linens</button>
            <button className="category-pill">Home Decor</button>
            <button className="category-pill">Laundry</button>
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

export default HouseholdPage;
