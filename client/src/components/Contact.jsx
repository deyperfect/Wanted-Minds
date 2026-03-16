const fields = [
  { label: "Name", type: "text", placeholder: "Your Name" },
  {
    label: "Email",
    type: "email",
    placeholder: "email@example.com",
    required: true,
  },
  { label: "Message", as: "textarea", rows: 4, required: true },
];

const Contact = () => {
  return (
    <section className="py-5" id="contact">
      <h2 id="contact-title">Contact Us</h2>
      <div
        className="row justify-content-between justify-content-lg-between g-4"
        id="contact-content"
      >
        <div
          className="col-10 col-md-8 col-lg-6 mx-auto"
          id="address-holder"
        >
          <div className="address-content">
            <p className="address-label mb-2">HEADQUARTERS</p>

            <address className="mb-0">
              4-12-7 Aoyama-Cyber <br />
              Minato-ku <br />
              Tokyo 107-0062
            </address>
          </div>
        </div>

        <div className="col-10 col-lg-6 mx-auto" id="contact-form">
          <form>
            {fields.map(({ label, as: Tag = "input", ...props }) => (
              <div key={label} className="mb-3">
                <label className="form-label">{label}</label>
                <Tag className="form-control" {...props} />
              </div>
            ))}
            <button className="btn btn-outline-light" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
