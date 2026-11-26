import { translate, type Locale } from "../i18n";
import type { CertificateData } from "../types";

export function CertificatesSection({ certificates, locale }: { certificates: CertificateData[]; locale: Locale }) {
  const t = (text: string) => translate(locale, text);
  return (
    <section id="certifications" className="page-section" aria-labelledby="certifications-title">
      <span id="certificaciones" />
      <h2 id="certifications-title" className="section-title">{t("Certifications")}</h2>
      <ul className="certificates-list">
        {certificates.map(({ image, url, title, issuer, level }) => (
          <li key={url}>
            <a className="certificate" href={url}>
              <img src={image} alt="" width="52" height="52" loading="lazy" decoding="async" />
              <span>
                <strong>{t(title)}</strong>
                <span className="certificate-issuer">{issuer}{level && ` · ${t(level)}`}</span>
              </span>
              <span className="arrow-external certificate-arrow" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
