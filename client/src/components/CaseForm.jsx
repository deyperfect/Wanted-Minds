import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CaseForm = () => {
  const [token, setToken] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, type, subject, message }),
      });

      const data = await res.json();
      if (data.success) {
        alert("Message has been sent");
        navigate("/");
      }
      else toast.error("Something went wrong.");
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="caseform-holder d-flex flex-column">
      <div className="col-11 mx-auto" id="caseform">
        <form onSubmit={handleSubmit}>
          <div className="row mb-5">
            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="+81 0XX-XXXX-XXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Type</label>
                <select
                  defaultValue=""
                  className="form-control"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select Type
                  </option>
                  <option value="Crime Scene Investigation">
                    Crime Scene Investigation
                  </option>
                  <option value="Missing Persons">Missing Persons</option>
                  <option value="Digital Crime">Digital Crime</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Subject</label>
            <input
              className="form-control"
              placeholder="Subject / Case Title"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows={8}
              placeholder="Please provide your message or case details"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div className="mt-4" id="bottom-holder">
            <div id="turnstile-holder">
              <Turnstile
                siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                options={{ size: "normal" }}
                onSuccess={(token) => setToken(token)}
                onExpire={() => setToken(null)}
                onError={() => setToken(null)}
              />
            </div>

            <button
              className="btn btn-lg"
              type="submit"
              disabled={!token}
            >
              Submit Case for Review
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CaseForm;
