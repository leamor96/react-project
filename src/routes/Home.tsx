import Quotes from "../components/api/Quotes";
import MultiCarousel from "../components/carousel/MultiCarousel";
import HeroSection from "../components/hero-section/HeroSection";

const Home = () => {
  return (
    <div>
   <HeroSection/>
   <Quotes/>
   <MultiCarousel/>
    </div>
  );
}

export default Home