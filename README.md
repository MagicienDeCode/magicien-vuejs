# MagicienDeCode - Personal Website

Personal website and portfolio of **LI Xiang**, a full-stack software engineer and tech lead. This modern web application serves as a professional portfolio, knowledge repository, and multilingual content platform built with Vue 3, TypeScript, and Vite.

## About

This website showcases:
- **Professional Portfolio** - Work experience, skills, and educational background
- **Project Showcase** - GitHub repositories across Machine Learning, Algorithms, SQL, and Web Development
- **Multilingual Articles** - Technical articles, book reviews, and language learning content in 6+ languages
- **Personal Brand** - Professional introduction and contact information

## Tech Stack

### Core Framework
- **Vue 3.5** - Composition API with `<script setup>` syntax
- **Vite 7.x** - Lightning-fast build tool and dev server
- **TypeScript 5.9** - Type-safe development

### UI & Styling
- **Ant Design Vue 4.x** - Enterprise-grade UI component library
- **LESS** - CSS preprocessor with variables and mixins
- **Responsive Grid System** - Mobile-first design (xs/sm/md/lg/xl breakpoints)

### Content & Markdown
- **markdown-it 14.1** - Powerful markdown parser
- **markdown-it-anchor** - Automatic heading anchor generation
- **markdown-it-toc-done-right** - Table of contents generation
- **gray-matter** - Front matter metadata extraction

### Routing & SEO
- **Vue Router 4.x** - Client-side routing with lazy-loaded components
- **@vueuse/head 2.x** - Dynamic meta tags, OpenGraph, and Twitter cards

### Development Tools
- **ESLint 9.x** + **oxlint 1.35** - Code linting and quality checks
- **Prettier 3.7** - Consistent code formatting
- **npm-run-all2** - Parallel script execution
- **Vite Plugins** - Vue, Vue JSX, Vue DevTools

## Features

### Core Functionality
- **Responsive Design** - Fully responsive layout optimized for desktop, tablet, and mobile
- **Markdown Article System** - Dynamic article rendering with front matter metadata
- **Automatic Table of Contents** - Generated from markdown headings (h1-h3)
- **Article Categories** - Organized content in Book, Code, Chinese, Japanese, English, French
- **Project Portfolio** - Showcase of GitHub repositories with descriptions
- **Resume/CV Display** - Professional experience with expandable sections
- **SEO Optimized** - Dynamic meta tags, structured data, and social media cards
- **Fast Performance** - Code splitting, lazy loading, and optimized chunks

