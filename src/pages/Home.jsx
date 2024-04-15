import HeroSection from "../containers/HeroSection";
import Features from "../containers/Features";
import Sales from "../containers/sales";
import Rent from '../containers/Rent'
import Agents from "../containers/Agents";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <Sales/>
      <Rent />
      <Agents/>
    </div>
  );
};

export default Home;
