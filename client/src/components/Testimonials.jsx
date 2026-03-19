import TestimonialCard from "./TestimonialCard";
import testimonials from '../data/testimonials';

const Testimonials = ({sectionTitle = 'What Our Clients Say'}) => {
  return (
    <section id="testimonials" >
      <h2>{sectionTitle}</h2>
      <div className="container">
        <div
            className="row justify-content-lg-between justify-content-center g-4"
            id="testimonials-card"
        >
            {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="col-10 col-md-6 col-lg-4">
                <TestimonialCard testimonial={testimonial} />
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
