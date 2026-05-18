import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../common/Button/Button";
import "./HeroSection.css";

import hero1 from "../../../assets/images/hero-section/hero-image-1.webp";
import hero2 from "../../../assets/images/hero-section/hero-image-2.webp";
import hero3 from "../../../assets/images/hero-section/hero-image-3.webp";
import hero4 from "../../../assets/images/hero-section/hero-image-4.webp";
import hero5 from "../../../assets/images/hero-section/hero-image-5.webp";

const heroImages = [
  { src: hero1, position: "right center" },
  { src: hero2, position: "center center" },
  { src: hero3, position: "right top" },
  { src: hero4, position: "right center" },
  { src: hero5, position: "center center" },
];
const SLIDE_INTERVAL = 4000; // ms per slide

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      {/* ── Auto-sliding background images ── */}
      <div className="hero-slider-wrapper">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={heroImages[currentIndex].src}
            alt=""
            className="hero-slide-img"
            style={{ objectPosition: heroImages[currentIndex].position }}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
        {/* Warm cream overlay for legibility */}
        <div className="hero-video-overlay" />
      </div>

      {/* ── Decorative blobs ── */}
      <div className="hero-decorative-elements">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="hero-blob hero-blob-1"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="hero-blob hero-blob-2"
        />
      </div>

      {/* ── Content ── */}
      <div className="hero-container">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-badge"
            >
              <Sparkles className="hero-badge-icon" />
              <span className="hero-badge-text">
                Where Every Stitch Tells a Beautiful Story{" "}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-heading"
            >
              Timeless Crochet,
              <span className="hero-gradient-text">Handcrafted with Heart</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-description"
            >
              At <strong>Crochetic by Sowmya</strong>, every creation is
              lovingly handcrafted to bring warmth, elegance, and creativity
              into your everyday life. From cozy home décor to stylish
              accessories, our crochet designs are made to celebrate comfort,
              craftsmanship, and individuality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hero-cta-buttons"
            >
              <Link to="/shop">
                <Button
                  size="lg"
                  icon={<ArrowRight className="hero-btn-icon" />}
                >
                  Explore Collection
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Our Story
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
