import { useEffect } from "react";
import DashBoardHeroPages from "../../../components/DashBoardHeroPages/DashBoardHeroPages";
import { useState } from "react";

const ManageUsers = () => {
  const [biodatas, setBiodatas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/biodatas")
      .then((res) => res.json())
      .then((data) => {
        setBiodatas(data);
      });
  }, []);

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
                  className="text-red-600 hover:text-gray-300 bg-gray-300 hover:bg-red-600 p-4 rounded-full"
                  
                //   onClick={() => handleDeletebiodata(biodata)}
                  >
                    Admin
                  </button>
                </td>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  <button 
                  className="text-red-600 hover:text-gray-300 bg-gray-300 hover:bg-red-600 p-4 rounded-full"
                  
                //   onClick={() => handleDeletebiodata(biodata)}
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

export default ManageUsers;
