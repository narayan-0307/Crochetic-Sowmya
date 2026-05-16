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

import logo from "../../assets/images/logo/logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Collections", path: "/categories" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const customerService = [
    { name: "Keychains", path: "/faq" },
    { name: "Teddy", path: "/faq" },
    { name: "Bouquet", path: "/contact" },
    { name: "Hair Accessories", path: "/faq" },
    { name: "Mobile accessories", path: "/faq" },
    { name: "Couple sections", path: "/testimonials" },
  ];

  const socialLinks = [
    {
      icon: Share2,
      href: "https://www.instagram.com/crochetic_by_sowmya/",
      label: "Instagram",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/919136863189",
      label: "WhatsApp",
    },
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
                  <img
                    src={logo}
                    alt="Crochetic By Sowmya Logo"
                    className="footer-logo-image"
                  />
                </div>
                <h3 className="footer-brand-name">Crochetic By Sowmya</h3>
              </div>
              <p className="footer-description">
                <strong>Crochetic by Sowmya </strong> creates handmade crochet
                designs crafted with passion, creativity, and timeless elegance.
                Every piece is thoughtfully made to bring warmth and beauty into
                everyday living.
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
            <h4 className="footer-section-title">Our Products</h4>
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
              {/* <li className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span>
                  123 Craft Street
                  <br />
                  Portland, OR 97201
                  <br />
                  United States
                </span>
              </li> */}
              <li className="footer-contact-item footer-contact-link">
                <Phone className="footer-contact-icon" />
                <a href="tel:+15551234567">+91 91368 63189</a>
              </li>
              <li className="footer-contact-item footer-contact-link">
                <Mail className="footer-contact-icon" />
                <a href="mailto:crocheticbysowmya@gmail.com">
                  crocheticbysowmya@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Payment Icons */}
        {/* <motion.div
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
        </motion.div> */}

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <p className="footer-copyright">
            © {currentYear} Crochetic by Sowmya — Handmade with love and
            creativity.
          </p>
          <p className="footer-made-with-love">
            Handcrafted with <Heart className="footer-heart-icon" /> by Sowmya
          </p>
          <div className="footer-legal-links">
            <Link to="#" className="footer-legal-link">
              Privacy Policy
            </Link>
            <span className="footer-legal-separator">•</span>
            <Link to="#" className="footer-legal-link">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
