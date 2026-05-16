import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, Heart, Search, User } from "lucide-react";
import { useCart } from "../../context/CartContext.jsx";
import { useWishlist } from "../../context/WishlistContext.jsx";
import logo from "../../assets/images/logo/logo.webp";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { getCartCount } = useCart();
  const { getWishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const cartCount = getCartCount();
  const wishlistCount = getWishlistCount();

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo-link">
            <motion.div whileHover={{ scale: 1.05 }} className="navbar-logo">
              <img
                src={logo}
                alt="Crochetic By Sowmya"
                className="navbar-logo-image"
              />
              <div className="navbar-logo-text">
                <h1 className="navbar-brand-name">Crochetic By Sowmya</h1>
                <p className="navbar-tagline">Token of love, Made with love</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? "navbar-link-active" : ""}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Icons */}
          <div className="navbar-icons">
            {/* Search */}
            {/* <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSearchOpen(!searchOpen)}
              className="navbar-icon-btn navbar-icon-search"
            >
              <Search className="navbar-icon" />
            </motion.button> */}

            {/* Wishlist */}
            <Link to="/wishlist">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="navbar-icon-btn navbar-icon-relative"
              >
                <Heart className="navbar-icon" />
                {wishlistCount > 0 && (
                  <span className="navbar-badge navbar-badge-wishlist">
                    {wishlistCount}
                  </span>
                )}
              </motion.button>
            </Link>

            {/* Cart */}
            <Link to="/cart">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="navbar-icon-btn navbar-icon-relative"
              >
                <ShoppingCart className="navbar-icon" />
                {cartCount > 0 && (
                  <span className="navbar-badge navbar-badge-cart">
                    {cartCount}
                  </span>
                )}
              </motion.button>
            </Link>

            {/* User Icon */}
            {/* <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="navbar-icon-btn navbar-icon-user"
            >
              <User className="navbar-icon" />
            </motion.button> */}

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="navbar-icon-btn navbar-mobile-menu-btn"
            >
              {isOpen ? (
                <X className="navbar-menu-icon" />
              ) : (
                <Menu className="navbar-menu-icon" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="navbar-search-container"
            >
              <input
                type="search"
                placeholder="Search products..."
                className="navbar-search-input"
                autoFocus
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="navbar-mobile-menu"
          >
            <div className="navbar-mobile-menu-content">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `navbar-mobile-link ${isActive ? "navbar-mobile-link-active" : ""}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
