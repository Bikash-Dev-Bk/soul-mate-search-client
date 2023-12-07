import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PremiumMemberCard = ({ member }) => {
  const {
    biodataType,
    profileImage,
    permanentDivision,
    age,
    occupation,
    biodataId,
  } = member;
  return (
    <div className="border-2 border-gray-200 hover:border-[#04AA6D]">
      <img src={profileImage} alt="" className="w-full " />
      <div className="p-2 text-sm">
        <h2>Gender: {biodataType}</h2>
        <p>Age: {age}</p>
        <p>Division: {permanentDivision}</p>
        <p>Occupation: {occupation}</p>
        <Link to={`/biodatas/details/${biodataId}`}>
          <button className="w-full py-3  text-white bg-[#04AA6D] hover:bg-transparent border-2 border-[#04AA6D] hover:text-[#04AA6D] mt-4">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

PremiumMemberCard.propTypes = {
  member: PropTypes.object.isRequired,
};

export default PremiumMemberCard;
