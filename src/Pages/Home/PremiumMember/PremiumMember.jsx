import PremiumMemberCard from "./PremiumMemberCard/PremiumMemberCard";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const PremiumMember = () => {
  const axiosPublic = useAxiosPublic();

  const { data: biodatas = [] } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodatas");
      return res.data;
    },
  });

  const premium = biodatas.filter((biodata) => biodata.isPremium === true);
  const premiumMember = premium.sort((a, b) => a.age - b.age);

  return (
    <div className="max-w-[1280px] mx-auto p-5 my-32">
      <h2 className="text-center text-3xl font-bold mb-28">
        Our Premium Members
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-between items-center">
        {premiumMember.slice(0, 10).map((member) => (
          <PremiumMemberCard
            key={member._id}
            member={member}
          ></PremiumMemberCard>
        ))}
      </div>
    </div>
  );
};

export default PremiumMember;
