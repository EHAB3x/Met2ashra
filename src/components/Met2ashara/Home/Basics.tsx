import BasicsImg from "@assets/images/Basics.png";
import { Button } from "../../ui/button";

const Basics = () => {
  return (
    <div className="bg-gradient-to-r from-[#D5E4F6] to-[#81B4F4] py-16">
        <div className="container flex items-center justify-center sm:gap-16 gap-8 sm:flex-row md:flex-col-reverse lg:flex-row flex-col-reverse h-[100%]">
            <div className="flex flex-col sm:flex-1 flex-none gap-16">
                <div className="flex flex-col gap-6">
                    <h3 className="font-semibold text-[28px] text-black">Learn Programming Basics</h3>
                    <p className="font-medium text-[16px] text-[#00000099]">Learn the basics of coding here and start building your tech future!</p>
                </div>

                <p className="font-medium text-[20px] text-black">
                    There are 3 learning levels with a unique division system covering all the basics you need, along with tests to ensure you master each section.
                </p>

                <Button 
                    className="w-fit !px-16 !py-6 !rounded-[100px] text-transparent bg-clip-text bg-gradient-to-r from-[#113573] to-[#4B97F4] !font-semibold text-[20px]" 
                    variant="gradientOutline"
                >
                    Let's Start
                </Button>
            </div>

            <div className="sm:flex-1 flex-none">
                <img src={BasicsImg} alt="basicsImg" />
            </div>
        </div>
    </div>
  )
}

export default Basics