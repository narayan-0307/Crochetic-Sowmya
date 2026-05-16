import { motion } from "framer-motion";
import CategoryCard from "../../components/common/CategoryCard/CategoryCard";
import { categories } from "../../data/products";
import "./CategoriesPage.css";

const CategoriesPage = () => {
  return (
    <div className="categories-page">
      {/* Hero Section */}
      <section className="categories-page-hero">
        <div className="categories-page-hero-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="categories-page-hero-content"
          >
            <h1 className="categories-page-hero-title">
              Find the Perfect Crochet Creation
            </h1>
            <p className="categories-page-hero-description">
              Browse our beautifully handcrafted crochet categories and discover
              unique designs made for every style and occasion. Whether you’re
              looking for adorable gifts, stylish accessories, or cozy décor,
              there’s something special waiting for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="categories-page-grid-section">
        <div className="categories-page-container">
          <div className="categories-page-grid">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="categories-page-info">
        <div className="categories-page-container">
          <div className="categories-page-info-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="categories-page-info-title">
                Can't Find What You're Looking For?
              </h2>
              <p className="categories-page-info-description">
                We offer custom orders tailored to your specific needs and
                preferences. Get in touch with us to discuss your ideas!
              </p>
              <a href="/contact" className="categories-page-info-btn">
                Contact Us for Custom Orders
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;
