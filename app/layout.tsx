import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santiago Botero Garcia | Engineering Modern Digital Systems | Software Architecture | Full-Stack & Cloud Development",
  description:
    "Portfolio of Santiago Botero Garcia, a Systems Engineering student focused on full-stack development, cloud architecture, AI automation, and human-centered software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
