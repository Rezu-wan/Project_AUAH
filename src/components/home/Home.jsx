import { NavLink, Outlet } from "react-router-dom";
import "../../style/font.css";
// import pic from "../../image/hall_img.jpg";

const Home = () => {
  const link = (
    <>
      <li className="uniquifier p-2 rounded-xl font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <a>Menu</a>
      </li>
      <NavLink to={"/MillStatus"} className={""}>
        Meals
      </NavLink>
      <li>
        <a>About Us</a>
      </li>
      <li>
        <a>Office</a>
      </li>
      <NavLink to={"/Registration"}>Registration</NavLink>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 mx-auto container ">
        <div className="navbar-start">
          <div className="dropdown ">
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
          <NavLink to={"/"}>
            <p className="btn btn-ghost text-3xl font-bold ">
              Abbus Uddin Ahmed Hall
              <span className="text-green-400 text-xl mt-2">(Baust)</span>
            </p>
          </NavLink>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex gap-x-10 px-2 text-xl">{link}</ul>
        </div>
      </div>
      <Outlet />
      <div className="container mx-auto bg- h-screen">
        {/* <img className="" src={pic} /> */}
      </div>
    </>
  );
};

export default Home;
