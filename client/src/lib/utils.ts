import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatProgramColor(colorHex: string): string {
  const colorMap: Record<string, string> = {
    "#FF6B6B": "primary",
    "#4ECDC4": "secondary",
    "#FFD166": "accent"
  };
  
  return colorMap[colorHex] || "primary";
}

export function parseTeacherSocialLinks(socialLinksString: string | null): Record<string, string> {
  if (!socialLinksString) return {};
  
  try {
    return JSON.parse(socialLinksString);
  } catch (error) {
    console.error("Error parsing teacher social links", error);
    return {};
  }
}
