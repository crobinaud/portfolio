<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/crobinaud/portfolio">
    <img src="public/favicon.ico" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Cyprien's Portfolio</h3>

  <p align="center">
    A modern, responsive personal portfolio website built with cutting-edge web technologies.
    <br />
    <br />
    <a href="https://crobinaud.web.app"><strong>View Live Demo »</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
## Table of Contents

1. [About The Project](#about-the-project)
   - [Built With](#built-with)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
3. [Usage](#usage)

<!-- ABOUT THE PROJECT -->
## About The Project

[![Portfolio Preview][product-screenshot]](https://crobinaud.web.app)

A modern, high-performance personal portfolio designed to present my software engineering background, projects, and technical skills. Built with a focus on clean aesthetics and developer ergonomics, it combines server-side static generation, fluid micro-animations, full dark/light theme versatility, and an automated DevSecOps delivery pipeline.

### Built With

* [![Next.js][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Tailwind CSS][TailwindCSS]][Tailwind-url]
* [![Biome][Biome]][Biome-url]
* [![Firebase][Firebase]][Firebase-url]

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js installed (v22+ recommended).
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/crobinaud/portfolio.git
   cd portfolio
   ```
2. Install NPM packages
   ```sh
   npm ci
   ```

<!-- USAGE EXAMPLES -->
## Usage

Run the local development server with Turbopack for fast startup:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js dev server with Turbopack |
| `npm run build` | Builds static production bundle into `out/` |
| `npm run check` | Checks formatting and lints code via Biome |
| `npm run check:write` | Automatically fixes linting & formatting issues |
| `npm run ci:check` | Strict Biome validation (`--error-on-warnings`) |
| `npm run audit` | Scans dependencies for security vulnerabilities |
| `npm run type-check` | Performs TypeScript compiler check (`tsc --noEmit`) |
| `npm run validate` | Runs full suite (`ci:check`, `audit`, `type-check`, `build`) |


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: public/assets/images/in_wp.webp
[Next.js]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Biome]: https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white
[Biome-url]: https://biomejs.dev/
[Firebase]: https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black
[Firebase-url]: https://firebase.google.com/
