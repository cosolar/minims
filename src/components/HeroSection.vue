<script setup lang="ts">
import { ref } from 'vue'
import minidocsShot from '../assets/shots/minidocs-doc.webp'
import noteShot from '../assets/shots/note-home.webp'
import whoShot from '../assets/shots/who-home.webp'
import BrowserFrame from './BrowserFrame.vue'
import IconArrow from './IconArrow.vue'
import IconGitHub from './IconGitHub.vue'

const heroEl = ref<HTMLElement | null>(null)
let frame = 0

function onPointerMove(event: PointerEvent) {
  if (!window.matchMedia('(pointer: fine)').matches) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (frame) return

  frame = requestAnimationFrame(() => {
    frame = 0
    const el = heroEl.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1
    el.style.setProperty('--mx', x.toFixed(3))
    el.style.setProperty('--my', y.toFixed(3))
  })
}

function resetPointer() {
  const el = heroEl.value
  if (!el) return
  el.style.setProperty('--mx', '0')
  el.style.setProperty('--my', '0')
}
</script>

<template>
  <section
    id="top"
    ref="heroEl"
    class="hero"
    aria-labelledby="hero-title"
    @pointermove="onPointerMove"
    @pointerleave="resetPointer"
  >
    <div class="hero-grid">
      <div class="hero-copy">
        <p class="eyebrow" v-reveal>MINIMS · 独立开源项目</p>

        <h1 id="hero-title" v-reveal="60">
          把复杂留给自己，<br />
          把<span class="accent">简单</span>留给你。
        </h1>

        <p class="hero-lead" v-reveal="120">
          极简软件是一组开源、可自托管的效率工具。写知识、记想法、说清自己——三件正经事，三个不打扰人的产品。没有广告，没有会员墙，也不把你的数据当成生意。
        </p>

        <div class="hero-actions" v-reveal="180">
          <el-button class="cta cta-primary" tag="a" href="#products">
            认识三款产品
            <IconArrow class="btn-icon" />
          </el-button>
          <el-button
            class="cta cta-ghost"
            tag="a"
            href="https://github.com/cosolar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGitHub class="btn-icon" />
            GitHub 源码
          </el-button>
        </div>

        <div class="hero-meta" v-reveal="240">
          <div class="hero-meta-item">
            <strong>3</strong>
            <span>款开源产品</span>
          </div>
          <div class="hero-meta-item">
            <strong>100%</strong>
            <span>可自托管</span>
          </div>
          <div class="hero-meta-item">
            <strong>0</strong>
            <span>付费墙</span>
          </div>
        </div>

        <p class="hero-foot" v-reveal="280">
          <span class="live-dot" aria-hidden="true"></span>
          代码在 GitHub，数据在你自己手里。
        </p>
      </div>

      <div class="hero-visual" aria-label="三款产品的真实界面预览">
        <p class="hero-visual-label">真实界面，不是概念稿</p>

        <div class="hero-frame hero-frame--back">
          <BrowserFrame
            v-reveal="220"
            url="docs.minims.cn"
            :src="minidocsShot"
            alt="MiniDocs 知识库的文档阅读界面"
          />
        </div>

        <div class="hero-frame hero-frame--main">
          <BrowserFrame
            v-reveal="120"
            url="who.minims.cn"
            :src="whoShot"
            alt="MiniWho 极简简历的宣传首页"
            eager
          />
        </div>

        <div class="hero-frame hero-frame--float">
          <BrowserFrame
            v-reveal="280"
            url="note.minims.cn"
            :src="noteShot"
            alt="极简笔记 Halo 主题的博客首页"
          />
        </div>
      </div>
    </div>

    <a class="scroll-hint" href="#philosophy" aria-label="向下滚动到理念">
      <span>向下滚动</span>
      <span class="scroll-line" aria-hidden="true"></span>
    </a>
  </section>
</template>
