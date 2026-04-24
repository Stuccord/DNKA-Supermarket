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
              <div style={{ backgroundColor: 'var(--white)', padding: '40px', borderRadius: '8px', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h2 style={{ fontSize: '24px', color: 'var(--primary-green)' }}>Shopping Bag (2 Items)</h2>
                </div>

                {/* Item 1 */}
                <div style={{ display: 'flex', gap: '30px', paddingBottom: '30px', marginBottom: '30px', borderBottom: '1px solid #f5f5f5' }}>
                  <div style={{ width: '140px', height: '140px', backgroundImage: 'url("https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=300&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px', border: '1px solid var(--border-color)' }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h3 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--primary-green)' }}>Premium Olive Oil</h3>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontWeight: '800', fontSize: '22px', color: 'var(--primary-orange)', fontFamily: "'Playfair Display', serif", display: 'block' }}>GH₵ 120.00</span>
                      </div>
                    </div>
                    <p style={{ color: 'var(--text-light)', fontSize: '14px', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Gourmet Pantry</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginTop: 'auto' }}>
                      <div style={{ display: 'flex', border: '1px solid var(--border-color)', borderRadius: '30px', overflow: 'hidden', background: '#fcfcfc' }}>
                        <button style={{ padding: '8px 18px', background: 'transparent', border: 'none', cursor: 'pointer', borderRight: '1px solid var(--border-color)', fontSize: '18px' }}>-</button>
                        <span style={{ padding: '8px 18px', fontWeight: 'bold', minWidth: '40px', textAlign: 'center' }}>1</span>
                        <button style={{ padding: '8px 18px', background: 'transparent', border: 'none', cursor: 'pointer', borderLeft: '1px solid var(--border-color)', fontSize: '18px' }}>+</button>
                      </div>
                      <button style={{ background: 'transparent', border: 'none', color: '#b33939', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                        <Trash2 size={16} /> Remove
                      </button>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div style={{ display: 'flex', gap: '30px', paddingBottom: '10px' }}>
                  <div style={{ width: '140px', height: '140px', backgroundImage: 'url("https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=300&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px', border: '1px solid var(--border-color)' }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h3 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--primary-green)' }}>Artisan Coffee Beans</h3>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontWeight: '800', fontSize: '22px', color: 'var(--primary-orange)', fontFamily: "'Playfair Display', serif", display: 'block' }}>GH₵ 170.00</span>
                        <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '2px' }}>GH₵ 85.00 each</p>
                      </div>
                    </div>
                    <p style={{ color: 'var(--text-light)', fontSize: '14px', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Gourmet Pantry</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                      <div style={{ display: 'flex', border: '1px solid var(--border-color)', borderRadius: '30px', overflow: 'hidden', background: '#fcfcfc' }}>
                        <button style={{ padding: '8px 18px', background: 'transparent', border: 'none', cursor: 'pointer', borderRight: '1px solid var(--border-color)', fontSize: '18px' }}>-</button>
                        <span style={{ padding: '8px 18px', fontWeight: 'bold', minWidth: '40px', textAlign: 'center' }}>2</span>
                        <button style={{ padding: '8px 18px', background: 'transparent', border: 'none', cursor: 'pointer', borderLeft: '1px solid var(--border-color)', fontSize: '18px' }}>+</button>
                      </div>
                      <button style={{ background: 'transparent', border: 'none', color: '#b33939', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                        <Trash2 size={16} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: 'var(--white)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <ShieldCheck size={24} color="var(--primary-green)" />
                  <span style={{ fontSize: '13px', fontWeight: '600' }}>Secure Checkout</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: 'var(--white)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <Truck size={24} color="var(--primary-green)" />
                  <span style={{ fontSize: '13px', fontWeight: '600' }}>Express Delivery</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: 'var(--white)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
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
