# 🚀 Cyprien's Portfolio

A modern, responsive personal portfolio website built with cutting-edge web technologies.

[![CI/CD Status](https://img.shields.io/github/actions/workflow/status/crobinaud/portfolio/ci-cd.yml?branch=main&style=for-the-badge&logo=github&label=CI%2FCD)](https://github.com/crobinaud/portfolio/actions/workflows/ci-cd.yml)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Biome](https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
[![semantic-release](https://img.shields.io/badge/semantic--release-e10079?logo=semantic-release&style=for-the-badge)](https://github.com/semantic-release/semantic-release)

## ✨ Features

- **App Router**: Uses Next.js App Router for optimized layouts and server-side rendering.
- **Animations**: Fluid and modern animations powered by [Motion](https://motion.dev/).
- **Styling**: Utility-first styling with Tailwind CSS v4.
- **Tooling**: Lightning-fast formatting and linting via [Biome](https://biomejs.dev/).
- **Deployment**: Automated CI/CD pipeline deploying to Firebase Hosting.

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed (v22+ recommended).

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone https://github.com/crobinaud/portfolio.git
   cd portfolio
   ```

2. Install the dependencies:
   ```bash
   npm ci
   ```

## 🛠️ Development

Run the local development server with Turbopack for ultra-fast startup:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📋 Scripts

- `npm run dev`: Starts the Next.js development server with Turbopack.
- `npm run build`: Builds the production-ready application.
- `npm run start`: Starts the production server after building.
- `npm run check`: Lints and formats code files using Biome.
- `npm run check:write`: Automatically fixes Biome warnings and formats code.
- `npm run type-check`: Runs TypeScript compiler check without emitting files.

## 📏 Commit Guidelines

This project uses [commitlint](https://commitlint.js.org/) and semantic-release. Commits must follow the **Conventional Commits** specification:

```text
<type>(<scope>): <subject>
```

**Common types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
