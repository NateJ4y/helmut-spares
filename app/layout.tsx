import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helmut Spares | Volkswagen & Audi Parts Specialists",
  description: "Volkswagen and Audi parts specialists in Vereeniging, South Africa. Established in 1975. Find the part you need or request assistance from our team.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body>{children}</body>
    </html>
  );
}