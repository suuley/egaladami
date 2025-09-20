<template>
  <main class="container">
    <div class="content-area">
      <h2 class="section-title">Latest School News</h2>
      <NewsCard v-for="post in news" :key="post.id" :post="post" />
    </div>
    <aside class="sidebar">
  <h2 class="section-title">Important Notices</h2>
  <div class="notice-board">
    <NoticeCard 
      v-for="notice in notices" 
      :key="notice.id" 
      :notice="notice" 
    />
  </div>
</aside>

  
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import NewsCard from '../components/NewsCard.vue';
import NoticeCard from '../components/NoticeCard.vue';

const news = ref([]);
const notices = ref([]);

onMounted(async () => {
  const res = await fetch('/data/news.json');
  news.value = await res.json();
});

onMounted(async () => {
  const res = await fetch('/data/notices.json');
  notices.value = await res.json();
});



</script>