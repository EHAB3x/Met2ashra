import AboutImg from "@assets/svg/about.svg?react";
import Team from "@assets/svg/team.svg?react"
import Target from "@assets/svg/target.svg?react"
import Success from "@assets/svg/success.svg?react"
import Different from "@assets/svg/different.svg?react"
import Filter from "@assets/svg/filter.svg?react"
import CV from "@assets/svg/cv.svg?react"
import Course from "@assets/svg/courses.svg?react"
import Resume from "@assets/svg/resume.svg?react"
import styles from "@styles/styles.module.css"

const About = () => {
  return (
    <div className="">
      <div className="bg-[url('src/assets/svg/companybg.svg')] bg-no-repeat bg-cover h-[700px] flex items-center justify-center">
        <div className="container flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-16 h-full mt-[88px]">
          <div className="sm:flex-1 flex-none text-left sm:text-left flex-col">
            <h2 className="font-semibold text-[28px] sm:text-[32px] text-black mb-1">
              About Us
            </h2>
            <hr className="w-[40%] border-t-2 border-primary" />
            <p className="font-semibold text-[16px] sm:text-[20px] text-[#00000099] max-w-md mt-5">
              Building a promising career future through training and
              empowerment.Go confidently into the job market. We give you
              everything you need to create a strong resume, ace interviews, and
              discover your ideal opportunities. We also teach you the basics of
              programming
            </p>
          </div>
          <div className="sm:flex-1 flex-none">
            <AboutImg className="max-w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-[7rem]">
        <div className="text-center">
          <h1 className="font-semibold text-[32px]">Focus on goals to ensure success with effective results</h1>
          <p className="font-normal text-[1rem] text-[#00000099]">
            We guarantee success through reliable solutions that efficiently
            meet your aspirations
          </p>
        </div>

        <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 sm:gap-4 gap-12 mt-16">
            <div className="flex flex-col gap-4 text-center">
                <Team  className="w-full"/>

                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#113573] to-[#4B97F4] font-semibold text-[1.2rem]">Professional Team</h3>

                <p className="w-[75%] mx-auto">We are a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#113573] to-[#4B97F4] font-bold">Met2ashara</span> team, bringing you expertise in recruitment and technology, helping you build your career</p>
            </div>

            <div className="flex flex-col gap-4 text-center">
                <Target  className="w-full"/>

                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#113573] to-[#4B97F4] font-semibold text-[1.2rem]">Target Oriented</h3>

                <p className="w-[75%] mx-auto">We focus on achieving precisely defined goals by directing efforts and resources towards achieving effective results that meet our clients' expectations</p>
            </div>

            <div className="flex flex-col gap-4 text-center">
                <Success  className="w-full"/>

                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#113573] to-[#4B97F4] font-semibold text-[1.2rem]">Success Guarantee</h3>

                <p className="w-[75%] mx-auto">We guarantee success by providing reliable and effective solutions that achieve the desired results efficiently and confidently</p>
            </div>
        </div>
      </div>

      <div className={`${styles.hero___background} ${styles.section__background} py-[5.5rem]`}>
        <div className="container mx-auto flex sm:flex-row flex-col-reverse sm:gap-8 gap-0">
            <div className="sm:flex-1 flex-0">
                <Different className="w-full"/>
            </div>

            <div className="flex flex-col gap-10 sm:flex-1 flex-0">
                <div className="flex flex-col gap-4">
                    <h2 className="font-bold text-[2rem]">What Makes Us <br /> Different From Other</h2>
                    <p className="font-normal text-[1rem] text-[#00000099]">We offer a variety of features and precise features to meet your many needs.</p>
                </div>

                <div className="flex flex-col justify-between h-full gap-10">
                    <div className="flex items-center gap-4">
                        <div>
                            <Filter />
                        </div>

                        <p className="font-medium text-[#00000099] text-[1.2rem]">Filter companies: according to student admission, required majors, number of employees, products, and methodology.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div>
                            <CV />
                        </div>

                        <p className="font-medium text-[#00000099] text-[1.2rem]">CV analysis: Verify CV compatibility with the ATS system and provide recommendations for improvement</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div>
                            <Course />
                        </div>

                        <p className="font-medium text-[#00000099] text-[1.2rem]">Training courses: Providing educational content to learn the basics of programming to enhance users’ skills and improve their opportunities in the labor market.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="py-[5.5rem]">
        <div className="container mx-auto flex items-center sm:flex-row flex-col-reverse sm:gap-8 gap-0">
            <div className="flex flex-col gap-10 sm:flex-1 flex-0">
                <div className="flex flex-col gap-4 sm:w-[85%] w-[95%] ml-auto">
                    <h2 className="font-bold text-[2rem]">Resume review and mock interview with experts</h2>
                </div>

                <div className="flex flex-col gap-10 sm:w-[85%] w-[95%] ml-auto">
                    <div className="flex items-center gap-4">
                        <p className="font-bold text-black text-[1.2rem]">Benefit from professionals' expertise in resume evaluation and mock interviews</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <p className="font-bold text-black text-[1.2rem]">We provide a thorough review of your resume to identify strengths and weaknesses</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <p className="font-bold text-black text-[1.2rem]">Schedule your interview with experts after receiving feedback and guidance</p>
                    </div>
                </div>
            </div>

            <div className="sm:flex-1 flex-0">
                <Resume className="w-full"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
