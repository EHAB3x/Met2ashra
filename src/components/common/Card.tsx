import { Icompanies } from "@/src/interfaces/index";
import { NavLink } from "react-router-dom";

const Card = ({
  name,
  address,
  description,
  logo,
  industry,
  id,
}: Icompanies) => {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "text-white gradients" : "text-black";
  };

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white my-10 mx-8 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
      <div>
        <img
          className="w-full h-48 object-contain rounded-t-2xl"
          src={logo}
          alt={`${name} logo`}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-gray-800">{name}</div>
          <p className="inline-block bg-gradient-to-r from-sky-800 to-blue-900 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
            {address}
          </p>
          <p className="text-gray-700 text-base mt-2">{description}</p>
        </div>

        <div className="px-6 pt-4 pb-4">
          <span className="inline-block bg-gradient-to-r from-sky-800 to-blue-900 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
            {industry}
          </span>
        </div>
      </div>
      <div className="px-6 pb-6">
        <NavLink
          to={`/companies/${id}`}
          className={({ isActive }) =>
            `block text-center text-lg font-bold p-4 rounded-lg text-white gradients ${navLinkStyle(
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
