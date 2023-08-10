<script setup lang="ts">
import { useFetch } from ".nuxt/imports";

const { pending, data: posts } = await useFetch("/api/posts", {
  // lazy: true,
  // server: false,
});
</script>
<template>
  <div>Nuxt module playground!</div>
  <div v-if="pending">Loading ...</div>
  <div v-else>
    <div v-for="post in posts" :key="post.title">
      <p>{{ post.title }}</p>
    </div>
  </div>
</template>
