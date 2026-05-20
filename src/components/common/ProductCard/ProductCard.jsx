import { motion } from "framer-motion";
import { Heart, ShoppingCart, Eye, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext.jsx";
import { useWishlist } from "../../../context/WishlistContext.jsx";
import { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [showQuickView, setShowQuickView] = useState(false);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    });
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        category: product.category,
      });
    }
  };

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    const whatsappNumber = "+919136863189"; // Replace with your WhatsApp number
    const message = `Hi! I'm interested in ordering: ${product.name}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="product-card-wrapper"
    >
      <Link to={`/product/${product.id}`}>
        <div className="product-card">
          <div className="product-card-image-container">
            <img
              src={product.images[0]}
              alt={product.name}
              className="product-card-image"
            />

            <div className="product-card-badges">
              {product.bestseller && (
                <span className="product-badge product-badge-bestseller">
                  Bestseller
                </span>
              )}
              {product.featured && (
                <span className="product-badge product-badge-featured">
                  Featured
                </span>
              )}
              {/* {!product.inStock && (
                <span className="product-badge product-badge-sold-out">
                  Sold Out
                </span>
              )} */}
            </div>

            <div className="product-card-hover-actions">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleToggleWishlist}
                className={`product-action-btn ${inWishlist ? "product-action-btn-wishlist-active" : ""}`}
              >
                <Heart
                  className={`product-action-icon ${inWishlist ? "icon-filled" : ""}`}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="product-action-btn"
              >
                <ShoppingCart className="product-action-icon" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="product-action-btn"
              >
                <Eye className="product-action-icon" />
              </motion.button>
            </div>
          </div>

          <div className="product-card-content">
            <div className="product-card-header">
              <div className="product-card-info">
                <p className="product-category">{product.category}</p>
                <h3 className="product-title">{product.name}</h3>
              </div>
            </div>

            <div className="product-rating">
              <div className="product-stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`product-star ${i < Math.floor(product.rating) ? "product-star-filled" : "product-star-empty"}`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="product-reviews">({product.reviews})</span>
            </div>

            <button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsAppOrder}
              className="product-whatsapp-btn"
            >
              Order Now
            </button>

            <div className="product-footer">
              {/* <p className="product-price">${product.price}</p> */}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
