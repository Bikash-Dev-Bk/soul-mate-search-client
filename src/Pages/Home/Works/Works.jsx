import image1 from "../../../assets/love.png";
import image2 from "../../../assets/search.png";
import image3 from "../../../assets/conversation.png";

const Works = () => {
  const workProcedure = [
    {
      id: 1001,
      image: image1,
      name: "Create your profile",
      description: "Register and create your profile",
    },
    {
      id: 1002,
      image: image2,
      name: "Search your partner",
      description:
        "Search for your preferred partner who may be located at the other side of the world",
    },
    {
      id: 1003,
      image: image3,
      name: "Start communication",
      description:
        "Start communicating with potential partners via mailbox, phone and other means",
    },
  ];
  
  return (
    <div className="max-w-[1280px] mx-auto p-5 my-32">
      <h2 className="text-center text-3xl font-bold mb-4">
        How Soul Mate Search Works
      </h2>
      <p className="text-center text-lg">Get started in 3 easy steps</p>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center text-center">
        {workProcedure.map((work) => (
          <div
            key={work.id}
            className="flex flex-col justify-center items-center p-2 md:p-5"
          >
            <img src={work.image} alt="" />
            <div className="mt-5">
              <h2 className="mb-3 text-lg font-semibold">{work.name}</h2>
              <p>{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
