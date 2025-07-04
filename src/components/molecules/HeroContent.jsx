import Image from "../atoms/Image";
import Title from "../atoms/Title";
import Button from "../atoms/Button";

const HeroContent = () => (
  <section className="relative h-screen overflow-hidden">
    <Image
      src="/1.webp"
      alt="Hero Image"
      className="w-full h-full object-cover scale-110"
    />
    <div className="absolute inset-0 bg-black opacity-20"></div>

    <div className="absolute inset-0 flex flex-col items-center justify-end my-40 mx-20 lg:items-start lg:justify-center">
      <Title>
        <Image
          src="https://res.cloudinary.com/dgvvnopu7/image/upload/v1751452476/text_gzq7ki.svg"
          alt="Logo"
          draggable="false"
          className="w-80 mb-4 lg:w-96 lg:mb-6 xl:w-110 xl:mb-8"
        />
      </Title>
      <Button label="Join now the experience" />
    </div>
  </section >
);

export default HeroContent;
