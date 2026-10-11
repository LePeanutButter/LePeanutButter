import type { Metadata } from "next";
import "./globals.css";
import { PreferencesProvider } from "@/src/context/PreferencesContext";

export const metadata: Metadata = {
  title: "Santiago Botero Garcia | IT Governance, Security, Architecture & Digital Transformation",
  description:
    "Portfolio of Santiago Botero Garcia, a Systems Engineering student focused on IT governance, information security, technology risk, architecture, infrastructure, and digital transformation.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Santiago Botero Garcia | IT Governance, Security & Architecture",
    description:
      "Portfolio focused on IT governance, information security, technology risk, architecture, infrastructure, and digital transformation.",
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
