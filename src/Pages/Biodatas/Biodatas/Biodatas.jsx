import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import "./Biodatas.css";
import BioDataCard from "./BioDataCard";
import HeroPages from "../../../components/HeroPages/HeroPages";
import { Helmet } from "react-helmet";

const Biodatas = () => {
  const axiosPublic = useAxiosPublic();

  const { data: biodatas = [], refetch } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodatas");
      return res.data;
    },
  });


  return (
    <div>
      <Helmet>
        <title>Soul Mate Search | Bio Data's</title>
      </Helmet>
      <HeroPages name="Bio Data's"></HeroPages>
      <div className="max-w-[1280px] mx-auto p-5 biodatas-container my-24">
        <div>
          <h2>Search and filter</h2>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center">
          {biodatas.map((data) => (
            <BioDataCard key={data._id} data={data}></BioDataCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Biodatas;
