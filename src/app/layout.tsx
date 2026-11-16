import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], weight: ["500", "700", "800"] });
const plex = IBM_Plex_Sans({ variable: "--font-plex", subsets: ["latin"], weight: ["400", "500", "600"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["400", "600", "700"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const description =
  "Samuel Uzoma is a mobile and full-stack engineer in Lagos, Nigeria, building Flutter apps, Next.js websites and NestJS backends for transport, logistics, payments and learning.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${profile.name} · ${profile.role}`, template: `%s · ${profile.name}` },
  description,
  keywords: ["Samuel Uzoma", "Flutter developer", "full-stack developer", "Next.js developer", "NestJS", "TypeScript", "PostgreSQL", "Lagos", "Nigeria", "mobile developer", "Dart", "Paystack", "LMS"],
  authors: [{ name: profile.fullName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title: `${profile.name} · ${profile.role}`,
    description,
    siteName: profile.name,
    images: [{ url: profile.photo, width: 720, height: 761, alt: `Portrait of ${profile.name}` }],
  },
  twitter: { card: "summary", title: `${profile.name} · ${profile.role}`, description, images: [profile.photo] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1311" },
  ],
};

// Runs before paint so the saved or system theme applies without a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${plex.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
