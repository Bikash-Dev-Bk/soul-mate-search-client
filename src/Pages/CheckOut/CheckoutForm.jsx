import PropTypes from "prop-types";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = ({ biodata }) => {
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
    <form onSubmit={handleSubmit} className="max-w-[500px] mx-auto">
      
      <div className="my-4 max-w-screen-xl mx-auto ">
        <label
          className="block text-[#D70F64] font-bold mb-2"
          htmlFor="food_name"
        >
          Bio Data Id
        </label>
        <input
          className="ring-1 rounded w-full py-2 px-3 ring-gray-300 bg-transparent outline-none leading-tight  focus:ring-2 focus:ring-[#D70F64]"
          name="food_name"
          type="text"
          defaultValue={biodata.biodataId}
          required
        />
      </div>
      <div className="my-4 max-w-screen-xl mx-auto ">
        <label
          className="block text-[#D70F64] font-bold mb-2"
          htmlFor="food_name"
        >
          My Bio Data Id
        </label>
        <input
          className="ring-1 rounded w-full py-2 px-3 ring-gray-300 bg-transparent outline-none leading-tight  focus:ring-2 focus:ring-[#D70F64]"
          name="food_name"
          type="text"
          defaultValue={biodata.biodataId}
          required
        />
      </div>
      <div className="my-4 max-w-screen-xl mx-auto ">
        <label
          className="block text-[#D70F64] font-bold mb-2"
          htmlFor="food_name"
        >
          My Email
        </label>
        <input
          className="ring-1 rounded w-full py-2 px-3 ring-gray-300 bg-transparent outline-none leading-tight  focus:ring-2 focus:ring-[#D70F64]"
          name="food_name"
          type="text"
          defaultValue={user?.email}
          required
        />
      </div>
      <p className="text-[#D70F64] font-bold">Stripe Card Number</p>
      <CardElement
      className=" mb-10 mt-3 ring-1 rounded w-full py-2 px-3 ring-gray-300 bg-transparent "
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
        className="btn rounded-lg  text-white bg-[#D70F64] hover:bg-transparent border-2 border-[#D70F64] hover:text-[#D70F64] py-2 px-4 my-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Submit
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && (
        <p className="text-green-600"> Your transaction id: {transactionId}</p>
      )}
    </form>
  );
};

CheckoutForm.propTypes = {
  biodata: PropTypes.object.isRequired,
};

export default CheckoutForm;
