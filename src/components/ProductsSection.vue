<script setup lang="ts">
import { products } from '../data/products'
import ProductShowcase from './ProductShowcase.vue'
</script>

<template>
  <section id="products" class="section products" aria-labelledby="products-title">
    <div class="wrap">
      <header class="products-head">
        <div>
          <p class="eyebrow" v-reveal>02 / 三件小事</p>
          <h2 id="products-title" v-reveal="60">三款产品，<br />三个简单的问题。</h2>
        </div>
        <p class="section-lead products-intro" v-reveal="120">
          写下来的知识、持续记录的想法、说清楚的自己。它们各自独立，却共享同一套审美和工程底线：开源、可自托管、不打扰。
        </p>
      </header>

      <div class="product-list">
        <ProductShowcase
          v-for="(product, index) in products"
          :key="product.id"
          :product="product"
          :reverse="index % 2 === 1"
        />
      </div>
    </div>
  </section>
</template>
