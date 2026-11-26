import type { CertificateData } from "../types";

export function CertificatesSection({ certificates }: { certificates: CertificateData[] }) {
  return (
    <section id="certifications" className="page-section" aria-labelledby="certifications-title">
      <span id="certificaciones" />
      <h2 id="certifications-title" className="section-title">Certifications</h2>
      <ul className="certificates-list">
        {certificates.map(({ image, url, title, issuer, level }) => (
          <li key={url}>
            <a className="certificate" href={url}>
              <img src={image} alt="" width="52" height="52" loading="lazy" decoding="async" />
              <span>
                <strong>{title}</strong>
                <span className="certificate-issuer">{issuer}{level && ` · ${level}`}</span>
              </span>
              <span className="arrow-external certificate-arrow" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
