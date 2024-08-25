import styles from "@styles/styles.module.css"

interface Iprops {
  text: string;
  title: string;
  img: string;
}
const Hero = ({ text, title, img }: Iprops) => {
  return (
    <div className={`${styles.sameHero__section} ${styles.section__background} h-[700px] flex items-center justify-center sm:mt-0 mt-[88px]`}>
      <div className="container flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 h-full">
        <div className="sm:flex-1 flex-none text-left flex-col">
          <h2 className="font-semibold text-[28px] sm:text-[32px] text-black mb-1">
            {title}
          </h2>
          <hr className="w-[40%] border-t-2 border-primary" />
          <p className="font-semibold text-[16px] sm:text-[20px] text-[#00000099] max-w-md mt-5">
            {text}
          </p>
        </div>
        <div className="sm:flex-1 flex-none">
          <img src={img} alt="companysection" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
