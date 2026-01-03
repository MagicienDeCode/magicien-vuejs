import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue'),
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/ResumePage.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsPage.vue'),
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import('../views/ArticlesPage.vue'),
    },
    {
      path: '/articles/japanese/japanese-fifty',
      name: 'japanese-fifty',
      component: () => import('../views/JapaneseFiftyPage.vue'),
    },
    {
      path: '/articles/japanese/katakana',
      name: 'japanese-katakana-words',
      component: () => import('../views/JapaneseKatakanaWordsPage.vue'),
    },
    {
      path: '/articles/chinese/gushiwen-tang',
      name: 'gushiwen-tang',
      component: () => import('../views/GushiwenTangPage.vue'),
    },
    {
      path: '/articles/chinese/gushiwen-song',
      name: 'gushiwen-song',
      component: () => import('../views/GushiwenSongPage.vue'),
    },
    {
      path: '/articles/chinese/gushiwen-fenghuaxueyue',
      name: 'gushiwen-fenghuaxueyue',
      component: () => import('../views/GushiwenFenghuaxueyuePage.vue'),
    },
    {
      path: '/articles/chinese/gushiwen-extra',
      name: 'gushiwen-extra',
      component: () => import('../views/GushiwenExtraPage.vue'),
    },
    {
      path: '/articles/:category/:slug',
      name: 'article-detail',
      component: () => import('../views/ArticleDetailPage.vue'),
    },
    {
      path: '/debug',
      name: 'debug',
      component: () => import('../views/DebugPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundPage.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
