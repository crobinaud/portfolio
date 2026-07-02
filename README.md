# Portfolio

A modern, responsive personal portfolio website built with [Next.js](https://nextjs.org/) (App Router), [Tailwind CSS](https://tailwindcss.com/), [Motion](https://motion.dev/), and [Firebase](https://firebase.google.com/).

## Getting Started

### Prerequisites

Make sure you have Node.js installed (v22+ recommended).

### Installation

1. Clone the repository and navigate to the project directory.
2. Install the dependencies:
   ```bash
   npm install
   ```

## Development

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Available Scripts

- `npm run dev`: Starts the Next.js development server with Turbopack.
- `npm run build`: Builds the production-ready application.
- `npm run start`: Starts the production server after building.
- `npm run lint`: Runs ESLint to check for code issues.
- `npm run lint:fix`: Automatically fixes ESLint warnings/errors.
- `npm run format`: Formats code files using Prettier.
- `npm run type-check`: Runs TypeScript compiler check.

## Commit Guidelines

This project uses [commitlint](https://commitlint.js.org/) and semantic-release. Commits must follow the **Conventional Commits** specification:

```text
<type>(<scope>): <subject>
```

Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
