import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Heart,
  Minus,
  Plus,
  Truck,
  Shield,
  RotateCcw,
  Star,
} from "lucide-react";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import ProductCard from "../../components/common/ProductCard/ProductCard";
import Button from "../../components/common/Button/Button";
import "./ProductDetailsPage.css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id || "0"));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || "",
  );
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");

  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  if (!product) {
    return (
      <div className="productdetails-not-found">
        <div className="productdetails-not-found-content">
          <h2 className="productdetails-not-found-title">Product Not Found</h2>
          <Link to="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      color: selectedColor,
      size: selectedSize,
    });
  };

  const handleAddToWishlist = () => {
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: product.category,
    });
  };

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $100",
    },
    {
      icon: RotateCcw,
      title: "30-Day Returns",
      description: "Easy returns policy",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Premium craftsmanship",
    },
  ];

  return (
    <div className="productdetails-container">
      {/* Product Section */}
      <section className="productdetails-section">
        <div className="productdetails-content">
          <div className="productdetails-grid">
            {/* Left - Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="productdetails-images"
            >
              {/* Main Image */}
              <div className="productdetails-main-image">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="productdetails-image"
                />
                {!product.inStock && (
                  <div className="productdetails-out-of-stock">
                    <p className="productdetails-out-of-stock-text">
                      Out of Stock
                    </p>
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              <div className="productdetails-thumbnails">
                {product.images.map((image, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(index)}
                    className={`productdetails-thumbnail ${
                      selectedImage === index
                        ? "productdetails-thumbnail-active"
                        : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="productdetails-thumbnail-image"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Right - Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="productdetails-details"
            >
              {/* Category */}
              <p className="productdetails-category">{product.category}</p>

              {/* Title */}
              <h1 className="productdetails-title">{product.name}</h1>

              {/* Rating */}
              <div className="productdetails-rating">
                <div className="productdetails-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`productdetails-star ${
                        i < Math.floor(product.rating)
                          ? "productdetails-star-filled"
                          : "productdetails-star-empty"
                      }`}
                    />
                  ))}
                </div>
                <span className="productdetails-rating-text">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="productdetails-price">${product.price}</p>

              {/* Description */}
              <p className="productdetails-description">
                {product.description}
              </p>

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="productdetails-options-section">
                  <p className="productdetails-options-label">
                    Color: {selectedColor}
                  </p>
                  <div className="productdetails-options-grid">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`productdetails-option-btn ${
                          selectedColor === color
                            ? "productdetails-option-btn-active"
                            : ""
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="productdetails-options-section">
                  <p className="productdetails-options-label">
                    Size: {selectedSize}
                  </p>
                  <div className="productdetails-options-grid">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`productdetails-option-btn ${
                          selectedSize === size
                            ? "productdetails-option-btn-active"
                            : ""
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="productdetails-quantity-section">
                <p className="productdetails-options-label">Quantity</p>
                <div className="productdetails-quantity-controls">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="productdetails-quantity-btn"
                  >
                    <Minus className="productdetails-quantity-icon" />
                  </button>
                  <span className="productdetails-quantity-value">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="productdetails-quantity-btn"
                  >
                    <Plus className="productdetails-quantity-icon" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="productdetails-actions">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  icon={<ShoppingCart className="productdetails-btn-icon" />}
                  size="lg"
                >
                  Add to Cart
                </Button>
                <Button
                  onClick={handleAddToWishlist}
                  variant="outline"
                  size="lg"
                  icon={
                    <Heart
                      className={`productdetails-btn-icon ${isInWishlist(product.id) ? "productdetails-heart-filled" : ""}`}
                    />
                  }
                >
                  {isInWishlist(product.id) ? "In Wishlist" : "Add to Wishlist"}
                </Button>
              </div>

              {/* Features */}
              <div className="productdetails-features">
                {features.map((feature, index) => (
                  <div key={index} className="productdetails-feature">
                    <div className="productdetails-feature-icon-wrapper">
                      <feature.icon className="productdetails-feature-icon" />
                    </div>
                    <div>
                      <p className="productdetails-feature-title">
                        {feature.title}
                      </p>
                      <p className="productdetails-feature-desc">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="productdetails-related-section">
          <div className="productdetails-related-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="productdetails-related-header"
            >
              <h2 className="productdetails-related-title">
                You May Also Like
              </h2>
            </motion.div>

            <div className="productdetails-related-grid">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailsPage;
