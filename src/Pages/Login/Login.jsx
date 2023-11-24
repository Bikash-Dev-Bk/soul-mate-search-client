import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsPersonCircle } from "react-icons/bs";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import "./Login.css";
import { useEffect, useState } from "react";

const Login = () => {
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);
      }, []);
    
      const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
          setDisabled(false);
        } else {
          setDisabled(true);
        }
      };

  return (
    <div className=" bg_image pt-6 pb-12 px-4">
      <Helmet>
        <title>Soul Mate Search | Login</title>
      </Helmet>
      <div className=" flex-col ">
        <div className="flex flex-col justify-center items-center text-center lg:text-left text-white">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Welcome</h1>
          <span className=" mb-5 text-lg">to Your account</span>
          <BsPersonCircle className="text-[80px]" />
        </div>
        <div className=" w-full md:w-[450px] mx-auto bg-white rounded-xl  bg-base-100 mt-10 p-8">
          <form
            //   onSubmit={handleSubmit}
            className=""
          >
            <div className=" mt-5">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Email
              </div>
              <input
                type="email"
                name="email"
                placeholder="Type your email"
                className="w-full text-lg py-2 border-b-2 border-[#D70F64] focus:outline-none"
                required
              />
            </div>

            <div className=" mt-5 mt-5">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Password
              </div>
              <input
                type="password"
                name="password"
                placeholder="Type your password"
                className="w-full text-lg py-2 border-b-2 border-[#D70F64] focus:outline-none"
                required
              />
            </div>
            <div className=" mt-5">
              <label className="label text-black mt-5">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                placeholder="Type the captcha above"
                className="w-full text-lg py-2 border-b-2 border-[#D70F64] focus:outline-none"
              />
            </div>

            {/* {passwordError && <p className="text-red-500">{passwordError}</p>} */}

            <div className=" mt-5 mt-6">
              <button
                disabled={disabled}
                className="w-full py-3 rounded-lg  text-white bg-[#D70F64] hover:bg-transparent border-2 border-[#D70F64] hover:text-[#D70F64]"
              >
                Login
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
            New in Soul Mate Search?
            <Link to="/signup" className="text-[#D70F64] ml-2 font-bold">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
