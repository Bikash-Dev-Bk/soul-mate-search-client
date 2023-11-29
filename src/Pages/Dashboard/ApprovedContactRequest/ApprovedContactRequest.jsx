import { useQuery } from "@tanstack/react-query";
import DashBoardHeroPages from "../../../components/DashBoardHeroPages/DashBoardHeroPages";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ApprovedContactRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });

  const handleApprovePayment = (payment) => {
    axiosSecure.patch(`/payments/${payment._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${payment.myBiodataName}'s Contact Request is Approved!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <DashBoardHeroPages name="Approved Contact Request"></DashBoardHeroPages>
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
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment._id}>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {payment.myBiodataName}
                </td>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {payment.myBiodataEmail}
                </td>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {payment.myBiodataId}
                </td>

                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {payment.status === "Approved" ? (
                    <p className="text-[#04AA6D]">Approved</p>
                  ) : (
                    <button
                      className="text-white hover:text-[#04AA6D] bg-[#04AA6D] hover:bg-white border-2 border-[#04AA6D] px-4 py-2 rounded-full"
                      onClick={() => handleApprovePayment(payment)}
                    >
                      Approve
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

export default ApprovedContactRequest;
