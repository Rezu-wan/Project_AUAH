// import logo from "../../assets/";
import logo from "../../image/logo/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="bg-[#1c5aaa]">
        <div className="border-2 border-[hsl(73,72%,45%)]"></div>
        <footer className="footer container mx-auto  p-10 text-xl font-bold text-[#bee091]">
          <aside>
            <Link to={"/"}>
              <div className="w-36">
                <img src={logo} alt="" />
              </div>
            </Link>
            <p className="text-2xl text-[#8f9afc]">Abbas Uddin Ahmed Hall</p>
          </aside>
          <nav>
            <h6 className="footer-title">Others Hall</h6>
            <a className="link link-hover">Zikrul Hall</a>
            <a className="link link-hover">Taramon Bi Bi</a>
            {/* <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a> */}
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <div className="border-2 border-[hsl(73,72%,45%)]"></div>
        {/* --------------------  */}
        <footer className="footer footer-center bg-[#2381c0] text-base-content p-4">
          <aside>
            <div className="text-xl font-bold text-[#a01818] flex flex-col md:flex-row gap-2">
              <p className="text-start md:text-center">Copyright © </p>
              <p className="text-[#37ebf1]"> Abbas Uddin Ahmed Hall</p>
            </div>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default Footer;
