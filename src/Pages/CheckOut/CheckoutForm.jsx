import PropTypes from "prop-types";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import HeroPages from "../../components/HeroPages/HeroPages";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutForm = ({ userBiodata, myBiodata }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const navigate = useNavigate();

  const totalPrice = 500;

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          // console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

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

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          price: totalPrice,
          transactionId: paymentIntent.id,
          myBiodataId: myBiodata.biodataId,
          myBiodataName: myBiodata.name,
          myBiodataEmail: myBiodata.contactEmail,
          userBiodataId: userBiodata.biodataId,
          userBiodataName: userBiodata.name,
          userBiodataMobile: userBiodata.mobileNumber,
          userBiodataEmail: userBiodata.contactEmail,
          status: "Pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res.data);

        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for Payment!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/myContactRequest");
        }

        if (res.data?.paymentResult?.insertedId===null) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You have already paid for this user!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/myContactRequest");
        }
      }
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
          <p className="text-red-600">{error}</p>
          {transactionId && (
            <p className="text-green-600">
              {" "}
              Your transaction id: {transactionId}
            </p>
          )}
          <button
            className="btn rounded-lg  text-white bg-[#04AA6D] hover:bg-transparent border-2 border-[#04AA6D] hover:text-[#04AA6D] py-2 px-4 my-4"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Submit
          </button>
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
