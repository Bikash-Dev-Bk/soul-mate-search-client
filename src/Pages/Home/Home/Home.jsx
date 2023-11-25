import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import PremiumMember from "../PremiumMember/PremiumMember";
import SuccessCounter from "../SuccessCounter/SuccessCounter";
import SuccessStory from "../SuccessStory/SuccessStory";
import Works from "../Works/Works";

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
    </div>
  );
};

export default Home;
