import { useState } from "react";
import Icon from "../components/Icon.jsx";

const WEBHOOK_URL = "https://workflows.mantracare.com/webhook/get-started-page";

const buildWebhookUrl = (page, formData) => {
  const params = new URLSearchParams({
    page,
    name: formData.name,
    email: formData.email,
    phone: "+91" + formData.phone,
    message: formData.message,
    source_url: window.location.href,
    submitted_at: new Date().toISOString(),
  });

  return `${WEBHOOK_URL}?${params.toString()}`;
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((current) => ({ ...current, phone: digitsOnly }));
      return;
    }

    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setStatus("error");
      setError("Please enter a valid 10 digit mobile number.");
      return;
    }

    try {
      await fetch(buildWebhookUrl("contact-us", form), {
        method: "POST"
      });

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (submissionError) {
      setStatus("error");
      setError("Something went wrong. Please try again or contact us on WhatsApp.");
    }
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container center-block">
          <p className="eyebrow">Contact</p>
          <h1>Reach out to begin a supportive conversation.</h1>
          <p className="section-copy">
            Send a message and Mahima’s team will get back to you with the next steps for virtual therapy support.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container contact-grid">
          <aside className="contact-card">
            <h2>Contact details</h2>
            <p className="section-copy">
              For therapy enquiries, session questions, or support needs, please use the form.
            </p>
            <a href="mailto:hello@mahimagulrajani.com">
              <Icon name="mail" size={22} />
              <span>hello@mahimagulrajani.com</span>
            </a>
            <a href="/get-started">
              <Icon name="calendar" size={22} />
              <span>Start therapy assessment</span>
            </a>
          </aside>

          <form className="assessment-form contact-form" onSubmit={handleSubmit}>
            <div className="form-row two-column">
              <div className="form-group">
                <label htmlFor="contactName">Name</label>
                <input
                  id="contactName"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactEmail">Email</label>
                <input
                  id="contactEmail"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contactPhone">Phone number</label>
              <input
                id="contactPhone"
                name="phone"
                type="tel"
                inputMode="numeric"
                maxLength="10"
                pattern="[6-9][0-9]{9}"
                placeholder="Enter 10 digit mobile number"
                value={form.phone}
                onChange={handleChange}
                required
              />
              <small className="form-help">Enter a 10 digit Indian mobile number without +91.</small>
            </div>

            <div className="form-group">
              <label htmlFor="contactMessage">How can we help?</label>
              <textarea
                id="contactMessage"
                name="message"
                rows="6"
                placeholder="Share your enquiry or preferred next step."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button className="btn btn-primary full" type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Submitting..." : "Send Message"} <Icon name="arrow" size={18} />
            </button>

            {status === "success" && (
              <p className="form-success">Thank you. Your message has been submitted successfully.</p>
            )}

            {status === "error" && <p className="form-error">{error}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}
