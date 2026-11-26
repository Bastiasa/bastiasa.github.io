import type { FOOTER_DATA } from "../data/footer";

export function Footer({ name, email, socials, otherProfiles, location }: typeof FOOTER_DATA) {
  return (
    <footer className="site-footer">
      <div className="container">
        <section id="contact" className="contact-layout" aria-labelledby="contact-title">
          <div>
            <h2 className="section-title" id="contact-title">Get in touch</h2>
            <p>I’m open to backend roles in Colombia and internationally, especially remote opportunities.</p>
            <p className="contact-location">{location}</p>
          </div>

          <div className="contact-links">
            <a className="button button-primary" href={`mailto:${email}`}>{email} <span className="arrow-external" aria-hidden="true" /></a>
            <ul className="contact-socials">
              {socials.map(({ label, href }) => (
                <li key={href}><a className="button button-secondary" href={href}>{label} <span className="arrow-external" aria-hidden="true" /></a></li>
              ))}
            </ul>
          </div>
        </section>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {name}</span>
          <nav aria-label="Other profiles">
            {otherProfiles.map(({ label, href }) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  );
}
