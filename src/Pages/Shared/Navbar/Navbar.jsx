import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo/logo.png";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const navLinks = (
    <>
      <li className="hover:text-[#ff4d30]">
        <Link className="home-link" to="/">
          Home
        </Link>
      </li>
      <li className="hover:text-[#ff4d30]">
        <Link className="home-link" to="/biodatas">
          Biodatas
        </Link>
      </li>
      <li className="hover:text-[#ff4d30]">
        {" "}
        <Link className="about-link" to="/about">
          About
        </Link>
      </li>
      <li className="hover:text-[#ff4d30]">
        {" "}
        <Link className="contact-link" to="/contact">
          Contact
        </Link>
      </li>
      <li className="hover:text-[#ff4d30]">
        {" "}
        <Link to="/login">Login</Link>
      </li>
    </>
  );

  return (
    <>
      <nav>
        {/* mobile */}
        <div
          className={`flex flex-col w-full h-screen fixed top-0 left-full bg-white z-50 justify-center items-center transition-all duration-500 ease-in-out ${
            nav ? "open-nav " : ""
          }`}
        >
          <div
            onClick={openNav}
            className="text-3xl absolute top-8 right-5 cursor-pointer transition-all duration-300 hover:text-[#ff4d30]"
          >
            <GrClose />
          </div>
          <ul className=" flex flex-col list-none text-center gap-12 text-2xl font-semibold">
            {navLinks}
          </ul>
        </div>

        {/* desktop */}

        <div className="shadow-xl">
          <div className="max-w-[1280px] h-auto flex justify-between items-center bg-transparent lg:text-white mx-auto z-50 p-4 ">
            <div className="w-16">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="logo-img" className="" />
              </Link>
            </div>
            <ul className="hidden lg:flex list-none text-black font-bold text-lg gap-5 ">
              {navLinks}
            </ul>

            {/* mobile */}
            <div
              className="text-3xl flex lg:hidden cursor-pointer transition-all duration-300 hover:text-[#ff4d30] "
              onClick={openNav}
            >
              <FaBars />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
