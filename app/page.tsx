import { LinkButton } from "@/components/link-button";
import { Calendar, Star, Facebook, MapPin } from "lucide-react";

const links = [
  {
    title: "Reserve Now",
    href: "https://forms.gle/L2HAnfeNrXTKkHJn9",
    icon: Calendar,
    color: "magenta" as const,
  },
  {
    title: "Trip Advisor",
    href: "https://www.tripadvisor.com.ph/Attraction_Review-g298450-d26242465-Reviews-Neon_Nights_Bar_Club-Makati_Metro_Manila_Luzon.html",
    icon: MapPin,
    color: "cyan" as const,
  },
  {
    title: "FB Reviews",
    href: "https://www.facebook.com/neonnightsbarclub/reviews/?id=100075933767633&sk=reviews",
    icon: Facebook,
    color: "blue" as const,
  },
  {
    title: "Google Reviews",
    href: "https://g.page/r/CZnQ9--WEbraEAE/review",
    icon: Star,
    color: "gold" as const,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col items-center bg-background px-4 py-8 sm:py-12">
      <main className="flex w-full max-w-md flex-col items-center gap-8">
        {/* Logo / Brand Header */}
        <header className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="bg-gradient-to-r from-neon-magenta via-neon-cyan to-neon-yellow bg-clip-text text-transparent">
              NEON NIGHTS
            </span>
          </h1>
          <p className="text-sm text-muted-foreground">Bar & Club</p>
        </header>

        {/* Four Button Grid */}
        <div className="grid w-full grid-cols-2 gap-4">
          {links.map((link) => (
            <LinkButton
              key={link.title}
              title={link.title}
              href={link.href}
              icon={link.icon}
              color={link.color}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-auto pt-8 text-center text-xs text-muted-foreground">
          <p>Makati, Metro Manila</p>
        </footer>
      </main>
    </div>
  );
}
