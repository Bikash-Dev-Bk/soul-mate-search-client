import DashBoardHeroPages from "../../../components/DashBoardHeroPages/DashBoardHeroPages";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ViewBiodata = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: myBiodata = [] } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get(`biodata/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <DashBoardHeroPages name="View Bio Data"></DashBoardHeroPages>
      <div className="max-w-[1280px] mx-auto my-12 p-5">
        <div className="flex gap-12 flex-col lg:flex-row justify-center ">
          <img
            src={myBiodata.profileImage}
            alt=""
            className="w-full lg:w-1/4 rounded-xl border-2 border-[#04AA6D] "
          />
          <div className="grid justify-between gap-5 grid-cols-1 md:grid-cols-2 mt-10 ">
            <div className="font-semibold ">
              <h2 className="font-bold">Name: {myBiodata.name}</h2>
              <p>Age: {myBiodata.age}</p>
              <p>Weight: {myBiodata.weight} KG</p>
              <p>Height: {myBiodata.height} cm</p>
              <p>Gender: {myBiodata.biodataType}</p>
              <p>Date Of Birth: {myBiodata.dateOfBirth}</p>
              <p>Occupation: {myBiodata.occupation}</p>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">Family Details</h2>
              <div className="font-semibold ">
                <p>Fathers Name: {myBiodata.fathersName}</p>
                <p>Mothers Name: {myBiodata.mothersName}</p>
                <p>Race: {myBiodata.race}</p>
                <p>Present Division: {myBiodata.presentDivision}</p>
                <p>Permanent Division: {myBiodata.permanentDivision}</p>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">
                Expected Partner Details
              </h2>
              <div className="font-semibold ">
                <p>Expected Partner Age: {myBiodata.expectedPartnerAge}</p>
                <p>
                  Expected Partner Height: {myBiodata.expectedPartnerHeight} cm
                </p>
                <p>
                  Expected Partner Weight: {myBiodata.expectedPartnerWeight} KG
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">Contact Details</h2>
              <div className="font-semibold ">
                <p>Email: {myBiodata.contactEmail}</p>
                <p>Phone: {myBiodata.mobileNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBiodata;
