import Icon from "../components/Icon.jsx";
import { stats, services, timeline, certifications } from "../data.js";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Therapy for clarity, growth and resilience</p>
            <h1>Compassionate support for emotional well-being.</h1>
            <p className="hero-copy">
              Work with Mahima Gulrajani, an Industrial Psychologist and Therapist supporting individuals,
              children, adolescents, caregivers, and professionals through safe, structured, and empathetic counselling.
            </p>
            <div className="button-row">
              <a href="/book-appointment" className="btn btn-primary">Book a Session <Icon name="arrow" size={18} /></a>
              <a href="#about" className="btn btn-secondary">View Profile</a>
            </div>
          </div>

          <div className="hero-card-wrap">
            <div className="image-card">
              <img src="/images/hero-therapy-session.jpg" alt="Therapist consultation" />
            </div>
            <div className="stats-float">
              {stats.map((item) => (
                <div key={item.label}>
                  <strong>
                    <AnimatedCounter value={item.value} duration={4500} />
                  </strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section section-white">
        <div className="container about-grid">
          <div className="soft-image">
            <img src="/images/about-mahima-profile.jpg" alt="Mahima Gulrajani profile" />
          </div>
          <div>
            <p className="eyebrow">About Mahima</p>
            <h2>Experienced therapist with a warm, structured approach.</h2>
            <p className="section-copy">
              Mahima Gulrajani is a psychology professional with experience in individual therapy, workplace well-being,
              child psychology, adolescent support, clinical assessments, psychoeducation, and counselling.
            </p>
            <div className="check-grid">
              {["MA in Psychology", "Diploma in Integrative Counselling", "Clinical assessment experience", "Child and adolescent therapy experience"].map((item) => (
                <div className="check-card" key={item}><Icon name="check" size={22} /> {item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center-block">
          <p className="eyebrow">How she can help</p>
          <h2>Areas of support</h2>
          <p className="section-copy">Therapy and counselling support for emotional, personal, workplace, family, and developmental concerns.</p>
        </div>
        <div className="container service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="icon-box"><Icon name={service.icon} size={28} /></span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="/services">Learn more</a>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-band">
        <div className="container stat-grid">
          {stats.map((item) => (
            <div className="stat-card" key={item.label}>
              <strong>
                <AnimatedCounter value={item.value} duration={4500} />
              </strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

<section className="section section-white">
  <div className="container credibility-section">
    <div className="center-block">
      <p className="eyebrow">Professional background</p>
      <h2>Grounded in clinical learning, child therapy, and workplace well-being.</h2>
      <p className="section-copy">
        Mahima brings experience across therapy, psychological assessments, emotional wellness,
        child development, caregiver support, and workplace mental health.
      </p>
    </div>

    <div className="credibility-grid">
      <div className="credibility-card">
        <h3>Individual Therapy</h3>
        <p>Supporting clients with stress, grief, relationships, self-esteem, and emotional well-being.</p>
      </div>

      <div className="credibility-card">
        <h3>Clinical Exposure</h3>
        <p>Experience with case history taking, MSE documentation, and psychological assessments.</p>
      </div>

      <div className="credibility-card">
        <h3>Child & Adolescent Support</h3>
        <p>Work with ADHD, learning difficulties, autism, emotional awareness, and parenting guidance.</p>
      </div>

      <div className="credibility-card">
        <h3>Workplace Wellness</h3>
        <p>Support for workplace stress, burnout, emotional balance, and therapy pathway development.</p>
      </div>
    </div>
  </div>
</section>

      <section className="section">
        <div className="container two-cards">
          <div className="info-card aqua">
            <span className="icon-box white"><Icon name="shield" size={28} /></span>
            <h2>Therapy approach</h2>
            <p>Mahima’s approach is empathetic, inclusive, client-centered, and structured. Sessions focus on active listening, emotional clarity, practical coping strategies, and creating a safe space for growth.</p>
          </div>
          <div className="info-card">
            <span className="icon-box"><Icon name="award" size={28} /></span>
            <h2>Certifications & training</h2>
            <div className="cert-list">
              {certifications.map((item) => <div key={item}><Icon name="check" size={20} /> {item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-grid">
          <div>
            <p className="eyebrow peach">Start your therapy journey</p>
            <h2>Take the first step toward emotional clarity and support.</h2>
            <p>Book a confidential session or connect to understand how therapy can support your personal, emotional, family, or workplace concerns.</p>
          </div>
          <a href="/book-appointment" className="btn btn-primary">Request Appointment <Icon name="calendar" size={18} /></a>
        </div>
      </section>
    </main>
  );
}
