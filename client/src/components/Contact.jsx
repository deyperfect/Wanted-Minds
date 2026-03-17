import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="py-5" id="contact">
      <h2 id="contact-title">Contact Us</h2>
      <div
        className="row justify-content-between justify-content-lg-between g-4"
        id="contact-content"
      >
        
        <ContactForm />

      </div>
    </section>
  );
};

export default Contact;
