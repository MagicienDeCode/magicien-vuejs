<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useMeta } from '@/composables/useMeta'

useMeta({
  title: 'Projects - MagicienDeCode',
  description: 'Projects and works of LI Xiang',
})
</script>

<template>
  <div class="page-container">
    <a-breadcrumb separator=">" class="breads">
      <a-breadcrumb-item>
        <RouterLink to="/">Home</RouterLink>
      </a-breadcrumb-item>
      <a-breadcrumb-item>Projects</a-breadcrumb-item>
    </a-breadcrumb>

    <div class="page-content">
      <aside class="page-sidebar">
        <a-timeline class="pages-timeline">
              <a-timeline-item color="grey">
                <template #dot>
                  <a-badge>
                    <a-avatar src="/github.png" :size="20" />
                  </a-badge>
                </template>
                <a href="#github" class="decoration-none">
                  <span class="pages-line-text">GITHUB</span>
                </a>
              </a-timeline-item>
              <a-timeline-item color="grey">
                <template #dot>
                  <a-badge>
                    <a-avatar src="/ml.png" :size="20" />
                  </a-badge>
                </template>
                <a href="#machine-learning" class="decoration-none">
                  <span class="pages-line-text">MACHINE LEARNING</span>
                </a>
              </a-timeline-item>
              <a-timeline-item color="grey">
                <template #dot>
                  <a-badge>
                    <a-avatar src="/algo.png" :size="20" />
                  </a-badge>
                </template>
                <a href="#algorithm" class="decoration-none">
                  <span class="pages-line-text">ALGORITHM</span>
                </a>
              </a-timeline-item>
              <a-timeline-item color="grey">
                <template #dot>
                  <a-badge>
                    <a-avatar src="/other.png" :size="20" />
                  </a-badge>
                </template>
                <a href="#others" class="decoration-none">
                  <span class="pages-line-text">OTHERS</span>
                </a>
              </a-timeline-item>
        </a-timeline>
      </aside>

      <main class="page-main">
          <div>
            <h2 id="github" class="pages-right-first">GITHUB</h2>
            <a-row>
              <a-col :flex="4" class="projects-info-col">
                <p>All my projects are on GitHub. Click the link below:</p>
                <a target="_blank" href="https://github.com/MagicienDeCode">
                  <h3>Talent is enduring patience</h3>
                </a>
              </a-col>
              <a-col :flex="1" class="basic-info-left-col">
                <RouterLink to="/" class="decoration-none">
                  <a-badge>
                    <a-avatar src="/xiang3.jpg" class="pages-xiang-avatar" />
                  </a-badge>
                </RouterLink>
              </a-col>
            </a-row>
          </div>

          <div>
            <h2 id="machine-learning">MACHINE LEARNING</h2>
            <a-divider orientation="left">
              <div class="exp-head">
                <img
                  alt="machine-learning"
                  class="company-icon"
                  src="/ml.png"
                />
                <a
                  target="_blank"
                  href="https://github.com/MagicienDeCode/machine_learning"
                >
                  <span class="text-link-no-color">Machine Learning</span>
                </a>
              </div>
            </a-divider>
            <br />
            <div class="text-size">
              <p>
                <span class="key-word">Key Words: </span>Machine Learning,
                Linear Regression, Logistic Regression, Decision Tree, Random
                Forest, Gradient Boosting Trees, Support Vector Machine, MLP,
                RNN, K-Means Clustering, Hierarchical Clustering, PCA, t-SNE,
                Naive Bayes, Adaboost, XGBoost
              </p>
            </div>
            <br />
          </div>

          <br />
          <h2 id="algorithm">ALGORITHM</h2>
          <a-divider orientation="left">
            <div class="exp-head">
              <img alt="python" class="company-icon" src="/python.png" />
              <a
                target="_blank"
                href="https://github.com/MagicienDeCode/py3_interview"
              >
                <span class="text-link-no-color">LeetCode Python3</span>
              </a>
            </div>
          </a-divider>
          <br />
          <div class="text-size">
            <p>
              <span class="key-word">Key Words: </span>Algorithm,
              LeetCode, Python3, Java, Binary Search, Depth First Search,
              Breadth First Search, Stack, Deque, Heap (Priority Queue),
              Linked List, Dynamic Programming, Data Structure
            </p>
          </div>
          <br />

          <a-divider orientation="left">
            <div class="exp-head">
              <img alt="java" class="company-icon" src="/SQL.png" />
              <a
                target="_blank"
                href="https://github.com/MagicienDeCode/SQL-ALL-IN-ONE"
              >
                <span class="text-link-no-color">SQL All in One</span>
              </a>
            </div>
          </a-divider>
          <br />
          <div class="text-size">
            <p>
              <span class="key-word">Key Words: </span>SQL, Relational
              database, Courses
            </p>
          </div>
          <br />

          <h2 id="others">Site webs</h2>
          <a-divider orientation="left">
            <div class="exp-head">
              <img
                alt="mdc"
                class="company-icon"
                src="/gatsbyjs-logo.png"
              />
              <a
                target="_blank"
                href="https://github.com/MagicienDeCode/my-site-magiciendecode"
              >
                <span class="text-link-no-color">Personal Site (latest)</span>
              </a>
            </div>
          </a-divider>
          <br />
          <div class="text-size">
            <p>
              <span class="key-word">Key Words: </span>Gatsby JS, JavaScript
            </p>
          </div>
          <br />
        </main>
      </div>
      <a-float-button-back-top />
    </div>
</template>

<style lang="less" scoped>
@import '@/assets/styles/pages/projects.less';
</style>
