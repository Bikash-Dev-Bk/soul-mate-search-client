import { FaUsers, FaFemale, FaMale } from "react-icons/fa";
import { MdOutlineDownloadDone } from "react-icons/md";
import "./SuccessCounter.css";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const SuccessCounter = () => {
  const axiosPublic = useAxiosPublic();

  const { data: marriageComplete = [] } = useQuery({
    queryKey: ["marriageComplete"],
    queryFn: async () => {
      const res = await axiosPublic.get("/stories");
      return res.data;
    },
  });

  const { data: biodatas = [] } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodatas");
      return res.data;
    },
  });

  const male = biodatas.filter((biodata) => biodata.biodataType === "Male");
  const female = biodatas.filter((biodata) => biodata.biodataType === "Female");

  return (
    <div className="bg-success bg-fixed max-w-[1280px] mx-auto my-32 p-5 md:12 lg:p-24">
      <h2 className="text-center text-3xl font-bold mb-12">
        We have a proven track record of success
      </h2>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between">
        <div className="flex flex-col justify-center items-center text-center bg-[#04AA6D] p-5 rounded-lg text-white">
          <FaUsers className="text-5xl" />
          <h2 className="text-2xl font-semibold my-2">Total Bio Data</h2>
          <h3 className="text-5xl font-bold">{biodatas.length}</h3>
        </div>
        <div className="flex flex-col justify-center items-center text-center bg-[#04AA6D] p-5 rounded-lg text-white">
          <FaFemale className="text-5xl" />
          <h2 className="text-2xl font-semibold my-2">Girls Bio Data</h2>
          <h3 className="text-5xl font-bold">{female.length}</h3>
        </div>
        <div className="flex flex-col justify-center items-center text-center bg-[#04AA6D] p-5 rounded-lg text-white">
          <FaMale className="text-5xl" />
          <h2 className="text-2xl font-semibold my-2">Boys Bio Data</h2>
          <h3 className="text-5xl font-bold">{male.length}</h3>
        </div>
        <div className="flex flex-col justify-center items-center text-center bg-[#04AA6D] p-5 rounded-lg text-white">
          <MdOutlineDownloadDone className="text-5xl" />
          <h2 className="text-2xl font-semibold my-2">Marriage Completed</h2>
          <h3 className="text-5xl font-bold">{marriageComplete.length}</h3>
        </div>
      </div>
    </div>
  );
};

export default SuccessCounter;
