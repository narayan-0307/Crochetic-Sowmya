import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CategoryCard from "../../common/CategoryCard/CategoryCard";
import { categories } from "../../../data/products";
import Button from "../../common/Button/Button";
import { Grid } from "lucide-react";
import "./CategoriesSection.css";

const CategoriesSection = () => {
  // Show first 6 categories
  const displayCategories = categories.slice(0, 6);

  return (
    <section className="categories-section">
      <div className="categories-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="categories-header"
        >
          <span className="categories-subtitle">Browse Categories</span>
          <h2 className="categories-title">Explore Our Crochet Collections</h2>
          <p className="categories-description">
            From elegant home accents to stylish handmade accessories, explore
            collections crafted with creativity, care, and timeless beauty.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="categories-grid">
          {displayCategories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* View All Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="categories-view-all"
        >
          <Link to="/categories">
            <Button variant="primary" icon={<Grid className="w-5 h-5" />}>
              View All Categories
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;
