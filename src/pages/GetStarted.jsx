import { useState } from "react";
import Icon from "../components/Icon.jsx";

const WEBHOOK_URL = "https://workflows.mantracare.com/webhook/get-started-page";

const buildWebhookUrl = (page, formData) => {
  const buildWebhookPayload = (page, formData) => ({
    page,
    name: formData.name,
    email: formData.email,
    phone: "+91" + formData.phone,
    concern: formData.concern,
    preferred_language: formData.preferredLanguage,
    preferred_time: formData.preferredTime,
    source_url: window.location.href,
    submitted_at: new Date().toISOString(),
  });

  return `${WEBHOOK_URL}?${params.toString()}`;
};

export default function GetStarted() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    concern: "",
    preferredLanguage: "",
    preferredTime: "",
  });

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
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buildWebhookPayload("get-started", form)),
      });

      if (!response.ok) {
        throw new Error(`Webhook failed with status ${response.status}`);
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        concern: "",
        preferredLanguage: "",
        preferredTime: "",
      });
    } catch (submissionError) {
      console.error("Webhook submission error:", submissionError);
      setStatus("error");
      setError("Something went wrong. Please try again or contact us on WhatsApp.");
    }
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container center-block">
          <p className="eyebrow">Therapy Assessment</p>
          <h1>Let’s understand how we can support you.</h1>
          <p className="section-copy">
            Share a few details and Mahima’s team will get back to you with the next steps for virtual therapy support.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container assessment-grid">
          <aside className="assessment-card">
            <span className="icon-box">
              <Icon name="shield" size={28} />
            </span>
            <h2>Before we begin</h2>
            <p>
              This short form helps us understand your needs and guide you toward the right therapy support.
              Sessions are virtual, confidential, and available in English, Hindi, and Marathi.
            </p>

            <div className="assessment-points">
              <div>
                <Icon name="check" size={20} />
                <span>No wait lists</span>
              </div>
              <div>
                <Icon name="check" size={20} />
                <span>Video sessions</span>
              </div>
              <div>
                <Icon name="check" size={20} />
                <span>100% confidential</span>
              </div>
            </div>
          </aside>

          <form className="assessment-form" onSubmit={handleSubmit}>
            <div className="form-row two-column">
              <div className="form-group">
                <label htmlFor="assessmentName">Name</label>
                <input
                  id="assessmentName"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="assessmentEmail">Email</label>
                <input
                  id="assessmentEmail"
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
              <label htmlFor="assessmentPhone">Phone number</label>
              <input
                id="assessmentPhone"
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

            <div className="form-row two-column">
              <div className="form-group">
                <label htmlFor="preferredLanguage">Preferred language</label>
                <select
                  id="preferredLanguage"
                  name="preferredLanguage"
                  value={form.preferredLanguage}
                  onChange={handleChange}
                >
                  <option value="">Select language</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Marathi">Marathi</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="preferredTime">Preferred time</label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={form.preferredTime}
                  onChange={handleChange}
                >
                  <option value="">Select preferred time</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="assessmentConcern">What would you like support with?</label>
              <textarea
                id="assessmentConcern"
                name="concern"
                rows="6"
                placeholder="Briefly share what you are currently experiencing or looking for support with."
                value={form.concern}
                onChange={handleChange}
                required
              />
            </div>

            <button className="btn btn-primary full" type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Submitting..." : "Submit Assessment"} <Icon name="arrow" size={18} />
            </button>

            {status === "success" && (
              <p className="form-success">
                Thank you. Your assessment has been submitted successfully. Mahima’s team will get back to you shortly.
              </p>
            )}

            {status === "error" && <p className="form-error">{error}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}
