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
    { img: basics, title: "Programing Basic" },
    { img: companies, title: "Companies" },
    { img: mentor, title: "Mentor" },
  ];
  return (
    <Carousel className="w-[85%] mx-auto my-14 py-5">
      <CarouselContent className="-ml-1 gap-4">
        {data.map((content, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-2/5 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-1 bg-secondary flex-col md:max-w-[500px] max-w-[300px]">
                  <h2>{content.title}</h2>
                  <img src={content.img} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
export default CarouselCard;
