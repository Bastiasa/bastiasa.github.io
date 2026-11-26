import type { ProjectInfo } from "../types";

type ProjectTranslation = Pick<ProjectInfo, "description" | "solution" | "technicalHighlights" | "status"> & {
  title?: string;
  alt?: string;
};

export const projectTranslations: Record<string, ProjectTranslation> = {
  "lan-voting": {
    title: "Sistema de votación en LAN",
    status: "Disponible para Windows",
    description: "Recoge y muestra votos en tiempo real en una red local privada sin conexión a Internet.",
    solution: "Las aplicaciones de escritorio Voter difunden periódicamente los totales por UDP con cifrado AES. Un visor independiente identifica los dispositivos emisores por los paquetes recibidos, suma sus votos en un gráfico en vivo y exporta los resultados a CSV.",
    technicalHighlights: ["Las aplicaciones Voter y el visor comparten una lista de candidatos y un puerto UDP configurable.", "El visor valida los datos de los paquetes y actualiza los totales al recibir cada transmisión."],
  },
  "digital-projector": {
    status: "Código fuente público",
    description: "Controla la reproducción de imágenes, video y audio locales desde otro dispositivo conectado a la misma red.",
    solution: "Electron ejecuta un servidor Fastify integrado que sirve un panel web y transmite archivos desde el disco. Socket.IO lleva las órdenes de reproducción al equipo anfitrión y sincroniza el estado con los visores conectados.",
    technicalHighlights: [
      "Un código QR abre el panel de control en la dirección local del equipo anfitrión.",
      "El servidor indexa las carpetas seleccionadas y sirve archivos por ID con el tipo MIME detectado.",
      "Las actualizaciones incluyen el estado de pausa, la posición y el volumen.",
    ],
  },
  "pressure-point": {
    title: "Pressure Point — Multijugador con WebRTC",
    status: "Proyecto publicado de una game jam",
    description: "Conecta a dos jugadores y mantiene sincronizado el estado de los acertijos durante una partida en línea.",
    solution: "Un servidor de señalización en Node.js coordina la conexión entre pares. Los canales de datos de WebRTC transmiten las actualizaciones de la partida directamente entre los jugadores y usan nonces para validar las conexiones.",
    technicalHighlights: ["Me encargué de la programación en el equipo de la game jam."],
    alt: "Pantalla de título de Pressure Point en estilo pixel art",
  },
  "webdav-server": {
    title: "Servidor WebDAV",
    status: "Implementación de protocolo",
    description: "Expone un directorio por HTTP para que un cliente WebDAV pueda consultar archivos y carpetas.",
    solution: "Un servidor en Python y Flask procesa solicitudes PROPFIND, interpreta el encabezado Depth y recorre los directorios de forma recursiva cuando se solicita enumerar los recursos.",
  },
  "esp32-cam-streaming": {
    title: "Sistema de transmisión con ESP32-CAM",
    status: "Experimento de transmisión",
    description: "Transmite imágenes desde un microcontrolador a una aplicación en otro dispositivo a través de la red.",
    solution: "La ESP32-CAM transmite fotogramas mediante HTTP multipart. En un experimento separado con UDP, un receptor en Python procesa las imágenes que llegan por la red.",
  },
  "zona-magica": {
    status: "Sitio web en línea",
    description: "Desarrollé y desplegué un sitio web para una empresa de recreación y entretenimiento, con énfasis en visibilidad en buscadores y analítica.",
    technicalHighlights: ["Seguimiento personalizado de eventos y gestión del consentimiento.", "Datos estructurados, metadatos canónicos, sitemap e integración con Search Console.", "Diseño adaptable y optimización de imágenes."],
  },
  "multichannel-agent": {
    title: "Agente de IA multicanal",
    status: "Exploración de arquitectura",
    description: "Exploro cómo un servicio en Node.js podría coordinar conversaciones con IA entre plataformas de mensajería y proveedores de modelos.",
    technicalHighlights: ["Abstracción prevista para OpenAI, Gemini y Claude.", "El diseño considera conversaciones aisladas, memoria por conversación y gestión de mensajes concurrentes.", "Los posibles adaptadores de canales incluyen WhatsApp, Instagram, Messenger y Telegram."],
  },
  "braille-transformer": {
    status: "Proyecto para Android",
    description: "Aplicación nativa para Android que convierte texto a braille y permite escucharlo mediante síntesis de voz.",
    technicalHighlights: ["Reproducción de audio y persistencia local con SharedPreferences."],
  },
  blogcutter: {
    status: "Código fuente público",
    description: "Aplicación para Android que permite seleccionar y recortar varios segmentos de un video largo.",
    technicalHighlights: ["Explora el procesamiento de video con FFmpeg y con herramientas nativas para móviles."],
  },
  "8d-audio": {
    title: "Extensión de navegador de audio 8D",
    status: "Proyecto de extensión",
    description: "Extensión para Chrome que desplaza el sonido entre los canales estéreo en tiempo real para crear un efecto espacial.",
    technicalHighlights: ["Usa nodos de Web Audio API para controlar la posición estéreo y la ganancia durante la reproducción."],
  },
  "shirt-maker": {
    status: "Demo en línea",
    description: "Herramienta web para convertir imágenes personalizadas en maquetas interactivas de camisetas en 3D.",
    technicalHighlights: ["Controles personalizados y modelos 3D optimizados."],
    alt: "Diseño personalizado de camiseta sobre un modelo 3D",
  },
  "first-person-showcase": {
    status: "Demo en línea",
    description: "Demo en Godot de controles e interacción en primera persona en un entorno 3D.",
    alt: "Vista en primera persona de la demo en Godot",
  },
  arkanet: {
    status: "Proyecto de un curso",
    description: "Videojuego shoot ’em up en 2D desarrollado con Godot como parte de un curso de Platzi.",
    alt: "Portada de ArkaNet en estilo pixel art",
  },
  "dark-people": {
    status: "Beta pública",
    description: "Videojuego de terror hecho con Godot e inspirado en Five Nights at Freddy’s.",
    alt: "Portada de Dark People",
  },
};
