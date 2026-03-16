const ServiceCard = ({ service }) => {
  return (

      <div className="cardx w-100 h-100">
        <h3 className="service-title">{service.name}</h3>
        <p className="service">{service.description}</p>
      </div>

  );
};

export default ServiceCard;
