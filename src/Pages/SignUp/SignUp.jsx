import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsPersonCircle } from "react-icons/bs";
import '../Login/Login.css';

const SignUp = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

  return (
    <div className="bg_image bg-base-200 pt-6 pb-12 px-4">
      <Helmet>
        <title>Soul Mate Search | Signup</title>
      </Helmet>
      <div className=" flex-col">
        <div className="flex flex-col justify-center items-center text-center lg:text-left text-white">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Welcome</h1>
          <span className=" mb-5 text-lg">Create Your account</span>
          <BsPersonCircle className="text-[80px]" />
        </div>
        <div className=" w-full md:w-[450px] mx-auto bg-white rounded-xl  bg-base-100 mt-10 p-8">
          <form 
        //   onSubmit={handleSubmit(onSubmit)} 
          className="">
            <div className="">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Your Name
              </div>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="w-full text-lg py-2 border-b-2 border-[#D70F64] focus:outline-none"
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
                className="w-full text-lg py-2 border-b-2 border-[#D70F64] focus:outline-none"
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
                className="w-full text-lg py-2 border-b-2 border-[#D70F64] focus:outline-none"
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
                className="w-full text-lg py-2 border-b-2 border-[#D70F64] focus:outline-none"
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
              <button className="w-full py-3 rounded-lg  text-white bg-[#D70F64] hover:bg-transparent border-2 border-[#D70F64] hover:text-[#D70F64]">
                Register
              </button>
            </div>
            <p className="flex items-center justify-center space-x-2 my-2">
              <span className="h-px bg-gray-400 w-14"></span>
              <span className="font-normal text-[#D70F64]">Or Login with</span>
              <span className="h-px bg-gray-400 w-14"></span>
            </p>
            <button
            //   onClick={handleSignInWithGoogle}
              className="w-full flex items-center justify-center py-3 rounded-lg border-2 border-[#D70F64]  hover:bg-[#D70F64] hover:text-white"
            >
              <FcGoogle className="text-2xl" />{" "}
              <span className="ml-2">Google</span>{" "}
            </button>
          </form>
          <p className="text-center mt-3">
            Already have an account?
            <Link to="/login" className="text-[#D70F64] font-bold ml-2">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
