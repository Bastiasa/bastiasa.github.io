type SkillGroup = {
  title: string;
  technologies: string[];
  familiar?: string[];
};

export const coreBackend = ["Node.js", "JavaScript", "TypeScript", "Python", "REST APIs"];

export const backendSkills: SkillGroup[] = [
  {
    title: "Backend",
    technologies: ["Express.js", "Fastify", "Flask", "Django REST Framework", "PHP", "WebDAV"],
  },
  {
    title: "Networking & real-time",
    technologies: [
      "WebSockets", "WebRTC", "UDP", "TCP/IP", "HTTP", "Peer-to-peer communication",
      "UDP broadcasting", "Device discovery", "STUN", "Real-time synchronization",
    ],
  },
  {
    title: "Databases & storage",
    technologies: ["SQL", "Redis", "Data persistence", "JSON", "CSV processing"],
  },
  {
    title: "Security & cryptography",
    technologies: ["RSA", "AES", "SHA-256", "HMAC-SHA256", "Web Crypto API", "Encrypted communication"],
  },
  {
    title: "Automation & integrations",
    technologies: ["Python scripting", "Puppeteer", "FFmpeg", "Browser automation", "API integrations", "Event-driven systems"],
  },
];

export const complementarySkills: SkillGroup[] = [
  {
    title: "Frontend",
    technologies: ["React", "Vite", "Astro", "Next.js", "Tailwind CSS", "Mantine", "Material UI", "Recharts"],
  },
  {
    title: "Mobile & desktop",
    technologies: ["Kotlin", "Java", "Android SDK", "Capacitor", "Electron"],
    familiar: ["Tauri"],
  },
  {
    title: "Embedded systems & IoT",
    technologies: ["C", "C++", "ESP32", "ESP32-CAM", "ESP8266", "Bluetooth Low Energy", "GATT", "Network-based device communication"],
  },
  {
    title: "Development tools",
    technologies: ["Git", "GitHub", "GitHub Pages", "Visual Studio Code", "Windows development environments"],
  },
];
