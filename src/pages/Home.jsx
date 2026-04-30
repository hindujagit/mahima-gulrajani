import Icon from "../components/Icon.jsx";
import { services } from "../data.js";

const heroHighlights = [
  "No wait lists",
  "Video sessions",
  "100% confidential",
  "Anytime, anywhere, any device",
];

const feedbackItems = [
  {
    user: "Diya",
    feedback:
      "Mahima offers thoughtful guidance with calm, logical responses that make it easier to reflect and move forward.",
  },
  {
    user: "Nikhitha Panicker",
    feedback:
      "She patiently listened without judgment, validated my feelings, and helped me understand how therapy could support me better.",
  },
  {
    user: "Wise Newt",
    feedback:
      "She is a very good listener. I felt safe sharing my worries and felt lighter after speaking with her.",
  },
  {
    user: "Rohan",
    feedback:
      "Mahima was kind and listened patiently throughout the session. Her inputs helped me gain a deeper understanding of myself.",
  },
  {
    user: "Aarav",
    feedback:
      "The session felt calm, structured, and reassuring. I appreciated the way she helped me organize my thoughts.",
  },
  {
    user: "Meera",
    feedback:
      "I felt genuinely heard and understood. The conversation gave me clarity and practical ways to cope.",
  },
];

const faqItems = [
  {
    question: "What is online therapy and how does it work?",
    answer:
      "Online therapy is a virtual counselling session conducted through a secure video call. You can speak with Mahima from a private space at home, work, or any comfortable location. Sessions are focused on understanding your concerns, building emotional clarity, and helping you develop practical coping strategies.",
  },
  {
    question: "Are sessions with Mahima conducted virtually?",
    answer:
      "Yes. Therapy sessions with Mahima are conducted virtually through video sessions, making support accessible from anywhere. This is helpful for individuals, adolescents, and working professionals who prefer flexible and confidential online therapy.",
  },
  {
    question: "Who can benefit from therapy with Mahima?",
    answer:
      "Therapy can support people experiencing stress, anxiety, emotional overwhelm, relationship concerns, grief, low self-esteem, workplace stress, burnout, or major life transitions. You do not need to wait for a crisis to begin therapy.",
  },
  {
    question: "What experience does Mahima Gulrajani have?",
    answer:
      "Mahima Gulrajani is a Psychologist and Therapist with experience in individual therapy, workplace well-being, child and adolescent support, caregiver guidance, emotional wellness, and psychological assessments. Her approach is warm, structured, compassionate, and client-centered.",
  },
  {
    question: "What languages does Mahima speak?",
    answer:
      "Mahima offers therapy support in English, Hindi, and Marathi, so clients can choose the language they feel most comfortable using during sessions.",
  },
  {
    question: "Is online therapy effective for stress, anxiety, and emotional concerns?",
    answer:
      "Online therapy can be effective for stress, anxiety, relationship concerns, workplace stress, emotional difficulties, and personal growth. A virtual therapy session allows you to receive structured support while staying in a familiar and comfortable environment.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Yes. Sessions are private and confidential. Your personal information and therapy discussions are handled with care and are not shared without your explicit consent, except where required by safety or legal obligations.",
  },
  {
    question: "How do I know if I should start therapy?",
    answer:
      "You may consider therapy if you feel emotionally overwhelmed, stuck, anxious, stressed, disconnected, or unsure how to manage your thoughts, relationships, or life changes. Therapy can help you feel heard, understand yourself better, and move forward with more clarity.",
  },
];

export default function Home() {
  const repeatedFeedback = [...feedbackItems, ...feedbackItems];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Psychologist & Therapist</p>
            <h1 className="hero-title">
              A safe space for healing, growth, and self-understanding.
            </h1>
            <p className="hero-copy">
              A calm, confidential space where you can express freely, feel truly heard,
              and work through emotional, personal, family, or workplace concerns at your own pace.
            </p>
            <div className="button-row">
              <a href="/get-started" className="btn btn-primary">
                Get Started <Icon name="arrow" size={18} />
              </a>
              <a href="#about" className="btn btn-secondary">
                View Profile
              </a>
            </div>
          </div>

          <div className="hero-card-wrap">
            <div className="hero-features" aria-label="Therapy session benefits">
              <p className="hero-feature-label">Therapy that feels accessible</p>
              <ul>
                {heroHighlights.map((item) => (
                  <li key={item}>
                    <span className="feature-check" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/get-started" className="hero-cta">
                Start therapy assessment <Icon name="arrow" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section section-white">
        <div className="container about-grid">
          <div className="soft-image">
            <img src="/images/about-mahima-profile.jpg" alt="Mahima Gulrajani" />
          </div>
          <div>
            <p className="eyebrow">About Mahima</p>
            <h2>A warm, structured, and compassionate approach to therapy.</h2>
            <p className="section-copy">
              I’m Mahima Gulrajani, a Psychologist & Therapist, working with individuals,
              adolescents, and professionals navigating stress, emotional difficulties,
              relationship concerns, and life transitions.
            </p>
            <p className="section-copy">
              I offer a safe, non-judgmental space where you can express yourself freely,
              feel understood, and work through your thoughts and emotions at your own pace.
              My approach combines empathy with structure, helping you not just talk, but
              also gain clarity, insight, and practical ways to cope and grow.
            </p>
            <p className="section-copy">
              With experience in individual therapy, workplace well-being, and child and
              adolescent support, I tailor each session to your unique needs so therapy
              feels relevant, supportive, and meaningful to you.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center-block">
          <p className="eyebrow">How therapy can help</p>
          <h2>Support for clarity, resilience, and emotional growth.</h2>
          <p className="section-copy">
            Therapy and counselling support for emotional, personal, workplace,
            family, and developmental concerns.
          </p>
        </div>

        <div className="container service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="icon-box">
                <Icon name={service.icon} size={28} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="/services">Learn more</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section feedback-section">
        <div className="container center-block">
          <p className="eyebrow">Client feedback</p>
          <h2>Stories of feeling heard, supported, and understood.</h2>
          <p className="section-copy">
            Every therapy journey is personal. Here are a few reflections shared by people who felt supported through their sessions.
          </p>
        </div>

        <div className="feedback-carousel" aria-label="Client feedback carousel">
          <div className="feedback-track">
            {repeatedFeedback.map((item, index) => (
              <article className="feedback-card" key={`${item.user}-${index}`}>
                <div className="quote-mark" aria-hidden="true">“</div>
                <p>{item.feedback}</p>
                <h3>{item.user}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container center-block">
          <p className="eyebrow">Online therapy FAQs</p>
          <h2>Frequently asked questions about online therapy.</h2>
          <p className="section-copy">
            Answers about virtual therapy sessions, confidentiality, languages, Mahima’s experience, and how online counselling can support emotional well-being.
          </p>
        </div>

        <div className="container faq-list">
          {faqItems.map((item, index) => (
            <details className="faq-item" key={item.question} open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <Icon name="chevron" size={20} />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-grid">
          <div>
            <p className="eyebrow peach">Start your therapy journey</p>
            <h2>Take the first step toward emotional clarity and support.</h2>
            <p>
              Complete a short therapy assessment so the right support can be understood
              before your first session.
            </p>
          </div>
          <a href="/get-started" className="btn btn-primary">
            Get Started <Icon name="calendar" size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
