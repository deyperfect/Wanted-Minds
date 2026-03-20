import about from '../data/about.json';
import { Link } from 'react-router-dom';

const About = ({
  sectionTitle = about.sectionTitle,
  paragraphs = about.paragraphs,
}) => {
  return (
    <section id="about" className='container'>
      <div id="intro" >
        <div className="row justify-content-center">
          <div id="about-image" className="col-11 col-lg-6">
            <div className="about-image-inner">
              <img src="/images/location.webp" alt="Image outside Wanted Minds headquarters" className="img-fluid" />
            </div>
          </div>
          <div id='about-text' className="col-11 col-lg-6" >
            <div>
              <h2>{sectionTitle}</h2>
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <Link to="/about" className='btn btn-dark'> Learn more about Wanted Minds</Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;