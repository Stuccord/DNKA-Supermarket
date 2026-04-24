import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const AddToCartBtn = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      className={`btn ${added ? 'btn-secondary' : 'btn-primary'}`}
      style={{
        padding: '10px 20px', fontSize: '12px', width: '100%',
        marginTop: '10px', display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: '6px', transition: 'all 0.3s ease'
      }}
      onClick={handleAdd}
    >
      {added
        ? <><Check size={14} /> Added!</>
        : <><ShoppingCart size={14} /> Add to Cart</>
      }
    </button>
  );
};

export default AddToCartBtn;
