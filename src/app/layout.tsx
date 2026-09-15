import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://crackthecampus.com"),
  title: "Complete Placement Preparation System | Crack The Campus",
  description:
    "Crack The Campus (CTC) is India's campus-to-career platform: AI-proctored assessments, aptitude and coding practice, CTC Score credentialing, and job opportunities for engineering students.",
  keywords: [
    "premium assessment platform",
    "placement success",
    "placement preparation",
    "aptitude tests",
    "coding tests",
    "AI-driven learning",
    "AI-driven reasoning",
    "coding practice",
    "job-ready skills",
    "campus placements",
    "internship opportunities",
    "career readiness",
    "engineering students",
  ],
  authors: [{ name: "Crack The Campus" }],
  creator: "Crack The Campus",
  publisher: "Crack The Campus",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://crackthecampus.com",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.png" }],
  },
  openGraph: {
    type: "website",
    url: "https://crackthecampus.com/",
    siteName: "Crack The Campus",
    title: "India's Premium Assessment Platform for Placement Success",
    description:
      "India's first campus-to-career transformation platform, delivering industry-style assessments, AI-driven learning, and exclusive job opportunities.",
    images: [
      {
        url: "/white_logo.png",
        alt: "Crack The Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "India's Premium Assessment Platform for Placement Success",
    description:
      "India's first campus-to-career transformation platform, delivering industry-style assessments, AI-driven learning, and exclusive job opportunities.",
    images: ["/white_logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0b0e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="preload"
          href="/assets/images/83afe278b6a6bb3c-s.p.2bn3s6zvc0dyp.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/assets/styles/fonts.css" />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans">
        {children}
      </body>
    </html>
  );
}
