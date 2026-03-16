import ServiceCard from "./ServiceCard";
import services from '../data/services';

const Services = ({sectionTitle = 'What We Do'}) => {
  return (
    <section id="services">
      <h2>{sectionTitle}</h2>
      <div
        className="row justify-content-lg-between justify-content-center g-4"
        id="services-card"
      >
          {services.map((service) => (
            <div key={service.id} className="col-10 col-lg-4">
              <ServiceCard service={service} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Services;
