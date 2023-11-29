import DashBoardHeroPages from "../../../components/DashBoardHeroPages/DashBoardHeroPages";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { data: biodatas = [], refetch } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodatas");
      return res.data;
    },
  });

  const handleMakeAdmin = (biodata) => {
    axiosSecure.patch(`/users/admin/${biodata.contactEmail}`)
    .then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Now ${biodata.name} is an Admin!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleMakePremium = (biodata) => {
    axiosSecure
      .patch(`/biodatas/premium/${biodata.contactEmail}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
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
      <DashBoardHeroPages name="Manage Users"></DashBoardHeroPages>
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
                Make Admin
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-500 bg-gray-200 text-left text-md  text-gray-700 uppercase tracking-wider">
                Make Premium
              </th>
            </tr>
          </thead>
          <tbody>
            {biodatas.map((biodata) => (
              <tr key={biodata._id}>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {biodata.name}
                </td>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {biodata.contactEmail}
                </td>

                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  
                    <button
                      className="hover:text-white text-[#04AA6D] hover:bg-[#04AA6D] bg-white border-2 border-[#04AA6D] px-4 py-2 rounded-full"
                      onClick={() => handleMakeAdmin(biodata)}
                    >
                      Admin
                    </button>
                  
                </td>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {biodata.isPremium === true ? (
                    <p className="text-[#04AA6D]">Premium Member</p>
                  ) : (
                    <button
                      className="text-white hover:text-[#04AA6D] bg-[#04AA6D] hover:bg-white border-2 border-[#04AA6D] px-4 py-2 rounded-full"
                      onClick={() => handleMakePremium(biodata)}
                    >
                      Premium
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
