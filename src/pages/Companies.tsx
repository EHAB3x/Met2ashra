import Card from "@/src/components/common/Card";
import useGetCompanies from "@hooks/useGetCompanies";
import companysection from "@assets/svg/companysection.svg";
import Hero from "@components/common/Hero";
import SkeletonCard from "@components/common/SkeletonCard";
const Companies = () => {
  const { data, isLoading } = useGetCompanies();
  if (isLoading) {
    return <SkeletonCard />;
  }
  return (
    <>
      <Hero
        title={"Companies"}
        img={companysection}
        text={
          "We help students and recent graduates secure their first software engineering job by providing personalized learning paths and comprehensive support"
        }
      />
      <div className="my-10">
        <h1 className="text-4xl font-bold text-center mb-6 text-black">
          Companies
        </h1>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data!.map((companyData) => (
            <Card key={companyData.id} {...companyData} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Companies;
