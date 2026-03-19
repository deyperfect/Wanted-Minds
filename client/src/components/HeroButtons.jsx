import { Link } from "react-router-dom";

const HeroButtons = () => {
  return (
    <>
      <div className="d-flex justify-content-center" id="hero-btn">
        <a href="/#contact" className="btn btn-lg" id="hero-contact">
          Contact
        </a>

        <Link to="/contact" className="btn btn-outline-light btn-lg" id="hero-file">
          Open a Case
        </Link>
      </div>
    </>
  );
};

export default HeroButtons;
