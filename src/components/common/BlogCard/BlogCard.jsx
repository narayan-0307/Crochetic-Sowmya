import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import "./BlogCard.css";

const BlogCard = ({ post, index = 0 }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="blog-card-wrapper"
    >
      <Link to={`/blog/${post.id}`}>
        <article className="blog-card">
          <div className="blog-card-image-container">
            <img
              src={post.image}
              alt={post.title}
              className="blog-card-image"
            />
            <div className="blog-card-category-badge">
              <span className="blog-category-label">{post.category}</span>
            </div>
          </div>

          <div className="blog-card-content">
            <div className="blog-card-meta">
              <div className="blog-meta-item">
                <Calendar className="blog-meta-icon" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="blog-meta-item">
                <Clock className="blog-meta-icon" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h3 className="blog-card-title">{post.title}</h3>

            <p className="blog-card-excerpt">{post.excerpt}</p>

            <div className="blog-card-footer">
              <p className="blog-card-author">
                By <span className="blog-author-name">{post.author}</span>
              </p>
              <motion.div whileHover={{ x: 5 }} className="blog-read-more">
                Read More
                <ArrowRight className="blog-arrow-icon" />
              </motion.div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
