import { Helmet } from 'react-helmet-async';
import { ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: "Imported Chocolates", price: "GH₵ 85", image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Artisan Coffee Beans", price: "GH₵ 110", image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Organic Honey", price: "GH₵ 65", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Fine Red Wine", price: "GH₵ 250", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Truffle Oil", price: "GH₵ 180", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Balsamic Vinegar", price: "GH₵ 120", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80" },
  { id: 7, name: "Aged Cheddar", price: "GH₵ 95", image: "https://images.unsplash.com/photo-1485962391905-dc37bb36001a?auto=format&fit=crop&w=400&q=80" },
  { id: 8, name: "Prosciutto", price: "GH₵ 150", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=400&q=80" },
  { id: 9, name: "Kalamata Olives", price: "GH₵ 55", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80" },
  { id: 10, name: "Saffron Threads", price: "GH₵ 320", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=400&q=80" },
  { id: 11, name: "Vanilla Beans", price: "GH₵ 140", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=400&q=80" },
  { id: 12, name: "Pesto Sauce", price: "GH₵ 65", image: "https://images.unsplash.com/photo-1594315513237-ef831518f972?auto=format&fit=crop&w=400&q=80" },
  { id: 13, name: "Macadamia Nuts", price: "GH₵ 110", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80" },
  { id: 14, name: "Maple Syrup", price: "GH₵ 130", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80" },
  { id: 15, name: "Gourmet Pasta", price: "GH₵ 45", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=400&q=80" },
  { id: 16, name: "Artisanal Jam", price: "GH₵ 55", image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=400&q=80" },
  { id: 17, name: "Sea Salt Flakes", price: "GH₵ 40", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80" },
  { id: 18, name: "Green Tea Matcha", price: "GH₵ 160", image: "https://images.unsplash.com/photo-1594631252845-29fc4586b51c?auto=format&fit=crop&w=400&q=80" },
  { id: 19, name: "White Truffle Salt", price: "GH₵ 190", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=400&q=80" },
  { id: 20, name: "Caviar Substitute", price: "GH₵ 220", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80" },
];

const GourmetPage = () => {
  return (
    <>
      <Helmet>
        <title>Gourmet Pantry | DNKA Supermarket</title>
        <meta name="description" content="Shop imported delicacies, fine wines, and artisanal baking supplies at DNKA Supermarket." />
      </Helmet>

      <div className="post-header" style={{ backgroundImage: 'linear-gradient(rgba(8, 28, 21, 0.8), rgba(8, 28, 21, 0.9)), url("https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1920&q=80")', padding: '120px 0 80px' }}>
        <div className="container">
          <h1>Gourmet Pantry</h1>
          <p style={{ marginTop: '20px', fontFamily: "'Playfair Display', serif", fontSize: '20px', opacity: 0.9 }}>Imported delicacies, fine wines, and artisanal baking supplies.</p>
        </div>
      </div>

      <section className="section bg-white" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="sub-categories">
            <button className="category-pill active">All Gourmet</button>
            <button className="category-pill">Fine Wines</button>
            <button className="category-pill">Imported Chocolates</button>
            <button className="category-pill">Artisanal Coffees</button>
            <button className="category-pill">Specialty Ingredients</button>
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

export default GourmetPage;
