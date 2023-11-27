import { Helmet } from "react-helmet";
import HeroPages from "../../components/HeroPages/HeroPages";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Soul Mate Search | Contact</title>
      </Helmet>
      <HeroPages name="Contact Us"></HeroPages>
      <div className="max-w-7xl mx-auto p-5 my-24">
        <div className=" flex gap-5 lg:gap-24 flex-col-reverse md:flex-row-reverse items-center">
          <div className=" flex-1">
            <div className="relative z-10 bg-[#04AA6D] rounded-xl shadow-lg px-8 py-12 text-gray-600 md:w-full">
              <form className="flex flex-col space-y-4">
                <div>
                  <input
                    type="name"
                    placeholder="Name"
                    className="ring-1  w-full rounded-lg px-4 py-2 mt-2 outline-none "
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="ring-1 ring-[#04AA6D] w-full rounded-lg px-4 py-2 mt-2 outline-none "
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="ring-1 ring-[#04AA6D] w-full rounded-lg px-4 py-2 mt-2 outline-none"
                  />
                </div>
                <div>
                  <textarea
                    type="text"
                    placeholder="Message"
                    rows="4"
                    className="ring-1 ring-[#04AA6D] w-full rounded-2xl px-4 py-2 mt-2 outline-none"
                  ></textarea>
                </div>

                <div className="w-full text-center text-white bg-[#04AA6D] rounded-lg border border-white py-2 text-lg hover:bg-white hover:border-[#04AA6D] hover:text-[#04AA6D]">
                  <button>Send Message</button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl lg:text-3xl font-bold mb-8">
              Interested in discussing? Get In touch with us.
            </h3>
            <p className="text-lg text-justify my-5">
              We appreciate your interest in{" "}
              <span className="font-semibold">Soul Mate Search</span> and
              welcome any inquiries or feedback you may have. Our dedicated
              support team is here to assist you and ensure that your experience
              on our platform is seamless and enjoyable.
            </p>
            
            <div className="mb-8">
            <p className="text-xl font-bold">Office Address</p>
            <h2 className="font-semibold">Soul Mate Search</h2>
            <p>Dhanmondi 27</p>
            <p>Dhaka, Bangladesh</p>

            </div>
            <p className="text-xl font-bold">Follow us:</p>
            <div className="flex space-x-4 text-2xl mt-5 mb-8">
              <a href="https://www.facebook.com/">
                <FaFacebook />
              </a>
              <a href="https://www.twitter.com/">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          
        </div>
        <div className="mt-40">
          <h3 className="text-2xl font-bold text-[#04AA6D] ">
          Feedback and Suggestions
          </h3>

          <p className="text-lg text-justify mt-4">
          We value your feedback and strive to continuously improve our platform. If you have suggestions or ideas that can enhance your experience on <span className="font-semibold">Soul Mate Search</span>, please share them with us. Your insights are invaluable in shaping the future of our community. 
          </p>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#04AA6D] ">
          We are Here for You
          </h3>

          <p className="text-lg text-justify mt-4">
          At <span className="font-semibold">Soul Mate Search</span>, we believe in building connections and fostering meaningful relationships. Whether you are a user, partner, or someone exploring partnership opportunities, your engagement matters to us. We look forward to hearing from you and being a part of your journey. <br /> <br />
          Thank you for choosing <span className="font-semibold">Soul Mate Search</span>! <br /><br /> With love, <br /> The <span className="font-semibold">Soul Mate Search</span> Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
