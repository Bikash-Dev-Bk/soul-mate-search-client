import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const CheckOut = () => {
  const { user } = useAuth();
  const userBiodata = useLoaderData();

  const [myBiodata, setMyBiodata] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/biodata/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyBiodata(data));
  }, [user?.email]);

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
