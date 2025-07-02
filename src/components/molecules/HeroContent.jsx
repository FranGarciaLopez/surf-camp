import Image from "../atoms/Image";
import Title from "../atoms/Title";
import Button from "../atoms/Button";

const HeroContent = () => (
  <section className="flex flex-col h-screen overflow-hidden">
    <div className="relative h-screen">
      <Image
        src="/src/assets/images/hero-img.avif"
        alt="Hero Image"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-end my-40 mx-20 lg:items-start lg:justify-center">
        <Title>
          <Image
            src="/src/assets/text.svg"
            alt="Logo"
            draggable="false"
            className="w-80 mb-4 lg:w-96 lg:mb-6 xl:w-110 xl:mb-8"
          />
        </Title>
        <Button label="Join now the experience" />
      </div>
    </div>
  </section>
);

export default HeroContent;
