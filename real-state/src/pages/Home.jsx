import HeroSection from "../containers/HeroSection";
import Features from "../containers/Features";
import Sales from "../containers/sales";
import Rent from '../containers/Rent'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <Sales/>
      <Rent/>
    </div>
  );
};

export default Home;
