"use client";

import { Calendar, Star, ThumbsUp, MapPin, type LucideIcon } from "lucide-react";

type NeonColor = "magenta" | "cyan" | "blue" | "gold" | "orange" | "yellow";
type IconName = "calendar" | "map-pin" | "thumbs-up" | "star";

interface LinkButtonProps {
  title: string;
  href: string;
  iconName: IconName;
  color: NeonColor;
}

const iconMap: Record<IconName, LucideIcon> = {
  calendar: Calendar,
  "map-pin": MapPin,
  "thumbs-up": ThumbsUp,
  star: Star,
};

const colorStyles: Record<NeonColor, { border: string; glow: string; icon: string }> = {
  magenta: {
    border: "border-neon-magenta/60 hover:border-neon-magenta",
    glow: "hover:shadow-[0_0_20px_rgba(191,3,251,0.4)]",
    icon: "text-neon-magenta",
  },
  cyan: {
    border: "border-neon-cyan/60 hover:border-neon-cyan",
    glow: "hover:shadow-[0_0_20px_rgba(13,242,197,0.4)]",
    icon: "text-neon-cyan",
  },
  blue: {
    border: "border-neon-blue/60 hover:border-neon-blue",
    glow: "hover:shadow-[0_0_20px_rgba(56,19,243,0.4)]",
    icon: "text-neon-blue",
  },
  gold: {
    border: "border-neon-gold/60 hover:border-neon-gold",
    glow: "hover:shadow-[0_0_20px_rgba(241,201,50,0.4)]",
    icon: "text-neon-gold",
  },
  orange: {
    border: "border-neon-orange/60 hover:border-neon-orange",
    glow: "hover:shadow-[0_0_20px_rgba(255,84,0,0.4)]",
    icon: "text-neon-orange",
  },
  yellow: {
    border: "border-neon-yellow/60 hover:border-neon-yellow",
    glow: "hover:shadow-[0_0_20px_rgba(205,255,10,0.4)]",
    icon: "text-neon-yellow",
  },
};

export function LinkButton({ title, href, iconName, color }: LinkButtonProps) {
  const styles = colorStyles[color];
  const Icon = iconMap[iconName];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group flex aspect-square flex-col items-center justify-center gap-3
        rounded-2xl border-2 bg-muted/30 p-4
        transition-all duration-300 ease-out
        active:scale-95
        ${styles.border}
        ${styles.glow}
      `}
    >
      <Icon
        className={`h-8 w-8 transition-transform duration-300 group-hover:scale-110 ${styles.icon}`}
        strokeWidth={1.5}
      />
      <span className="text-center text-sm font-semibold leading-tight text-foreground">
        {title}
      </span>
    </a>
  );
}