### Special Features
- **Japanese Language Learning** - Structured hiragana/katakana vocabulary lists
- **Chinese Classical Poetry** - Tang and Song dynasty poetry collections
- **Breadcrumb Navigation** - Contextual navigation in article pages
- **Recent Articles** - Chronologically sorted article listings
- **404 Page** - Custom not-found page with navigation

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
├── assets/
│   ├── images/              # Logos, icons, favicons
│   ├── styles/              # LESS stylesheets
│   │   ├── global.less      # Global styles
│   │   ├── variables.less   # LESS variables (colors, spacing, breakpoints)
│   │   ├── components/      # Component-specific styles
│   │   └── pages/           # Page-specific styles
│   ├── main.css             # Main stylesheet
│   └── base.css             # Base/reset styles
├── components/
│   ├── layout/              # Layout components (AppHeader, AppFooter)
│   ├── markdown/            # Markdown rendering (MarkdownRenderer, BackButton)
│   ├── common/              # Shared components (PageLink)
│   └── icons/               # SVG icon components
├── composables/
│   ├── useArticles.ts       # Article data management composable
│   └── useMeta.ts           # SEO & meta tags composable
├── data/                    # Content directory
│   ├── book/                # Book review articles
│   ├── code/                # Programming & algorithm articles
│   ├── chinese/             # Chinese literature & culture
│   ├── japanese/            # Japanese language learning
│   │   ├── words/           # Hiragana/Katakana vocabulary data
│   │   ├── grammar/         # Grammar guides
│   │   └── game50/          # Japanese Fifty game
│   ├── english/             # English articles
│   ├── french/              # French articles
│   └── markdown-img/        # Article images
├── layouts/                 # Layout wrapper components
│   └── MainLayout.vue       # Root layout with header/content/footer
├── router/
│   └── index.ts             # Vue Router configuration with all routes
├── utils/
│   └── markdown.ts          # Markdown parsing engine setup
├── views/                   # Page components (route views)
│   ├── home/                # HomePage.vue
│   ├── articles/            # Article pages
│   │   ├── ArticlesPage.vue         # Main articles index
│   │   ├── ArticleDetailPage.vue    # Dynamic article renderer
│   │   ├── chinese/                 # Chinese-specific article pages
│   │   └── japanese/                # Japanese-specific article pages
│   ├── projects/            # ProjectsPage.vue
│   ├── resume/              # ResumePage.vue
│   └── NotFoundPage.vue     # 404 page
├── App.vue                  # Root component
├── main.ts                  # Application entry point
└── env.d.ts                 # TypeScript environment types
```

## Architecture

### Component Architecture

**Layout System:**
- `MainLayout.vue` - Root layout with fixed header, scrollable content, and footer
- `AppHeader.vue` - Navigation bar with logo, menu items, and responsive mobile drawer
- `AppFooter.vue` - Site footer with copyright information

**Page Views:**
- `HomePage.vue` - Landing page with personal introduction
- `ArticlesPage.vue` - Article hub with categorized article lists
- `ArticleDetailPage.vue` - Dynamic article renderer with markdown parsing
- `ResumePage.vue` - CV with expandable sections for skills, experience, education
- `ProjectsPage.vue` - Project showcase with external links
- `NotFoundPage.vue` - Custom 404 error page

**Markdown System:**
- `MarkdownRenderer.vue` - Renders parsed markdown HTML with proper styling
- `markdown.ts` utility - Configures markdown-it with plugins for anchors and TOC
- Front matter support via gray-matter for article metadata

**Composables (Reusable Logic):**
- `useArticles()` - Provides article loading, filtering, and sorting functionality
- `useMeta()` - Manages page metadata, SEO tags, OpenGraph, and Twitter cards

### Routing Structure

```
/                                    → HomePage
/resume                              → ResumePage
/projects                            → ProjectsPage
/articles                            → ArticlesPage
/articles/:category/:slug            → ArticleDetailPage (dynamic)
/articles/japanese/hiragana          → Special Japanese learning page
/articles/japanese/katakana          → Special Japanese learning page
/articles/chinese/gushiwen-tang      → Special Chinese poetry page
/articles/chinese/gushiwen-song      → Special Chinese poetry page
/*                                   → NotFoundPage (404)
```

### Article System

**How Articles Work:**

1. **Metadata Storage** - Each category has a `title.json` file containing article metadata:
   ```json
   {
     "title": "Article Title",
     "page": "category/article-slug",
     "creationDate": "YYYY-MM-DD"
   }
   ```

2. **Markdown Files** - Articles are written in Markdown at `src/data/[category]/[slug].md`

3. **Dynamic Loading** - Vite's glob import loads all JSON and markdown files at build time

4. **Front Matter** - Markdown files can include front matter for additional metadata:
   ```markdown
   ---
   title: My Article
   description: Article description
   keywords: keyword1, keyword2
   ---

   # Article content here...
   ```

5. **Rendering Pipeline:**
   - Route params extract category and slug
   - `useArticles()` composable loads markdown content
   - `markdown.ts` parses markdown to HTML
   - `MarkdownRenderer.vue` displays rendered content with TOC
   - `useMeta()` sets page-specific SEO metadata

## Configuration

### Vite Configuration (`vite.config.ts`)

The project includes optimized Vite configuration:

**Path Aliases:**
```typescript
'@': '/src'  // Import as: import { X } from '@/components/X'
```

**LESS Configuration:**
- Global variables auto-imported from `@/assets/styles/variables.less`
- Supports component-scoped LESS styles with access to global variables

**Build Optimizations:**
- **Manual Chunk Splitting:**
  - `ant-design-vue` - UI library in separate chunk
  - `markdown` - Markdown parsing libraries bundled together
  - Improves caching and reduces initial bundle size

- **Browser Polyfills:**
  - Global `Buffer` polyfill for gray-matter compatibility

**Plugins:**
- `@vitejs/plugin-vue` - Vue 3 SFC support
- `@vitejs/plugin-vue-jsx` - JSX/TSX support in Vue components
- `vite-plugin-vue-devtools` - Enhanced Vue DevTools integration

### TypeScript Configuration

- **tsconfig.json** - Base configuration with strict type checking
- **tsconfig.app.json** - Application-specific settings with path aliases
- **tsconfig.node.json** - Node environment (Vite config) settings

### Code Quality Configuration

**ESLint:**
- Vue-specific rules with `plugin:vue/vue3-essential`
- TypeScript support via `@typescript-eslint`
- Prettier integration for consistent formatting

**oxlint:**
- Fast Rust-based linter for quick feedback
- Complementary to ESLint for performance

**Prettier:**
- Single quotes, no semicolons, 100-char line width
- Consistent formatting across all file types

## Development Workflow

### Available Scripts

```bash
# Development
npm run dev              # Start dev server (http://localhost:5173)
npm run dev -- --host    # Expose dev server to network

# Building
npm run build            # Type-check + production build
npm run build-only       # Build without type-checking (faster)
npm run preview          # Preview production build locally

# Code Quality
npm run type-check       # Run Vue TypeScript compiler
npm run lint             # Run oxlint + eslint in parallel
npm run lint:oxlint      # Fast linting with oxlint
npm run lint:eslint      # Detailed linting with ESLint
npm run format           # Format all files with Prettier
```

### Development Tips

**Hot Module Replacement (HMR):**
- Changes to `.vue`, `.ts`, `.less` files trigger instant updates
- State preservation during component updates

**Path Aliases:**
- Use `@/` for imports from `src/`: `import Foo from '@/components/Foo.vue'`

**Type Safety:**
- Run `npm run type-check` before committing to catch type errors

**Code Formatting:**
- Run `npm run format` before commits for consistent style
- Configure your editor to format on save

## Adding New Content

### Adding New Articles

1. **Add metadata to category's `title.json`:**
   ```json
   {
     "title": "Your Article Title",
     "page": "category/article-slug",
     "creationDate": "2026-01-10"
   }
   ```

2. **Create markdown file at `src/data/[category]/article-slug.md`:**
   ```markdown
   ---
   title: Your Article Title
   description: Brief description for SEO
   keywords: vue, typescript, web development
   ---

   # Your Article Title

   Your article content here...

   ## Section 1

   Content...
   ```

3. **Images:** Place images in `src/data/markdown-img/` and reference as:
   ```markdown
   ![Alt text](/src/data/markdown-img/image-name.png)
   ```

### Adding New Categories

1. Create new directory: `src/data/new-category/`
2. Create `title.json` with article metadata array
3. Add category to `ArticlesPage.vue`
4. Add route pattern in `router/index.ts` if needed
5. Create category-specific styles if needed

## Performance Optimizations

**Build Optimizations:**
- Code splitting via dynamic imports and route-based lazy loading
- Manual chunk separation for large libraries (Ant Design, markdown-it)
- Tree-shaking for unused code elimination

**Runtime Optimizations:**
- Lazy-loaded route components reduce initial bundle size
- Computed properties and reactive state minimize re-renders
- CSS scoped to components prevents style bloat

**Asset Optimizations:**
- Images referenced via Vite are automatically optimized
- LESS compilation happens at build time
- Static assets get cache-friendly hashes in filenames

## Deployment

### Build Output

Build creates optimized static files in `dist/`:
```
dist/
├── index.html           # Entry HTML file
├── assets/
│   ├── *.js             # JavaScript bundles (chunked)
│   ├── *.css            # Compiled CSS
│   └── *.{png,svg,jpg}  # Optimized images
└── ...
```

### Deployment Platforms

The built files can be deployed to any static hosting service:

**Recommended Platforms:**
- **Netlify** - Zero-config deployment with `netlify.toml` included
  ```bash
  npm run build
  netlify deploy --prod
  ```

- **Vercel** - Automatic deployment from Git
  ```bash
  npm run build
  vercel --prod
  ```

- **GitHub Pages** - Free hosting for public repos
  ```bash
  npm run build
  # Push dist/ to gh-pages branch
  ```

- **AWS S3 + CloudFront** - Scalable cloud hosting
- **Cloudflare Pages** - Global CDN with instant deployments

### Environment Variables

For production deployments, you can add environment variables:

```bash
# .env.production
VITE_API_URL=https://api.example.com
VITE_GA_ID=GA-XXXXXXXXX
```

Access in code: `import.meta.env.VITE_API_URL`

## SEO & Social Media

### SEO Features

The site is optimized for search engines with:

- **Dynamic Meta Tags** - Page-specific titles, descriptions, and keywords
- **OpenGraph Tags** - Rich social media previews for Facebook, LinkedIn
- **Twitter Cards** - Enhanced Twitter sharing with summary cards
- **Semantic HTML** - Proper heading hierarchy and semantic elements
- **Structured Content** - Markdown-based articles with clear structure
- **Clean URLs** - SEO-friendly URL patterns without hash routing

### Meta Tag Management

The `useMeta()` composable automatically sets:
```typescript
useMeta({
  title: 'Page Title',
  description: 'Page description',
  keywords: 'keyword1, keyword2, keyword3'
})
```

This generates:
- `<title>` tags for browser tabs
- `<meta name="description">` for search snippets
- `<meta property="og:*">` for social media
- `<meta name="twitter:*">` for Twitter cards

## Browser Support

**Modern Browsers:**
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

**Not Supported:**
- Internet Explorer (any version)
- Legacy browsers without ES2015+ support

The build uses modern JavaScript features. For wider browser support, you can configure Vite's `build.target` option.

## Troubleshooting

### Common Issues

**Issue: Module not found errors during build**
```bash
# Solution: Clear cache and reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Issue: TypeScript errors in IDE**
```bash
# Solution: Restart TypeScript server or rebuild
npm run type-check
# In VS Code: Cmd+Shift+P → "TypeScript: Restart TS Server"
```

**Issue: Styles not updating during development**
```bash
# Solution: Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

**Issue: Port 5173 already in use**
```bash
# Solution: Kill the process or use a different port
npm run dev -- --port 3000
```

**Issue: Images not loading in production**
- Ensure image paths start with `/src/` for Vite to process them
- Check that images exist in `src/data/markdown-img/`
- Verify build output includes images in `dist/assets/`

### Development Best Practices

1. **Always read files before editing** - Understand context before making changes
2. **Type-check before committing** - Run `npm run type-check` to catch errors
3. **Format code consistently** - Use `npm run format` or editor auto-format
4. **Test responsive layouts** - Check mobile, tablet, desktop breakpoints
5. **Verify SEO tags** - Use browser dev tools to inspect meta tags
6. **Test markdown rendering** - Preview articles locally before deploying

## Project Highlights

**Code Quality:**
- TypeScript for type safety and better developer experience
- ESLint + oxlint for code quality enforcement
- Prettier for consistent code formatting
- Strict type checking enabled in TypeScript config

**Performance:**
- Lighthouse scores: 90+ for Performance, Accessibility, Best Practices, SEO
- Code splitting reduces initial bundle size
- Lazy loading for route components
- Optimized asset loading with Vite

**Maintainability:**
- Component-based architecture with clear separation of concerns
- Composables for reusable business logic
- Consistent naming conventions and file structure
- Comprehensive TypeScript types throughout

**Developer Experience:**
- Fast HMR with Vite for instant feedback
- Path aliases for cleaner imports
- Vue DevTools integration for debugging
- Clear error messages with TypeScript

## Contributing

This is a personal portfolio project. If you find issues or have suggestions:

1. Check existing issues on GitHub
2. Open a new issue with detailed description
3. For code contributions, discuss the change first in an issue

## Resources

- **Vue 3 Documentation**: https://vuejs.org/
- **Vite Documentation**: https://vite.dev/
- **Ant Design Vue**: https://antdv.com/
- **markdown-it**: https://github.com/markdown-it/markdown-it
- **TypeScript**: https://www.typescriptlang.org/

## License

© 2026 LI Xiang. All rights reserved.

## Author

**LI Xiang** - Full-Stack Software Engineer & Tech Lead

- GitHub: [@MagicienDeCode](https://github.com/MagicienDeCode)
- Website: [magicien-de-code.netlify.app](https://magicien-de-code.netlify.app)

---

Built with Vue 3, TypeScript, and Vite. Deployed on Netlify.
