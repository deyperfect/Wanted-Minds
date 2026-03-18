import HeroButtons from "./HeroButtons";


const Hero = ({tagline = 'The minds you want when answers are hard to find.'}) => {
    return (
      <section id="hero">
        <img 
          src="/images/backdrop.webp" 
          alt="Hero background" 
          fetchPriority="high"
          className="hero-background-image"
        />
        <div className="row justify-content-center">
          <div className="col-9 col-md-7">
            <div id="hero-text">
              <h1>{tagline}</h1>
            </div>
          </div>
          <div className="col-9 col-md-7 text-center mt-5">
            <HeroButtons />
          </div>
        </div>
      </section>
    )
}

export default Hero;