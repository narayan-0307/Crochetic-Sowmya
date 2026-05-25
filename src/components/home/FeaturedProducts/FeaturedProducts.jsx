import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "../../common/ProductCard/ProductCard";
import { products } from "../../../data/products";
import "./FeaturedProducts.css";

import Products1 from "../../../assets/images/home-products/crochetic-design-1.jpeg";
import Products2 from "../../../assets/images/home-products/crochetic-design-2.jpeg";
import Products3 from "../../../assets/images/home-products/crochetic-design-3.jpeg";
import Products4 from "../../../assets/images/home-products/crochetic-design-4.jpeg";
import Products5 from "../../../assets/images/home-products/crochetic-design-5.jpeg";
import Products6 from "../../../assets/images/home-products/crochetic-design-6.webp";
import Products7 from "../../../assets/images/home-products/crochetic-design-7.jpeg";
import Products8 from "../../../assets/images/home-products/crochetic-design-8.jpeg";
import Products9 from "../../../assets/images/home-products/crochetic-design-8.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeaturedProducts = () => {
  // Map of product names to featured images from home-products folder
  const featuredImageMap = {
    "Bible Cover": Products1,
    "Heart Keychain": Products2,
    "From Sling Bag to Sunflower Bouquet  2 in 1": Products3,
    "Single Medium size Sunflower with Smiley": Products4,
    "Pink Tulip Bouquet With Chocolate and Custom Message": Products5,
    "Sunflower Keychain": Products6,
    "Lavender Flowers": Products7,
    "Floral Crown": Products8,
  };

  // Get actual products from database and override their first image for display
  const featuredProducts = products
    .filter((product) => featuredImageMap[product.name])
    .map((product) => ({
      ...product,
      images: [featuredImageMap[product.name], ...product.images.slice(1)],
    }))
    .slice(0, 8);

  return (
    <section className="featured-products-section">
      <div className="featured-products-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="featured-products-header"
        >
          <span className="featured-products-subtitle">
            Handcrafted Collection
          </span>
          <h2 className="featured-products-title">
            Featured Crochet Creations
          </h2>
          <p className="featured-products-description">
            Discover our most loved handmade crochet pieces, thoughtfully
            designed to add charm, texture, and warmth to your space and style.
          </p>
        </motion.div>

        {/* Products Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="featured-products-slider"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            // navigation
            // pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="featured-products-swiper"
          >
            {featuredProducts.map((product, index) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="featured-products-view-all"
        >
          <Link to="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="featured-products-btn"
            >
              View All Products
              <ArrowRight className="featured-products-btn-icon" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
