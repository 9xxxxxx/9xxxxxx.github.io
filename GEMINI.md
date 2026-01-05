# Project Context: 9xxxxxx.github.io (Modern Portfolio)

## Project Overview
This is a modern personal portfolio website built with a high-performance tech stack. It replaces the previous static HTML site.

**Tech Stack:**
*   **Framework:** Next.js 15 (App Router)
*   **Styling:** Tailwind CSS v4
*   **Animations:** Framer Motion
*   **UI Architecture:** Modular components with `clsx` and `tailwind-merge` (Aceternity UI pattern)
*   **Icons:** Lucide React

## Structure
*   `src/app`: App Router pages and global layouts.
*   `src/components/ui`: Low-level UI components (e.g., Spotlight, Buttons).
*   `src/components`: Compositional components (e.g., Hero).
*   `src/lib`: Utility functions (`utils.ts` for class merging).

## Building and Running

**Development (Local):**
```bash
npm run dev
# Open http://localhost:3000
```

**Production Build:**
```bash
npm run build
# Outputs static files to 'out/' directory
```

## Deployment (GitHub Pages)
This project is configured to deploy automatically via **GitHub Actions**.

1.  **Push changes** to the `main` branch.
2.  **Configuration:** In your GitHub Repository Settings -> Pages:
    *   Set **Source** to **GitHub Actions**.
3.  The workflow `.github/workflows/deploy.yml` will automatically build and deploy the site.
