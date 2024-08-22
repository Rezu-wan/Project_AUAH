import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/nav.png";

const Navigation = () => {
  const link = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-xl font-bold ${
            isActive ? "text-green-400 underline " : "text-[#000]"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/MillStatus"
        className={({ isActive }) =>
          `text-xl font-bold ${
            isActive ? "text-green-500 underline " : "text-[#000]"
          }`
        }
      >
        Meals
      </NavLink>
      <NavLink
        to="/Registration"
        className={({ isActive }) =>
          `text-xl font-bold ${
            isActive ? "text-green-500 underline " : "text-[#000]"
          }`
        }
      >
        Registration
      </NavLink>
      <NavLink
        to="/office"
        className={({ isActive }) =>
          `text-xl font-bold ${
            isActive ? "text-green-600 underline " : "text-[#000]"
          }`
        }
      >
        Office
      </NavLink>
    </>
  );
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="navbar container mx-auto py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link to={"/"}>
            <div className="flex items-end">
              <img className="w-20" src={logo} alt="" />
              <p className="btn btn-ghost text-4xl font-bold hover:bg-white">
                Abbus Uddin Ahmed Hall
                <span className="text-[#83ff78d7] text-xl mt-1">(BAUST)</span>
              </p>
            </div>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex gap-x-10 px-2 text-xl">{link}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
