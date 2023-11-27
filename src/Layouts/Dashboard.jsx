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
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-80 min-h-screen bg-[#04AA6D]">
        <ul className="menu p-4">
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
          <hr className="h-[2px] bg-white my-8" />
          <li className="mt-3 hover:text-white ">
                <NavLink
                  to="/"
                  className={`${
                    activeRoute === "/" &&
                    "text-white font-bold  !bg-inherit "
                  }`}
                >
                  <p className="flex gap-2  items-center">
                    <FaHome/>
                    Home
                  </p>
                </NavLink>
              </li>
          <li className="mt-3 flex gap-2 items-center hover:text-white">
            <MdLogout />
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
