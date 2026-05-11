import { motion } from "framer-motion";
import { Heart, Users, Leaf, Award, Target, Sparkles } from "lucide-react";
import "./AboutPage.css";

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Crafted with Love",
      description:
        "Every piece is made with genuine passion and dedication to the art of crochet.",
    },
    {
      icon: Award,
      title: "Quality First",
      description:
        "We never compromise on quality, using only premium materials and expert techniques.",
    },
    {
      icon: Leaf,
      title: "Sustainable Practice",
      description:
        "Committed to eco-friendly materials and processes that protect our planet.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description:
        "Supporting artisans and preserving traditional handcraft skills.",
    },
  ];

  const milestones = [
    {
      year: "2016",
      title: "The Beginning",
      description: "Started with a passion for crochet",
    },
    {
      year: "2018",
      title: "First Shop",
      description: "Opened our online boutique",
    },
    {
      year: "2020",
      title: "Growing Team",
      description: "Expanded to 10+ artisans",
    },
    {
      year: "2022",
      title: "Going Global",
      description: "Shipping to 30+ countries",
    },
    {
      year: "2026",
      title: "Today",
      description: "2000+ happy customers worldwide",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="about-hero-content"
            >
              <div className="about-hero-badge">
                <Sparkles className="about-hero-badge-icon" />
                <span className="about-hero-badge-text">Est. 2016</span>
              </div>
              <h1 className="about-hero-title">
                Our Story of
                <span className="about-hero-title-gradient">
                  Handcrafted Elegance
                </span>
              </h1>
              <p className="about-hero-description">
                What began as a simple love for crochet has blossomed into a
                thriving community of artisans creating beautiful, sustainable
                handmade pieces that bring warmth and elegance to homes
                worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="about-hero-image-wrapper"
            >
              <img
                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=600&fit=crop"
                alt="About Us"
                className="about-hero-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="about-mission">
        <div className="about-mission-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-mission-header"
          >
            <div className="about-mission-badge">
              <Target className="about-mission-badge-icon" />
              <span className="about-mission-badge-text">Our Mission</span>
            </div>
            <h2 className="about-mission-title">
              Preserving Tradition, Creating Beauty
            </h2>
            <p className="about-mission-description">
              Our mission is to keep the art of traditional crochet alive while
              creating modern, sustainable pieces that fit seamlessly into
              contemporary lifestyles. We believe in the power of handmade goods
              to bring joy, warmth, and authentic beauty into every home.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="about-values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="about-value-card"
              >
                <div className="about-value-icon">
                  <value.icon className="about-value-icon-svg" />
                </div>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline">
        <div className="about-timeline-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-timeline-header"
          >
            <h2 className="about-timeline-title">Our Journey</h2>
            <p className="about-timeline-subtitle">
              From humble beginnings to a global handcraft community
            </p>
          </motion.div>

          <div className="about-timeline-content">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="about-timeline-item"
              >
                <div className="about-timeline-year">
                  <p className="about-timeline-year-text">{milestone.year}</p>
                </div>
                <div className="about-timeline-dot" />
                <div className="about-timeline-card">
                  <h3 className="about-timeline-card-title">
                    {milestone.title}
                  </h3>
                  <p className="about-timeline-card-description">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="about-team-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-team-header"
          >
            <h2 className="about-team-title">Meet Our Artisans</h2>
            <p className="about-team-description">
              Our talented team of skilled crafters brings each piece to life
              with dedication, expertise, and a genuine love for the craft.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
