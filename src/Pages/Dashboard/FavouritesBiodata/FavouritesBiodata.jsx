import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import DashBoardHeroPages from "../../../components/DashBoardHeroPages/DashBoardHeroPages";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const FavouritesBiodata = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: myFavBiodata = [], refetch } = useQuery({
    queryKey: ["myFavBiodata"],
    queryFn: async () => {
      const res = await axiosPublic.get(`favourites/${user?.email}`);
      return res.data;
    },
  });


  const handleDeleteFavorite = (favorite) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/favourites/${favorite._id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${favorite.name} has been deleted from favourite list.`,
              icon: "success",
            });
          }
        });
      }
    });
  };


  return (
    <div>
      <DashBoardHeroPages name="Favourites Bio Data"></DashBoardHeroPages>
      <div className="max-w-[1280px] mx-auto my-12 p-5">
        <table className="w-full leading-normal font-semibold my-12 p-12">
          <thead className="font-bold">
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-500 bg-gray-200 text-left text-md  text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-500 bg-gray-200 text-left text-md  text-gray-700 uppercase tracking-wider">
                Biodata Id
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-500 bg-gray-200 text-left text-md  text-gray-700 uppercase tracking-wider">
                Permanent Address
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-500 bg-gray-200 text-left text-md  text-gray-700 uppercase tracking-wider">
                Occupation
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-500 bg-gray-200 text-left text-md  text-gray-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {myFavBiodata.map((favorite) => (
              <tr key={favorite._id}>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {favorite.name}
                </td>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {favorite.biodataId}
                </td>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {favorite.permanentDivision}
                </td>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {favorite.occupation}
                </td>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  <button 
                  className="text-red-600 hover:text-gray-300 bg-gray-300 hover:bg-red-600 p-4 rounded-full"
                  
                  onClick={() => handleDeleteFavorite(favorite)}
                  >
                    <FaTrashAlt className=""></FaTrashAlt>
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

export default FavouritesBiodata;
