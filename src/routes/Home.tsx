import Quotes from "../components/api/Quotes";
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
    </div>
  );
}

export default Home