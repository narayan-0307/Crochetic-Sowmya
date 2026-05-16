import { motion } from "framer-motion";
import { Heart, Users, Leaf, Award, Target, Sparkles } from "lucide-react";
import "./AboutPage.css";
import AboutImage from "../../assets/about-image.jpg";

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Crafted with Love",
      description:
        "Every crochet piece is handmade with patience, care, and attention to detail, making each creation truly unique and meaningful.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "We use carefully selected yarns and quality materials to ensure softness, durability, and lasting beauty in every design.",
    },
    {
      icon: Leaf,
      title: "Sustainable Handmade",
      description:
        "Our creations support mindful craftsmanship and sustainable handmade practices that value quality over mass production.",
    },
    {
      icon: Users,
      title: "Community & Creativity",
      description:
        "We are proud to grow a creative handmade community that celebrates artistry, passion, and the timeless beauty of crochet.",
    },
  ];

  const artBehindCreation = [
    {
      title: "Inspired by Creativity",
      description:
        "Every crochet piece begins with an idea inspired by everyday beauty, cozy living, and artistic expression.",
    },
    {
      title: "Carefully Handcrafted",
      description:
        "Each design is patiently handmade with attention to every stitch, texture, and finishing detail to create something truly special.",
    },
    {
      title: "Designed for Everyday Charm",
      description:
        "From stylish accessories to elegant décor, our creations are made to bring warmth and personality into your daily life.",
    },
    {
      title: "Made for Meaningful Moments",
      description:
        "Whether it's a thoughtful gift or a personal favorite, our crochet creations are designed to make moments feel memorable and heartfelt.",
    },
    {
      title: "Blending Tradition with Modern Style",
      description:
        "We combine the timeless beauty of traditional crochet techniques with modern aesthetics to create designs that feel both classic and contemporary.",
    },
    {
      title: "More Than Handmade",
      description:
        "At Crochetic by Sowmya, every creation carries creativity, passion, and the beauty of handmade craftsmanship made specially for you.",
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
                <span className="about-hero-title-gradient">
                  Our Story of Handmade Passion & Creativity
                </span>
              </h1>
              <p className="about-hero-description">
                What began as a simple love for crochet has grown into Crochetic
                by Sowmya — a heartfelt journey of creativity, craftsmanship,
                and handmade elegance. Every stitch reflects our passion for
                creating meaningful crochet pieces that bring warmth, joy, and
                timeless beauty into everyday life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="about-hero-image-wrapper"
            >
              <img
                src={AboutImage}
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
              Keeping Handmade Art Alive, One Stitch at a Time
            </h2>
            <p className="about-mission-description">
              At Crochetic by Sowmya, our mission is to celebrate the beauty of
              handmade crochet while blending tradition with modern creativity.
              We believe handcrafted creations carry emotions, memories, and a
              personal touch that machine-made products simply cannot replace.
              Every design is thoughtfully created to inspire comfort,
              happiness, and individuality while supporting sustainable handmade
              craftsmanship and slow living.
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

      {/* The Art Behind Every Creation */}
      <section className="about-art-section">
        <div className="about-art-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-art-header"
          >
            <h2 className="about-art-title">The Art Behind Every Creation</h2>
            <p className="about-art-subtitle">
              Thoughtfully handcrafted crochet designs inspired by comfort,
              creativity, and timeless handmade beauty.
            </p>
          </motion.div>

          <div className="about-art-grid">
            {artBehindCreation.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="about-art-card"
              >
                <div className="about-art-card-number">{index + 1}</div>
                <h3 className="about-art-card-title">{item.title}</h3>
                <p className="about-art-card-description">{item.description}</p>
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
            <h2 className="about-team-title">
              Meet the Creative Hands Behind Crochetic
            </h2>
            <p className="about-team-description">
              Behind every handmade creation is a story of passion, patience,
              and artistry. Our talented creators pour love and dedication into
              every stitch, bringing unique crochet designs to life with care
              and creativity. Each piece reflects the warmth of handmade
              craftsmanship and the joy of creating something truly special for
              you.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
