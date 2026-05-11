import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { SlidersHorizontal, Grid3x3, List } from "lucide-react";
import ProductCard from "../../components/common/ProductCard/ProductCard";
import { products, categories } from "../../data/products";
import "./ShopPage.css";

const ShopPage = () => {
  const { category: urlCategory } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(
    urlCategory || "all",
  );
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [viewMode, setViewMode] = useState("grid");

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by price
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1],
    );

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured first
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [selectedCategory, sortBy, priceRange]);

  return (
    <div className="shop-container">
      {/* Hero Section */}
      <section className="shop-hero">
        <div className="shop-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="shop-hero-text"
          >
            <h1 className="shop-title">Shop Collection</h1>
            <p className="shop-subtitle">
              Explore our curated selection of handcrafted crochet pieces, each
              made with love and attention to detail.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="shop-main">
        <div className="shop-wrapper">
          {/* Sidebar Filters */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="shop-sidebar"
          >
            <div className="shop-filters-card">
              <div className="shop-filters-header">
                <SlidersHorizontal className="shop-filters-icon" />
                <h3 className="shop-filters-title">Filters</h3>
              </div>

              {/* Categories */}
              <div className="shop-filter-section">
                <h4 className="shop-filter-label">Category</h4>
                <div className="shop-filter-options">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`shop-filter-btn ${
                      selectedCategory === "all" ? "shop-filter-btn-active" : ""
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`shop-filter-btn ${
                        selectedCategory === cat.slug
                          ? "shop-filter-btn-active"
                          : ""
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              {/* <div className="shop-filter-section">
                <h4 className="shop-filter-label">Price Range</h4>
                <div className="shop-price-range">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, parseInt(e.target.value)])
                    }
                    className="shop-price-slider"
                  />
                  <div className="shop-price-values">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div> */}

              {/* Sort By */}
              {/* <div className="shop-filter-section">
                <h4 className="shop-filter-label">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="shop-sort-select"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A-Z</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div> */}
            </div>
          </motion.aside>

          {/* Products Grid */}
          <div className="shop-products-wrapper">
            {/* Toolbar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="shop-toolbar"
            >
              <p className="shop-results-count">
                Showing{" "}
                <span className="shop-results-number">
                  {filteredProducts.length}
                </span>{" "}
                products
              </p>
              <div className="shop-view-toggle">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`shop-view-btn ${viewMode === "grid" ? "shop-view-btn-active" : ""}`}
                >
                  <Grid3x3 className="shop-view-icon" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`shop-view-btn ${viewMode === "list" ? "shop-view-btn-active" : ""}`}
                >
                  <List className="shop-view-icon" />
                </button>
              </div>
            </motion.div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div
                className={`shop-products-grid ${
                  viewMode === "grid"
                    ? "shop-products-grid-view"
                    : "shop-products-list-view"
                }`}
              >
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="shop-no-results"
              >
                <p className="shop-no-results-title">No products found</p>
                <p className="shop-no-results-text">
                  Try adjusting your filters
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
