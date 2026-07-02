import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  // Fixe la racine du projet pour éviter l'avertissement de workspace Next.js
  outputFileTracingRoot: path.join(__dirname, "../../"),
  // Les images externes utilisées dans le portfolio (profil LinkedIn, Unsplash)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
