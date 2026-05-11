import { motion } from "framer-motion";
import { Star } from "lucide-react";
import TestimonialCard from "../../components/common/TestimonialCard/TestimonialCard";
import { testimonials } from "../../data/testimonials";
import "./TestimonialsPage.css";

const TestimonialsPage = () => {
  const averageRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <div className="testimonials-container">
      {/* Hero Section */}
      <section className="testimonials-hero">
        <div className="testimonials-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="testimonials-hero-text"
          >
            <h1 className="testimonials-title">Customer Stories</h1>
            <p className="testimonials-subtitle">
              Read what our wonderful customers have to say about their
              handcrafted treasures
            </p>

            {/* Rating Summary */}
            <div className="testimonials-rating-summary">
              <div className="testimonials-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="testimonials-star" />
                ))}
              </div>
              <div className="testimonials-rating-details">
                <p className="testimonials-rating-value">{averageRating}</p>
                <p className="testimonials-rating-count">
                  Based on {testimonials.length} reviews
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-section">
        <div className="testimonials-grid-content">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="testimonials-cta-section">
        <div className="testimonials-cta-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="testimonials-cta-text"
          >
            <h2 className="testimonials-cta-title">Join Our Happy Customers</h2>
            <p className="testimonials-cta-description">
              Experience the joy of owning a beautifully handcrafted piece. Each
              item is made with love and attention to detail.
            </p>
            <a href="/shop" className="testimonials-cta-btn">
              Shop Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="testimonials-trust-section">
        <div className="testimonials-trust-content">
          <div className="testimonials-trust-grid">
            {[
              { value: "2000+", label: "Happy Customers" },
              { value: "4.9", label: "Average Rating" },
              { value: "100%", label: "Handmade" },
              { value: "500+", label: "5-Star Reviews" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="testimonials-trust-card"
              >
                <p className="testimonials-trust-value">{stat.value}</p>
                <p className="testimonials-trust-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
