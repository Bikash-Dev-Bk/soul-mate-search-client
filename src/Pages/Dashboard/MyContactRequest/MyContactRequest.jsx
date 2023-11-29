import { useQuery } from "@tanstack/react-query";
import DashBoardHeroPages from "../../../components/DashBoardHeroPages/DashBoardHeroPages";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";



const MyContactRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  

  return (
    <div>
      <DashBoardHeroPages name="My Contact Request"></DashBoardHeroPages>
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
                Status
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-500 bg-gray-200 text-left text-md  text-gray-700 uppercase tracking-wider">
               Mobile No.
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-500 bg-gray-200 text-left text-md  text-gray-700 uppercase tracking-wider">
                Email
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-500 bg-gray-200 text-left text-md  text-gray-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment._id}>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {payment.userBiodataName}
                </td>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {payment.userBiodataId}
                </td>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {payment.status}
                </td>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {payment.userBiodataMobile}
                </td>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {payment.userBiodataEmail}
                </td>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  <button
                    className="text-red-600 hover:text-gray-300 bg-gray-300 hover:bg-red-600 p-4 rounded-full"
                    // onClick={() => handleDeletePayment(payment)}
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

export default MyContactRequest;
