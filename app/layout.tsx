import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Neon Nights Bar & Club | Links",
  description:
    "Reserve your spot, check reviews, and connect with Neon Nights Bar & Club in Makati.",
  keywords: ["Neon Nights", "Bar", "Club", "Makati", "Nightlife", "Reservations"],
  openGraph: {
    title: "Neon Nights Bar & Club",
    description: "Your ultimate nightlife destination in Makati",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0012",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${poppins.className} font-sans`}>{children}</body>
    </html>
  );
}
