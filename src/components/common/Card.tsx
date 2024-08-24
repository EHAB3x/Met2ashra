import { Icompanies } from "@/src/interfaces/index";
import { NavLink } from "react-router-dom";
import { CiLocationOn, CiBoxList } from "react-icons/ci";

const Card = ({ name, address, logo, industry, id }: Icompanies) => {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "text-white gradients" : "text-black";
  };

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between gap-4">
      <div>
        <div className="bg-slate-200">
          {" "}
          <img
            className="w-[50%] h-[100px] object-contain rounded-t-2xl mx-auto p-4"
            src={logo}
            alt={`${name} logo`}
          />
        </div>
          <div className="px-6 text-transparent bg-clip-text bg-gradient-to-r from-[#113573] to-[#4B97F4] font-bold text-[1.2rem] uppercase mt-4">
            {name}
          </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="px-6">

          <p className="flex gap-2 items-center text-black rounded-full py-1 text-sm font-semibold">
            <CiLocationOn size="22"/>
            {address}
          </p>
        </div>

        <div className="px-6">
          <span className="flex gap-2 items-center text-black rounded-full py-1 text-sm font-semibold">
            <CiBoxList size="22"/>
            {industry}
          </span>
        </div>
      </div>
      <div className="px-6 pb-6">
        <NavLink
          to={`/companies/${id}`}
          className={({ isActive }) =>
            `block text-center text-[1rem] font-bold py-2 rounded-lg text-white gradients ${navLinkStyle(
              { isActive }
            )}`
          }
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
