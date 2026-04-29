import { LinkButton } from "@/components/link-button";

const links = [
  {
    title: "Reserve Now",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScd-sjnQ_GSXYnC3D_EnzpVWGIhAx7NXzVls8_P3CY1UosLAg/viewform?usp=header",
    iconName: "calendar" as const,
    color: "magenta" as const,
  },
  {
    title: "Trip Advisor",
    href: "https://www.tripadvisor.com.ph/Attraction_Review-g298450-d26242465-Reviews-Neon_Nights_Bar_Club-Makati_Metro_Manila_Luzon.html",
    iconName: "map-pin" as const,
    color: "cyan" as const,
  },
  {
    title: "FB Reviews",
    href: "https://www.facebook.com/neonnightsbarclub/reviews/?id=100075933767633&sk=reviews",
    iconName: "thumbs-up" as const,
    color: "blue" as const,
  },
  {
    title: "Google Reviews",
    href: "https://g.page/r/CZnQ9--WEbraEAE/review",
    iconName: "star" as const,
    color: "gold" as const,
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col bg-background px-4 py-8 sm:py-12">
      {/* Subtle neon gradient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-neon-purple/20 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-neon-magenta/15 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan/10 blur-3xl" />
      </div>

      {/* Main content - vertically centered */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center">
        <div className="flex w-full max-w-md flex-col items-center gap-8">
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
                iconName={link.iconName}
                color={link.color}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer - pinned to bottom */}
      <footer className="relative z-10 pt-8 text-center text-xs text-muted-foreground">
        <p>Makati, Metro Manila</p>
      </footer>
    </div>
  );
}
