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
      <PricingCards></PricingCards>
    </div>
  );
};

export default Pricing;
