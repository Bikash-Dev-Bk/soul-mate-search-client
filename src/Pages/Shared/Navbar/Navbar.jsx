import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../../assets/logo/logo.png";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={`${
            activeRoute === "/" && "!text-[#04AA6D] font-bold  !bg-inherit"
          }`}
        >
          Home
        </NavLink>
      </li>
      <li className="hover:text-[#04AA6D]">
        <NavLink
          to="/biodatas"
          className={`${
            activeRoute === "/biodatas" &&
            "!text-[#04AA6D] font-bold  !bg-inherit"
          }`}
        >
          Biodatas
        </NavLink>
      </li>
      <li className="hover:text-[#04AA6D]">
        {" "}
        <NavLink
          to="/about"
          className={`${
            activeRoute === "/about" && "!text-[#04AA6D] font-bold  !bg-inherit"
          }`}
        >
          About
        </NavLink>
      </li>
      <li className="hover:text-[#04AA6D]">
        {" "}
        <NavLink
          to="/contact"
          className={`${
            activeRoute === "/contact" &&
            "!text-[#04AA6D] font-bold  !bg-inherit"
          }`}
        >
          Contact
        </NavLink>
      </li>
      <li className="hover:text-[#04AA6D]">
        {" "}
        <NavLink
          to="/login"
          className={`${
            activeRoute === "/login" && "!text-[#04AA6D] font-bold  !bg-inherit"
          }`}
        >
          Login
        </NavLink>
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
            className="text-3xl absolute top-8 right-5 cursor-pointer transition-all duration-300 hover:text-[#04AA6D]"
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
              <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="logo-img" className="" />
              </NavLink>
            </div>
            <ul className="hidden lg:flex list-none text-black font-bold text-lg gap-5 ">
              {navLinks}
            </ul>

            {/* mobile */}
            <div
              className="text-3xl flex lg:hidden cursor-pointer transition-all duration-300 hover:text-[#04AA6D] "
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
