import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { Starfield } from "@/components/layout/Starfield";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio de Cyprien ROBINAUD",
  description:
    "Portfolio de Cyprien Robinaud, étudiant en Master Informatique (Architecte Logiciel) à La Rochelle Université.",
  keywords: [
    "Cyprien Robinaud",
    "développeur logiciel",
    "architecte logiciel",
    "Next.js",
    "Python",
    "FastAPI",
    "Docker",
    "portfolio",
  ],
  authors: [{ name: "Cyprien Robinaud" }],
  creator: "Cyprien Robinaud",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Portfolio de Cyprien ROBINAUD",
    description:
      "Portfolio de Cyprien Robinaud, étudiant en Master Informatique (Architecte Logiciel) à La Rochelle Université.",
    siteName: "Cyprien Robinaud",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                let theme = localStorage.getItem("theme");
                if (!theme) {
                  theme = "dark";
                }
                document.documentElement.setAttribute("data-theme", theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <AppProvider>
          <ThemeToggle />
          <Starfield />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
