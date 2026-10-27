<script setup lang="ts">
import IconArrow from './IconArrow.vue'
import IconGitHub from './IconGitHub.vue'

const productLinks = [
  { label: '极简智库', href: 'https://docs.minims.cn' },
  { label: '极简笔记', href: 'https://note.minims.cn' },
  { label: '极简简历', href: 'https://who.minims.cn' },
]

const repoLinks = [
  { label: 'GitHub 主页', href: 'https://github.com/cosolar' },
  { label: '极简智库 源码', href: 'https://github.com/cosolar/minidocs' },
  { label: '极简笔记 源码', href: 'https://github.com/cosolar/halo-theme-cosolar' },
  { label: '极简简历 源码', href: 'https://github.com/cosolar/miniwho' },
]

const siteLinks = [
  { label: '为什么极简', href: '#philosophy' },
  { label: '三件小事', href: '#products' },
  { label: '开源说明', href: '#opensource' },
  { label: '关于 极简软件', href: '#about' },
]
</script>

<template>
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-top">
        <div class="footer-brand">
          <p class="footer-word">minims<span>.</span></p>
          <p class="footer-tag">把复杂留给自己，把简单留给你。</p>
          <a
            class="footer-gh"
            href="https://github.com/cosolar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGitHub class="ui-icon" />
            github.com/cosolar
            <IconArrow class="ui-icon" />
          </a>
        </div>

        <div class="footer-cols">
          <nav class="footer-col" aria-label="产品">
            <h4>产品</h4>
            <a
              v-for="link in productLinks"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ link.label }}
            </a>
          </nav>

          <nav class="footer-col" aria-label="开源">
            <h4>开源</h4>
            <a
              v-for="link in repoLinks"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ link.label }}
            </a>
          </nav>

          <nav class="footer-col" aria-label="站点">
            <h4>站点</h4>
            <a v-for="link in siteLinks" :key="link.label" :href="link.href">
              {{ link.label }}
            </a>
          </nav>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 极简软件 Minims</span>
        <span>Vue 3 · Element Plus · 纯静态</span>
        <a class="footer-top-link" href="#top">回到顶部 ↑</a>
      </div>
    </div>
  </footer>
</template>
