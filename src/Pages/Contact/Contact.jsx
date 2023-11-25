import { Helmet } from "react-helmet";
import HeroPages from "../../components/HeroPages/HeroPages";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Soul Mate Search | Contact</title>
      </Helmet>
      <HeroPages name="Contact Us"></HeroPages>
      <div className="max-w-[1280px] mx-auto p-5 my-24">
        <h2>This is Contact</h2>
      </div>
    </div>
  );
};

export default Contact;
