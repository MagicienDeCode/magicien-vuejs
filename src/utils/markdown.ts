import MarkdownIt from 'markdown-it'
import anchor from 'markdown-it-anchor'
import toc from 'markdown-it-toc-done-right'
import matter from 'gray-matter'

// Create markdown parser instance
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
})

// Add plugins
md.use(anchor, {
  permalink: anchor.permalink.headerLink(),
  level: [1, 2, 3],
})

md.use(toc, {
  level: [1, 2, 3],
  listType: 'ul',
})

export interface MarkdownData {
  content: string
  data: Record<string, any>
  excerpt?: string
}

/**
 * Parse markdown file content
 */
export function parseMarkdown(markdownContent: string): MarkdownData {
  const { content, data, excerpt } = matter(markdownContent)
  return {
    content: md.render(content),
    data,
    excerpt,
  }
}

/**
 * Render markdown to HTML
 */
export function renderMarkdown(markdown: string): string {
  return md.render(markdown)
}

export default md
