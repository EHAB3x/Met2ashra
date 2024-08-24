import Hero from "@components/common/Hero";
import contactSection from "@assets/svg/contactSection.svg";
import ContactImg from "@assets/svg/contact.svg?react";
import { Button } from "../components/ui/button";
const Contact = () => {
  return (
    <>
      <Hero
        img={contactSection}
        text="We are here to provide assistance and answer all your questions in a quick and efficient manner. Do not hesitate to contact us for any questions or clarification, as we always strive to provide the best support"
        title="Contact Us"
      />

      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[8rem]">
        <div className="flex justify-center">
          <div className="text-center border-2 border-[#4B97F4] sm:w-full md:w-full w-full lg:w-fit py-10 px-12 rounded-[1.25rem] overflow-hidden relative">
            <div
              className="flex flex-col gap-4 absolute inset-0 rounded-[1.25rem] bg-white"
              style={{
                zIndex: -1,
              }}
            />
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#113573] to-[#4B97F4] font-medium text-[1.2rem]">
              Our Location
            </h2>
            <p className="font-medium text-[#00000099] text-[1rem]">
              Mansoura, University
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-center border-2 border-[#4B97F4] sm:w-fit md:w-full lg:w-fit w-full py-10 px-12 rounded-[1.25rem] overflow-hidden relative">
            <div
              className="flex flex-col gap-4 absolute inset-0 rounded-[1.25rem] bg-white"
              style={{
                zIndex: -1,
              }}
            />
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#113573] to-[#4B97F4] font-medium text-[1.2rem]">
              Contact
            </h2>
            <p className="font-medium text-[#00000099] text-[1rem]">
              +0201123242977
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-center border-2 border-[#4B97F4] sm:w-full md:w-full lg:w-fit w-full py-10 px-12 rounded-[1.25rem] overflow-hidden relative">
            <div
              className="flex flex-col gap-4 absolute inset-0 rounded-[1.25rem] bg-white"
              style={{
                zIndex: -1,
              }}
            />
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#113573] to-[#4B97F4] font-medium text-[1.2rem]">
              Gmail
            </h2>
            <p className="font-medium text-[#00000099] text-[1rem]">
              Met3shara@gmail.com
            </p>
          </div>
        </div>
      </div>

        <div className="container mx-auto flex items-center sm:flex-row flex-col-reverse sm:gap-8 gap-0">
          <div className="sm:flex-1 flex-0">
            <ContactImg className="w-full" />
          </div>
          <div className="flex flex-col gap-4 sm:flex-1 flex-0">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="name"
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#113573] to-[#4B97F4] font-bold text-[1.25rem]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Yor name"
                className="bg-[#d5e4f6] p-3 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="pass"
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#113573] to-[#4B97F4] font-bold text-[1.25rem]"
              >
                password
              </label>
              <input
                type="password"
                id="pass"
                placeholder="Yor name"
                className="bg-[#d5e4f6] p-3 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="message"
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#113573] to-[#4B97F4] font-bold text-[1.25rem]"
              >
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Yor name"
                className="bg-[#d5e4f6] p-3 rounded-md h-[150px]"
              />
            </div>

              <Button variant="primary" className="h-[40px]">Send</Button>
          </div>
        </div>
    </>
  );
};

export default Contact;
