import { EMAIL, LOCATION, NAME } from "./globals";

export const GITHUB_URL = "https://github.com/Bastiasa";
export const LINKEDIN_URL = "https://www.linkedin.com/in/luis-bastidas-64b06a29b/";

export const FOOTER_DATA = {
  name: NAME,
  email: EMAIL,
  location: LOCATION,
  socials: [
    { label: "GitHub", href: GITHUB_URL },
    { label: "LinkedIn", href: LINKEDIN_URL },
  ],
  otherProfiles: [
    { label: "Freelancer.com", href: "https://www.freelancer.com/u/Bastiasa" },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/~01fbbb2576482e139e?mp_source=share" },
    { label: "Itch.io", href: "https://bastiasa.itch.io/" },
    { label: "Dev.to", href: "https://dev.to/bastiasa" },
  ],
};
