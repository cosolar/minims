<script setup lang="ts">
const items = [
  'MINIDOCS — 极简知识库',
  'HALO-THEME-COSOLAR — 极简笔记',
  'MINIWHO — 极简简历',
  'OPEN SOURCE',
  'SELF-HOSTED',
  'NO ADS',
  'WRITTEN WITH RESTRAINT',
]
</script>

<template>
  <div class="ticker" aria-label="产品与价值观关键词">
    <div class="ticker-track">
      <div v-for="round in 2" :key="round" class="ticker-group" :aria-hidden="round === 2">
        <span v-for="item in items" :key="`${round}-${item}`" class="ticker-item">
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>
