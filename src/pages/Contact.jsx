import Icon from "../components/Icon.jsx";
import { contact } from "../data.js";

export default function Contact() {
  return (
    <main>
      <section className="page-hero">
        <div className="container center-block">
          <p className="eyebrow">Contact us</p>
          <h1>Share your details and we’ll help you take the next step.</h1>
          <p className="hero-copy">Use the form below for appointment requests, general queries, or workshop inquiries.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container contact-grid">
          <div className="contact-card">
            <h2>Contact Mahima</h2>
            <a href={`tel:${contact.phoneHref}`}><Icon name="phone" /> {contact.phoneDisplay}</a>
            <a href={`mailto:${contact.email}`}><Icon name="mail" /> {contact.email}</a>
            <a href={contact.linkedinUrl}><Icon name="linkedin" /> LinkedIn Profile</a>
            <a className="btn btn-primary full" href="/book-appointment">Book Appointment</a>
          </div>

          <div className="embed-card">
            <iframe
              src={contact.googleFormEmbedUrl}
              title="Contact form"
              width="100%"
              height="760"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
            <p className="embed-note">Replace the Google Form URL in <code>src/data.js</code>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
