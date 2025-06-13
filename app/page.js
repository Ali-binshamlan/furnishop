import ProductSlider from "./components/ProductSlider";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import  NewInStore from "./components/NewInStore";
import BestFurniture from "./components/BestFurniture";
import TestimonialSection from "./components/TestimonialSection";
import DiscountSection from "./components/DiscountSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="mt-25">
      <FeatureSection />
      </div>
      <div className="mt-10">
      < NewInStore  />
      </div>
      <div className="mt-10">
      <BestFurniture  />
      </div>
      <div className="mt-10">
        <ProductSlider/>
      </div>
      <div className="mt-10">
        <TestimonialSection  />
      </div>
      <div className="mt-10">
        <DiscountSection />
      </div>
      <div>
        <Footer />
      </div>
      
    </div>
  );
}
