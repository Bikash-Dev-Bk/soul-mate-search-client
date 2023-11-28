import PropTypes from "prop-types";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import HeroPages from "../../components/HeroPages/HeroPages";

const CheckoutForm = ({ userBiodata, myBiodata }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();

  const totalPrice = 500;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
  };

  return (
    <div>
      <HeroPages name="Checkout"></HeroPages>
      <div className="max-w-[1280px] mx-auto my-24 p-5 ">
        <form onSubmit={handleSubmit} className="max-w-[500px] mx-auto">
          <div className="my-4 max-w-screen-xl mx-auto ">
            <label
              className="block text-[#04AA6D] font-bold mb-2"
              htmlFor="food_name"
            >
              Bio Data Id
            </label>
            <input
              className="w-full text-lg px-4 py-2 border-2 border-[#04AA6D] focus:outline-none rounded-lg"
              name="food_name"
              type="text"
              defaultValue={userBiodata.biodataId}
              required
              readOnly
            />
          </div>
          <div className="my-4 max-w-screen-xl mx-auto ">
            <label
              className="block text-[#04AA6D] font-bold mb-2"
              htmlFor="food_name"
            >
              My Bio Data Id
            </label>
            <input
              className="w-full text-lg px-4 py-2 border-2 border-[#04AA6D] focus:outline-none rounded-lg"
              name="food_name"
              type="text"
              defaultValue={myBiodata.biodataId}
              required
              readOnly
            />
          </div>
          <div className="my-4 max-w-screen-xl mx-auto ">
            <label
              className="block text-[#04AA6D] font-bold mb-2"
              htmlFor="food_name"
            >
              My Email
            </label>
            <input
              className="w-full text-lg px-4 py-2 border-2 border-[#04AA6D] focus:outline-none rounded-lg"
              name="food_name"
              type="text"
              defaultValue={user?.email}
              required
              readOnly
            />
          </div>
          <p className="text-[#04AA6D] font-bold">Stripe Card Number</p>
          <CardElement
            className=" mb-10 mt-3 w-full text-lg px-4 py-2 border-2 border-[#04AA6D] focus:outline-none rounded-lg "
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn rounded-lg  text-white bg-[#04AA6D] hover:bg-transparent border-2 border-[#04AA6D] hover:text-[#04AA6D] py-2 px-4 my-4"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Submit
          </button>
          <p className="text-red-600">{error}</p>
          {transactionId && (
            <p className="text-green-600">
              {" "}
              Your transaction id: {transactionId}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

CheckoutForm.propTypes = {
  userBiodata: PropTypes.object.isRequired,
  myBiodata: PropTypes.object.isRequired,
};

export default CheckoutForm;
