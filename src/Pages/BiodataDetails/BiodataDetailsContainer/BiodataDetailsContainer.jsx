import { useLoaderData } from "react-router-dom";
import BiodataDetails from "../BiodataDetails/BiodataDetails";
import "./BiodataDetailsContainer.css";
import { Helmet } from "react-helmet";
import SimilarBiodatas from "../SimilarBiodatas/SimilarBiodatas";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const BiodataDetailsContainer = () => {
  const biodata = useLoaderData();
  const axiosPublic = useAxiosPublic();

  const { data: biodatas = [] } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodatas");
      return res.data;
    },
  });

  const similars = biodatas.filter(
    (similarBiodata) =>
      similarBiodata.biodataType === biodata.biodataType &&
      similarBiodata.biodataId !== biodata.biodataId
  );

  return (
    <div>
      <Helmet>
        <title>Soul Mate Search | Biodata Details</title>
      </Helmet>
      <div className="biodata-details-container max-w-[1280px] mx-auto my-24 p-5">
        <BiodataDetails biodata={biodata}></BiodataDetails>
        <SimilarBiodatas similars={similars}></SimilarBiodatas>
      </div>
    </div>
  );
};

export default BiodataDetailsContainer;
