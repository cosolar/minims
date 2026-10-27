<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import TickerStrip from './components/TickerStrip.vue'
import PhilosophySection from './components/PhilosophySection.vue'
import ProductsSection from './components/ProductsSection.vue'
import OpenSourceSection from './components/OpenSourceSection.vue'
import AboutSection from './components/AboutSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <a class="skip-link" href="#main">跳到主要内容</a>
  <SiteHeader />
  <main id="main">
    <HeroSection />
    <TickerStrip />
    <PhilosophySection />
    <ProductsSection />
    <OpenSourceSection />
    <AboutSection />
  </main>
  <SiteFooter />
  <el-backtop :right="28" :bottom="28" :visibility-height="720">
    <span class="backtop-inner" aria-label="回到顶部">↑</span>
  </el-backtop>
</template>
