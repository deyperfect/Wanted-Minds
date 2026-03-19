import { MapPin } from 'lucide-react'

const TestimonialCard = ({testimonial}) => {
  return (
    <div className="card h-100 p-5 p-lg-5" id='testimonial-card'>
        <div id='testimonial-content'>
            
            <div className='d-flex flex-column text-center'>
                <div className="testimonial-avatar mx-auto">
                    {testimonial.name.charAt(0)}
                </div>
                <h3 className="testimonial-author">{testimonial.name}</h3>
                <div className='d-flex justify-content-center'>
                    <MapPin size={20} className="location-icon me-1"/>
                    <p className="testimonial-location">{testimonial.location}</p>
                </div>

            </div>

            <blockquote className="testimonial-quote text-center">
                &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

        </div>
    </div>
  )
}

export default TestimonialCard