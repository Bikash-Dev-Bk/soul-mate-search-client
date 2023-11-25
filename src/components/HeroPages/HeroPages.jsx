import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./HeroPages.css";

const HeroPages = ({ name }) => {
  return (
    <>
      <section className="hero_pages">
        <div className="hero_pages_overlay"></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col justify-center h-[400px] z-10 relative text-[#010103] text-center font-semibold">
            <h3 className="text-2xl md:text-3xl lg:text-5xl mb-5">{name}</h3>
            <p className="text-lg lg:text-2xl font-semibold">
              <Link to="/" className="hover:text-[#D70F64]">
                Home
              </Link>{" "}
              / {name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

HeroPages.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HeroPages;
