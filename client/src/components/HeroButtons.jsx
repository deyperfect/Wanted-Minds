import { Link } from "react-router-dom";

const HeroButtons = () => {
  return (
    <>
      <div className="d-flex justify-content-center" id="hero-btn">
        <Link to="/contact" className="btn btn-lg" id="hero-contact">
          Contact
        </Link>

        <Link to="/contact" className="btn btn-outline-light btn-lg" id="hero-file">
          Open a Case
        </Link>
      </div>
    </>
  );
};

export default HeroButtons;
