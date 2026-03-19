import { Quote }from 'lucide-react';

const Inspiration = () => {
  return (
    <>
      <section className="container">
        <div className="row justify-content-center" id="inspiration">
          <div className="col-10 col-lg-6 my-auto p-3" id="inspiration-content">
            <figure>
              <Quote />
              <blockquote className="blockquote mt-3">
                <p>"There is always <br className='d-none d-lg-block'/> only one truth." </p> 
              </blockquote>
              <figcaption className="blockquote-footer mt-1">
                Shinichi Kudo, <cite>Detective Conan</cite>
              </figcaption>
            </figure>
            
            <p className='inspiration-text'>
              Wanted Minds was born from admiration of the legendary Detective
              Conan series. The brilliance and razor-sharp instincts of Shinichi
              Kudo served as the blueprint for everything this agency stands
              for. Just as Kudo believed that there is always only one truth, we
              carry that same conviction into every case we take on.
            </p>
          </div>

          <div className="col-10 col-lg-6" id="inspiration-img">
            <img src="/images/silhouette.webp" alt="silhoutte of a detective" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Inspiration;
