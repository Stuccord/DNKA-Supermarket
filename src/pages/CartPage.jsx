import { Helmet } from 'react-helmet-async';
import { Trash2, ArrowRight, ShieldCheck, Truck, RefreshCw, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const vat = cartTotal * 0.15;
  const grandTotal = cartTotal + vat;

  return (
    <>
      <Helmet>
        <title>Your Selection | DNKA Supermarket</title>
        <meta name="description" content="View your selected items and checkout securely at DNKA Supermarket." />
      </Helmet>

      <div className="post-header" style={{ padding: '120px 0 60px', marginBottom: '0' }}>
        <div className="container">
          <h1 style={{ fontSize: '56px' }}>Your Selection</h1>
          <p style={{ marginTop: '15px', fontSize: '20px', fontFamily: "'Playfair Display', serif", opacity: 0.9 }}>
            Review your items before we finalize your premium order.
          </p>
        </div>
      </div>

      <section className="section bg-light" style={{ paddingTop: '60px' }}>
        <div className="container">
          {cartItems.length === 0 ? (
            /* Empty state */
            <div style={{ textAlign: 'center', padding: '80px 20px' }}>
              <ShoppingBag size={72} color="var(--border-color)" style={{ marginBottom: '24px' }} />
              <h2 style={{ fontSize: '28px', marginBottom: '12px' }}>Your bag is empty</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '18px', marginBottom: '32px' }}>
                Explore our curated directories and add your first item.
              </p>
              <Link to="/" className="btn btn-primary" style={{ padding: '16px 40px' }}>
                Browse the Store
              </Link>
            </div>
          ) : (
            <div className="blog-layout" style={{ gap: '40px' }}>

              {/* Cart Items */}
              <div className="blog-main">
                <div className="cart-container">
                  <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '10px' }}>
                    <h2 style={{ fontSize: '22px', color: 'var(--primary-green)' }}>
                      Shopping Bag ({cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'})
                    </h2>
                  </div>

                  {cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                      <div className="cart-item-img" style={{ backgroundImage: `url("${item.image}")` }}></div>
                      <div className="cart-item-info">
                        <div className="cart-item-header">
                          <h3>{item.name}</h3>
                          <div className="cart-item-price">GH₵ {(item.price * item.quantity).toLocaleString()}</div>
                        </div>
                        <p className="cart-item-meta">GH₵ {item.price} each</p>
                        <div className="cart-item-actions">
                          <div className="quantity-selector">
                            <button className="quantity-btn" onClick={() => updateQuantity(item.id, -1)}>−</button>
                            <span className="quantity-value">{item.quantity}</span>
                            <button className="quantity-btn" onClick={() => updateQuantity(item.id, +1)}>+</button>
                          </div>
                          <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                            <Trash2 size={15} /> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Guarantees */}
                <div className="guarantee-grid">
                  <div className="guarantee-item"><ShieldCheck size={24} color="var(--primary-green)" /><span style={{ fontSize: '13px', fontWeight: '600' }}>Secure Checkout</span></div>
                  <div className="guarantee-item"><Truck size={24} color="var(--primary-green)" /><span style={{ fontSize: '13px', fontWeight: '600' }}>Express Delivery</span></div>
                  <div className="guarantee-item"><RefreshCw size={24} color="var(--primary-green)" /><span style={{ fontSize: '13px', fontWeight: '600' }}>Easy Returns</span></div>
                </div>
              </div>

              {/* Order Summary */}
              <aside className="blog-sidebar" style={{ width: '100%', maxWidth: '100%' }}>
                <div style={{ backgroundColor: 'var(--white)', padding: '40px', borderRadius: '8px', border: '1px solid var(--border-color)', boxShadow: '0 15px 35px rgba(0,0,0,0.08)', position: 'sticky', top: '120px' }}>
                  <h2 style={{ fontSize: '22px', color: 'var(--primary-green)', borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '25px' }}>Order Summary</h2>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', fontSize: '16px' }}>
                    <span style={{ color: 'var(--text-light)' }}>Subtotal</span>
                    <span style={{ fontWeight: '700' }}>GH₵ {cartTotal.toLocaleString()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', fontSize: '16px' }}>
                    <span style={{ color: 'var(--text-light)' }}>VAT (15%)</span>
                    <span style={{ fontWeight: '700' }}>GH₵ {vat.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px', borderBottom: '1px solid var(--border-color)', paddingBottom: '25px', fontSize: '16px' }}>
                    <span style={{ color: 'var(--text-light)' }}>Shipping</span>
                    <span style={{ fontWeight: '700', color: 'var(--primary-green)' }}>Complimentary</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '35px' }}>
                    <span style={{ fontWeight: '700', fontSize: '20px' }}>Total</span>
                    <span style={{ fontWeight: '700', fontSize: '28px', color: 'var(--primary-orange)', fontFamily: "'Playfair Display', serif" }}>
                      GH₵ {grandTotal.toFixed(2)}
                    </span>
                  </div>

                  <div style={{ marginBottom: '25px' }}>
                    <input type="text" placeholder="Promo Code" style={{ width: '100%', padding: '12px 15px', border: '1px solid var(--border-color)', borderRadius: '4px', outline: 'none', fontSize: '14px', marginBottom: '10px', boxSizing: 'border-box' }} />
                    <button className="btn btn-outline" style={{ width: '100%', padding: '10px', fontSize: '12px', borderColor: 'var(--border-color)', color: 'var(--text-dark)' }}>Apply Code</button>
                  </div>

                  <button className="btn btn-primary" style={{ width: '100%', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', fontSize: '16px' }}
                    onClick={() => alert('Checkout coming soon! Call us on 059 908 7140 to place your order.')}>
                    Proceed to Checkout <ArrowRight size={20} />
                  </button>

                  <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/" style={{ color: 'var(--text-light)', fontSize: '14px', borderBottom: '1px solid var(--text-light)', paddingBottom: '2px', fontWeight: '600' }}>
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CartPage;
