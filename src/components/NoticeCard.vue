<template>
    <div class="notice-card">
      <div class="notice-content">
        <h3 class="notice-title">
          {{ notice.title }}
        </h3>
  
        <div v-if="showFull" class="notice-body">
          {{ notice.body }}
        </div>
  
        <a href="#" class="read-more" @click.prevent="showFull = !showFull">
          {{ showFull ? '▲ Show Less' : '▼ Show More' }}
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    notice: {
      type: Object,
      required: true,
      validator(obj) {
        return obj.title !== undefined && obj.body !== undefined
      }
    }
  })
  
  const showFull = ref(false)
  </script>
  
  <style scoped>
  .notice-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    transition: transform 0.2s ease;
  }
  .notice-card:hover {
    transform: translateY(-2px);
  }
  
  .notice-content {
    padding: 20px;
  }
  
  .notice-title {
    margin: 0 0 12px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
  }
  
  .notice-body {
    color: #555;
    line-height: 1.6;
    margin: 12px 0;
    padding: 12px;
    background: #f8f9fa;
    border-left: 4px solid #42b983;
    border-radius: 4px;
  }
  
  .read-more {
    color: #42b983;
    font-weight: 600;
    text-decoration: none;
    font-size: 0.9rem;
  }
  .read-more:hover {
    text-decoration: underline;
  }
  </style>