import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Fixe la racine du projet pour éviter l'avertissement de workspace Next.js
  outputFileTracingRoot: path.join(__dirname, "../../"),
  // Tree-shake lucide-react and motion to remove unused icons/exports
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gravatar.com",
      },
    ],
  },
};

export default nextConfig;
