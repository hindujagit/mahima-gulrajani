import Icon from "./Icon.jsx";
import { contact } from "../data.js";

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hi Mahima, I would like to know more about therapy sessions.");
  return (
    <a
      className="whatsapp-button"
      href={`https://wa.me/${contact.whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <Icon name="whatsapp" size={28} />
    </a>
  );
}
