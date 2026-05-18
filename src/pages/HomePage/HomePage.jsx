import HeroSection from "../../components/home/HeroSection/HeroSection.jsx";
import FeaturedProducts from "../../components/home/FeaturedProducts/FeaturedProducts.jsx";
import CategoriesSection from "../../components/home/CategoriesSection/CategoriesSection.jsx";
import BestSellers from "../../components/home/BestSellers/BestSellers.jsx";
import StorySection from "../../components/home/StorySection/StorySection.jsx";
import TestimonialsSection from "../../components/home/TestimonialsSection/TestimonialsSection.jsx";
import InstagramSection from "../../components/home/InstagramSection/InstagramSection.jsx";
import Newsletter from "../../components/common/Newsletter/Newsletter.jsx";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <BestSellers />
      <StorySection />
      <TestimonialsSection />
      <InstagramSection />
      {/* <Newsletter /> */}
    </div>
  );
};

export default HomePage;
