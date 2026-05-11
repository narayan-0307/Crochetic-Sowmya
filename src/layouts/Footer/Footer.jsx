import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Heart,
  Share2,
  MessageCircle,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Shop All", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  const customerService = [
    { name: "Shipping Information", path: "/faq" },
    { name: "Returns & Exchanges", path: "/faq" },
    { name: "Order Tracking", path: "/contact" },
    { name: "Size Guide", path: "/faq" },
    { name: "Care Instructions", path: "/faq" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  const socialLinks = [
    { icon: Share2, href: "https://instagram.com", label: "Social Media" },
    { icon: MessageCircle, href: "https://pinterest.com", label: "Community" },
    { icon: Mail, href: "mailto:info@crochetelegance.com", label: "Email" },
    { icon: Heart, href: "#", label: "Follow Us" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="footer-brand"
            >
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <span className="footer-logo-letter">C</span>
                </div>
                <h3 className="footer-brand-name">Crochet Elegance</h3>
              </div>
              <p className="footer-description">
                Handcrafted with love, designed with care. Each piece tells a
                story of artisanal craftsmanship and timeless elegance.
              </p>
              {/* Social Links */}
              <div className="footer-social-links">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="footer-social-link"
                    aria-label={social.label}
                  >
                    <social.icon className="footer-social-icon" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links-list">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="footer-section-title">Customer Service</h4>
            <ul className="footer-links-list">
              {customerService.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="footer-section-title">Get In Touch</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span>
                  123 Craft Street
                  <br />
                  Portland, OR 97201
                  <br />
                  United States
                </span>
              </li>
              <li className="footer-contact-item footer-contact-link">
                <Phone className="footer-contact-icon" />
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </li>
              <li className="footer-contact-item footer-contact-link">
                <Mail className="footer-contact-icon" />
                <a href="mailto:hello@crochetelegance.com">
                  hello@crochetelegance.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Payment Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="footer-payment-section"
        >
          <div className="footer-payment-content">
            <p className="footer-payment-text">
              We accept: Visa, Mastercard, American Express, PayPal, Apple Pay
            </p>
            <p className="footer-payment-text">
              Secure Checkout • Free Shipping on Orders Over $100
            </p>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <p className="footer-copyright">
            © {currentYear} Crochet Elegance. All rights reserved.
          </p>
          <p className="footer-made-with-love">
            Handcrafted with <Heart className="footer-heart-icon" /> by artisans
          </p>
          <div className="footer-legal-links">
            <Link to="/faq" className="footer-legal-link">
              Privacy Policy
            </Link>
            <span className="footer-legal-separator">•</span>
            <Link to="/faq" className="footer-legal-link">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
