import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
const Root = () => {
  return (
    <>
      <Navigation></Navigation>
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
