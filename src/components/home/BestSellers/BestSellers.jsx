import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import ProductCard from "../../common/ProductCard/ProductCard";
import { products } from "../../../data/products";
import "./BestSellers.css";

const BestSellers = () => {
  const bestsellerProducts = products.filter((p) => p.bestseller).slice(0, 4);

  return (
    <section className="bestsellers-section">
      <div className="bestsellers-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bestsellers-header"
        >
          <div className="bestsellers-badge">
            <TrendingUp className="bestsellers-badge-icon" />
            <span className="bestsellers-badge-text">Customer Favorites</span>
          </div>
          <h2 className="bestsellers-title">Bestselling Treasures</h2>
          <p className="bestsellers-description">
            Our most cherished crochet creations, loved for their unique
            designs, premium craftsmanship, and handmade charm.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="bestsellers-grid">
          {bestsellerProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
