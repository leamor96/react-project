import Quotes from "../components/api/Quotes";
import MultiCarousel from "../components/carousel/MultiCarousel";
import HeroSection from "../components/hero-section/HeroSection";
import AppInfo from "../components/app-info/AppInfo"
import "../App.css"

const Home = () => {

  return (
    <div>
      <HeroSection />
      <div className="diagonal">
        <AppInfo />
      </div>
      <Quotes />
      <MultiCarousel deviceType={""} />
    </div>
  );
}

export default Home