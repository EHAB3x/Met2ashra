import { Card, CardContent } from "@components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import basics from "@assets/svg/basics.svg";
import companies from "@assets/svg/companies.svg";
import mentor from "@assets/svg/mentor.svg";

export function CarouselCard() {
  const data = [
    { img: basics, title: "Programing Basic", description: "Evaluate Your Skills"},
    { img: companies, title: "Companies", description :"Find Your Passion" },
    { img: mentor, title: "Mentor", description:"Have Eyes On You"},
  ];
  return (
    <Carousel className="md:w-[85%] w-3/4 mx-auto my-14 py-5">
      <CarouselContent className="-ml-1 gap-4">
        {data.map((content, index) => (
          <CarouselItem key={index} className="pl-1  lg:basis-1/3">
            <div className=" flex justify-center md:block">
              <Card className="md:max-w-[500px] max-w-[300px]">
                <CardContent className="flex aspect-square items-center justify-center p-1 bg-secondary flex-col md:max-w-[500px] max-w-[300px] rounded-md">
                  <h2>{content.title}</h2>
                  <img src={content.img} />
                  <h2 className="font-bold">{content.description}</h2>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="md:hidden block" />
      <CarouselNext className="md:hidden block" />
    </Carousel>
  );
}
export default CarouselCard;
