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

/**
 * Composable for managing article data
 */
export function useArticles() {
  // Load all article metadata
  const loadArticleMetadata = async (category: string): Promise<ArticleCategory> => {
    try {
      const module = await import(`@/data/${category}/title.json`)
      return module.default || module
    } catch (error) {
      console.error(`Failed to load metadata for category: ${category}`, error)
      return { type: category, children: [] }
    }
  }

  // Load markdown content
  const loadMarkdownContent = async (path: string): Promise<string> => {
    try {
      const module = await import(`@/data/${path}.md?raw`)
      return module.default || module
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
