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
          <button className="w-36 py-3 rounded-lg  text-white bg-[#D70F64] hover:bg-transparent border-2 border-[#D70F64] hover:text-[#D70F64] mt-5">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
