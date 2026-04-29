import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import BookAppointment from "./pages/BookAppointment.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";

function getCurrentPage() {
  const path = window.location.pathname;

  if (path === "/services") return <Services />;
  if (path === "/contact-us") return <Contact />;
  if (path === "/book-appointment") return <BookAppointment />;
  if (path === "/privacy-policy") return <PrivacyPolicy />;
  if (path === "/terms") return <Terms />;
  if (path === "/refund-policy") return <RefundPolicy />;

  return <Home />;
}

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      {getCurrentPage()}
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
