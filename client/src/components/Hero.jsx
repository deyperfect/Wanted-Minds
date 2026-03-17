const Hero = ({tagline = 'The minds you want when answers are hard to find.'}) => {
    return (
        <section id="hero">
        <img 
          src="/images/backdrop.webp" 
          alt="Hero background" 
          fetchPriority="high"
          className="hero-background-image"
        />
        <div className="col-9 col-md-7 mx-auto my-auto text-center">
          <div id="hero-text" className="my-auto">
            <h1>{tagline}</h1>
          </div>
        </div>
      </section>
    )
}

export default Hero;