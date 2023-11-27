import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const dateTime = new Date().getFullYear();
  return (
    <div className="bg-[#04AA6D] text-white py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto  p-5">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between text-justify">
          <div className="flex-1 flex flex-col ">
            <h2 className="text-2xl font-semibold">Soul Mate Search</h2>
            <p className="">Elevate your journey with <span className="font-semibold">Soul Mate Search</span>. Discover meaningful connections in a secure, diverse community. Let us be part of your love story. Join us today for an enriching experience.</p>
          </div>
          <div className="flex-1 flex flex-col mt-5 lg:ml-20">
            <Link to="/about">About Us</Link>
            <Link>Blog</Link>
            <Link>Careers</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="flex-1 flex flex-col mt-5 lg:ml-20">
            <Link>Terms of Use</Link>
            <Link>Privacy Policy</Link>
            <Link>Be Safe Online</Link>
            <Link>Report Misuse</Link>
          </div>
          <div className="flex-1 flex flex-col mt-5 lg:ml-20">
            <Link to="/login">Member Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link>Partner Search</Link>
            <Link>Customer Support</Link>
          </div>
        </div>
        <div>
          <hr className="h-1 bg-white my-8" />
          <div className="flex gap-5 justify-center items-center text-3xl my-5">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
          <p className="text-center ">
            Copyright &copy; {dateTime} - All right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
