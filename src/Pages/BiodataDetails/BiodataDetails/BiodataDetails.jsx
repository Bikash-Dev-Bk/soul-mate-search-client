import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BiodataDetails = ({ biodata }) => {
  const {
    _id,
    biodataId,
    name,
    biodataType,
    profileImage,
    dateOfBirth,
    age,
    occupation,
    weight,
    height,
    race,
    fathersName,
    mothersName,
    permanentDivision,
    presentDivision,
    expectedPartnerAge,
    expectedPartnerHeight,
    expectedPartnerWeight,
    mobileNumber,
    contactEmail,
  } = biodata;

  return (
    <div className="shadow-2xl rounded-xl p-5">
      <div className="flex justify-between">
        <img
          src={profileImage}
          alt=""
          className="w-1/2 rounded-xl border-2 border-[#D70F64] "
        />
        <div className="p-5 font-semibold">
          {/* <h2 className="text-2xl"> {name}</h2>
          <p>Age: {age}</p>
          <p>Present Division: {presentDivision}</p>
          <p>Occupation: {occupation}</p> */}
          <h2 className="font-bold">Name: {name}</h2>
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
          <p>Height: {height}</p>
          <p>Gender: {biodataType}</p>
          <p>Date Of Birth: {dateOfBirth}</p>
          <p>Occupation: {occupation}</p>
        </div>
      </div>

      <div className="grid justify-between gap-5 grid-cols-1 md:grid-cols-2 mt-5 ">
        <div>
          <h2 className="text-lg font-bold mb-2">Family Details</h2>
          <p>Fathers Name: {fathersName}</p>
          <p>Mothers Name: {mothersName}</p>
          <p>Race: {race}</p>
          <p>Present Division: {presentDivision}</p>
          <p>Permanent Division: {permanentDivision}</p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Expected Partner Details</h2>
          <p>Expected Partner Age: {expectedPartnerAge}</p>
          <p>Expected Partner Height: {expectedPartnerHeight}</p>
          <p>Expected Partner Weight: {expectedPartnerWeight}</p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Contact Details</h2>
          <p>Email: {contactEmail}</p>
          <p>Phone: {mobileNumber}</p>
        </div>
      </div>
      <Link to={`/checkout/${_id}`}>
        <button className="w-full py-3 rounded-lg  text-white bg-[#D70F64] hover:bg-transparent border-2 border-[#D70F64] hover:text-[#D70F64] mt-4">
          Request Contact Information
        </button>
      </Link>
    </div>
  );
};

BiodataDetails.propTypes = {
  biodata: PropTypes.object.isRequired,
};

export default BiodataDetails;
