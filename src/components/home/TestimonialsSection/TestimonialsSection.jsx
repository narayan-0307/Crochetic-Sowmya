import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import TestimonialCard from "../../common/TestimonialCard/TestimonialCard";
import { testimonials } from "../../../data/testimonials";
import Button from "../../common/Button/Button";
import { MessageCircle } from "lucide-react";
import "./TestimonialsSection.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="testimonials-header"
        >
          <div className="testimonials-badge">
            <MessageCircle className="testimonials-badge-icon" />
            <span className="testimonials-badge-text">Customer Love</span>
          </div>
          <h2 className="testimonials-title">What Our Customers Say</h2>
          <p className="testimonials-description">
            Don't just take our word for it. Here's what our delighted customers
            have to say about their handcrafted treasures.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="testimonials-slider"
        >
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2, spaceBetween: 40 },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} index={index} />
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
          className="testimonials-view-all"
        >
          <Link to="/testimonials">
            <Button variant="outline">Read More Reviews</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
