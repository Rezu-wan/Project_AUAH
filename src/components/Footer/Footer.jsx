// import logo from "../../assets/";
import logo from "../../assets/baust.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="bg-[#1c5aaa]">
        <div className="border-2 border-[hsl(73,72%,45%)]"></div>

        <footer className="footer container mx-auto  p-10 text-xl font-bold text-[#000000]">
          <aside>
            <Link to={"/"}>
              <div className="w-36">
                <img src={logo} alt="" />
              </div>
            </Link>
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
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
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              ACME Industries Ltd
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default Footer;
