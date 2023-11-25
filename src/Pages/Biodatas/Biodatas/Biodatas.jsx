import AllBiodatas from "../AllBiodatas/AllBiodatas";
import "./Biodatas.css";

const Biodatas = () => {
  return (
    <div className="max-w-[1280px] mx-auto p-5 biodatas-container">
      <div>
        <h2>Search and filter</h2>
      </div>

      <AllBiodatas></AllBiodatas>
    </div>
  );
};

export default Biodatas;
