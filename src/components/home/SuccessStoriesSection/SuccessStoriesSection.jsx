import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "./SuccessStoriesSection.css";

// Import all success story videos
import video1 from "../../../assets/images/my-success-stories/video-1.mp4";
import video2 from "../../../assets/images/my-success-stories/video-2.mp4";
import video3 from "../../../assets/images/my-success-stories/video-3.mp4";
import video4 from "../../../assets/images/my-success-stories/video-4.mp4";
import video5 from "../../../assets/images/my-success-stories/video-5.mp4";
import video6 from "../../../assets/images/my-success-stories/video-6.mp4";
import video7 from "../../../assets/images/my-success-stories/video-7.mp4";
import video8 from "../../../assets/images/my-success-stories/video-8.mp4";
import video9 from "../../../assets/images/my-success-stories/video-9.mp4";
import video10 from "../../../assets/images/my-success-stories/video-10.mp4";
import video11 from "../../../assets/images/my-success-stories/video-11.mp4";
import video12 from "../../../assets/images/my-success-stories/video-12.mp4";
import video13 from "../../../assets/images/my-success-stories/video-13.mp4";
import video14 from "../../../assets/images/my-success-stories/video-14.mp4";
import video15 from "../../../assets/images/my-success-stories/video-15.mp4";

const SuccessStoriesSection = () => {
  const successStories = [
    { src: video1, type: "video" },
    { src: video2, type: "video" },
    { src: video3, type: "video" },
    { src: video4, type: "video" },
    { src: video5, type: "video" },
    { src: video6, type: "video" },
    { src: video7, type: "video" },
    { src: video8, type: "video" },
    { src: video9, type: "video" },
    { src: video10, type: "video" },
    { src: video11, type: "video" },
    { src: video12, type: "video" },
    { src: video13, type: "video" },
    { src: video14, type: "video" },
    { src: video15, type: "video" },
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
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + successStories.length) % successStories.length,
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
    <section className="success-stories-section">
      <div className="success-stories-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="success-stories-header"
        >
          <div className="success-stories-badge">
            <Trophy className="success-stories-badge-icon" />
            <span className="success-stories-badge-text">My Journey</span>
          </div>
          <h2 className="success-stories-title">
            Success Stories & Milestones
          </h2>
          <p className="success-stories-description">
            Behind every handmade piece is a story of passion, dedication, and
            growth. Watch my journey from humble beginnings to creating
            beautiful crochet art that brings joy to customers worldwide.
          </p>
        </motion.div>

        {/* Continuous Auto-Sliding Gallery */}
        <div className="success-slider-wrapper">
          <div className="success-slider-track">
            {/* Duplicate the array for seamless infinite loop */}
            {[...successStories, ...successStories, ...successStories].map(
              (story, index) => (
                <motion.div
                  key={index}
                  className="success-slide"
                  onClick={() => openModal(index % successStories.length)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="success-video-wrapper">
                    <video
                      src={story.src}
                      className="success-media"
                      muted
                      playsInline
                    />
                    <div className="success-play-overlay">
                      <Play className="success-play-icon" />
                    </div>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="success-modal-overlay"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="success-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="success-modal-close" onClick={closeModal}>
                <X />
              </button>

              <button
                className="success-modal-nav success-modal-prev"
                onClick={goToPrev}
              >
                <ChevronLeft />
              </button>

              <div className="success-modal-media-wrapper">
                <video
                  ref={videoRef}
                  src={successStories[currentIndex]?.src}
                  className="success-modal-media"
                  controls
                  autoPlay
                  playsInline
                />
              </div>

              <button
                className="success-modal-nav success-modal-next"
                onClick={goToNext}
              >
                <ChevronRight />
              </button>

              <div className="success-modal-counter">
                {currentIndex + 1} / {successStories.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SuccessStoriesSection;
