import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@components/ui/select";
import Search from "@assets/svg/search.svg?react";
import HeroSection from "@assets/images/hero-section.png"
const Hero = () => {
  return (
    <div className="bg-[url('src/assets/images/hero.png')] bg-no-repeat bg-cover">
      <div className="container flex items-center justify-center pt-[84px] sm:gap-16 gap-8 sm:flex-row flex-col-reverse">
        <div className="flex-1">
          <div className="flex flex-col gap-4 mb-6">
            <h2 className="font-semibold sm:text-[40px] text-[28px] text-black">
              Start Your Perfect Career Journey Today ..
            </h2>
            <p className="font-semibold sm:text-[22px] text-[18px] text-[#00000099]">
              We increase your passion for programming and prepare you for the
              digital job market
            </p>
          </div>

          <div className="bg-white p-[9px] sm:!pl-[42px] !pl-[12px] rounded-[75px] flex items-center gap-4 mb-8">
            <input
              type="text"
              placeholder="Search ..."
              className="flex-1 border-r-[1px] border-solid border-[#00000066]"
            />
            <div className="flex-1">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="sm:w-[75px] sm:h-[75px] w-[50px] h-[50px] bg-primary rounded-[50%] flex justify-center items-center cursor-pointer">
              <Search />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-medium text-black text-[20px]">Popular Search</h2>
            <div className="flex w-[200px] flex-wrap gap-[0.75rem] cursor-pointer">
              <span className="bg-[#0B7BFF1A] text-primary p-4 rounded-[30px] text-[1rem] font-normal hover:bg-secondary transition-all">
                OOP Concepts
              </span>
              <span className="bg-[#0B7BFF1A] text-primary p-4 rounded-[30px] text-[1rem] font-normal hover:bg-secondary transition-all">
                Software
              </span>
              <span className="bg-[#0B7BFF1A] text-primary p-4 rounded-[30px] text-[1rem] font-normal hover:bg-secondary transition-all">
                Web
              </span>
              <span className="bg-[#0B7BFF1A] text-primary p-4 rounded-[30px] text-[1rem] font-normal hover:bg-secondary transition-all">
                Data Engineer
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1">
            <img src={HeroSection} alt="HeroSection" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
