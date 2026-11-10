import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "Helmut Spares | Volkswagen & Audi Parts Specialists Since 1975",
 description: "Find classic Volkswagen, modern VW and Audi parts at Helmut Spares in Vereeniging, South Africa. Browse the catalogue or contact our team for parts assistance.",
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en-ZA"><body>{children}</body></html>;
}