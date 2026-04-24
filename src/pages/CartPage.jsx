import { Helmet } from 'react-helmet-async';
import { ShoppingCart, Trash2, ArrowRight, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <>
      <Helmet>
        <title>Your Selection | DNKA Supermarket</title>
        <meta name="description" content="View your selected items and checkout securely at DNKA Supermarket." />
      </Helmet>

      <div className="post-header" style={{ padding: '120px 0 60px', marginBottom: '0' }}>
        <div className="container">
          <h1 style={{ fontSize: '56px' }}>Your Selection</h1>
          <p style={{ marginTop: '15px', fontSize: '20px', fontFamily: "'Playfair Display', serif", opacity: 0.9 }}>Review your items before we finalize your premium order.</p>
        </div>
      </div>

      <section className="section bg-light" style={{paddingTop: '60px'}}>
        <div className="container">
          <div className="blog-layout" style={{ gap: '40px' }}>
            
            {/* Cart Items */}
            <div className="blog-main">
              <div className="cart-container">
                <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h2 style={{ fontSize: '24px', color: 'var(--primary-green)' }}>Shopping Bag (2 Items)</h2>
                </div>

                {/* Item 1 */}
                <div className="cart-item">
                  <div className="cart-item-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=300&q=80")' }}></div>
                  <div className="cart-item-info">
                    <div className="cart-item-header">
                      <h3>Premium Olive Oil</h3>
                      <div className="cart-item-price">GH₵ 120.00</div>
                    </div>
                    <p className="cart-item-meta">Gourmet Pantry</p>
                    <div className="cart-item-actions">
                      <div className="quantity-selector">
                        <button className="quantity-btn">-</button>
                        <span className="quantity-value">1</span>
                        <button className="quantity-btn">+</button>
                      </div>
                      <button className="remove-btn">
                        <Trash2 size={16} /> Remove
                      </button>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="cart-item">
                  <div className="cart-item-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=300&q=80")' }}></div>
                  <div className="cart-item-info">
                    <div className="cart-item-header">
                      <h3>Artisan Coffee Beans</h3>
                      <div style={{ textAlign: 'right' }}>
                        <div className="cart-item-price">GH₵ 170.00</div>
                        <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '2px' }}>GH₵ 85.00 each</p>
                      </div>
                    </div>
                    <p className="cart-item-meta">Gourmet Pantry</p>
                    <div className="cart-item-actions">
                      <div className="quantity-selector">
                        <button className="quantity-btn">-</button>
                        <span className="quantity-value">2</span>
                        <button className="quantity-btn">+</button>
                      </div>
                      <button className="remove-btn">
                        <Trash2 size={16} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              {/* Guarantees */}
              <div className="guarantee-grid">
                <div className="guarantee-item">
                  <ShieldCheck size={24} color="var(--primary-green)" />
                  <span style={{ fontSize: '13px', fontWeight: '600' }}>Secure Checkout</span>
                </div>
                <div className="guarantee-item">
                  <Truck size={24} color="var(--primary-green)" />
                  <span style={{ fontSize: '13px', fontWeight: '600' }}>Express Delivery</span>
                </div>
                <div className="guarantee-item">
                  <RefreshCw size={24} color="var(--primary-green)" />
                  <span style={{ fontSize: '13px', fontWeight: '600' }}>Easy Returns</span>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <aside className="blog-sidebar" style={{ width: '100%', maxWidth: '100%' }}>
              <div style={{ backgroundColor: 'var(--white)', padding: '40px', borderRadius: '8px', border: '1px solid var(--border-color)', boxShadow: '0 15px 35px rgba(0,0,0,0.08)', position: 'sticky', top: '120px' }}>
                <h2 style={{ fontSize: '24px', color: 'var(--primary-green)', borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '25px' }}>Order Summary</h2>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px', fontSize: '16px' }}>
                  <span style={{ color: 'var(--text-light)' }}>Subtotal</span>
                  <span style={{ fontWeight: '700' }}>GH₵ 290.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px', fontSize: '16px' }}>
                  <span style={{ color: 'var(--text-light)' }}>VAT (15%)</span>
                  <span style={{ fontWeight: '700' }}>GH₵ 43.50</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px', borderBottom: '1px solid var(--border-color)', paddingBottom: '25px', fontSize: '16px' }}>
                  <span style={{ color: 'var(--text-light)' }}>Shipping</span>
                  <span style={{ fontWeight: '700', color: 'var(--primary-green)' }}>Complimentary</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '35px' }}>
                  <span style={{ fontWeight: '700', fontSize: '20px' }}>Total</span>
                  <span style={{ fontWeight: '700', fontSize: '28px', color: 'var(--primary-orange)', fontFamily: "'Playfair Display', serif" }}>GH₵ 333.50</span>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <input type="text" placeholder="Promo Code" style={{ width: '100%', padding: '12px 15px', border: '1px solid var(--border-color)', borderRadius: '4px', outline: 'none', fontSize: '14px', marginBottom: '10px' }} />
                  <button className="btn btn-outline" style={{ width: '100%', padding: '10px', fontSize: '12px', borderColor: 'var(--border-color)', color: 'var(--text-dark)' }}>Apply Code</button>
                </div>

                <button className="btn btn-primary" style={{ width: '100%', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', fontSize: '16px', borderRadius: '4px' }}>
                  Proceed to Checkout <ArrowRight size={20} />
                </button>
                
                <div style={{ textAlign: 'center', marginTop: '25px' }}>
                  <Link to="/" style={{ color: 'var(--text-light)', fontSize: '14px', textDecoration: 'none', borderBottom: '1px solid var(--text-light)', paddingBottom: '2px', fontWeight: '600' }}>Continue Shopping</Link>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'center' }}>You May Also Like</h2>
          <div className="product-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '30px' }}>
             <div className="product-card">
              <div className="product-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1594315513237-ef831518f972?auto=format&fit=crop&w=400&q=80")', height: '180px' }}></div>
              <h3 style={{fontSize: '18px'}}>Pesto Sauce</h3>
              <p className="product-price" style={{fontSize: '18px'}}>GH₵ 65.00</p>
              <button className="btn btn-primary" style={{ padding: '8px 15px', fontSize: '11px', width: '100%', marginTop: '5px' }}>Add to Bag</button>
            </div>
            <div className="product-card">
              <div className="product-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=400&q=80")', height: '180px' }}></div>
              <h3 style={{fontSize: '18px'}}>Imported Chocolates</h3>
              <p className="product-price" style={{fontSize: '18px'}}>GH₵ 85.00</p>
              <button className="btn btn-primary" style={{ padding: '8px 15px', fontSize: '11px', width: '100%', marginTop: '5px' }}>Add to Bag</button>
            </div>
            <div className="product-card">
              <div className="product-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=400&q=80")', height: '180px' }}></div>
              <h3 style={{fontSize: '18px'}}>French Macarons</h3>
              <p className="product-price" style={{fontSize: '18px'}}>GH₵ 55.00</p>
              <button className="btn btn-primary" style={{ padding: '8px 15px', fontSize: '11px', width: '100%', marginTop: '5px' }}>Add to Bag</button>
            </div>
            <div className="product-card">
              <div className="product-img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80")', height: '180px' }}></div>
              <h3 style={{fontSize: '18px'}}>Cabernet Sauvignon</h3>
              <p className="product-price" style={{fontSize: '18px'}}>GH₵ 250.00</p>
              <button className="btn btn-primary" style={{ padding: '8px 15px', fontSize: '11px', width: '100%', marginTop: '5px' }}>Add to Bag</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
