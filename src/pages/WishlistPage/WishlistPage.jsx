import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, X } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import Button from "../../components/common/Button/Button";
import "./WishlistPage.css";

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    });
    removeFromWishlist(item.id);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="wishlist-empty">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="wishlist-empty-content"
        >
          <div className="wishlist-empty-icon">
            <Heart className="wishlist-heart-icon" />
          </div>
          <h2 className="wishlist-empty-title">Your Wishlist is Empty</h2>
          <p className="wishlist-empty-text">
            Save your favorite items here so you can easily find them later!
          </p>
          <Link to="/shop">
            <Button>Start Shopping</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      {/* Header */}
      <section className="wishlist-hero">
        <div className="wishlist-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="wishlist-hero-text"
          >
            <h1 className="wishlist-title">My Wishlist</h1>
            <p className="wishlist-subtitle">
              {wishlistItems.length}{" "}
              {wishlistItems.length === 1 ? "item" : "items"} saved
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wishlist Items */}
      <section className="wishlist-section">
        <div className="wishlist-content">
          <div className="wishlist-grid">
            {wishlistItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="wishlist-card"
              >
                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="wishlist-remove-btn"
                >
                  <X className="wishlist-remove-icon" />
                </button>

                {/* Image */}
                <Link
                  to={`/product/${item.id}`}
                  className="wishlist-image-link"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="wishlist-image"
                  />
                </Link>

                {/* Details */}
                <div className="wishlist-details">
                  <p className="wishlist-category">{item.category}</p>
                  <Link
                    to={`/product/${item.id}`}
                    className="wishlist-product-name"
                  >
                    {item.name}
                  </Link>
                  <p className="wishlist-price">${item.price}</p>
                </div>

                {/* Actions */}
                <div className="wishlist-actions">
                  <Button
                    onClick={() => handleMoveToCart(item)}
                    fullWidth
                    icon={<ShoppingCart className="wishlist-action-icon" />}
                  >
                    Add to Cart
                  </Button>
                  <Link
                    to={`/product/${item.id}`}
                    className="wishlist-view-link"
                  >
                    <Button variant="outline" fullWidth>
                      View Details
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Continue Shopping */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="wishlist-continue"
          >
            <Link to="/shop">
              <Button size="lg">Continue Shopping</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Share Wishlist CTA */}
      <section className="wishlist-share-section">
        <div className="wishlist-share-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="wishlist-share-card"
          >
            <div className="wishlist-share-icon">
              <Heart className="wishlist-share-heart" />
            </div>
            <h2 className="wishlist-share-title">Love These Items?</h2>
            <p className="wishlist-share-text">
              Share your wishlist with friends and family, or treat yourself to
              these beautiful handcrafted pieces!
            </p>
            <div className="wishlist-share-actions">
              <Button>Share Wishlist</Button>
              <Link to="/shop">
                <Button variant="outline">Browse More</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WishlistPage;
