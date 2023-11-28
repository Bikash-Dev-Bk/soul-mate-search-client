import { useEffect, useState } from "react";
import PremiumMemberCard from "./PremiumMemberCard/PremiumMemberCard";

const PremiumMember = () => {
  const [premiumMember, setPremiumMember] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/biodatas")
      .then((res) => res.json())
      .then((data) => {
        const premium = data.filter((biodata) => biodata.isPremium === true);
        const sortedData = premium.sort((a, b) => a.age - b.age);
        setPremiumMember(sortedData)
    });
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto p-5 my-32">
      <h2 className="text-center text-3xl font-bold mb-28">Premium Member Showcase</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center">
        {premiumMember.slice(0, 6).map((member) => (
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
