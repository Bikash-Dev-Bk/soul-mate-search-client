import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="relative banner_bg">
      <div className="overlay"></div>
      <div className="max-w-5xl h-full mx-auto text-center flex justify-center items-center  z-10 relative">
        <div className="mt-56">
          <h2 className="text-white font-bold text-2xl lg:text-4xl">
            Trusted Matrimony & Matchmaking Service
          </h2>
          <Link to="/biodatas">
            <button className="w-36 py-3 text-white bg-[#04AA6D] hover:bg-transparent border-2 border-[#04AA6D] hover:text-[#04AA6D] mt-5">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
