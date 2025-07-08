# NBASeriesML

A machine learning project built with [Next.js](https://nextjs.org/) and TypeScript, based on the [blog-starter example](https://github.com/vercel/next.js/tree/canary/examples/blog-starter). This project explores NBA series predictions and analytics using modern web technologies.

## Features

- Next.js app with TypeScript
- Markdown-based blog posts
- Custom Markdown rendering with [remark](https://github.com/remarkjs/remark)
- NBA series data analysis and ML predictions (add details as needed)
- Styled with CSS modules and Tailwind CSS

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

- `/posts` — Markdown files for blog content
- `/src` — Application source code
  - `/app` — Next.js app directory
  - `/lib` — Utility functions (e.g., Markdown to HTML)
  - `/components` — React components

## Markdown Support

- Supports headings, lists, code blocks, tables, and more
- Uses `remark` and `remark-html` for Markdown parsing
- Add posts in the `/posts` directory using standard Markdown syntax

## Customization

- Update styles in `src/app/_components/markdown-styles.module.css`
- Add new ML models or analytics in the `/src` directory

## License

MIT

---

_This project is based on the [Next.js blog-starter example](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) with TypeScript._