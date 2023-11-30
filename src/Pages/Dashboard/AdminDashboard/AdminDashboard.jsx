import DashBoardHeroPages from "../../../components/DashBoardHeroPages/DashBoardHeroPages";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Chart from "./Chart";

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();

  const [biodatas, setBiodatas] = useState([]);
  const [maleBiodatas, setMaleBiodatas] = useState([]);
  const [femaleBiodatas, setFemaleBiodatas] = useState([]);
  const [premiumBiodatas, setPremiumBiodatas] = useState([]);

  useEffect(() => {
    fetch("https://soul-mate-search-server.vercel.app/biodatas")
      .then((res) => res.json())
      .then((data) => {
        const male = data.filter((biodata) => biodata.biodataType === "Male");
        const female = data.filter(
          (biodata) => biodata.biodataType === "Female"
        );
        const premium = data.filter((biodata) => biodata.isPremium === true);

        setMaleBiodatas(male);
        setFemaleBiodatas(female);
        setPremiumBiodatas(premium);
        setBiodatas(data);
      });
  }, []);

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
      <DashBoardHeroPages name="Admin Dashboard"></DashBoardHeroPages>
      <div className="max-w-[1280px] mx-auto my-12 p-5">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col justify-center items-center text-center bg-[#04AA6D] p-5 rounded-lg text-white">
            <h2 className="text-xl">Total Biodata</h2>
            <p className="text-3xl font-bold">{biodatas.length}</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-[#04AA6D] p-5 rounded-lg text-white">
            <h2 className="text-xl">Male Biodata</h2>
            <p className="text-3xl font-bold">{maleBiodatas.length}</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-[#04AA6D] p-5 rounded-lg text-white">
            <h2 className="text-xl">Female Biodata</h2>
            <p className="text-3xl font-bold">{femaleBiodatas.length}</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-[#04AA6D] p-5 rounded-lg text-white">
            <h2 className="text-xl">Premium Biodata</h2>
            <p className="text-3xl font-bold">{premiumBiodatas.length}</p>
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
          maleBiodatas={maleBiodatas}
          femaleBiodatas={femaleBiodatas}
          premiumBiodatas={premiumBiodatas}
        ></Chart>
      </div>
    </div>
  );
};

export default AdminDashboard;
