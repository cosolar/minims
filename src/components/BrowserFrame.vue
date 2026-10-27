<script setup lang="ts">
withDefaults(
  defineProps<{
    url: string
    src: string
    alt: string
    eager?: boolean
  }>(),
  { eager: false },
)
</script>

<template>
  <figure class="browser-frame">
    <div class="browser-bar" aria-hidden="true">
      <span class="browser-dots"><i /><i /><i /></span>
      <span class="browser-url">{{ url }}</span>
      <span class="browser-spacer" />
    </div>
    <div class="browser-body">
      <img
        :src="src"
        :alt="alt"
        :loading="eager ? 'eager' : 'lazy'"
        :fetchpriority="eager ? 'high' : 'auto'"
        width="1440"
        height="900"
        decoding="async"
      />
    </div>
  </figure>
</template>
