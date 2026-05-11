import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./CategoryCard.css";

const CategoryCard = ({ category, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/shop/${category.slug}`}>
        <div className="category-card">
          <div className="category-card-image-container">
            <img
              src={category.image}
              alt={category.name}
              className="category-card-image"
            />
            <div className="category-card-overlay" />
          </div>

          <div className="category-card-content">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="category-card-title">{category.name}</h3>
              <p className="category-card-description">
                {category.description}
              </p>
              <div className="category-card-footer">
                <span className="category-product-count">
                  {category.productCount} Products
                </span>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="category-arrow-wrapper"
                >
                  <ArrowRight className="category-arrow-icon" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
