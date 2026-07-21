import type { Metadata } from "next";
import { Orbitron, Rajdhani, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://vasanthkumar.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vasanth Kumar | SOC Analyst & Cybersecurity Portfolio",
  description:
    "Vasanth Kumar — Cybersecurity graduate specializing in SOC operations, threat hunting, incident response, SIEM, digital forensics, and AI-assisted security automation.",
  keywords: [
    "Vasanth Kumar",
    "SOC Analyst",
    "Security Analyst",
    "Cybersecurity Portfolio",
    "Threat Hunting",
    "Incident Response",
    "SIEM",
    "Splunk",
    "Microsoft Sentinel",
    "Digital Forensics",
    "Penetration Testing",
  ],
  authors: [{ name: "Vasanth Kumar" }],
  creator: "Vasanth Kumar",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Vasanth Kumar | SOC Analyst & Cybersecurity Portfolio",
    description:
      "Cybersecurity graduate specializing in SOC operations, threat hunting, incident response, SIEM, and digital forensics. Explore projects, skills, and experience.",
    url: siteUrl,
    siteName: "Vasanth Kumar Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Vasanth Kumar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasanth Kumar | SOC Analyst & Cybersecurity Portfolio",
    description:
      "Cybersecurity graduate specializing in SOC operations, threat hunting, incident response, SIEM, and digital forensics.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable} ${jetbrains.variable}`}>
      <body className="bg-void text-white antialiased">{children}</body>
    </html>
  );
}
