import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Biodatas from "../Pages/Biodatas/Biodatas/Biodatas";
import CheckOut from "../Pages/CheckOut/CheckOut";
import BiodataDetailsContainer from "../Pages/BiodataDetails/BiodataDetailsContainer/BiodataDetailsContainer";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Layouts/Dashboard";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ApprovedPremium from "../Pages/Dashboard/ApprovedPremium/ApprovedPremium";
import ApprovedContactRequest from "../Pages/Dashboard/ApprovedContactRequest/ApprovedContactRequest";
import EditBiodata from "../Pages/Dashboard/EditBiodata/EditBiodata";
import ViewBiodata from "../Pages/Dashboard/ViewBiodata/ViewBiodata";
import MyContactRequest from "../Pages/Dashboard/MyContactRequest/MyContactRequest";
import FavouritesBiodata from "../Pages/Dashboard/FavouritesBiodata/FavouritesBiodata";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/biodatas",
        element: <Biodatas></Biodatas>,
      },
      {
        path: "/biodatas/details/:id",
        element: (
          <PrivateRoute>
            <BiodataDetailsContainer></BiodataDetailsContainer>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/biodatas/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/biodatas/${params.id}`),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },

  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'editBioData',
        element: <EditBiodata></EditBiodata>
      },
      {
        path: 'viewBioData',
        element: <ViewBiodata></ViewBiodata>
      },

      {
        path: 'myContactRequest',
        element: <MyContactRequest></MyContactRequest>
      },
      {
        path: 'favouritesBioData',
        element: <FavouritesBiodata></FavouritesBiodata>
      },

      // admin routes
      {
        path: 'adminDashboard',
        element: <AdminDashboard></AdminDashboard>
      },
      {
        path: 'manageUsers',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: 'approvedPremium',
        element: <ApprovedPremium></ApprovedPremium>
      },
      {
        path: 'approvedContactRequest',
        element: <ApprovedContactRequest></ApprovedContactRequest>
      },
    ]
  }
]);
