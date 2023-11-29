import { useEffect } from "react";
import DashBoardHeroPages from "../../../components/DashBoardHeroPages/DashBoardHeroPages";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ApprovedPremium = () => {
  const axiosSecure = useAxiosSecure();

  const [approvedPremium, setApprovedPremium] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/biodatas")
      .then((res) => res.json())
      .then((data) => {
        const premium = data.filter(
          (biodata) => biodata.isPremium === "Requested"
        );
        setApprovedPremium(premium);
      });
  }, []);


  const handleMakePremium = (biodata) => {
    axiosSecure
      .patch(`/biodatas/premium/${biodata.contactEmail}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Now ${biodata.name} Premium Member!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <DashBoardHeroPages name="Approved Premium"></DashBoardHeroPages>
      <div className="max-w-[1280px] mx-auto my-12 p-5">
        <table className="w-full leading-normal font-semibold my-12 p-12">
          <thead className="font-bold">
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-500 bg-gray-200 text-left text-md  text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-500 bg-gray-200 text-left text-md  text-gray-700 uppercase tracking-wider">
                Email
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-500 bg-gray-200 text-left text-md  text-gray-700 uppercase tracking-wider">
                Biodata Id
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-500 bg-gray-200 text-left text-md  text-gray-700 uppercase tracking-wider">
                Make Premium
              </th>
            </tr>
          </thead>
          <tbody>
            {approvedPremium.map((biodata) => (
              <tr key={biodata._id}>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {biodata.name}
                </td>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {biodata.contactEmail}
                </td>

                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {biodata.biodataId}
                </td>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  <button
                    className="text-white hover:text-[#04AA6D] bg-[#04AA6D] hover:bg-white border-2 border-[#04AA6D] px-4 py-2 rounded-full"
                    onClick={() => handleMakePremium(biodata)}
                  >
                    Premium
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedPremium;
