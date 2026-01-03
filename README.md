# MagicienDeCode - Personal Website

Personal website of LI Xiang, rebuilt with Vue 3 + Vite + TypeScript.

## Tech Stack

- **Framework**: Vue 3.5 with Composition API
- **Build Tool**: Vite 7.x
- **Language**: TypeScript
- **UI Library**: Ant Design Vue 4.x
- **Styling**: LESS
- **Router**: Vue Router 4.x
- **Markdown**: markdown-it with plugins
- **Meta Management**: @vueuse/head

## Features

- Responsive design (desktop, tablet, mobile)
- Markdown article rendering
- Multiple article categories (Book, Code, Chinese, Japanese, English, French, German)
- Project showcase
- Resume/CV display
- SEO optimized
- Fast build and development with Vite

## Project Setup

```sh
npm install
```

### Development

Run the development server with hot-reload:

```sh
npm run dev
```

The site will be available at `http://localhost:5173`

### Production Build

Build for production:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

### Code Quality

Type-check:

```sh
npm run type-check
```

Lint:

```sh
npm run lint
```

Format code:

```sh
npm run format
```

## Project Structure

```
src/
├── assets/           # Static assets and styles
├── components/       # Vue components
├── composables/      # Composition API utilities
├── data/            # Article data (JSON & Markdown)
├── layouts/         # Layout components
├── router/          # Vue Router configuration
├── utils/           # Utility functions
├── views/           # Page components
└── main.ts          # Application entry point
```

## Adding New Articles

1. Add article metadata to the appropriate `src/data/[category]/title.json` file:

```json
{
  "title": "Article Title",
  "page": "category/article-slug",
  "creationDate": "YYYY-MM-DD"
}
```

2. Create the markdown file at `src/data/[category]/article-slug.md`

## Deployment

The built files in the `dist` directory can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- etc.

## License

© 2026 LI Xiang. All rights reserved.

## Author

LI Xiang - [GitHub](https://github.com/MagicienDeCode)
