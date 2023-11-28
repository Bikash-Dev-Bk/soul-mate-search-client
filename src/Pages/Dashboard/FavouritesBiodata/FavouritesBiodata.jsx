import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import DashBoardHeroPages from "../../../components/DashBoardHeroPages/DashBoardHeroPages";
import { FaTrashAlt } from "react-icons/fa";

const FavouritesBiodata = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: myFavBiodata = [] } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get(`favourites/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <DashBoardHeroPages name="Favourites Bio Data"></DashBoardHeroPages>
      <div className="px-10">
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
              <tr key={favorite.biodataId}>
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
                  // onClick={() => onDeleteButtonClick(favorite.biodataId)}
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
