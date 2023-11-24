import { Link } from "react-router-dom";
import Logo from "../../../assets/logo/logo.png";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const dateTime = new Date().getFullYear();
  return (
    <div className="max-w-[1280px] mx-auto p-5">
      <div className="flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center">
          <img src={Logo} alt="" className="w-64" />
          <h2 className="text-2xl font-semibold">Soul Mate Search</h2>
        </div>
        <div className="flex flex-col mt-16">
          <Link to="/about">About Us</Link>
          <Link>Blog</Link>
          <Link>Careers</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="flex flex-col mt-16">
          <Link>Terms of Use</Link>
          <Link>Privacy Policy</Link>
          <Link>Be Safe Online</Link>
          <Link>Report Misuse</Link>
        </div>
        <div className="flex flex-col mt-16">
          <Link to="/login">Member Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link>Partner Search</Link>
          <Link>Customer Support</Link>
        </div>
      </div>
      <div>
        <hr className="h-1 bg-gray-800 my-8" />
        <div className="flex gap-5 justify-center items-center text-3xl my-5">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>
        <p className="text-center mb-10">
          Copyright &copy; {dateTime} - All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
