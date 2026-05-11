import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import BlogCard from "../../components/common/BlogCard/BlogCard";
import { blogPosts, blogCategories } from "../../data/blog";
import "./BlogPage.css";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="blog-hero-content"
          >
            <h1 className="blog-hero-title">Our Blog</h1>
            <p className="blog-hero-description">
              Tips, tutorials, and inspiration for crochet enthusiasts and home
              decor lovers
            </p>

            {/* Search Bar */}
            <div className="blog-search-wrapper">
              <Search className="blog-search-icon" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="blog-search-input"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter & Blog Grid */}
      <section className="blog-content">
        <div className="blog-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="blog-categories"
          >
            {["All", ...blogCategories].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`blog-category-btn ${
                  selectedCategory === category
                    ? "blog-category-btn-active"
                    : ""
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <div className="blog-grid">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="blog-no-results"
            >
              <p className="blog-no-results-text">
                No articles found. Try a different search term or category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
