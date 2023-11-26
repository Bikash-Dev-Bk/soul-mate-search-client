import { useLoaderData } from "react-router-dom";
import BiodataDetails from "../BiodataDetails/BiodataDetails";
import './BiodataDetailsContainer.css';

const BiodataDetailsContainer = () => {
  const biodata = useLoaderData();

  return (
    <div className="biodata-details-container max-w-[1280px] mx-auto my-24 p-5">
      <BiodataDetails biodata={biodata}></BiodataDetails>

      <div>
        <p>Biodatas</p>
      </div>
    </div>
  );
};

export default BiodataDetailsContainer;
