import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Button from "../Button/Button.jsx";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="newsletter-content"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="newsletter-icon-wrapper"
          >
            <Send className="newsletter-icon" />
          </motion.div>

          <h2 className="newsletter-heading">Join Our Craft Circle</h2>
          <p className="newsletter-description">
            Subscribe to receive exclusive crochet updates, new collection
            launches, handmade inspiration, and special offers crafted just for
            you.
          </p>

          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="newsletter-form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="newsletter-input"
                required
              />
              <Button
                type="submit"
                icon={<Send className="newsletter-btn-icon" />}
              >
                Subscribe
              </Button>
            </div>

            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="newsletter-success-message"
              >
                ✓ Thank you for subscribing!
              </motion.p>
            )}
          </form>

          <p className="newsletter-privacy">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
