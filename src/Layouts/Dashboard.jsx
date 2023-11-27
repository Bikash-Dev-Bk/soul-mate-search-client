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

const Dashboard = () => {
  const { logOut } = useAuth();

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

  const isAdmin = false;

  return (
    <div className="flex flex-col md:flex-row">
      {/* dashboard side bar */}
      <div className="w-full md:w-80 lg:min-h-screen bg-[#04AA6D]">
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
            className="w-full lg:w-3/4 mt-8 flex justify-center gap-2 items-center  font-semibold  rounded-lg border  py-2 text-lg bg-white border-[#04AA6D] text-[#04AA6D] hover:bg-red-500 hover:text-white hover:border-red-500"
          >
            <MdLogout />
            Logout
          </button>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
