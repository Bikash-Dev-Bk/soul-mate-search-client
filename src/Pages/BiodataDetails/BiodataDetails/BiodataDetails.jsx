import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const BiodataDetails = ({ biodata }) => {

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()

  const {
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

  

  const handleAddToFavourite = () => {
    const favBioData = {
      email: user.email,
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
    };

    axiosSecure.post("/favourites", favBioData)
    .then((res) => {
      
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${name} added to your Favourite List`,
          showConfirmButton: false,
          timer: 1500,
        });
        
      }
    });
  };


  return (
    <div className="shadow-2xl rounded-xl p-5">
      <div className="flex flex-col md:flex-row justify-center md:justify-between">
        <img
          src={profileImage}
          alt=""
          className="w-full md:w-1/2 rounded-xl border-2 border-[#04AA6D] "
        />
        <div className="font-semibold mt-5 md:mt-0">
          <h2 className="font-bold">Name: {name}</h2>
          <p>Age: {age}</p>
          <p>Weight: {weight} KG</p>
          <p>Height: {height} cm</p>
          <p>Gender: {biodataType}</p>
          <p>Date Of Birth: {dateOfBirth}</p>
          <p>Occupation: {occupation}</p>
          <button
            onClick={()=>handleAddToFavourite()}
            className="w-full py-3 rounded-lg  text-white bg-[#04AA6D] hover:bg-transparent border-2 border-[#04AA6D] hover:text-[#04AA6D] mt-4"
          >
            Add to Favourite
          </button>
        </div>
      </div>

      <div className="grid justify-between gap-5 grid-cols-1 md:grid-cols-2 mt-10 ">
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
          <p>Expected Partner Height: {expectedPartnerHeight} cm</p>
          <p>Expected Partner Weight: {expectedPartnerWeight} KG</p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Contact Details</h2>
          <p>Email: {contactEmail}</p>
          <p>Phone: {mobileNumber}</p>
        </div>
      </div>
      <div className="">
        <Link to={`/checkout/${biodataId}`}>
          <button className="w-1/2 md:w-full py-3 rounded-lg  text-white bg-[#04AA6D] hover:bg-transparent border-2 border-[#04AA6D] hover:text-[#04AA6D] mt-4">
            Request Contact Information
          </button>
        </Link>
      </div>
    </div>
  );
};

BiodataDetails.propTypes = {
  biodata: PropTypes.object.isRequired,
};

export default BiodataDetails;
