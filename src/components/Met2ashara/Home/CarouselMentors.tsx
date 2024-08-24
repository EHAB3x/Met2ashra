import useGetCompanies from "@/src/hooks/useGetCompanies";
import { Card, CardContent } from "@components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";

export function CarouselMentors() {
  const { data, isLoading } = useGetCompanies();
  const navigate = useNavigate();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="py-12 mb-12 container mx-auto">
      <h2 className="text-[32px] font-bold ">
        Top Mentors
      </h2>
      <p className="text-[#00000099]">
        The next section will cover notable mentors, their areas of expertise, and their contributions.
      </p>
      <Carousel className="w-[90%] mx-auto my-4 py-5">
        <CarouselContent className="-ml-1 gap-4">
          {data!.map((content, index) => (
            <CarouselItem key={index} className="pl-1  lg:basis-1/4">
              <div className=" flex justify-center md:block">
                <Card className="md:max-w-[500px] max-w-[300px]">
                  <CardContent className="flex aspect-square items-center justify-center p-1 bg-secondary flex-col md:max-w-[500px] max-w-[300px] rounded-md mx-auto">
                    <img src={content.logo} className="w-[200px] h-[100px] object-contain"/>
                    <h2 className="font-bold mt-4">{content.name}</h2>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Button 
        variant="primary" 
        className="flex mx-auto rounded-[100px] text-transparent bg-clip-text bg-gradient-to-r from-[#113573] to-[#4B97F4] font-bold text-[1.5rem] w-[300px] h-[50px] hover:text-white"
        onClick={()=> navigate("/mentors")}
      >
        Open More
      </Button>
    </div>
  );
}
export default CarouselMentors;
