import about from '../data/about.json'

const About = ({
  sectionTitle = about.sectionTitle,
  paragraphs = about.paragraphs,
}) => {
  return (
    <section id="about" className='container'>
      <div id="intro">
        <div className="row">
          <div id="about-image" className="col-10 col-lg-6">
            <img src="/images/location.webp" alt="Image outside Wanted Minds headquarters" />
          </div>
          <div className="col-10 col-lg-6">
            <h2>{sectionTitle}</h2>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;