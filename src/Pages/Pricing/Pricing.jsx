import { Helmet } from "react-helmet";
import HeroPages from "../../components/HeroPages/HeroPages";
import { TiTick } from "react-icons/ti";

const Pricing = () => {
  return (
    <div>
      <Helmet>
        <title>Soul Mate Search | Pricing</title>
      </Helmet>
      <HeroPages name="Pricing"></HeroPages>

      <div className="max-w-[1280px] mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  my-24 p-5 ">
        {/* Intro */}
        <div className="border-2 border-[#04AA6D] h-[470px] p-5 relative">
          <h2 className="text-xl font-semibold">Intro</h2>
          <h1 className="my-5">
            <span className="text-4xl font-bold ">$19.99</span>
            <span className="text-xl font-semibold ml-2">/month</span>
          </h1>
          <p className="mb-4">
            Perfect for getting started with basic profile creation and limited
            matches.
          </p>
          <ul>
            <li className="flex items-center">
              <TiTick className="mr-2" />
              Basic profile creation
            </li>
            <li className="flex items-center">
              <TiTick className="mr-2" />
              Limited matches per month
            </li>
            <li className="flex items-center">
              <TiTick className="mr-2" />
              Standard support
            </li>
            <li className="flex items-center">
              <TiTick className="mr-2" />
              Add Favourite
            </li>
          </ul>
          <button className="w-full text-center text-white bg-[#04AA6D] border-2 border-white py-2 text-lg hover:bg-white hover:border-[#04AA6D] hover:text-[#04AA6D] absolute bottom-5">
            Choose Plan
          </button>
        </div>
        {/* Base */}
        <div className="border-2 border-[#04AA6D] h-[470px] p-5 relative">
          <h2 className="text-xl font-semibold">Base</h2>
          <h1 className="my-5">
            <span className="text-4xl font-bold ">$79.99</span>
            <span className="text-xl font-semibold ml-2">/month</span>
          </h1>
          <p className="mb-4">
            Enhance your profile visibility and receive more matches with
            priority support.
          </p>
          <ul>
            <li className="flex items-center">
              <TiTick className="mr-2" />
              Enhanced profile visibility
            </li>
            <li className="flex items-center">
              <TiTick className="mr-2" />
              Increased matches per month
            </li>
            <li className="flex items-center">
              <TiTick className="mr-2" />
              Priority support
            </li>
            <li className="flex items-center">
              <TiTick className="mr-2" />
              15GB photo storage
            </li>
          </ul>
          <button className="w-full text-center text-white bg-[#04AA6D] border-2 border-white py-2 text-lg hover:bg-white hover:border-[#04AA6D] hover:text-[#04AA6D] absolute bottom-5">
            Choose Plan
          </button>
        </div>
        {/* Popular */}
        <div className="border-2 border-[#04AA6D] h-[470px] p-5 relative">
          <h2 className="text-xl font-semibold">Popular</h2>
          <h1 className="my-5">
            <span className="text-4xl font-bold ">$149.99</span>
            <span className="text-xl font-semibold ml-2">/month</span>
          </h1>
          <p className="mb-4">
            Unlock premium features, unlimited matches, and dedicated support
            for the ultimate experience.
          </p>
          <ul>
            <li className="flex items-center">
              <TiTick className="mr-2" />
              Premium profile features
            </li>
            <li className="flex items-center">
              <TiTick className="mr-2" />
              Unlimited matches
            </li>
            <li className="flex items-center">
              <TiTick className="mr-2" />
              Dedicated support
            </li>
            <li className="flex items-center">
              <TiTick className="mr-2" />
              30GB photo storage
            </li>
          </ul>
          <button className="w-full text-center text-white bg-[#04AA6D] border-2 border-white py-2 text-lg hover:bg-white hover:border-[#04AA6D] hover:text-[#04AA6D] absolute bottom-5">
            Choose Plan
          </button>
        </div>
        {/* Enterprise */}
        <div className="border-2 border-[#04AA6D] h-[470px] p-5 relative">
          <h2 className="text-xl font-semibold">Enterprise</h2>
          <h1 className="my-5">
            <span className="text-4xl font-bold ">$299.99</span>
            <span className="text-xl font-semibold ml-2">/month</span>
          </h1>
          <p className="mb-4">
            Tailored solutions with customizable matchmaking algorithms,
            personalized account management, and advanced security features.
          </p>
          <ul>
            <li className="flex items-center">
              <TiTick className="mr-2" />
              Customizable matchmaking algorithms
            </li>
            <li className="flex items-center">
              <TiTick className="mr-2" />
              Personalized account manager
            </li>

            <li className="flex items-center">
              <TiTick className="mr-2" />
              Advanced security features
            </li>
            <li className="flex items-center">
              <TiTick className="mr-2" />
              Scalable photo storage
            </li>
          </ul>
          <button className="w-full text-center text-white bg-[#04AA6D] border-2 border-white py-2 text-lg hover:bg-white hover:border-[#04AA6D] hover:text-[#04AA6D] absolute bottom-5">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
