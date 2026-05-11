import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Award, Leaf, Users } from "lucide-react";
import Button from "../../common/Button/Button";
import "./StorySection.css";

import product4 from "../../../assets/images/products/product-4.jpeg";
import product10 from "../../../assets/images/products/product-10.jpeg";
import product12 from "../../../assets/images/products/product-20.webp";
import product18 from "../../../assets/images/products/product-18.jpeg";

const StorySection = () => {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Handmade with love and attention to detail",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Premium quality yarns and materials",
    },
    {
      icon: Leaf,
      title: "Sustainable",
      description: "Unique designs crafted for everyday elegance",
    },
    {
      icon: Users,
      title: "Community",
      description: "Supporting slow, sustainable handmade fashion",
    },
  ];

  return (
    <section className="story-section">
      {/* Background Pattern */}
      <div className="story-bg-pattern"></div>

      <div className="story-container">
        <div className="story-grid">
          {/* Left - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="story-images"
          >
            <div className="story-images-grid">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="story-image story-image-1"
              >
                <img
                  src={product18}
                  alt="Handcrafting process"
                  className="story-img"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="story-image story-image-2"
              >
                <img
                  src={product4}
                  alt="Crochet materials"
                  className="story-img"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="story-image story-image-3"
              >
                <img
                  src={product10}
                  alt="Finished product"
                  className="story-img"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="story-image story-image-4"
              >
                <img
                  src={product12}
                  alt="Artisan at work"
                  className="story-img"
                />
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="story-badge"
            >
              <p className="story-badge-number">01+</p>
              <p className="story-badge-text">Years Experience</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="story-content"
          >
            <span className="story-subtitle">Our Story</span>
            <h2 className="story-title">
              Crafting Memories,
              <span className="story-title-accent">One Stitch at a Time</span>
            </h2>
            <p className="story-text story-text-large">
              At <strong>Crochetic by Sowmya</strong>, crochet is more than just
              handmade art, It’s a passion woven into every thread. Each piece
              is thoughtfully created with patience, creativity, and love to
              bring warmth and happiness into your home and lifestyle.
            </p>
            <p className="story-text">
              Inspired by timeless craftsmanship and modern elegance, our
              designs are made for those who appreciate handmade beauty and
              meaningful details. Every stitch reflects dedication, comfort, and
              the joy of creating something truly special.
            </p>

            {/* Features Grid */}
            <div className="story-features">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="story-feature"
                >
                  <div className="story-feature-icon">
                    <feature.icon className="story-feature-icon-svg" />
                  </div>
                  <div>
                    <h4 className="story-feature-title">{feature.title}</h4>
                    <p className="story-feature-desc">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="primary">Read Our Full Story</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
