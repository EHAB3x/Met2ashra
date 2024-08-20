import WhiteLogo from "@assets/svg/WhiteLogo.png";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoMail, IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import AppStore from "@assets/svg/AppStore.svg?react"
import GooglePlay from "@assets/svg/GooglePlay.svg?react"
import AppGallery from "@assets/svg/AppGallery.svg?react"
const Footer = () => {
  return (
    <footer className="bg-[#113573] py-10 px-4 text-[#ffffff66]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div>
          <img src={WhiteLogo} alt="Logo" />
          <div className="mt-8">
            <h4 className="text-[#ffffff66] text-lg">Subscribe Now</h4>
            <div className="mt-4 flex items-center space-x-2 border-b border-b-[#ffffff66]">
              <IoMail className="w-6 h-6 fill-white" />
              <input
                type="email"
                placeholder="Enter your Email"
                className="bg-[#113573] text-white p-2 focus:outline-none w-[169px]"
              />
            </div>
            <button className="mt-8 bg-gradient-to-r from-[#113573] to-[#4B97F4] text-white font-bold py-2 px-6 rounded-full">
              Subscribe
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-white text-lg">Contact us</h4>
          <div className="mt-4 flex">
            <FiPhone className="w-6 h-6" />
            <p className="ml-2">+20 155565856</p>
          </div>
          <div className="mt-4 flex">
            <IoMailOutline className="w-5 h-5" />
            <p className="ml-2">Met3ash@gmail.com</p>
          </div>
          <div className="mt-8 flex space-x-6">
            <Link to={"/"}>
                <FaLinkedin className="w-7 h-7 text-white" />
            </Link>
            <Link to={"/"}>
                <FaFacebook className="w-7 h-7 text-white" />
            </Link>
            <Link to={"/"}>
                <FaInstagram className="w-7 h-7 text-white" />
            </Link>
            <Link to={"/"}>
                <BsTwitterX className="w-6 h-6 text-white" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-white text-lg">Support</h4>
          <Link to={"/"}>
            <p className="transition-all hover:text-white hover:translate-x-2">Common questions</p>
          </Link>
          <Link to={"/"}>
            <p className="transition-all hover:text-white hover:translate-x-2">Help and Support</p>
          </Link>
          <Link to={"/"}>
            <p className="transition-all hover:text-white hover:translate-x-2">Privacy Policy</p>
          </Link>
        </div>

        <div>
          <h4 className="text-white text-lg">Download our app now</h4>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            <AppStore className="border border-white rounded-[1rem] sm:w-full md:w-[50%] lg:w-full w-[50%] h-16 cursor-pointer"/>
            <GooglePlay className="border border-white rounded-[1rem] sm:w-full md:w-[50%] lg:w-full w-[50%] h-16 cursor-pointer"/>
            <AppGallery className="border border-white rounded-[1rem] sm:w-full md:w-[50%] lg:w-[70%] w-[50%] h-16 cursor-pointer sm:col-span-2 md:col-span-1 lg:col-span-2 col-span-1 sm:mx-auto md:mx-0 lg:mx-auto   mx-0"/>
          </div>
        </div>
      </div>
      <div className="border-t border-[#ffffff33] mt-10 pt-6 text-center text-[#ffffff66]">
        <div className="flex justify-center items-center space-x-2">
          <span>&copy; 2024 Met2ashara. All Right Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
