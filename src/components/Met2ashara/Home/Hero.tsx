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
import HeroSection from "@assets/images/hero-section.png";
const Hero = () => {
  return (
    <div className="bg-[url('src/assets/images/hero.png')] bg-no-repeat bg-cover h-[1000px]">
      <div className="container flex items-center justify-center sm:gap-16 gap-8 sm:flex-row flex-col-reverse h-[100%]">
        <div className="sm:flex-1 flex-none">
          <div className="flex flex-col gap-4 mb-6">
            <h2 className="font-semibold sm:text-[32px] text-[28px] text-black">
              Start Your Perfect Career Journey Today ..
            </h2>
            <p className="font-semibold sm:text-[20px] text-[16px] text-[#00000099]">
              We increase your passion for programming and prepare you for the
              digital job market
            </p>
          </div>

          <div className="bg-white p-[9px] sm:!pl-[42px] !pl-[12px] rounded-[75px] flex items-center gap-4 sm:mb-12 mb-4">
            <input
              type="text"
              placeholder="Search ..."
              className="flex-1 outline-0 border-r-[1px] border-solid border-[#00000066]"
            />
            <div className="flex-1">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Your Road" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Concepts</SelectLabel>
                    <SelectItem value="apple">Programming</SelectItem>
                    <SelectItem value="banana">Software</SelectItem>
                    <SelectItem value="blueberry">OOP</SelectItem>
                    <SelectItem value="grapes">Basics</SelectItem>
                    <SelectItem value="pineapple">Roadmap</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] bg-primary rounded-[50%] flex justify-center items-center cursor-pointer">
              <Search className="sm:w-[32px] sm:h-[32px] w-[24px] h-[24px]" />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-medium text-black text-[20px]">
              Popular Search
            </h2>
            <div className="flex sm:w-[200px] w-[100%] flex-wrap gap-[0.75rem] cursor-pointer">
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
        <div className="sm:flex-1 flex-none sm:mt-0">
          <img src={HeroSection} alt="HeroSection" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
