<script setup lang="ts">
import BrandMark from './BrandMark.vue'
import IconArrow from './IconArrow.vue'
import IconGitHub from './IconGitHub.vue'
</script>

<template>
  <section id="about" class="section about" aria-labelledby="about-title">
    <div class="wrap about-grid">
      <div class="about-left">
        <p class="eyebrow" v-reveal>04 / 关于极简软件</p>
        <h2 id="about-title" class="about-quote" v-reveal="60">
          把工具做小，<br />把<em>事情</em>做大。
        </h2>

        <div class="about-signature" v-reveal="160">
          <BrandMark :size="42" />
          <div>
            <strong>Cosolar</strong>
            <span>维护者 · github.com/cosolar</span>
          </div>
        </div>
      </div>

      <div class="about-right">
        <p class="about-lead" v-reveal="80">
          极简软件（Minims）是 Cosolar 维护的独立开源项目集合。名字里的 Mini
          不是简陋，而是克制：去掉不必要的功能、装饰和打扰，只留下真正要解决的问题。
        </p>
        <p v-reveal="120">
          我们更愿意把产品做慢一点、小一点、久一点。半年后再打开，它依然简单、依然好用——这是唯一想守住的标准。
        </p>

        <div class="about-actions" v-reveal="160">
          <el-button
            class="cta cta-primary cta-sm"
            tag="a"
            href="https://github.com/cosolar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGitHub class="btn-icon" />
            在 GitHub 上关注
          </el-button>
          <el-button
            class="cta cta-ghost cta-sm"
            tag="a"
            href="https://docs.minims.cn"
            target="_blank"
            rel="noopener noreferrer"
          >
            打开 MiniDocs
            <IconArrow class="btn-icon" />
          </el-button>
        </div>

        <p class="about-note" v-reveal="200">
          本站是纯静态页面，无后端，也没有统计脚本。
        </p>
      </div>
    </div>
  </section>
</template>
