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
      const response = await fetch(`/data/${category}/title.json`)

      if (!response.ok) {
        console.error(`No metadata found for category: ${category}`)
        console.error(`Response status: ${response.status}`)
        return { type: category, children: [] }
      }

      const data = await response.json()
      return data as ArticleCategory
    } catch (error) {
      console.error(`Failed to load metadata for category: ${category}`, error)
      return { type: category, children: [] }
    }
  }

  // Load markdown content
  const loadMarkdownContent = async (path: string): Promise<string> => {
    try {
      console.log('Looking for markdown path:', path)

      const response = await fetch(`/data/${path}.md`)

      if (!response.ok) {
        console.error(`No markdown file found for path: ${path}`)
        console.error(`Response status: ${response.status}`)
        return ''
      }

      const content = await response.text()
      console.log('Successfully loaded markdown')
      return content
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
