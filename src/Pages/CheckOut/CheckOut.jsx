import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const CheckOut = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const userBiodata = useLoaderData();

  const { data: myBiodata = [] } = useQuery({
    queryKey: ["myBiodata"],
    queryFn: async () => {
      const res = await axiosPublic.get(`biodata/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          userBiodata={userBiodata}
          myBiodata={myBiodata}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default CheckOut;
