"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Language = "es" | "en" | "de";
export type Theme = "light" | "dark";

interface PreferencesContextValue {
  language: Language;
  theme: Theme;
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  setLanguage: (language: Language) => void;
  setTheme: (theme: Theme) => void;
  setHighContrast: (enabled: boolean) => void;
  setLargeText: (enabled: boolean) => void;
  setReducedMotion: (enabled: boolean) => void;
  t: (key: string) => string;
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

const translations: Record<Language, Record<string, string>> = {
  es: {
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "nav.open": "Abrir menú de navegación",
    "nav.close": "Cerrar menú de navegación",
    "preferences.label": "Preferencias de accesibilidad y apariencia",
    "preferences.title": "Preferencias",
    "preferences.theme": "Tema",
    "preferences.light": "Claro",
    "preferences.dark": "Oscuro",
    "preferences.language": "Idioma",
    "preferences.contrast": "Alto contraste",
    "preferences.largeText": "Texto grande",
    "preferences.motion": "Reducir movimiento",
    "preferences.open": "Abrir preferencias",
    "preferences.close": "Cerrar preferencias",
    "accessibility.skip": "Saltar al contenido principal",
    "hero.connect": "Conectar en LinkedIn",
    "hero.projects": "Ver proyectos seleccionados",
    "hero.headline": "Creo sistemas escalables con interfaces digitales refinadas.",
    "hero.summary":
      "Estudiante de Ingeniería de Sistemas y desarrollador full-stack enfocado en arquitectura backend, modelado de datos, entrega en la nube, automatización, flujos con IA e interfaces centradas en las personas.",
    "showcase.eyebrow": "Cómo trabajo",
    "projects.eyebrow": "Trabajo seleccionado",
    "projects.title": "Proyectos destacados",
    "projects.filter": "Filtrar proyectos por categoría",
    "projects.all": "Todos",
    "projects.academic": "Académicos",
    "projects.personal": "Personales",
    "experience.eyebrow": "Trayectoria profesional",
    "experience.title": "Experiencia",
    "experience.achievements": "Logros clave",
    "education.eyebrow": "Base académica",
    "education.title": "Educación",
    "skills.eyebrow": "Capacidades",
    "skills.title": "Habilidades técnicas",
    "repositories.eyebrow": "Repositorios especializados",
    "repositories.title": "Evidencia técnica adicional",
    "repositories.more": "Mostrar más repositorios",
    "repositories.fewer": "Mostrar menos repositorios",
    "cta.eyebrow": "¿Qué sigue?",
    "cta.title": "Trabajemos juntos",
    "cta.body":
      "Estoy disponible para nuevas oportunidades, proyectos freelance y colaboraciones. Si tienes una pregunta o simplemente quieres saludar, mi bandeja de entrada está abierta.",
    "cta.contact": "Contáctame",
    "footer.built": "Construido con pensamiento sistémico y consciente.",
  },
  en: {
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.open": "Open navigation menu",
    "nav.close": "Close navigation menu",
    "preferences.label": "Accessibility and appearance preferences",
    "preferences.title": "Preferences",
    "preferences.theme": "Theme",
    "preferences.light": "Light",
    "preferences.dark": "Dark",
    "preferences.language": "Language",
    "preferences.contrast": "High contrast",
    "preferences.largeText": "Large text",
    "preferences.motion": "Reduce motion",
    "preferences.open": "Open preferences",
    "preferences.close": "Close preferences",
    "accessibility.skip": "Skip to main content",
    "hero.connect": "Connect on LinkedIn",
    "hero.projects": "View selected projects",
    "hero.headline": "I build scalable systems with refined digital interfaces.",
    "hero.summary":
      "Systems Engineering student and full-stack technologist focused on backend architecture, database modeling, cloud delivery, automation, AI-enabled workflows, and user-centered front-end implementation.",
    "showcase.eyebrow": "How I work",
    "projects.eyebrow": "Selected work",
    "projects.title": "Featured Projects",
    "projects.filter": "Filter projects by category",
    "projects.all": "All",
    "projects.academic": "Academic",
    "projects.personal": "Personal",
    "experience.eyebrow": "Professional timeline",
    "experience.title": "Experience",
    "experience.achievements": "Key Achievements",
    "education.eyebrow": "Academic base",
    "education.title": "Education",
    "skills.eyebrow": "Capabilities",
    "skills.title": "Technical Skills",
    "repositories.eyebrow": "Specialized repositories",
    "repositories.title": "Auxiliary Technical Evidence",
    "repositories.more": "Show more repositories",
    "repositories.fewer": "Show fewer repositories",
    "cta.eyebrow": "What's Next?",
    "cta.title": "Let's Work Together",
    "cta.body":
      "I am currently open to new opportunities, freelance projects, and exciting collaborations. Whether you have a question or just want to say hi, my inbox is always open.",
    "cta.contact": "Contact Me",
    "footer.built": "Built with restrained systems thinking.",
  },
  de: {
    "nav.projects": "Projekte",
    "nav.about": "Über mich",
    "nav.contact": "Kontakt",
    "nav.open": "Navigationsmenü öffnen",
    "nav.close": "Navigationsmenü schließen",
    "preferences.label": "Einstellungen für Barrierefreiheit und Darstellung",
    "preferences.title": "Einstellungen",
    "preferences.theme": "Darstellung",
    "preferences.light": "Hell",
    "preferences.dark": "Dunkel",
    "preferences.language": "Sprache",
    "preferences.contrast": "Hoher Kontrast",
    "preferences.largeText": "Große Schrift",
    "preferences.motion": "Bewegung reduzieren",
    "preferences.open": "Einstellungen öffnen",
    "preferences.close": "Einstellungen schließen",
    "accessibility.skip": "Zum Hauptinhalt springen",
    "hero.connect": "Auf LinkedIn verbinden",
    "hero.projects": "Ausgewählte Projekte ansehen",
    "hero.headline": "Ich entwickle skalierbare Systeme mit klaren digitalen Schnittstellen.",
    "hero.summary":
      "Student der Systemtechnik und Full-Stack-Entwickler mit Fokus auf Backend-Architektur, Datenmodellierung, Cloud-Bereitstellung, Automatisierung, KI-gestützten Workflows und nutzerzentrierter Frontend-Entwicklung.",
    "showcase.eyebrow": "Meine Arbeitsweise",
    "projects.eyebrow": "Ausgewählte Arbeiten",
    "projects.title": "Ausgewählte Projekte",
    "projects.filter": "Projekte nach Kategorie filtern",
    "projects.all": "Alle",
    "projects.academic": "Akademisch",
    "projects.personal": "Persönlich",
    "experience.eyebrow": "Beruflicher Werdegang",
    "experience.title": "Erfahrung",
    "experience.achievements": "Wichtige Erfolge",
    "education.eyebrow": "Akademische Grundlage",
    "education.title": "Ausbildung",
    "skills.eyebrow": "Fähigkeiten",
    "skills.title": "Technische Kenntnisse",
    "repositories.eyebrow": "Spezialisierte Repositories",
    "repositories.title": "Zusätzliche technische Nachweise",
    "repositories.more": "Weitere Repositories anzeigen",
    "repositories.fewer": "Weniger Repositories anzeigen",
    "cta.eyebrow": "Wie geht es weiter?",
    "cta.title": "Lass uns zusammenarbeiten",
    "cta.body":
      "Ich bin offen für neue Möglichkeiten, Freelance-Projekte und spannende Kooperationen. Wenn du eine Frage hast oder einfach Hallo sagen möchtest, ist mein Posteingang offen.",
    "cta.contact": "Kontakt aufnehmen",
    "footer.built": "Mit bewusstem Systemdenken entwickelt.",
  },
};

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem("site-language");
  if (saved === "es" || saved === "en" || saved === "de") return saved;
  return navigator.language.toLowerCase().startsWith("es")
    ? "es"
    : navigator.language.toLowerCase().startsWith("de")
      ? "de"
      : "en";
};

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const [theme, setThemeState] = useState<Theme>(() =>
    typeof window !== "undefined" && window.localStorage.getItem("site-theme") === "dark"
      ? "dark"
      : "light",
  );
  const [highContrast, setHighContrastState] = useState(
    () => typeof window !== "undefined" && window.localStorage.getItem("site-contrast") === "true",
  );
  const [largeText, setLargeTextState] = useState(
    () => typeof window !== "undefined" && window.localStorage.getItem("site-large-text") === "true",
  );
  const [reducedMotion, setReducedMotionState] = useState(
    () => typeof window !== "undefined" && window.localStorage.getItem("site-reduced-motion") === "true",
  );

  useEffect(() => {
    document.documentElement.lang = language;
    // Allows Chrome, Edge, Safari extensions, and other user agents to translate
    // project content that is not part of the local UI dictionary.
    document.documentElement.translate = true;
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.contrast = highContrast ? "high" : "normal";
    document.documentElement.dataset.textSize = largeText ? "large" : "normal";
    document.documentElement.dataset.motion = reducedMotion ? "reduced" : "normal";
  }, [language, theme, highContrast, largeText, reducedMotion]);

  const value = useMemo<PreferencesContextValue>(
    () => ({
      language,
      theme,
      highContrast,
      largeText,
      reducedMotion,
      setLanguage: (next) => {
        setLanguageState(next);
        window.localStorage.setItem("site-language", next);
      },
      setTheme: (next) => {
        setThemeState(next);
        window.localStorage.setItem("site-theme", next);
      },
      setHighContrast: (next) => {
        setHighContrastState(next);
        window.localStorage.setItem("site-contrast", String(next));
      },
      setLargeText: (next) => {
        setLargeTextState(next);
        window.localStorage.setItem("site-large-text", String(next));
      },
      setReducedMotion: (next) => {
        setReducedMotionState(next);
        window.localStorage.setItem("site-reduced-motion", String(next));
      },
      t: (key) => translations[language][key] ?? translations.en[key] ?? key,
    }),
    [language, theme, highContrast, largeText, reducedMotion],
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error("usePreferences must be used within PreferencesProvider");
  return context;
}
