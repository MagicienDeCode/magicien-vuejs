import { useHead } from '@vueuse/head'

export interface MetaOptions {
  title?: string
  description?: string
  keywords?: string
}

/**
 * Composable for managing page meta tags
 */
export function useMeta(options: MetaOptions = {}) {
  const {
    title = 'MagicienDeCode',
    description = 'magiciendecode',
    keywords = 'magiciendecode, vue, antd, javascript, typescript, less',
  } = options

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      // Twitter
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
    ],
  })
}
