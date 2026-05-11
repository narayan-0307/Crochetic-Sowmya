import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag, Truck } from "lucide-react";
import { useCart } from "../../context/CartContext.jsx";
import Button from "../../components/common/Button/Button.jsx";
import "./CartPage.css";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } =
    useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="cart-page-empty">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="cart-empty-content"
        >
          <div className="cart-empty-icon">
            <ShoppingBag className="cart-empty-icon-svg" />
          </div>
          <h2 className="cart-empty-title">Your Cart is Empty</h2>
          <p className="cart-empty-text">
            Looks like you haven't added anything to your cart yet. Start
            shopping to find beautiful handcrafted pieces!
          </p>
          <Link to="/shop">
            <Button>Start Shopping</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      {/* Header */}
      <section className="cart-header">
        <div className="cart-header-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="cart-header-content"
          >
            <h1 className="cart-header-title">Shopping Cart</h1>
            <p className="cart-header-subtitle">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
              your cart
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="cart-content">
        <div className="cart-container">
          <div className="cart-grid">
            {/* Cart Items */}
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <motion.div
                  key={`${item.id}-${item.color}-${item.size}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="cart-item"
                >
                  {/* Image */}
                  <Link
                    to={`/product/${item.id}`}
                    className="cart-item-image-link"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                  </Link>

                  {/* Details */}
                  <div className="cart-item-details">
                    <div className="cart-item-header">
                      <Link
                        to={`/product/${item.id}`}
                        className="cart-item-name"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="cart-item-remove"
                      >
                        <X className="cart-item-remove-icon" />
                      </button>
                    </div>

                    {/* Options */}
                    <div className="cart-item-options">
                      {item.color && (
                        <span className="cart-item-option">
                          Color: {item.color}
                        </span>
                      )}
                      {item.size && (
                        <span className="cart-item-option">
                          Size: {item.size}
                        </span>
                      )}
                    </div>

                    {/* Price and Quantity */}
                    <div className="cart-item-footer">
                      <p className="cart-item-price">${item.price}</p>

                      {/* Quantity Controls */}
                      <div className="cart-item-quantity">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1),
                            )
                          }
                          className="cart-item-quantity-btn"
                        >
                          <Minus className="cart-item-quantity-icon" />
                        </button>
                        <span className="cart-item-quantity-value">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="cart-item-quantity-btn"
                        >
                          <Plus className="cart-item-quantity-icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Clear Cart */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="cart-clear-wrapper"
              >
                <button onClick={clearCart} className="cart-clear-btn">
                  Clear Cart
                </button>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="cart-summary-wrapper">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="cart-summary"
              >
                <h2 className="cart-summary-title">Order Summary</h2>

                <div className="cart-summary-details">
                  <div className="cart-summary-row">
                    <span>Subtotal</span>
                    <span className="cart-summary-value">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="cart-summary-row">
                    <span>Shipping</span>
                    <span className="cart-summary-value">
                      {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {subtotal < 100 && (
                    <div className="cart-shipping-notice">
                      <Truck className="cart-shipping-icon" />
                      <p className="cart-shipping-text">
                        Add ${(100 - subtotal).toFixed(2)} more for free
                        shipping!
                      </p>
                    </div>
                  )}
                  <div className="cart-summary-total">
                    <div className="cart-summary-total-row">
                      <span className="cart-summary-total-label">Total</span>
                      <span className="cart-summary-total-value">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <Button fullWidth size="lg" className="cart-checkout-btn">
                  Proceed to Checkout
                </Button>

                <Link to="/shop">
                  <Button
                    variant="outline"
                    fullWidth
                    className="cart-continue-btn"
                  >
                    Continue Shopping
                  </Button>
                </Link>

                {/* Trust Badges */}
                <div className="cart-trust-badges">
                  <div className="cart-trust-badge">
                    <div className="cart-trust-icon">✓</div>
                    <span>Secure checkout</span>
                  </div>
                  <div className="cart-trust-badge">
                    <div className="cart-trust-icon">✓</div>
                    <span>Free returns within 30 days</span>
                  </div>
                  <div className="cart-trust-badge">
                    <div className="cart-trust-icon">✓</div>
                    <span>Handmade with love</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
