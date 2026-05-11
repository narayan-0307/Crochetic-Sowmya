import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import "./InstagramSection.css";

const InstagramSection = () => {
  const instagramImages = [
    "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1595814432314-90095f342694?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1595503240812-7286dafaddc1?w=400&h=400&fit=crop",
  ];

  return (
    <section className="instagram-section">
      <div className="instagram-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="instagram-header"
        >
          <div className="instagram-badge">
            <Share2 className="instagram-badge-icon" />
            <span className="instagram-badge-text">@CrochetElegance</span>
          </div>
          <h2 className="instagram-title">Follow Our Journey</h2>
          <p className="instagram-description">
            Join our community on Instagram for daily inspiration,
            behind-the-scenes glimpses, and exclusive previews of new
            collections.
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="instagram-grid">
          {instagramImages.map((image, index) => (
            <motion.a
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="instagram-image-link"
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="instagram-image"
              />
              <div className="instagram-overlay">
                <Share2 className="instagram-overlay-icon" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="instagram-follow"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-follow-btn"
          >
            <Share2 className="instagram-follow-icon" />
            Follow Us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
