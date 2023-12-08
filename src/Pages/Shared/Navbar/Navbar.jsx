import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../../assets/logo/logo.png";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import "./Navbar.css";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();

  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  const mobileNavLinks = (
    <>
      <li className="hover:text-[#04AA6D]">
        <NavLink
          onClick={openNav}
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
          onClick={openNav}
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
          onClick={openNav}
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
          onClick={openNav}
          to="/contact"
          className={`${
            activeRoute === "/contact" &&
            "!text-[#04AA6D] font-bold  !bg-inherit"
          }`}
        >
          Contact
        </NavLink>
      </li>
      {user ? (
        <>
          <li className="hover:text-[#04AA6D]">
            {" "}
            <NavLink
              onClick={openNav}
              to="/dashboard"
              className={`${
                activeRoute === "/dashboard" &&
                "!text-[#04AA6D] font-bold  !bg-inherit"
              }`}
            >
              DashBoard
            </NavLink>
          </li>

          <img
            src={user?.photoURL}
            alt="userPic"
            // style={{ height: "40px" }}
            className="flex justify-center items-center w-[60px] lg:w-[40px] rounded-full cursor-pointer border-2 border-[#04AA6D]"
          />
        </>
      ) : (
        <li className="hover:text-[#04AA6D]">
          {" "}
          <NavLink
            onClick={openNav}
            to="/login"
            className={`${
              activeRoute === "/login" &&
              "!text-[#04AA6D] font-bold  !bg-inherit"
            }`}
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  const navLinks = (
    <>
      <li className="hover:text-[#04AA6D]">
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
          to="/pricing"
          className={`${
            activeRoute === "/pricing" && "!text-[#04AA6D] font-bold  !bg-inherit"
          }`}
        >
          Pricing
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
      {user ? (
        <>
          <li className="hover:text-[#04AA6D]">
            {" "}
            <NavLink
              to="/dashboard"
              className={`${
                activeRoute === "/dashboard" &&
                "!text-[#04AA6D] font-bold  !bg-inherit"
              }`}
            >
              DashBoard
            </NavLink>
          </li>

          <img
            src={user?.photoURL}
            alt="userPic"
            // style={{ height: "40px" }}
            className="flex justify-center items-center w-[60px] lg:w-[40px] rounded-full cursor-pointer border-2 border-[#04AA6D]"
          />
        </>
      ) : (
        <li className="hover:text-[#04AA6D]">
          {" "}
          <NavLink
            to="/login"
            className={`${
              activeRoute === "/login" &&
              "!text-[#04AA6D] font-bold  !bg-inherit"
            }`}
          >
            Login
          </NavLink>
        </li>
      )}
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
          <ul className=" flex flex-col list-none justify-center items-center text-center gap-12 text-2xl font-semibold">
            {mobileNavLinks}
          </ul>
        </div>

        {/* desktop */}

        <div className="shadow-xl">
          <div className="max-w-[1280px] h-auto flex justify-between items-center bg-transparent lg:text-white mx-auto z-50 p-4 ">
            <div>
              <NavLink to="/">
                <div className="flex justify-center items-center">
                  <img src={Logo} alt="logo-img" className="w-16" />
                  <p className="text-black text-2xl font-bold">
                    Soul Mate Search
                  </p>
                </div>
              </NavLink>
            </div>
            <ul className="hidden lg:flex items-center list-none text-black font-bold text-lg gap-5 ">
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
