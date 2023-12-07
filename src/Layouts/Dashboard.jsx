import { useEffect, useState } from "react";
import { FaEye, FaEdit, FaHeart, FaUsersCog, FaHome } from "react-icons/fa";
import {
  MdOutlineWorkspacePremium,
  MdContactEmergency,
  MdLogout,
} from "react-icons/md";
import { GiHelp } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import HeroPages from "../components/HeroPages/HeroPages";
import useAdmin from "../hooks/useAdmin";
import { BsFillPeopleFill } from "react-icons/bs";

const Dashboard = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  const [isAdmin] = useAdmin();

  return (
    <div className="max-w-[1550px] mx-auto flex flex-col md:flex-row">
      {/* dashboard side bar */}
      <div className="w-full md:w-64 lg:w-80 lg:min-h-screen bg-[#04AA6D]">
        <ul className=" p-4 md:fixed">
          {isAdmin ? (
            <>
              <li className="mt-3 hover:text-white">
                <NavLink
                  to="/dashboard/adminDashboard"
                  className={`${
                    activeRoute === "/dashboard/adminDashboard" &&
                    "text-white font-bold  !bg-inherit "
                  }`}
                >
                  <p className="flex gap-2  items-center">
                    <RxDashboard />
                    Admin Dashboard
                  </p>
                </NavLink>
              </li>
              <li className="mt-3 hover:text-white">
                <NavLink
                  to="/dashboard/manageUsers"
                  className={`${
                    activeRoute === "/dashboard/manageUsers" &&
                    "text-white font-bold  !bg-inherit "
                  }`}
                >
                  <p className="flex gap-2  items-center">
                    <FaUsersCog />
                    Manage Users
                  </p>
                </NavLink>
              </li>
              <li className="mt-3 hover:text-white">
                <NavLink
                  to="/dashboard/approvedPremium"
                  className={`${
                    activeRoute === "/dashboard/approvedPremium" &&
                    "text-white font-bold  !bg-inherit "
                  }`}
                >
                  <p className="flex gap-2  items-center">
                    <MdOutlineWorkspacePremium />
                    Approved Premium
                  </p>
                </NavLink>
              </li>
              <li className="mt-3 hover:text-white">
                <NavLink
                  to="/dashboard/approvedContactRequest"
                  className={`${
                    activeRoute === "/dashboard/approvedContactRequest" &&
                    "text-white font-bold  !bg-inherit "
                  }`}
                >
                  <p className="flex gap-2  items-center">
                    <MdContactEmergency />
                    Approved Contact Request
                  </p>
                </NavLink>
              </li>
              <li className="mt-3 hover:text-white">
                <NavLink
                  to="/dashboard/successStory"
                  className={`${
                    activeRoute === "/dashboard/successStory" &&
                    "text-white font-bold  !bg-inherit "
                  }`}
                >
                  <p className="flex gap-2  items-center">
                    <BsFillPeopleFill />
                    Success Story
                  </p>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="mt-3 hover:text-white ">
                <NavLink
                  to="/dashboard/editBioData"
                  className={`${
                    activeRoute === "/dashboard/editBioData" &&
                    "text-white font-bold  !bg-inherit "
                  }`}
                >
                  <p className="flex gap-2  items-center">
                    <FaEdit></FaEdit>
                    Edit Bio Data
                  </p>
                </NavLink>
              </li>
              <li className="mt-3 hover:text-white">
                <NavLink
                  to="/dashboard/viewBioData"
                  className={`${
                    activeRoute === "/dashboard/viewBioData" &&
                    "text-white font-bold  !bg-inherit "
                  }`}
                >
                  <p className="flex gap-2  items-center">
                    <FaEye />
                    View Bio Data
                  </p>
                </NavLink>
              </li>

              <li className="mt-3 hover:text-white">
                <NavLink
                  to="/dashboard/myContactRequest"
                  className={`${
                    activeRoute === "/dashboard/myContactRequest" &&
                    "text-white font-bold  !bg-inherit "
                  }`}
                >
                  <p className="flex gap-2  items-center">
                    <GiHelp />
                    My Contact Request
                  </p>
                </NavLink>
              </li>
              <li className="mt-3 hover:text-white">
                <NavLink
                  to="/dashboard/favouritesBioData"
                  className={`${
                    activeRoute === "/dashboard/favouritesBioData" &&
                    "text-white font-bold  !bg-inherit "
                  }`}
                >
                  <p className="flex gap-2  items-center">
                    <FaHeart />
                    Favourites Bio Data
                  </p>
                </NavLink>
              </li>
              <li className="mt-3 hover:text-white">
                <NavLink
                  to="/dashboard/gotMarried"
                  className={`${
                    activeRoute === "/dashboard/gotMarried" &&
                    "text-white font-bold  !bg-inherit "
                  }`}
                >
                  <p className="flex gap-2  items-center">
                    <BsFillPeopleFill />
                    Got Married
                  </p>
                </NavLink>
              </li>
            </>
          )}

          <li className="mt-3 hover:text-white ">
            <NavLink to="/">
              <p className="flex gap-2  items-center">
                <FaHome />
                Home
              </p>
            </NavLink>
          </li>

          <button
            onClick={handleLogOut}
            className="w-full lg:w-3/4 mt-8 flex justify-center gap-2 items-center  font-semibold border  py-2 text-lg bg-white border-[#04AA6D] text-[#04AA6D] hover:bg-red-600 hover:text-white hover:border-red-500"
          >
            <MdLogout />
            Logout
          </button>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        {location.pathname == "/dashboard" && (
          <div>
            <HeroPages name="DashBoard"></HeroPages>
            <div className="flex justify-center items-center h-64 p-4">
              <h2 className="text-2xl">
                <span className="font-bold">{user.displayName}</span>,{" "}
                <span className="font-semibold">Welcome to Dashboard!!</span>
              </h2>
            </div>
          </div>
        )}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
