<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Close, Menu, Moon, Sunny } from '@element-plus/icons-vue'
import BrandMark from './BrandMark.vue'
import IconArrow from './IconArrow.vue'
import IconGitHub from './IconGitHub.vue'
import { useTheme } from '../composables/useTheme'

const navItems = [
  { id: 'philosophy', label: '理念', desc: '为什么做减法', en: 'WHY MINIMAL' },
  { id: 'products', label: '产品', desc: '三件小事', en: 'PRODUCTS' },
  { id: 'opensource', label: '开源', desc: '代码与数据', en: 'OPEN SOURCE' },
  { id: 'about', label: '关于', desc: '关于 Minims', en: 'ABOUT' },
]

const { isDark, toggleTheme } = useTheme()

const drawerOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref('')
let spy: IntersectionObserver | null = null

function handleScroll() {
  scrolled.value = window.scrollY > 12
  if (window.scrollY < 300) activeSection.value = ''
}

function goTo(id: string) {
  drawerOpen.value = false
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.setTimeout(() => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: reduced ? 'auto' : 'smooth',
        block: 'start',
      })
    }
    history.replaceState(null, '', `#${id}`)
  }, 240)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  spy = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) activeSection.value = entry.target.id
      }
    },
    { rootMargin: '-42% 0px -52% 0px', threshold: 0 },
  )

  for (const item of navItems) {
    const el = document.getElementById(item.id)
    if (el) spy.observe(el)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  spy?.disconnect()
})
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <div class="header-inner">
      <a class="brand" href="#top" aria-label="极简软件 Minims 首页" @click="activeSection = ''">
        <BrandMark :size="34" />
        <span class="brand-copy">
          <span class="brand-cn">极简软件</span>
          <span class="brand-en">MINIMS.CN</span>
        </span>
      </a>

      <nav class="desktop-nav" aria-label="站点导航">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          :class="{ 'is-active': activeSection === item.id }"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="header-actions">
        <a
          class="gh-link"
          href="https://github.com/cosolar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="在 GitHub 打开 Cosolar 主页"
        >
          <IconGitHub class="ui-icon" />
          <span>GitHub</span>
        </a>
        <button
          class="icon-btn"
          type="button"
          :aria-label="isDark ? '切换到浅色模式' : '切换到深色模式'"
          @click="toggleTheme"
        >
          <Sunny v-if="isDark" class="ui-icon" />
          <Moon v-else class="ui-icon" />
        </button>
        <button
          class="icon-btn menu-btn"
          type="button"
          aria-label="打开菜单"
          :aria-expanded="drawerOpen"
          @click="drawerOpen = true"
        >
          <Menu class="ui-icon ui-icon--lg" />
        </button>
      </div>
    </div>
  </header>

  <el-drawer
    v-model="drawerOpen"
    direction="rtl"
    size="min(88vw, 420px)"
    :with-header="false"
    append-to-body
    class="mobile-drawer"
    modal-class="mobile-drawer-overlay"
  >
    <div class="drawer-shell">
      <div class="drawer-head">
        <a class="brand" href="#top" aria-label="返回首页" @click.prevent="goTo('top')">
          <BrandMark :size="30" />
          <span class="brand-copy">
            <span class="brand-cn">极简软件</span>
            <span class="brand-en">MINIMS</span>
          </span>
        </a>
        <button class="icon-btn" type="button" aria-label="关闭菜单" @click="drawerOpen = false">
          <Close class="ui-icon" />
        </button>
      </div>

      <nav class="drawer-nav" aria-label="移动端导航">
        <a
          v-for="(item, index) in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          @click.prevent="goTo(item.id)"
        >
          <span class="drawer-index">0{{ index + 1 }}</span>
          <span class="drawer-label">{{ item.label }}</span>
          <span class="drawer-en">{{ item.en }}</span>
          <span class="drawer-desc">{{ item.desc }}</span>
        </a>
      </nav>

      <div class="drawer-foot">
        <a
          class="drawer-gh"
          href="https://github.com/cosolar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconGitHub class="ui-icon" />
          <span>GitHub @cosolar</span>
          <IconArrow class="ui-icon" />
        </a>
        <button class="drawer-theme" type="button" @click="toggleTheme">
          <Sunny v-if="isDark" class="ui-icon" />
          <Moon v-else class="ui-icon" />
          <span>{{ isDark ? '切换到浅色模式' : '切换到深色模式' }}</span>
        </button>
        <p class="drawer-motto">把复杂留给自己，<br />把简单留给你。</p>
      </div>
    </div>
  </el-drawer>
</template>
