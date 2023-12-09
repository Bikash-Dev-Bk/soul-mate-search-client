import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logo from '../../assets/logo/logo.png';
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, signInWithGoogle, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // create user entry in the database
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User created successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => console.log(error));
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
        <title>Soul Mate Search | Signup</title>
      </Helmet>
      <div className=" flex-col">
      <div className="flex flex-col justify-center items-center text-center lg:text-left">
          <img src={logo} alt="logo" className="w-[80px] mb-2" />
          <h2 className=" mb-5 text-2xl font-bold">Create your account</h2>
        </div>
        <div className=" w-full md:w-[450px] mx-auto bg-white rounded-xl mt-5 p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Your Name
              </div>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="w-full text-sm py-2 border-b-2 border-[#04AA6D] focus:outline-none"
              />
              {errors.name && (
                <span className="text-red-600 mt-2">Name is required</span>
              )}
            </div>

            <div className="  mt-5">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Your Photo URL
              </div>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="w-full text-sm py-2 border-b-2 border-[#04AA6D] focus:outline-none"
              />
              {errors.photoURL && (
                <span className="text-red-600 mt-2">Photo URL is required</span>
              )}
            </div>

            <div className="  mt-5">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Your Email
              </div>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="Email"
                className="w-full text-sm py-2 border-b-2 border-[#04AA6D] focus:outline-none"
              />
              {errors.email && (
                <span className="text-red-600 mt-2">Email is required</span>
              )}
            </div>

            <div className="  mt-5">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Your Password
              </div>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="Password"
                className="w-full text-sm py-2 border-b-2 border-[#04AA6D] focus:outline-none"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600 mt-2">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600 mt-2">
                  Password must be 6 characters
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600 mt-2">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600 mt-2">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </div>

            <div className="  mt-6">
              <button className="w-full py-2 rounded-lg  text-white bg-[#04AA6D] hover:bg-transparent border-2 border-[#04AA6D] hover:text-[#04AA6D]">
                Register
              </button>
            </div>
            <p className="flex items-center justify-center space-x-2 my-5">
              <span className="h-px bg-[#04AA6D] w-32"></span>
              <span className="font-normal text-[#04AA6D]">Or Login with</span>
              <span className="h-px bg-[#04AA6D] w-32"></span>
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
            Already have an account?
            <Link to="/login" className="text-[#04AA6D] font-bold ml-2">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
