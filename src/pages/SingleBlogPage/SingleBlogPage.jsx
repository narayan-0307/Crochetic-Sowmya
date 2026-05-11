import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Tag, ArrowLeft } from "lucide-react";
import BlogCard from "../../components/common/BlogCard/BlogCard";
import { blogPosts } from "../../data/blog";
import "./SingleBlogPage.css";

const SingleBlogPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id || "0"));

  if (!post) {
    return (
      <div className="singleblog-not-found">
        <div className="singleblog-not-found-content">
          <h2 className="singleblog-not-found-title">Article Not Found</h2>
          <Link to="/blog" className="singleblog-back-btn">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="singleblog-container">
      {/* Back Button */}
      <div className="singleblog-header-wrapper">
        <Link to="/blog" className="singleblog-back-link">
          <ArrowLeft className="singleblog-back-icon" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <section className="singleblog-section">
        <div className="singleblog-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <div className="singleblog-category-badge">
              <span className="singleblog-category-text">{post.category}</span>
            </div>

            {/* Title */}
            <h1 className="singleblog-title">{post.title}</h1>

            {/* Meta Info */}
            <div className="singleblog-meta">
              <div className="singleblog-meta-item">
                <User className="singleblog-meta-icon" />
                <span>{post.author}</span>
              </div>
              <div className="singleblog-meta-item">
                <Calendar className="singleblog-meta-icon" />
                <span>{post.date}</span>
              </div>
              <div className="singleblog-meta-item">
                <Clock className="singleblog-meta-icon" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="singleblog-image-wrapper">
              <img
                src={post.image}
                alt={post.title}
                className="singleblog-image"
              />
            </div>

            {/* Article Content */}
            <div className="singleblog-content-wrapper">
              <div className="singleblog-text">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="singleblog-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="singleblog-tags-section">
              <div className="singleblog-tags">
                <Tag className="singleblog-tag-icon" />
                {post.tags.map((tag) => (
                  <span key={tag} className="singleblog-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Author Info */}
      <section className="singleblog-author-section">
        <div className="singleblog-author-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="singleblog-author-card"
          >
            <div className="singleblog-author-avatar">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                alt={post.author}
                className="singleblog-author-image"
              />
            </div>
            <div>
              <h3 className="singleblog-author-title">About {post.author}</h3>
              <p className="singleblog-author-bio">
                Passionate crochet artist and writer sharing insights,
                tutorials, and inspiration for handcrafted elegance. With years
                of experience in the craft, bringing you the best tips and
                techniques.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="singleblog-related-section">
          <div className="singleblog-related-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="singleblog-related-header"
            >
              <h2 className="singleblog-related-title">Related Articles</h2>
            </motion.div>

            <div className="singleblog-related-grid">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard
                  key={relatedPost.id}
                  post={relatedPost}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SingleBlogPage;
