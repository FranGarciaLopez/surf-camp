import HeroContent from "../molecules/HeroContent";
import Header from "../molecules/Header";

const Hero = () => (
  <section className="flex flex-col h-screen">
    <Header />
    <HeroContent />
  </section>
);

export default Hero;
