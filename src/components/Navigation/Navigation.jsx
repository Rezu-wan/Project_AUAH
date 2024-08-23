import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Navigation = () => {
  const link = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-xl font-bold ${
            isActive ? "text-[#3454ac] underline " : "text-[#000]"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/MillStatus"
        className={({ isActive }) =>
          `text-xl font-bold ${
            isActive ? "text-[#3454ac] underline " : "text-[#000]"
          }`
        }
      >
        Meals
      </NavLink>
      <NavLink
        to="/Login"
        className={({ isActive }) =>
          `text-xl font-bold ${
            isActive ? "text-[#3454ac] underline " : "text-[#000]"
          }`
        }
      >
        Login
      </NavLink>
      {/* <NavLink
        to="/Registration"
        className={({ isActive }) =>
          `text-xl font-bold ${
            isActive ? "text-[#3454ac] underline " : "text-[#000]"
          }`
        }
      >
        Registration
      </NavLink> */}
      <NavLink
        to="/Office"
        className={({ isActive }) =>
          `text-xl font-bold ${
            isActive ? "text-[#3454ac] underline  " : "text-[#000]"
          }`
        }
      >
        <span>Office Login</span>
      </NavLink>
    </>
  );
  return (
    <div className="bg-gradient-to-r from-[#22882a] to-[#53bcdb]">
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
              <img className="md:w-20 w-14" src={logo} alt="" />
              <p className="btn btn-ghost md:text-4xl font-bold hover:bg-transparent">
                Abbus Uddin Ahmed Hall
                <span className="text-[#57f80cd7] md:text-xl md:mt-1">
                  (BAUST)
                </span>
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
