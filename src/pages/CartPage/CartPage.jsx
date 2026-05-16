import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "../../context/CartContext.jsx";
import Button from "../../components/common/Button/Button.jsx";
import "./CartPage.css";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  // WhatsApp configuration
  const WHATSAPP_NUMBER = "1234567890"; // Replace with your WhatsApp number

  const handleWhatsAppContact = () => {
    const itemsList = cartItems
      .map((item) => `• ${item.name} (Qty: ${item.quantity})`)
      .join("%0A");
    const message = `Hi! I'm interested in the following items:%0A%0A${itemsList}%0A%0APlease provide pricing and availability details.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

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
                      {item.size && (
                        <span className="cart-item-option">
                          Size: {item.size}
                        </span>
                      )}
                    </div>

                    {/* Quantity Controls */}
                    <div className="cart-item-footer">
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

            {/* WhatsApp Contact Summary */}
            <div className="cart-summary-wrapper">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="cart-summary"
              >
                <div className="cart-whatsapp-icon-wrapper">
                  <MessageCircle className="cart-whatsapp-icon" />
                </div>

                <h2 className="cart-summary-title">Complete Your Order</h2>
                <p className="cart-summary-subtitle">
                  Contact us on WhatsApp to get pricing details and complete
                  your order
                </p>

                <div className="cart-summary-items-count">
                  <span className="cart-items-count-label">
                    Items Selected:
                  </span>
                  <span className="cart-items-count-value">
                    {cartItems.length}
                  </span>
                </div>

                <Button
                  fullWidth
                  size="lg"
                  className="cart-whatsapp-btn"
                  onClick={handleWhatsAppContact}
                >
                  <MessageCircle className="cart-whatsapp-btn-icon" />
                  Contact on WhatsApp
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
                    <span>Quick response guaranteed</span>
                  </div>
                  <div className="cart-trust-badge">
                    <div className="cart-trust-icon">✓</div>
                    <span>Custom pricing available</span>
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
