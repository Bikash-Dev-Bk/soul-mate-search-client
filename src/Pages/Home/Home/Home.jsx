import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import PremiumMember from "../PremiumMember/PremiumMember";
import SuccessCounter from "../SuccessCounter/SuccessCounter";
import SuccessStory from "../SuccessStory/SuccessStory";
import Works from "../Works/Works";
import PricingCards from "../../../components/PricingCards/PricingCards";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Soul Mate Search | Home</title>
      </Helmet>
      <Banner></Banner>
      <PremiumMember></PremiumMember>
      <Works></Works>
      <SuccessCounter></SuccessCounter>
      <SuccessStory></SuccessStory>
      <h2 className="text-center text-3xl font-bold">Right Plan for You</h2>
      <PricingCards></PricingCards>
    </div>
  );
};

export default Home;
