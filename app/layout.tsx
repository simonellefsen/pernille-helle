import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pernille-helle.vercel.app"),
  title: {
    default: "Pernille & Helle",
    template: "%s",
  },
  description:
    "Two close genomes: Pernille and her paternal grandmother Helle. Autosomal origins, ancient Europe, motherlines, and what they share.",
  openGraph: {
    title: "Pernille & Helle",
    description: "Grandmother and granddaughter. First names only.",
    images: ["/images/archive-threads.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pernille & Helle",
    images: ["/images/archive-threads.jpg"],
  },
  alternates: {
    languages: {
      en: "/en",
      da: "/da",
      "x-default": "/en",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#08090d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
