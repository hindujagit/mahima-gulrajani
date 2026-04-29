import { contact } from "../data.js";

export default function BookAppointment() {
  return (
    <main>
      <section className="page-hero">
        <div className="container center-block">
          <p className="eyebrow">Book appointment</p>
          <h1>Schedule a therapy session at your preferred time.</h1>
          <p className="hero-copy">Use the calendar below to choose a slot. You can replace the Calendly link anytime in the code.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="embed-card calendly-card">
            <iframe
              src={contact.calendlyEmbedUrl}
              title="Calendly booking"
              width="100%"
              height="820"
              frameBorder="0"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
