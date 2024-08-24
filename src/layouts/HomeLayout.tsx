import {
  Hero,
  CarouselCard,
  Basics,
  Download,
  CarouselCompanies,
} from "@components/Met2ashara/Home/index";
import CarouselMentors from "@components/Met2ashara/Home/CarouselMentors";

const HomeLayout = () => {
  return (
    <>
      <Hero />
      <CarouselCard />
      <CarouselCompanies />
      <CarouselMentors />
      <Basics />
      <Download />
    </>
  );
};

export default HomeLayout;
