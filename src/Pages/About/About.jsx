import { Helmet } from "react-helmet";
import HeroPages from "../../components/HeroPages/HeroPages";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Soul Mate Search | About</title>
      </Helmet>
      <HeroPages name="About Us"></HeroPages>
      <div className="max-w-[1280px] mx-auto p-5 my-24">
        <h2>This is About</h2>
      </div>
    </div>
  );
};

export default About;
