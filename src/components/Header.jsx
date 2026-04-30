import Icon from "./Icon.jsx";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="brand">
          <span className="brand-mark"><Icon name="sparkles" size={22} /></span>
          <span>
            <strong>Mahima Gulrajani</strong>
            <small>Psychologist & Therapist</small>
          </span>
        </a>

        <nav className="nav">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact-us">Contact</a>
          <a href="/book-appointment">Book Appointment</a>
        </nav>

        <a href="/book-appointment" className="header-cta">Book a Session</a>
      </div>
    </header>
  );
}
