import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const CheckOut = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const userBiodata = useLoaderData();

  const { data: myBiodata = [] } = useQuery({
    queryKey: ["myBiodata"],
    queryFn: async () => {
      const res = await axiosSecure.get(`biodata/${user?.email}`);
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
