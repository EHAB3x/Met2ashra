import AppStore from "@assets/svg/GooglePlay.svg?react";
import GooglePlay from "@assets/svg/AppStore.svg?react";
import MobileApp from "@assets/images/mobileApp.png"
const Download = () => {
  return (
    <div>
        <div>
            <h2 className="font-bold text-[32px] text-black my-10 text-center">Download our app now!</h2>
            <div className="flex justify-center gap-8 mb-16">
                <div className="bg-[#113573] rounded-[1.5rem] sm:w-[230px] w-[150px]">
                    <AppStore className="sm:w-[230px] w-[150px]"/>
                </div>
                <div className="bg-[#113573] rounded-[1.5rem] sm:w-[230px] w-[150px]">
                    <GooglePlay className="sm:w-[230px] w-[150px]"/>
                </div>
            </div>
        </div>

        <div className="flex justify-center">
            <img src={MobileApp} alt="mobileApp" />
        </div>
    </div>
  )
}

export default Download;