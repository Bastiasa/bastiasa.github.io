import { useEffect, useState } from "react";
import { CONSENT_STORAGE_KEY, setAnalyticsConsent, type AnalyticsConsent } from "../analytics";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CONSENT_STORAGE_KEY);
      setVisible(saved !== "accepted" && saved !== "denied");
    } catch {
      setVisible(true);
    }
  }, []);

  function saveChoice(choice: AnalyticsConsent) {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } catch {
      // Apply the choice for this page when storage is unavailable.
    }

    setAnalyticsConsent(choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside className="cookie-consent" aria-label="Analytics cookies">
      <div className="cookie-consent-inner">
        <p>Allow Google Analytics cookies to help me understand how visitors use this portfolio.</p>
        <div className="cookie-actions">
          <button className="button button-secondary" type="button" onClick={() => saveChoice("denied")}>Reject</button>
          <button className="button button-primary" type="button" onClick={() => saveChoice("accepted")}>Accept</button>
        </div>
      </div>
    </aside>
  );
}
