import { motion, AnimatePresence } from "framer-motion";
import { Share2, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "./InstagramSection.css";

// Import all review images and videos
import review2 from "../../../assets/images/reviews/reviews-2.mp4";
import review3 from "../../../assets/images/reviews/reviews-3.mp4";
import review4 from "../../../assets/images/reviews/reviews-4.mp4";
import review5 from "../../../assets/images/reviews/reviews-5.mp4";
import review6 from "../../../assets/images/reviews/reviews-6.mp4";
import review7 from "../../../assets/images/reviews/reviews-7.mp4";
import review8 from "../../../assets/images/reviews/reviews-8.mp4";
import review9 from "../../../assets/images/reviews/reviews-9.mp4";
import review10 from "../../../assets/images/reviews/reviews-10.mp4";

import feedback1 from "../../../assets/images/reviews/feedback-1.mp4";
import feedback2 from "../../../assets/images/reviews/feedback-2.mp4";
import feedback3 from "../../../assets/images/reviews/feedback-3.mp4";
import feedback4 from "../../../assets/images/reviews/feedback-4.mp4";
import feedback5 from "../../../assets/images/reviews/feedback-5.mp4";
import feedback6 from "../../../assets/images/reviews/feedback-6.mp4";
import feedback7 from "../../../assets/images/reviews/feedback-7.mp4";
import feedback8 from "../../../assets/images/reviews/feedback-8.mp4";
import feedback9 from "../../../assets/images/reviews/feedback-9.mp4";
import feedback10 from "../../../assets/images/reviews/feedback-10.mp4";
import feedback11 from "../../../assets/images/reviews/feedback-11.mp4";
import feedback12 from "../../../assets/images/reviews/feedback-12.mp4";
import feedback13 from "../../../assets/images/reviews/feedback-13.mp4";

const InstagramSection = () => {
  const reviewMedia = [
    { src: feedback1, type: "video" },
    { src: review2, type: "video" },
    { src: review3, type: "video" },
    { src: review4, type: "video" },
    { src: review5, type: "video" },
    { src: review6, type: "video" },
    { src: review7, type: "video" },
    { src: review8, type: "video" },
    { src: review9, type: "video" },
    { src: review10, type: "video" },
    { src: feedback2, type: "video" },
    { src: feedback3, type: "video" },
    { src: feedback4, type: "video" },
    { src: feedback5, type: "video" },
    { src: feedback6, type: "video" },
    { src: feedback7, type: "video" },
    { src: feedback8, type: "video" },
    { src: feedback9, type: "video" },
    { src: feedback10, type: "video" },
    { src: feedback11, type: "video" },
    { src: feedback12, type: "video" },
    { src: feedback13, type: "video" },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  // Open modal
  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Navigate in modal
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewMedia.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + reviewMedia.length) % reviewMedia.length,
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen) return;
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  return (
    <section className="instagram-section">
      <div className="instagram-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="instagram-header"
        >
          <div className="instagram-badge">
            <Share2 className="instagram-badge-icon" />
            <span className="instagram-badge-text">Customer Reviews</span>
          </div>
          <h2 className="instagram-title">See What Our Customers Love</h2>
          <p className="instagram-description">
            Real reviews from our amazing customers showcasing their beautiful
            handmade crochet pieces. Watch and explore their experiences!
          </p>
        </motion.div>

        {/* Continuous Auto-Sliding Gallery */}
        <div className="review-slider-wrapper">
          <div className="review-slider-track">
            {/* Duplicate the array for seamless infinite loop */}
            {[...reviewMedia, ...reviewMedia, ...reviewMedia].map(
              (media, index) => (
                <motion.div
                  key={index}
                  className="review-slide"
                  onClick={() => openModal(index % reviewMedia.length)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {media.type === "image" ? (
                    <img
                      src={media.src}
                      alt={`Customer review ${index + 1}`}
                      className="review-media"
                    />
                  ) : (
                    <div className="review-video-wrapper">
                      <video
                        src={media.src}
                        className="review-media"
                        muted
                        playsInline
                      />
                      <div className="review-play-overlay">
                        <Play className="review-play-icon" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ),
            )}
          </div>
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="instagram-follow"
        >
          <a
            href="https://www.instagram.com/crochetic_by_sowmya/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-follow-btn"
          >
            <Share2 className="instagram-follow-icon" />
            Follow Us on Instagram
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="review-modal-overlay"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="review-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button className="review-modal-close" onClick={closeModal}>
                <X />
              </button>

              {/* Navigation Buttons */}
              <button
                className="review-modal-nav review-modal-prev"
                onClick={goToPrev}
              >
                <ChevronLeft />
              </button>
              <button
                className="review-modal-nav review-modal-next"
                onClick={goToNext}
              >
                <ChevronRight />
              </button>

              {/* Media Display */}
              <div className="review-modal-media">
                {reviewMedia[currentIndex].type === "image" ? (
                  <img
                    src={reviewMedia[currentIndex].src}
                    alt={`Review ${currentIndex + 1}`}
                    className="review-modal-img"
                  />
                ) : (
                  <video
                    ref={videoRef}
                    src={reviewMedia[currentIndex].src}
                    controls
                    autoPlay
                    className="review-modal-video"
                  />
                )}
              </div>

              {/* Counter */}
              <div className="review-modal-counter">
                {currentIndex + 1} / {reviewMedia.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InstagramSection;
