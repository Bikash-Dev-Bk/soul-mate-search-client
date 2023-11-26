import { useLoaderData } from "react-router-dom";
import BiodataDetails from "../BiodataDetails/BiodataDetails";
import "./BiodataDetailsContainer.css";
import { Helmet } from "react-helmet";

const BiodataDetailsContainer = () => {
  const biodata = useLoaderData();

  return (
    <div className="biodata-details-container max-w-[1280px] mx-auto my-24 p-5">
      <Helmet>
        <title>Soul Mate Search | Biodata Details</title>
      </Helmet>
      <BiodataDetails biodata={biodata}></BiodataDetails>

      <div>
        <p>Biodatas</p>
      </div>
    </div>
  );
};

export default BiodataDetailsContainer;
