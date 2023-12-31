import { Helmet } from "react-helmet";
import HeroPages from "../../components/HeroPages/HeroPages";
import PricingCards from "../../components/PricingCards/PricingCards";

const Pricing = () => {
  return (
    <div>
      <Helmet>
        <title>Soul Mate Search | Pricing</title>
      </Helmet>
      <HeroPages name="Pricing"></HeroPages>
      <div className="max-w-[700px] mx-auto mt-16">
        <h2 className="text-center text-3xl font-bold">Membership Plans</h2>
        <p className=" text-center mt-3">
          Primarily it is free to search any profiles. Upgrade For customized the
          search. With a paid membership, you can seamlessly connect with your
          prospects and get more responses. Many have found their love. Are you
          ready to meet your Soul Mate?
        </p>
      </div>
      <PricingCards></PricingCards>
    </div>
  );
};

export default Pricing;
