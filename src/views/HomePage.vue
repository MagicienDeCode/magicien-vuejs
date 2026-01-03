<script setup lang="ts">
import { useMeta } from '@/composables/useMeta'
import { RouterLink } from 'vue-router'

useMeta({
  title: 'MagicienDeCode - Home',
  description: 'Personal website of LI Xiang - Software Engineer',
  keywords: 'magiciendecode, LI Xiang, software engineer, AI, ML, system design',
})
</script>

<template>
  <a-row :gutter="24">
    <a-col class="home-left" :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
      <div class="home-xiang-avatar">
        <RouterLink to="/">
          <a-badge>
            <a-avatar
              size="small"
              src="/xiang4.jpg"
              class="xiang-avatar"
            />
          </a-badge>
        </RouterLink>
      </div>
      <div class="home-left-name">
        <RouterLink to="/">
          <p>LI Xiang - 李 想</p>
        </RouterLink>
      </div>
      <div class="home-left-links display-none">
        <div class="home-left-text">
          <p>
            With Experience and Education in the areas of Computer Science, my
            interest is to continuously improve in the fields of AI/ML and
            System Design
          </p>
        </div>
        <a
          target="_blank"
          href="mailto:xiangli1105@hotmail.com"
          rel="noopener noreferrer"
        >
          <a-row class="home-row">
            <a-col>
              <img alt="email" class="home-img" src="/email.png" />
            </a-col>
            <a-col>
              <span class="text-link"> Email </span>
            </a-col>
          </a-row>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/xiang-li-3346b512a/"
          rel="noopener noreferrer"
        >
          <a-row class="home-row">
            <a-col>
              <img alt="linkedin" class="home-img" src="/linkedin.png" />
            </a-col>
            <a-col>
              <span class="text-link"> Linkedin </span>
            </a-col>
          </a-row>
        </a>
        <a
          target="_blank"
          href="https://github.com/MagicienDeCode"
          rel="noopener noreferrer"
        >
          <a-row class="home-row">
            <a-col>
              <img alt="github" class="home-img" src="/github.png" />
            </a-col>
            <a-col>
              <span class="text-link"> Github </span>
            </a-col>
          </a-row>
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCERe5JqcmPtyo3dzX94by1g?sub_confirmation=1"
          rel="noopener noreferrer"
        >
          <a-row class="home-row">
            <a-col>
              <img alt="youtube" class="home-img" src="/youtube.png" />
            </a-col>
            <a-col>
              <span class="text-link"> Youtube </span>
            </a-col>
          </a-row>
        </a>
        <a
          target="_blank"
          href="https://leetcode.com/MagicienDeCode/"
          rel="noopener noreferrer"
        >
          <a-row class="home-row">
            <a-col>
              <img alt="leetcode" class="home-img" src="/leetcode.png" />
            </a-col>
            <a-col>
              <span class="text-link"> Leetcode </span>
            </a-col>
          </a-row>
        </a>
        <a
          target="_blank"
          href="https://space.bilibili.com/520811931"
          rel="noopener noreferrer"
        >
          <a-row class="home-row">
            <a-col>
              <img alt="bilibili" class="home-img" src="/bilibili.png" />
            </a-col>
            <a-col>
              <span class="text-link"> Bilibili </span>
            </a-col>
          </a-row>
        </a>
      </div>
    </a-col>

    <a-col class="home-right" :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
      <h2>About Me</h2>
      <div class="text-size">
        <p>
          I define myself as a passionate and organized person. I am rigorous,
          efficient and I appreciate quality work.
        </p>
      </div>
      <div class="text-size">
        <p>
          I am constantly learning about new technologies, and I undertake new
          personal projects in order to deepen my knowledge as well as to be
          able to propose solutions adapted to the work.
        </p>
      </div>
      <div class="text-size">
        <p>
          I particularly like working in a team but I also know how to be
          independent when necessary.
        </p>
      </div>
      <div class="text-size">
        <p>
          I thrive not only by working, but also by bringing value to the
          company, in which the ability to face challenges, recognize and
          rectify mistakes and be tenacious is essential.
        </p>
      </div>
      <div class="home-right-divider-bgc" />
      <div class="home-left-carousel">
        <a-carousel autoplay>
          <div class="text-size">
            <h4>2022 annual appraisal</h4>
            <p>
              Xiang has done an excellent year. Xiang took the lead on
              architecture proposing several scenarios using HLD (High Level
              Design) methodology/System Design, and moving step by step to
              the specifics. All the points are discussed with the team before
              being implemented. Some technical choices were debate and I
              could see that Xiang did not impose its solution and if the
              arguments brought by the other team members was making sense, he
              was able to accept their counter proposal. Technically he is
              able to check the peers contribution and integrate it quickly in
              its reasoning. This ability make him quick to spot issues and
              find solutions/workaround. Again, a very good job in 2022.
            </p>
          </div>
          <div class="text-size">
            <h4>2023 annual appraisal</h4>
            <p>
              Xiang did a very good year. Its contribution helped to build
              product on time. He has a major contribution in Webhook and
              SlimCollect products. We can see that Thanks to him and the team
              we are delivering products which are long due by the company
              (webhook) in a few months. Xiang handled the changes as a team
              leader without creating any tension, by respecting its
              colleagues as equal, and helping them when needed. Please
              continue like this as 2024 will be the opportunity to build a
              bigger picture of the company.
            </p>
          </div>
        </a-carousel>
      </div>
    </a-col>
  </a-row>
</template>

<style lang="less" scoped>
@import '@/assets/styles/pages/home.less';
</style>
