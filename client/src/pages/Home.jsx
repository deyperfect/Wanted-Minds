
export default function Home() {
  return (
    <>
      <section id="hero" className="row">
        <div className="col-9 col-md-7 mx-auto my-auto text-center">
          <div id="hero-text" className="my-auto">
            <h1>The minds you want when answers are hard to find.</h1>
          </div>
        </div>
      </section>

      <section id="about">
        <div id="intro">
          <h2>In the Shadows</h2>
          <div className="row">
            <div className="col-10 mx-auto">
              <p>
                Operating quietly in the heart of downtown Tokyo, Wanted Minds is a
                private detective agency known for navigating the shadows where
                answers are rarely obvious. Focused on crime scene investigation, missing persons, and digital
                crime, Wanted Minds blends sharp intuition with advanced technology.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <h2 id="core">What We Do</h2>
        <div className="row" id="container2">
          <div className="cardx col-7 d-flex flex-column mx-auto">
            <h3 className="service-title">Crime Scene Investigation</h3>
            <p className="service">We conduct thorough and methodical crime scene investigations to uncover the truth hidden within the details. Our team carefully documents, collects, and analyzes physical evidence, ensuring that nothing is overlooked. Every step follows strict investigative protocols to preserve integrity and accuracy.</p>
          </div>
        </div>

        <div className="row" id="container2">
          <div className="cardx col-7 d-flex flex-column mx-auto">
            <h3 className="service-title">Missing Persons Investigation</h3>
            <p className="service">When someone goes missing, time and precision matter. We specialize in tracing leads, verifying information, and uncovering patterns that others may miss. Through interviews, surveillance, and intelligence gathering, we work relentlessly to locate missing individuals and provide answers to families seeking clarity and closure.</p>
          </div>
        </div>

        <div className="row" id="container2">
          <div className="cardx col-7 d-flex flex-column mx-auto">
            <h3 className="service-title">Digital Crime Analysis</h3>
            <p className="service">In today&apos;s digital world, crimes often leave traces online. Our digital crime analysis service examines electronic data, online activity, and digital footprints to uncover hidden connections and evidence. From data recovery to behavioral analysis, we transform complex digital information into clear, actionable insights.</p>
          </div>
        </div>
        



      </section>
    </>
  );
}