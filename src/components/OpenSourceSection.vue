<script setup lang="ts">
import { ElMessage } from 'element-plus'
import {
  formatFullDate,
  formatStars,
  formatUpdated,
  useGithubStats,
  type RepoName,
} from '../composables/useGithub'
import IconArrow from './IconArrow.vue'
import IconGitHub from './IconGitHub.vue'
import IconStar from './IconStar.vue'

interface RepoEntry {
  name: RepoName
  title: string
  cn: string
  stack: string
  license: string
  url: string
}

const repos: RepoEntry[] = [
  {
    name: 'minidocs',
    title: 'MiniDocs',
    cn: '极简知识库',
    stack: 'Java 17 · Spring Boot · SQLite / MySQL',
    license: '源码公开',
    url: 'https://github.com/cosolar/minidocs',
  },
  {
    name: 'halo-theme-cosolar',
    title: 'halo-theme-cosolar',
    cn: '极简笔记',
    stack: 'Halo 2.x · TypeScript · Vite',
    license: 'GPL-3.0',
    url: 'https://github.com/cosolar/halo-theme-cosolar',
  },
  {
    name: 'miniwho',
    title: 'MiniWho',
    cn: '极简简历',
    stack: 'Spring Boot 3 · Vue 3 · Element Plus',
    license: 'Apache-2.0',
    url: 'https://github.com/cosolar/miniwho',
  },
]

const stack = [
  'Java 17',
  'Spring Boot 3',
  'Vue 3',
  'Element Plus',
  'SQLite',
  'MySQL',
  'Halo 2.x',
  'TypeScript',
  'Vite',
]

const { stats, loading, failed } = useGithubStats()

const cloneCommand = 'git clone https://github.com/cosolar/miniwho.git'

function legacyCopy(text: string): boolean {
  const area = document.createElement('textarea')
  area.value = text
  area.setAttribute('readonly', '')
  area.style.position = 'fixed'
  area.style.opacity = '0'
  document.body.appendChild(area)
  area.select()
  let ok = false
  try {
    ok = document.execCommand('copy')
  } catch {
    ok = false
  }
  area.remove()
  return ok
}

async function copyCommand() {
  let ok = false
  try {
    await navigator.clipboard.writeText(cloneCommand)
    ok = true
  } catch {
    ok = legacyCopy(cloneCommand)
  }

  if (ok) ElMessage.success({ message: '命令已复制', offset: 96 })
  else ElMessage.error({ message: '复制失败，请手动选择命令', offset: 96 })
}
</script>

<template>
  <section id="opensource" class="opensource" aria-labelledby="opensource-title">
    <div class="wrap opensource-grid">
      <div class="opensource-copy">
        <p class="eyebrow" v-reveal>03 / 开源不是口号</p>
        <h2 id="opensource-title" v-reveal="60">代码公开，<br />数据自持。</h2>
        <p class="opensource-lead" v-reveal="120">
          三款产品都开放源代码，都可以部署在你自己的服务器上。默认 SQLite，可选 MySQL；不依赖闭源服务，没有遥测，也不会在你离开时带走你的内容。
        </p>

        <div class="stack-list" v-reveal="160">
          <span v-for="item in stack" :key="item">{{ item }}</span>
        </div>

        <div class="opensource-actions" v-reveal="200">
          <el-button
            class="cta cta-invert"
            tag="a"
            href="https://github.com/cosolar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGitHub class="btn-icon" />
            GitHub @cosolar
            <IconArrow class="btn-icon" />
          </el-button>
        </div>
      </div>

      <div class="repo-panel">
        <div class="repo-head">
          <span>开源仓库</span>
          <span class="repo-live">
            <i class="live-dot" :class="{ 'is-pulsing': loading }" aria-hidden="true"></i>
            LIVE FROM GITHUB
          </span>
        </div>

        <a
          v-for="(repo, index) in repos"
          :key="repo.name"
          class="repo-row"
          :href="repo.url"
          target="_blank"
          rel="noopener noreferrer"
          v-reveal="index * 60"
        >
          <span class="repo-main">
            <span class="repo-title">
              {{ repo.title }}
              <span>{{ repo.cn }}</span>
            </span>
            <span class="repo-sub">{{ repo.stack }}</span>
          </span>

          <span class="repo-side">
            <span class="repo-license">{{ repo.license }}</span>
            <span class="repo-stat">
              <IconStar class="ui-icon" />
              {{ formatStars(stats[repo.name].stars) }}
            </span>
            <el-tooltip
              :content="formatFullDate(stats[repo.name].pushedAt)"
              placement="top"
              popper-class="repo-tooltip"
            >
              <span class="repo-updated">{{ formatUpdated(stats[repo.name].pushedAt) }}</span>
            </el-tooltip>
            <IconArrow class="repo-arrow" />
          </span>
        </a>

        <div class="clone-bar">
          <span class="clone-prompt" aria-hidden="true">$</span>
          <code>{{ cloneCommand }}</code>
          <button class="copy-btn" type="button" @click="copyCommand">复制</button>
        </div>

        <p class="repo-note">
          Star 与更新时间来自 GitHub API，每 30 分钟刷新；请求失败时使用最近一次缓存。<template
            v-if="failed"
          >
            当前显示的是缓存数据。</template
          >
        </p>
      </div>
    </div>
  </section>
</template>
