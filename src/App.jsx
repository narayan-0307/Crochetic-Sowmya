import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import MainLayout from "./layouts/MainLayout/MainLayout.jsx";

// Pages
import HomePage from "./pages/HomePage/HomePage.jsx";
import ShopPage from "./pages/ShopPage/ShopPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage.jsx";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import BlogPage from "./pages/BlogPage/BlogPage.jsx";
import SingleBlogPage from "./pages/SingleBlogPage/SingleBlogPage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";
import WishlistPage from "./pages/WishlistPage/WishlistPage.jsx";
import FAQPage from "./pages/FAQPage/FAQPage.jsx";
import TestimonialsPage from "./pages/TestimonialsPage/TestimonialsPage.jsx";

function App() {
  return (
    <Router>
      <CartProvider>
        <WishlistProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="shop" element={<ShopPage />} />
              <Route path="shop/:category" element={<ShopPage />} />
              <Route path="product/:id" element={<ProductDetailsPage />} />
              <Route path="categories" element={<CategoriesPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="blog/:id" element={<SingleBlogPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="wishlist" element={<WishlistPage />} />
              <Route path="faq" element={<FAQPage />} />
              <Route path="testimonials" element={<TestimonialsPage />} />
            </Route>
          </Routes>
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
