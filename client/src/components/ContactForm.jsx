const fields = [
  { label: "Name", type: "text", placeholder: "Your Name" },
  {
    label: "Email",
    type: "email",
    placeholder: "email@example.com",
    required: true,
  },
];

const ContactForm = () => {
  return (
    <div id="contact-form" className="col-11 col-md-9 col-lg-6">
      <div>
        <div>
          {fields.map(({ label, ...props }) => (
            <div key={label} className="mb-3">
              <label className="form-label">{label}</label>
              <input className="form-control" {...props} />
            </div>
          ))}
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows={4} required />
        </div>

        <hr className="divider" />

        <div className="address">
          <div className="address-holder">
            <span>Headquarters</span>
            <address className="address-text">
              4-12-7 Aoyama-Cyber, Minato-ku, Tokyo 107-0062
            </address>
          </div>
          <button className="btn" type="submit">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
