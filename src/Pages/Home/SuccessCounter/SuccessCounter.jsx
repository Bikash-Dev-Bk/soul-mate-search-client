import { FaUsers, FaFemale, FaMale } from "react-icons/fa";
import { MdOutlineDownloadDone } from "react-icons/md";
import "./SuccessCounter.css";
import { useEffect, useState } from "react";

const SuccessCounter = () => {
  const [marriageComplete, setMarriageComplete] = useState([]);

  useEffect(() => {
    fetch("https://soul-mate-search-server.vercel.app/stories")
      .then((res) => res.json())
      .then((data) => {
        setMarriageComplete(data);
      });
  }, []);

  const [biodatas, setBiodatas] = useState([]);
  const [maleBiodatas, setMaleBiodatas] = useState([]);
  const [femaleBiodatas, setFemaleBiodatas] = useState([]);

  useEffect(() => {
    fetch("https://soul-mate-search-server.vercel.app/biodatas")
      .then((res) => res.json())
      .then((data) => {
        const male = data.filter((biodata) => biodata.biodataType === "Male");
        const female = data.filter(
          (biodata) => biodata.biodataType === "Female"
        );

        setMaleBiodatas(male);
        setFemaleBiodatas(female);
        setBiodatas(data);
      });
  }, []);

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
          <h3 className="text-5xl font-bold">{femaleBiodatas.length}</h3>
        </div>
        <div className="flex flex-col justify-center items-center text-center bg-[#04AA6D] p-5 rounded-lg text-white">
          <FaMale className="text-5xl" />
          <h2 className="text-2xl font-semibold my-2">Boys Bio Data</h2>
          <h3 className="text-5xl font-bold">{maleBiodatas.length}</h3>
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
