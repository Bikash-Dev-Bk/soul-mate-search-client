import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BioDataCard = ({ data }) => {
  const { _id, biodataType, profileImage, permanentDivision, age, occupation } =
    data;
    
  return (
    <div className="shadow-2xl rounded-xl">
      <img
        src={profileImage}
        alt=""
        className="w-full rounded-tl-xl rounded-tr-xl"
      />
      <div className="p-5 font-semibold">
        <h2>Gender: {biodataType}</h2>
        <p>Age: {age}</p>
        <p>Division: {permanentDivision}</p>
        <p>Occupation: {occupation}</p>
        <Link to= {`/biodatas/details/${_id}`}>
          <button className="w-full py-3 rounded-lg  text-white bg-[#D70F64] hover:bg-transparent border-2 border-[#D70F64] hover:text-[#D70F64] mt-4">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

BioDataCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BioDataCard;
