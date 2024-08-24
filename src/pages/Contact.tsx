import Hero from "@components/common/Hero";
import contactSection from "@assets/svg/contactSection.svg";

const Contact = () => {
  return (
    <Hero
      img={contactSection}
      text="We are here to provide assistance and answer all your questions in a quick and efficient manner. Do not hesitate to contact us for any questions or clarification, as we always strive to provide the best support"
      title="Contact Us"
    />
  );
};
export default Contact;
