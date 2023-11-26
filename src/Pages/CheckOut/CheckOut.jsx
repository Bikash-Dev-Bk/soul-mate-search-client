import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const CheckOut = () => {

    const biodata = useLoaderData();

    console.log('checkout',biodata)

  return (
    <div className="max-w-[1280px] mx-auto my-24 p-5 ">
      <Elements stripe={stripePromise}>
        <CheckoutForm biodata={biodata}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default CheckOut;
