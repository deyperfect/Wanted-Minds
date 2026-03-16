import about from '../data/about.json'

const About = ({
  sectionTitle = about.sectionTitle,
  paragraphs = about.paragraphs,
}) => {
  return (
    <section id="about">
      <div id="intro">
        <h2>{sectionTitle}</h2>
        <div className="row">
          <div className="col-10 mx-auto">
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