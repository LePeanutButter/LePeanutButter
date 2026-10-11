import type { Metadata } from "next";
import "./globals.css";
import { PreferencesProvider } from "@/src/context/PreferencesContext";

export const metadata: Metadata = {
  title: "Santiago Botero Garcia | Engineering Modern Digital Systems | Software Architecture | Full-Stack & Cloud Development",
  description:
    "Portfolio of Santiago Botero Garcia, a Systems Engineering student focused on full-stack development, cloud architecture, AI automation, and human-centered software.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Santiago Botero Garcia | Engineering Modern Digital Systems",
    description:
      "Portfolio of Santiago Botero Garcia, focused on software architecture, cloud delivery, automation, and human-centered software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="yes" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <PreferencesProvider>{children}</PreferencesProvider>
      </body>
    </html>
  );
}
