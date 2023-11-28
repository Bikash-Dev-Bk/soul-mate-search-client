import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const CheckOut = () => {
  const userBiodata = useLoaderData();

  const [myBiodata, setMyBiodata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/biodata/551bikashsharma@gmail.com")
      .then((res) => res.json())
      .then((data) => setMyBiodata(data));
  }, []);


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
