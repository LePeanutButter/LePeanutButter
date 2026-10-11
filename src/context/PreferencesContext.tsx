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
    "nav.focus": "Enfoque",
    "header.focus": " Gobierno de TI | Arquitectura Empresarial | 	Transformación Digital",
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
    "hero.headline": "Gobierno y arquitectura para decisiones tecnológicas claras.",
    "hero.summary":
      "Estructuro capacidades, riesgos y decisiones para construir tecnología confiable y alineada al negocio.",
    "hero.network": "Conectar y hacer networking",
    "hero.experience": "Ver mi experiencia profesional",
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
    "experience.current": "Rol actual",
    "education.eyebrow": "Base académica",
    "education.title": "Educación",
    "skills.eyebrow": "Capacidades",
    "skills.title": "Habilidades técnicas",
    "repositories.eyebrow": "Repositorios especializados",
    "repositories.title": "Evidencia técnica adicional",
    "repositories.more": "Mostrar más repositorios",
    "repositories.fewer": "Mostrar menos repositorios",
    "cta.eyebrow": "Conectemos",
    "cta.title": "Conversaciones que conectan tecnología y propósito",
    "cta.body":
      "Me interesa conectar con profesionales y equipos que trabajen en gobierno de TI, arquitectura, seguridad, infraestructura, transformación digital y gestión tecnológica. Si compartimos intereses, conversemos.",
    "cta.contact": "Conectar en LinkedIn",
    "cta.secondary": "Conocer mi trayectoria",
    "footer.built": "Gobierno, arquitectura y tecnología con propósito.",
  },
  en: {
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.focus": "Focus",
    "header.focus": "IT Governance | Enterprise Architecture | Digital Transformation",
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
    "hero.headline": "Governance and architecture for clear technology decisions.",
    "hero.summary":
      "I structure capabilities, risks, and decisions to build reliable technology aligned with business needs.",
    "hero.network": "Connect and network",
    "hero.experience": "View my professional experience",
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
    "experience.current": "Current role",
    "education.eyebrow": "Academic base",
    "education.title": "Education",
    "skills.eyebrow": "Capabilities",
    "skills.title": "Technical Skills",
    "repositories.eyebrow": "Specialized repositories",
    "repositories.title": "Auxiliary Technical Evidence",
    "repositories.more": "Show more repositories",
    "repositories.fewer": "Show fewer repositories",
    "cta.eyebrow": "Let's connect",
    "cta.title": "Conversations that connect technology and purpose",
    "cta.body":
      "I enjoy connecting with professionals and teams working across IT governance, architecture, security, infrastructure, digital transformation, and technology management. If our interests overlap, let's talk.",
    "cta.contact": "Connect on LinkedIn",
    "cta.secondary": "Explore my background",
    "footer.built": "Governance, architecture, and technology with purpose.",
  },
  de: {
    "nav.projects": "Projekte",
    "nav.about": "Über mich",
    "nav.contact": "Kontakt",
    "nav.focus": "Fokus",
    "header.focus": "IT-Governance | Unternehmensarchitektur | Digitale Transformation",
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
    "hero.headline": "Governance und Architektur für klare Technologieentscheidungen.",
    "hero.summary":
      "Ich strukturiere Fähigkeiten, Risiken und Entscheidungen für zuverlässige und geschäftsorientierte Technologie.",
    "hero.network": "Vernetzen",
    "hero.experience": "Meine Berufserfahrung ansehen",
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
    "experience.current": "Aktuelle Position",
    "education.eyebrow": "Akademische Grundlage",
    "education.title": "Ausbildung",
    "skills.eyebrow": "Fähigkeiten",
    "skills.title": "Technische Kenntnisse",
    "repositories.eyebrow": "Spezialisierte Repositories",
    "repositories.title": "Zusätzliche technische Nachweise",
    "repositories.more": "Weitere Repositories anzeigen",
    "repositories.fewer": "Weniger Repositories anzeigen",
    "cta.eyebrow": "Vernetzen wir uns",
    "cta.title": "Gespräche, die Technologie und Zweck verbinden",
    "cta.body":
      "Ich vernetze mich gerne mit Fachleuten und Teams aus IT-Governance, Architektur, Sicherheit, Infrastruktur, digitaler Transformation und Technologiemanagement. Wenn unsere Interessen zusammenpassen, lass uns sprechen.",
    "cta.contact": "Auf LinkedIn vernetzen",
    "cta.secondary": "Meinen Werdegang ansehen",
    "footer.built": "Governance, Architektur und Technologie mit Sinn.",
  },
};

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [theme, setThemeState] = useState<Theme>("light");
  const [highContrast, setHighContrastState] = useState(false);
  const [largeText, setLargeTextState] = useState(false);
  const [reducedMotion, setReducedMotionState] = useState(false);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("site-language");
    const browserLanguage = navigator.language.toLowerCase();
    const nextLanguage: Language =
      savedLanguage === "es" || savedLanguage === "en" || savedLanguage === "de"
        ? savedLanguage
        : browserLanguage.startsWith("es")
          ? "es"
          : browserLanguage.startsWith("de")
            ? "de"
            : "en";
    const frame = window.requestAnimationFrame(() => {
      setLanguageState(nextLanguage);
      setThemeState(window.localStorage.getItem("site-theme") === "dark" ? "dark" : "light");
      setHighContrastState(window.localStorage.getItem("site-contrast") === "true");
      setLargeTextState(window.localStorage.getItem("site-large-text") === "true");
      setReducedMotionState(window.localStorage.getItem("site-reduced-motion") === "true");
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

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
