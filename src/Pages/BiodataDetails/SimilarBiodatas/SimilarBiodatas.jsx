import BioDataCard from "../../Biodatas/BioDataCard/BioDataCard";

const SimilarBiodatas = ({ similars }) => {
  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 justify-between items-center">
      {similars.map((data) => (
        <BioDataCard key={data._id} data={data}></BioDataCard>
      ))}
    </div>
  );
};

export default SimilarBiodatas;
