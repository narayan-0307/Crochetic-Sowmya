import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import "./TestimonialCard.css";

const TestimonialCard = ({ testimonial, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="testimonial-card"
    >
      <div className="testimonial-quote-icon-wrapper">
        <div className="testimonial-quote-icon-bg">
          <Quote className="testimonial-quote-icon" />
        </div>
      </div>

      <div className="testimonial-rating">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="testimonial-star" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>

      <p className="testimonial-text">"{testimonial.text}"</p>

      {testimonial.product && (
        <p className="testimonial-product">Product: {testimonial.product}</p>
      )}

      <div className="testimonial-author">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="testimonial-author-image"
        />
        <div>
          <h4 className="testimonial-author-name">{testimonial.name}</h4>
          <p className="testimonial-author-location">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
