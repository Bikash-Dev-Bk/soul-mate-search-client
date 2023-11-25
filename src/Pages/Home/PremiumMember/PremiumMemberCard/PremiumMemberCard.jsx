import PropTypes from "prop-types";

const PremiumMemberCard = ({ member }) => {
  const { biodataType, profileImage, permanentDivision, age, occupation } =
    member;
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
        <button className="w-full py-3 rounded-lg  text-white bg-[#D70F64] hover:bg-transparent border-2 border-[#D70F64] hover:text-[#D70F64] mt-4">
          View Profile
        </button>
      </div>
    </div>
  );
};

PremiumMemberCard.propTypes = {
  member: PropTypes.object.isRequired,
};

export default PremiumMemberCard;
