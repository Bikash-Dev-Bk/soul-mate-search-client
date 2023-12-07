import { Helmet } from "react-helmet";
import HeroPages from "../../components/HeroPages/HeroPages";
import image from "../../assets/Banner/image5.jpg";
import image2 from "../../assets/Banner/image8.jpg";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Soul Mate Search | About</title>
      </Helmet>
      <HeroPages name="About Us"></HeroPages>

      <div className="max-w-[1280px] mx-auto my-24 p-5 ">
        <div className="flex gap-10 flex-col md:flex-row">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-[#04AA6D]">Who We Are</h3>

            <p className="text-lg text-justify mt-4">
              Welcome to <span className="font-semibold">Soul Mate Search</span>
              , where meaningful connections begin and love stories unfold. At{" "}
              <span className="font-semibold">Soul Mate Search</span>, we
              believe in the power of love and the journey that brings two
              hearts together.
            </p>
            <p className="text-lg text-justify mt-4">
              <span className="font-semibold">Soul Mate Search</span> is a team
              of passionate individuals committed to making the process of
              finding love as enjoyable and seamless as possible. With a blend
              of innovative technology and a deep understanding of human
              connections, we strive to create a space where people can share
              their stories of love and commitment.
            </p>
          </div>
          <div className="flex md:justify-end flex-1">
            <img
              src={image}
              alt=""
              
            />
          </div>
        </div>

        <div className="flex gap-10 flex-col md:flex-row-reverse mt-16">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-[#04AA6D]">Our Mission</h3>

            <p className="text-lg text-justify mt-4">
              Our mission is simple yet profound: to create a platform where
              individuals can discover their life partners in a safe and trusted
              environment. We understand the importance of finding a compatible
              life companion, and we are dedicated to facilitating this
              beautiful journey.
            </p>
            <h3 className="text-2xl font-bold text-[#04AA6D] mt-12">
              Our Story
            </h3>

            <p className="text-lg text-justify mt-4">
              <span className="font-semibold">Soul Mate Search</span> was born
              out of a shared vision to connect hearts and create lasting
              relationships. Our founders, [Founder Names], envisioned a
              platform that goes beyond traditional matchmaking, offering a
              modern and dynamic approach to finding love.
            </p>
          </div>
          <div className="flex md:justify-end flex-1">
            <img
              src={image2}
              alt=""
              
            />
          </div>
        </div>
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-[#04AA6D] ">
            Join Us on This Journey
          </h3>

          <p className="text-lg text-justify mt-4">
            Whether you are embarking on the search for love or have already
            found your soulmate through <span className="font-semibold">Soul Mate Search</span>, we invite
            you to be part of our vibrant and growing community. Join us in
            celebrating love, connections, and the beautiful stories that unfold
            on our platform. Thank you for choosing <span className="font-semibold">Soul Mate Search</span> as your companion in the journey of love. <br /><br /> With love, <br /> The <span className="font-semibold">Soul Mate Search</span> Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
