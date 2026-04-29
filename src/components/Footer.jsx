export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © 2026{" "}
          <a href="https://trogis.com" target="_blank" rel="noopener noreferrer">
            Trogis
          </a>
          . All rights reserved.
        </p>

        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/refund-policy">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
}