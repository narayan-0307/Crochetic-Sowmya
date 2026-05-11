import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import FAQAccordion from "../../components/common/FAQAccordion/FAQAccordion";
import { faqs, faqCategories } from "../../data/testimonials";
import "./FAQPage.css";

const FAQPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="faqpage-container">
      {/* Hero Section */}
      <section className="faqpage-hero">
        <div className="faqpage-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="faqpage-hero-text"
          >
            <h1 className="faqpage-title">Frequently Asked Questions</h1>
            <p className="faqpage-subtitle">
              Find answers to common questions about our products, ordering, and
              care instructions
            </p>

            {/* Search Bar */}
            <div className="faqpage-search-wrapper">
              <Search className="faqpage-search-icon" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="faqpage-search-input"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter & FAQ List */}
      <section className="faqpage-section">
        <div className="faqpage-content">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="faqpage-categories"
          >
            {["All", ...faqCategories].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`faqpage-category-btn ${
                  selectedCategory === category
                    ? "faqpage-category-btn-active"
                    : ""
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* FAQ List */}
          <div className="faqpage-list">
            {filteredFAQs.length > 0 ? (
              <div className="faqpage-items">
                {filteredFAQs.map((faq, index) => (
                  <FAQAccordion key={faq.id} faq={faq} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="faqpage-no-results"
              >
                <p className="faqpage-no-results-text">
                  No questions found. Try a different search term or category.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="faqpage-cta-section">
        <div className="faqpage-cta-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="faqpage-cta-card"
          >
            <h2 className="faqpage-cta-title">Still Have Questions?</h2>
            <p className="faqpage-cta-text">
              Can't find the answer you're looking for? Our customer support
              team is here to help!
            </p>
            <a href="/contact" className="faqpage-cta-btn">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
