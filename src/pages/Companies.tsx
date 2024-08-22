import Card from "@/src/components/common/Card";
import useGetCompanies from "@hooks/useGetCompanies";
import companysection from "@assets/svg/companysection.svg";
const Companies = () => {
  const { data, isLoading } = useGetCompanies();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="bg-[url('src/assets/svg/companybg.svg')] bg-no-repeat bg-cover h-[700px] flex items-center justify-center">
        <div className="container flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 h-full">
          <div className="sm:flex-1 flex-none text-center sm:text-left flex-col">
            <h2 className="font-semibold text-[28px] sm:text-[32px] text-black">
              Company
            </h2>
            <p className="font-semibold text-[16px] sm:text-[20px] text-[#00000099] max-w-md">
              We help students and recent graduates secure their first software
              engineering job by providing personalized learning paths and
              comprehensive support.
            </p>
          </div>
          <div className="sm:flex-1 flex-none">
            <img
              src={companysection}
              alt="companysection"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="my-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-secondary">
          Companies
        </h1>
        <div className="flex flex-wrap justify-center">
          {data!.map((companyData) => (
            <Card key={companyData.id} {...companyData} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Companies;
