<template>
  <div class="blog-post-card">
    <img :src="post.image" :alt="post.title" class="post-thumbnail" />
    <div class="post-content">
      <h3 class="post-title">
        <a href="#">{{ post.title }}</a>
      </h3>
      <p class="post-meta">Published by <strong>{{ post.author }}</strong> on {{ post.date }}</p>
      <p class="post-excerpt">{{ post.excerpt }}</p>

      <div v-if="showFull" class="full-content" v-html="post.content"></div>

      <a href="#" class="read-more" @click.prevent="showFull = !showFull">
        {{ showFull ? 'Read Less «' : 'Read More »' }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
defineProps(['post'])
const showFull = ref(false)
</script>

<style scoped>
.blog-post-card {
  display: flex;
  gap: 20px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin-bottom: 30px;
  flex-wrap: wrap;
}
.post-thumbnail {
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: cover;
}
.post-content {
  padding: 20px;
  flex: 1;
}
.post-title a {
  text-decoration: none;
  color: inherit;
}
.post-title a:hover {
  color: #42b983;
}
.post-excerpt, .full-content {
  color: #555;
  line-height: 1.6;
  margin: 0 0 10px;
}
.read-more {
  color: #42b983;
  font-weight: 600;
  text-decoration: none;
}
.read-more:hover {
  text-decoration: underline;
}
.full-content {
  padding: 10px;
  margin: 10px 0;
  background: #f8f9fa;
  border-left: 4px solid #42b983;
}
</style>