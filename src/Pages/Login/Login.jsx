import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/logo/logo.png";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, signInWithGoogle } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setPasswordError("");

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Logged in Successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setPasswordError(error.message);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle().then((result) => {
      console.log(result.user);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User Logged in Successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="bg-gray-200 pt-6 pb-12 px-4">
      <Helmet>
        <title>Soul Mate Search | Login</title>
      </Helmet>
      <div className=" flex-col ">
        <div className="flex flex-col justify-center items-center text-center lg:text-left">
          <img src={logo} alt="logo" className="w-[80px] mb-2" />
          <h2 className=" mb-5 text-2xl font-bold">Login to your account</h2>
        </div>
        <div className=" w-full md:w-[450px] mx-auto bg-white rounded-xl mt-5 p-8 ">
          <form onSubmit={handleSubmit} className="">
            <div className="">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Email
              </div>
              <input
                type="email"
                name="email"
                placeholder="Type your email"
                className="w-full text-sm py-2 border-b-2 border-[#04AA6D] focus:outline-none"
                required
              />
            </div>

            <div className=" mt-5 ">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Password
              </div>
              <input
                type="password"
                name="password"
                placeholder="Type your password"
                className="w-full text-sm py-2 border-b-2 border-[#04AA6D] focus:outline-none"
                required
              />
            </div>

            {passwordError && <p className="text-red-500">{passwordError}</p>}

            <div className=" mt-5 ">
              <button className="w-full py-2 rounded-lg  text-white bg-[#04AA6D] hover:bg-transparent border-2 border-[#04AA6D] hover:text-[#04AA6D]">
                Login
              </button>
            </div>
            <p className="flex items-center justify-center space-x-2 my-5">
              <span className="h-px bg-gray-400 w-14"></span>
              <span className="font-normal text-[#04AA6D]">Or Login with</span>
              <span className="h-px bg-gray-400 w-14"></span>
            </p>
            <button
              onClick={handleSignInWithGoogle}
              className="w-full flex items-center justify-center py-2 rounded-lg border-2 border-[#04AA6D]  hover:bg-[#04AA6D] hover:text-white"
            >
              <FcGoogle className="text-xl" />{" "}
              <span className="ml-2">Google</span>{" "}
            </button>
          </form>
          <p className="text-center mt-3">
            New in Soul Mate Search?
            <Link to="/signup" className="text-[#04AA6D] ml-2 font-bold">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
