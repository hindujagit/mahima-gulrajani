import Icon from "../components/Icon.jsx";
import { services } from "../data.js";

export default function Services() {
  return (
    <main>
      <section className="page-hero">
        <div className="container center-block">
          <p className="eyebrow">Services</p>
          <h1>Therapy and counselling support tailored to real-life concerns.</h1>
          <p className="hero-copy">
            Explore support areas for emotional well-being, workplace stress, relationships, grief, child development,
            adolescent concerns, and parenting guidance.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container services-page-grid">
          {services.map((service) => (
            <article className="service-detail-card" key={service.title}>
              <img src={service.image} alt={service.title} />
              <div>
                <span className="icon-box"><Icon name={service.icon} size={26} /></span>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
                <ul>
                  <li>Safe, confidential and non-judgmental support</li>
                  <li>Structured sessions focused on clarity and coping skills</li>
                  <li>Practical guidance based on the client’s needs</li>
                </ul>
                <a className="text-link" href="/book-appointment">Book appointment <Icon name="arrow" size={16} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
