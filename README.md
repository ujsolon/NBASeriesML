# NBASeriesML

A machine learning project built with [Next.js](https://nextjs.org/) and TypeScript, based on the [blog-starter example](https://github.com/vercel/next.js/tree/canary/examples/blog-starter). This project explores NBA series predictions and analytics using modern web technologies, and welcomes contributions from both developers and writers.

---

## Contributing Articles

If you'd like to contribute an article, you can write about your own NBA data experiments, visualizations, or any relevant sports analytics topic. Articles are written in Markdown (`.md`) and placed in the `/_posts` or `/content/blog` directory.

### Frontmatter Template

Every article must begin with the following metadata block:

```md
---
title: "Your Article Title"
excerpt: "A short one-liner summary of your article's insight or result."
coverImage: "/assets/blog/your_folder_name/your_image.jpg"
date: "YYYY-MM-DDTHH:mm:ss.sssZ"
author:
  name: Your Name
  picture: "/assets/blog/authors/your_photo.jpg"
ogImage:
  url: "/assets/blog/your_folder_name/your_image.jpg"
---
```

### Content Guidelines

1. **Title & Excerpt**: Keep it clear and engaging. The excerpt appears as a preview.
2. **Cover Image**: Store under `/public/assets/blog/your_folder_name/`.
3. **Date**: Use ISO 8601 format.
4. **Author**: Add your name and profile image under `/public/assets/blog/authors/`.
5. **OG Image**: Usually the same as the cover image.

### Example Directory Structure

```
/public
  /assets
    /blog
      /your_folder_name
        your_image.jpg
        chart.png
    /authors
      your_photo.jpg
```

### Sample Article Template

```md
---
title: "Sample Title - Insights from NBA Game 7 History"
excerpt: "Exploring trends in Game 7 matchups with machine learning techniques."
coverImage: "/assets/blog/sample_folder/nba_sample.jpg"
date: "2025-08-07T10:00:00.000Z"
author:
  name: Jane Doe
  picture: "/assets/blog/authors/janedoe.jpg"
ogImage:
  url: "/assets/blog/sample_folder/nba_sample.jpg"
---

# Sample Article Heading

Start your article here, using markdown syntax.

## Introduction

Describe your motivation, background, or context.

## Methodology / Analysis

Explain how your data was obtained or analyzed.

## Results

Highlight key findings or insights.

## Images

Use images hosted in your folder:

![nba_sample.jpg](/assets/blog/sample_folder/nba_sample.jpg "Description here")

## Data & Notebooks

Link to relevant datasets or notebooks.

## Contact

Got feedback? Reach out via [YourWebsite.com](https://yourwebsite.com).
```

Once your article follows this structure, submit a pull request with your Markdown file and assets. Your contribution will be reviewed and published with credit to you.

---

## Contributing as a Developer

Developers are welcome to explore, modify, or enhance this project — especially the data science, frontend, or Markdown rendering parts.

### Features

- Next.js app with TypeScript
- Markdown-based blog posts
- Custom Markdown rendering with [remark](https://github.com/remarkjs/remark)
- NBA series data analysis and ML predictions
- Styled with CSS Modules and Tailwind CSS

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Then visit [http://localhost:3000](http://localhost:3000).

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

### Project Structure

```
/_posts                 # Markdown files for blog content
/public/assets/blog     # Images
   /authors             # Pictures of contributors
   /[your_folder_name]  # Pictures for [your_folder_name] article
/src
  /app                  # Next.js app directory
  /lib                  # Markdown + utility functions
  /interfaces           # React components to interface with posts and other content
/NBASeriesML            # Data and python scripts
```

### Markdown Support

- Supports headings, lists, code blocks, tables, and images.
- Uses `remark` and `remark-html` for parsing.
- Posts go in `/_posts` using standard Markdown.

### Customization

- Update styles in `src/app/_components/markdown-styles.module.css`
- Add or modify ML models or analytics logic in `/src`

---

## License

MIT

---

_This project is based on the [Next.js blog-starter example](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) with TypeScript._