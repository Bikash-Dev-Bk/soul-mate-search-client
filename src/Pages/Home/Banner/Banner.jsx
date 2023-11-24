import "./Banner.css";

const Banner = () => {
  return (
    <div className="relative banner_bg">
      <div className="content flex flex-col items-center absolute top-[60%] left-[10%] md:left-[22%] lg:left-[20%]">
        <h2 className="text-white font-bold text-2xl lg:text-5xl">
          Trusted Matrimony & Matchmaking Service
        </h2>
        <button className="w-36 py-3 rounded-lg  text-white bg-[#D70F64] hover:bg-transparent border-2 border-[#D70F64] hover:text-[#D70F64] mt-5">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Banner;
