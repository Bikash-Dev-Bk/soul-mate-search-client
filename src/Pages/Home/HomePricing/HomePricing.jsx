import PricingCards from "../../../components/PricingCards/PricingCards";

const HomePricing = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="max-w-[700px] mx-auto">
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

export default HomePricing;
