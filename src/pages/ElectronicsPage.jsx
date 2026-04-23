import { Helmet } from 'react-helmet-async';
import { ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: "Premium Blender", price: "GH₵ 350", image: "https://images.unsplash.com/photo-1570275954041-137a23cc93d2?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Smart Toaster", price: "GH₵ 220", image: "https://images.unsplash.com/photo-1583573636246-18cb2246697f?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Electric Kettle", price: "GH₵ 150", image: "https://images.unsplash.com/photo-1594212699903-ec8a3ecc50f1?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Espresso Machine", price: "GH₵ 1200", image: "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Microwave Oven", price: "GH₵ 850", image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Food Processor", price: "GH₵ 420", image: "https://images.unsplash.com/photo-1594315513237-ef831518f972?auto=format&fit=crop&w=400&q=80" },
  { id: 7, name: "Rice Cooker", price: "GH₵ 280", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80" },
  { id: 8, name: "Air Fryer", price: "GH₵ 650", image: "https://images.unsplash.com/photo-1571175432244-93ad294f98a6?auto=format&fit=crop&w=400&q=80" },
  { id: 9, name: "Stand Mixer", price: "GH₵ 950", image: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=400&q=80" },
  { id: 10, name: "Hand Blender", price: "GH₵ 180", image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=400&q=80" },
  { id: 11, name: "Juicer Extractor", price: "GH₵ 380", image: "https://images.unsplash.com/photo-1590845947376-2638caa89309?auto=format&fit=crop&w=400&q=80" },
  { id: 12, name: "Waffle Maker", price: "GH₵ 210", image: "https://images.unsplash.com/photo-1581622558667-3419a8dc5f83?auto=format&fit=crop&w=400&q=80" },
  { id: 13, name: "Electric Grill", price: "GH₵ 480", image: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=400&q=80" },
  { id: 14, name: "Slow Cooker", price: "GH₵ 320", image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=400&q=80" },
  { id: 15, name: "Bread Maker", price: "GH₵ 550", image: "https://images.unsplash.com/photo-1590845947376-2638caa89309?auto=format&fit=crop&w=400&q=80" },
  { id: 16, name: "Ice Cream Maker", price: "GH₵ 420", image: "https://images.unsplash.com/photo-1581622558667-3419a8dc5f83?auto=format&fit=crop&w=400&q=80" },
  { id: 17, name: "Vacuum Sealer", price: "GH₵ 260", image: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=400&q=80" },
  { id: 18, name: "Electric Can Opener", price: "GH₵ 90", image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=400&q=80" },
  { id: 19, name: "Meat Grinder", price: "GH₵ 380", image: "https://images.unsplash.com/photo-1590845947376-2638caa89309?auto=format&fit=crop&w=400&q=80" },
  { id: 20, name: "Popcorn Maker", price: "GH₵ 150", image: "https://images.unsplash.com/photo-1581622558667-3419a8dc5f83?auto=format&fit=crop&w=400&q=80" },
];

const ElectronicsPage = () => {
  return (
    <>
      <Helmet>
        <title>Modern Electronics | DNKA Supermarket</title>
        <meta name="description" content="Shop reliable home appliances blending classic design with modern utility at DNKA Supermarket." />
      </Helmet>

      <div className="post-header" style={{ backgroundImage: 'linear-gradient(rgba(8, 28, 21, 0.8), rgba(8, 28, 21, 0.9)), url("https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1920&q=80")', padding: '120px 0 80px' }}>
        <div className="container">
          <h1>Modern Electronics</h1>
          <p style={{ marginTop: '20px', fontFamily: "'Playfair Display', serif", fontSize: '20px', opacity: 0.9 }}>Reliable home appliances blending classic design with modern utility.</p>
        </div>
      </div>

      <section className="section bg-white" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="sub-categories">
            <button className="category-pill active">All Electronics</button>
            <button className="category-pill">Kitchen Appliances</button>
            <button className="category-pill">Home Appliances</button>
            <button className="category-pill">Entertainment</button>
            <button className="category-pill">Accessories</button>
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

export default ElectronicsPage;
