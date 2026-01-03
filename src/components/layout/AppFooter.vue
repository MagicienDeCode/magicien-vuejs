<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div>
    <a-flex justify="center" wrap>
      <div class="footer-div">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/xiang-li-3346b512a/"
          rel="noopener noreferrer"
        >
          <a-flex justify="center" align="center">
            <img
              alt="linkedin"
              src="/linkedin.png"
              class="footer-div-img"
            />
            <span class="footer-div-span">LINKEDIN</span>
          </a-flex>
        </a>
      </div>
      <div class="footer-div">
        <a
          target="_blank"
          href="https://github.com/MagicienDeCode"
          rel="noopener noreferrer"
        >
          <a-flex justify="center" align="center">
            <img
              alt="github"
              src="/github.png"
              class="footer-div-img"
            />
            <span class="footer-div-span">GITHUB</span>
          </a-flex>
        </a>
      </div>
      <div class="footer-div">
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCERe5JqcmPtyo3dzX94by1g?sub_confirmation=1"
          rel="noopener noreferrer"
        >
          <a-flex justify="center" align="center">
            <img
              alt="youtube"
              src="/youtube.png"
              class="footer-div-img"
            />
            <span class="footer-div-span">YOUTUBE</span>
          </a-flex>
        </a>
      </div>
      <div class="footer-div">
        <a
          target="_blank"
          href="https://space.bilibili.com/520811931"
          rel="noopener noreferrer"
        >
          <a-flex justify="center" align="center">
            <img
              alt="bilibili"
              src="/bilibili.png"
              class="footer-div-img"
            />
            <span class="footer-div-span">BILIBILI</span>
          </a-flex>
        </a>
      </div>
      <div class="footer-div">
        <a
          target="_blank"
          href="https://leetcode.com/MagicienDeCode/"
          rel="noopener noreferrer"
        >
          <a-flex justify="center" align="center">
            <img
              alt="leetcode"
              src="/leetcode.png"
              class="footer-div-img"
            />
            <span class="footer-div-span">LEETCODE</span>
          </a-flex>
        </a>
      </div>
    </a-flex>
    <a-row justify="center">
      <div class="copyright">
        <p>©{{ currentYear }} Created by LI Xiang</p>
      </div>
    </a-row>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/styles/components/footer.less';
</style>
