import image1 from "../../../assets/love.png";
import image2 from "../../../assets/search.png";
import image3 from "../../../assets/premium.png";
import image4 from "../../../assets/conversation.png";

const Works = () => {
  const workProcedure = [
    {
      id: 1001,
      image: image1,
      name: "Create your Biodata",
      description: "Start your journey by creating a detailed biodata that reflects your personality, values, and preferences. Highlight what makes you unique and what you're looking for in a life partner.",
    },
    {
      id: 1002,
      image: image2,
      name: "Explore Biodatas",
      description:
        "Dive into a diverse pool of biodatas, filtered to match your criteria. Browse through profiles, discover shared interests, and connect with individuals who resonate with your vision for the future.",
    },
    {
      id: 1003,
      image: image3,
      name: "Premium Membership",
      description:
        "Unlock exclusive features with our premium membership, granting you access to direct contact information and featured profiles within our community. Our platform provides a secure space for initiating connections.",
    },
    {
      id: 1004,
      image: image4,
      name: "Start communication",
      description:
        "Once your contact request is accepted, initiate meaningful conversations with your potential life partner. Our messaging system allows you to connect, share thoughts, and explore compatibility in a private and secure environment.",
    },
  ];
  
  return (
    <div className="max-w-[1280px] mx-auto p-5 my-32">
      <h2 className="text-center text-3xl font-bold mb-4">
        How Soul Mate Search Works
      </h2>
      <p className="text-center text-lg">Get started in 3 easy steps</p>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-center text-center">
        {workProcedure.map((work) => (
          <div
            key={work.id}
            className="flex flex-col justify-center items-center p-2 md:p-5"
          >
            <img src={work.image} className="w-[120px]" alt="" />
            <div className="mt-5">
              <h2 className="mb-3 text-lg font-semibold">{work.name}</h2>
              <p className="text-justify">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
