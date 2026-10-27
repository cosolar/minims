<script setup lang="ts">
import type { Product } from '../data/products'
import BrowserFrame from './BrowserFrame.vue'
import IconArrow from './IconArrow.vue'

withDefaults(
  defineProps<{
    product: Product
    reverse?: boolean
  }>(),
  { reverse: false },
)
</script>

<template>
  <article
    class="product"
    :class="{ 'product--reverse': reverse }"
    :aria-labelledby="`${product.id}-title`"
  >
    <div class="product-copy">
      <p class="product-kicker" v-reveal>
        <span class="product-index">{{ product.index }}</span>
        <span class="kicker-line" aria-hidden="true"></span>
        <span>{{ product.kicker }}</span>
      </p>

      <h3 :id="`${product.id}-title`" v-reveal="50">
        {{ product.name }}
        <span>{{ product.cn }}</span>
      </h3>

      <p class="product-tagline" v-reveal="80">{{ product.tagline }}</p>
      <p class="product-desc" v-reveal="110">{{ product.description }}</p>

      <ul class="feature-list">
        <li v-for="(feature, index) in product.features" :key="feature.title" v-reveal="index * 60">
          <span class="feature-num">0{{ index + 1 }}</span>
          <div>
            <strong>{{ feature.title }}</strong>
            <p>{{ feature.text }}</p>
          </div>
        </li>
      </ul>

      <div class="product-tags" v-reveal>
        <el-tag
          v-for="tag in product.tags"
          :key="tag"
          class="meta-tag"
          effect="plain"
          round
          size="small"
        >
          {{ tag }}
        </el-tag>
      </div>

      <div class="product-actions" v-reveal>
        <el-button
          class="cta cta-primary cta-sm"
          tag="a"
          :href="product.siteUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ product.siteCta }}
          <IconArrow class="btn-icon" />
        </el-button>
        <el-button
          class="cta cta-ghost cta-sm"
          tag="a"
          :href="product.repoUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          查看源码
        </el-button>
      </div>
    </div>

    <div class="product-visual" v-reveal="100">
      <BrowserFrame :url="product.shotUrl" :src="product.shot" :alt="product.shotAlt" />
      <div class="product-caption">
        <span>{{ product.shotUrl }}</span>
        <span>{{ product.shotCaption }}</span>
      </div>
    </div>
  </article>
</template>
