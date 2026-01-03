import { ref, computed } from 'vue'

export interface ArticleMetadata {
  title: string
  page: string
  creationDate: string
}

export interface ArticleCategory {
  type: string
  children: ArticleMetadata[]
}

// Pre-load all markdown files using Vite's glob import
const markdownModules = import.meta.glob('@/data/**/*.md', { query: '?raw', import: 'default', eager: false })
const jsonModules = import.meta.glob('@/data/**/title.json', { eager: false })

/**
 * Composable for managing article data
 */
export function useArticles() {
  // Load all article metadata
  const loadArticleMetadata = async (category: string): Promise<ArticleCategory> => {
    try {
      const moduleKey = `/src/data/${category}/title.json`

      if (!jsonModules[moduleKey]) {
        console.error(`No metadata found for category: ${category}`)
        console.error(`Expected module key: ${moduleKey}`)
        return { type: category, children: [] }
      }

      const module = await jsonModules[moduleKey]()
      return (module as any).default || module
    } catch (error) {
      console.error(`Failed to load metadata for category: ${category}`, error)
      return { type: category, children: [] }
    }
  }

  // Load markdown content
  const loadMarkdownContent = async (path: string): Promise<string> => {
    try {
      console.log('Looking for markdown path:', path)

      // Construct the exact module key that Vite generates
      const moduleKey = `/src/data/${path}.md`
      console.log('Looking for module key:', moduleKey)

      if (!markdownModules[moduleKey]) {
        console.error(`No markdown file found for path: ${path}`)
        console.error(`Expected module key: ${moduleKey}`)
        console.error('Available keys:', Object.keys(markdownModules))
        return ''
      }

      const content = await markdownModules[moduleKey]()
      console.log('Successfully loaded markdown')
      return content as string
    } catch (error) {
      console.error(`Failed to load markdown: ${path}`, error)
      return ''
    }
  }

  // Sort articles by date (newest first)
  const sortByDate = (articles: ArticleMetadata[]): ArticleMetadata[] => {
    return [...articles].sort((a, b) => {
      return a.creationDate < b.creationDate ? 1 : -1
    })
  }

  // Get recent articles from multiple categories
  const getRecentArticles = async (
    categories: string[],
    limit: number = 5
  ): Promise<ArticleMetadata[]> => {
    const allArticles: ArticleMetadata[] = []

    for (const category of categories) {
      const data = await loadArticleMetadata(category)
      allArticles.push(...data.children)
    }

    return sortByDate(allArticles).slice(0, limit)
  }

  return {
    loadArticleMetadata,
    loadMarkdownContent,
    sortByDate,
    getRecentArticles,
  }
}
