import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Chart from "./Chart";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AdminDashboard = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { data: biodatas = [] } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodatas");
      return res.data;
    },
  });

  const male = biodatas.filter((biodata) => biodata.biodataType === "Male");
  const female = biodatas.filter((biodata) => biodata.biodataType === "Female");
  const premium = biodatas.filter((biodata) => biodata.isPremium === true);

  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments`);
      return res.data;
    },
  });

  const totalPrice = payments.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <div className="max-w-[1280px] mx-auto my-12 p-5">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col justify-center items-center text-center bg-[#04AA6D] p-5 rounded-lg text-white">
            <h2 className="text-xl">Total Biodata</h2>
            <p className="text-3xl font-bold">{biodatas.length}</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-[#04AA6D] p-5 rounded-lg text-white">
            <h2 className="text-xl">Male Biodata</h2>
            <p className="text-3xl font-bold">{male.length}</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-[#04AA6D] p-5 rounded-lg text-white">
            <h2 className="text-xl">Female Biodata</h2>
            <p className="text-3xl font-bold">{female.length}</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-[#04AA6D] p-5 rounded-lg text-white">
            <h2 className="text-xl">Premium Biodata</h2>
            <p className="text-3xl font-bold">{premium.length}</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-[#04AA6D] p-5 rounded-lg text-white">
            <h2 className="text-xl">Total Revenue</h2>
            <p>
              {" "}
              <span className="text-3xl font-bold">{totalPrice}</span>{" "}
              <span className="font-semibold">BDT</span>
            </p>
          </div>
        </div>
        <Chart
          biodatas={biodatas}
          maleBiodatas={male}
          femaleBiodatas={female}
          premiumBiodatas={premium}
        ></Chart>
      </div>
    </div>
  );
};

export default AdminDashboard;
