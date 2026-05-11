import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Share2,
  MessageCircle,
} from "lucide-react";
import Button from "../../components/common/Button/Button";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@crochetelegance.com",
      description: "We reply within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri, 9am-6pm EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Craft Street, Brooklyn, NY 11201",
      description: "By appointment only",
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon-Fri: 9am-6pm EST",
      description: "Closed on weekends",
    },
  ];

  const socialLinks = [
    { icon: Share2, name: "Instagram", url: "https://instagram.com" },
    { icon: MessageCircle, name: "Facebook", url: "https://facebook.com" },
  ];

  return (
    <div className="contactpage-container">
      {/* Hero Section */}
      <section className="contactpage-hero">
        <div className="contactpage-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="contactpage-hero-text"
          >
            <h1 className="contactpage-title">Get In Touch</h1>
            <p className="contactpage-subtitle">
              Have a question or custom order inquiry? We'd love to hear from
              you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contactpage-section">
        <div className="contactpage-grid">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contactpage-form-wrapper"
          >
            <div className="contactpage-card">
              <h2 className="contactpage-form-title">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="contactpage-form">
                <div className="contactpage-form-field">
                  <label htmlFor="name" className="contactpage-label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contactpage-input"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="contactpage-form-field">
                  <label htmlFor="email" className="contactpage-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contactpage-input"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="contactpage-form-field">
                  <label htmlFor="subject" className="contactpage-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="contactpage-input"
                    placeholder="What is this about?"
                  />
                </div>

                <div className="contactpage-form-field">
                  <label htmlFor="message" className="contactpage-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="contactpage-textarea"
                    placeholder="Tell us more..."
                  />
                </div>

                <Button
                  type="submit"
                  fullWidth
                  icon={<Send className="contactpage-btn-icon" />}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="contactpage-info-wrapper"
          >
            <h2 className="contactpage-info-title">Contact Information</h2>

            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="contactpage-info-card"
              >
                <div className="contactpage-icon-wrapper">
                  <item.icon className="contactpage-icon" />
                </div>
                <div>
                  <h3 className="contactpage-info-card-title">{item.title}</h3>
                  <p className="contactpage-info-text">{item.info}</p>
                  <p className="contactpage-info-desc">{item.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="contactpage-social-card">
              <h3 className="contactpage-social-title">Follow Us</h3>
              <div className="contactpage-social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contactpage-social-link"
                  >
                    <social.icon className="contactpage-social-icon" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contactpage-map-section">
        <div className="contactpage-map-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="contactpage-map-title">Our Location</h2>
            <div className="contactpage-map-placeholder">
              <p className="contactpage-map-text">
                Map Integration Placeholder (Brooklyn, NY)
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
