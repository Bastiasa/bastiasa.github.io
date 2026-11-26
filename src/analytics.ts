export const CONSENT_STORAGE_KEY = "cookie-consent";

export type AnalyticsConsent = "accepted" | "denied";

declare global {
  interface Window {
    gtag?: (
      command: "consent",
      action: "update",
      settings: { analytics_storage: "granted" | "denied" },
    ) => void;
  }
}

export function setAnalyticsConsent(choice: AnalyticsConsent) {
  window.gtag?.("consent", "update", {
    analytics_storage: choice === "accepted" ? "granted" : "denied",
  });
}
