<template>
  <div class="school-news">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="nav-brand">Adami & Egal</div>
      <button class="hamburger" @click="toggleMenu" :aria-label="menuOpen ? 'Close menu' : 'Open menu'">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </nav>

    <!-- Full-Screen Modal Navigation -->
    <div v-if="menuOpen" class="modal-nav" @click="closeMenu">
      <div class="modal-content" @click.stop>
        <router-link to="/htmlcss" @click="closeMenu">HTML & CSS</router-link>
        <router-link to="/python" @click="closeMenu">Python</router-link>
        <router-link to="/linux" @click="closeMenu">Linux</router-link>
        <router-link to="/javascript" @click="closeMenu">JavaScript</router-link>
      </div>
    </div>

    <!-- Hero Header -->
    <header class="hero">
      <img src="/img/path1903.png" alt="School Logo" class="logo" />
      <h1>Adami & Egal Coding School</h1>
      <p>Coding & Tech Training for the Community</p>
    </header>

    <!-- Main Content -->
    <main class="container" v-if="loaded">
      <!-- Blog Posts -->
      <div class="content-area">
        <h2 class="section-title">Latest School News</h2>

        <article v-for="(post, index) in blogPosts" :key="post.id" class="blog-post-card">
          <img :src="post.image" :alt="post.alt" class="post-thumbnail" />
          <div class="post-content">
            <h3 class="post-title">
              <a :href="post.link" @click.prevent="togglePost(index)">{{ post.title }}</a>
            </h3>
            <p class="post-meta">Published by <strong>{{ post.author }}</strong> on {{ post.date }}</p>
            <p class="post-excerpt" :class="{ 'hidden': expandedPost === index }">
              {{ post.excerpt }}
            </p>
            <div class="full-content" :class="{ 'hidden': expandedPost !== index }">
              <p>{{ post.content }}</p>
            </div>
            <a href="#" class="read-more" @click.prevent="togglePost(index)">
              {{ expandedPost === index ? 'Read Less «' : 'Read More »' }}
            </a>
          </div>
        </article>
      </div>

      <!-- Sidebar: Important Notices -->
      <aside class="sidebar">
        <h2 class="section-title">Important Notices</h2>
        <ul class="notice-board">
          <li v-for="(notice, index) in notices" :key="index" class="notice-item">
            <div class="notice-header" :class="{ active: activeNotice === index }" @click="toggleNotice(index)">
              <a href="javascript:void(0)">{{ notice.title }}</a>
              <span class="expand-icon">▶</span>
            </div>
            <div class="notice-body" :class="{ 'show': activeNotice === index }">
              <p>{{ notice.body }}</p>
              <small v-if="notice.footer">{{ notice.footer }}</small>
            </div>
          </li>
        </ul>
      </aside>
    </main>

    <!-- Loading State -->
    <div v-else class="loading">
      <p>Loading news and notices...</p>
    </div>

    <!-- Footer -->
    <footer class="site-footer">
      <p>&copy; 2025 Adami & Egal Coding School. Empowering Future Programmers.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// State for modal menu
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

// Data states
const blogPosts = ref([])
const notices = ref([])
const expandedPost = ref(null)
const activeNotice = ref(null)
const loaded = ref(false)

// Fetch data from public/data/
onMounted(async () => {
  try {
    // Fetch blog posts
    const newsResponse = await fetch('/data/news.json')
    if (!newsResponse.ok) throw new Error(`Failed to load news: ${newsResponse.status}`)
    blogPosts.value = await newsResponse.json()

    // Fetch notices
    const noticesResponse = await fetch('/data/notices.json')
    if (!noticesResponse.ok) throw new Error(`Failed to load notices: ${noticesResponse.status}`)
    notices.value = await noticesResponse.json()

    loaded.value = true
  } catch (error) {
    console.error('Error loading data:', error)
    loaded.value = true // Show fallback even if failed
    // Optionally show an error message in UI
  }
})

// Toggle blog post content
const togglePost = (index) => {
  expandedPost.value = expandedPost.value === index ? null : index
}

// Toggle notice accordion
const toggleNotice = (index) => {
  if (activeNotice.value === index) {
    activeNotice.value = null
  } else {
    activeNotice.value = index
  }
}
</script>

<style scoped>
/* === Global Reset & Fonts === */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background: #f8f9fa;
  color: #333;
}

/* === Navbar === */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #2c3e50;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 700;
}

.hamburger {
  display: flex;
  /* 👈 Always visible — desktop AND mobile */
  flex-direction: column;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;
  width: 30px;
  height: 24px;
  justify-content: space-between;
}

.hamburger-line {
  width: 100%;
  height: 3px;
  background: white;
  transition: 0.3s ease;
  border-radius: 2px;
}

/* Optional: animate into X when open */
.hamburger.open .hamburger-line:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.open .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger.open .hamburger-line:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* === Modal Nav === */
.modal-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}

.modal-content {
  background: #1a1a2e;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.modal-content a {
  display: block;
  margin: 1.5rem 0;
  font-size: 1.4rem;
  color: #f0f0f0;
  text-decoration: none;
  transition: color 0.3s;
}

.modal-content a:hover {
  color: #ffcc00;
}

/* === Hero === */
.hero {
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  color: white;
  margin-top: 50px;
}

.logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 700;
}

.hero p {
  font-size: 1.4rem;
  opacity: 0.9;
}

/* === Container Layout === */
.container {
  display: flex;
  gap: 30px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  margin-top: 60px;
}

.content-area {
  flex: 3;
  min-width: 300px;
}

.sidebar {
  flex: 1;
  min-width: 250px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  align-self: flex-start;
  margin-top: 20px;
}

/* === Section Title === */
.section-title {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 1.5rem;
  border-bottom: 2px solid #42b983;
  padding-bottom: 8px;
  display: inline-block;
}

/* === Blog Post Card === */
.blog-post-card {
  display: flex;
  gap: 20px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.blog-post-card img {
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: cover;
}

.post-content {
  padding: 20px;
  flex: 1;
}

.post-title {
  margin: 0 0 10px;
  font-size: 1.4rem;
  color: #2c3e50;
}

.post-title a {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s;
}

.post-title a:hover {
  color: #42b983;
}

.post-meta {
  color: #777;
  font-size: 0.9rem;
  margin: 0 0 10px;
}

.post-excerpt,
.full-content {
  margin: 0 0 10px;
  color: #555;
  line-height: 1.6;
}

.post-excerpt.hidden,
.full-content.hidden {
  display: none;
}

.read-more {
  display: inline-block;
  margin-top: 10px;
  color: #42b983;
  font-weight: 600;
  text-decoration: none;
}

.read-more:hover {
  text-decoration: underline;
}

/* === Notice Board === */
.notice-board {
  list-style: none;
  padding: 0;
}

.notice-item {
  margin-bottom: 12px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
}

.notice-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 12px 16px;
  background: #f8f9fa;
  border-left: 4px solid #42b983;
  transition: background 0.2s ease;
}

.notice-header:hover {
  background: #e9ecef;
}

.notice-header a {
  font-weight: 500;
  color: #333;
  text-decoration: none;
  flex: 1;
}

.notice-header a:hover {
  color: #42b983;
}

.expand-icon {
  font-size: 0.9em;
  color: #42b983;
  margin-left: 10px;
  transition: transform 0.3s ease;
}

.notice-header.active .expand-icon {
  transform: rotate(90deg);
}

.notice-body {
  padding: 0 16px 12px;
  display: none;
  color: #555;
  line-height: 1.6;
  border-left: 1px solid #ddd;
  margin-left: 18px;
  background: white;
}

.notice-body.show {
  display: block;
}

.notice-body p {
  margin: 10px 0;
}

.notice-body small {
  color: #777;
  font-size: 0.9em;
  font-style: italic;
}

/* === Footer === */
.site-footer {
  text-align: center;
  padding: 30px 20px;
  background: #2c3e50;
  color: white;
  margin-top: 50px;
  font-size: 0.95rem;
}

/* === Loading State === */
.loading {
  text-align: center;
  padding: 60px;
  font-size: 1.2rem;
  color: #555;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    padding: 10px;
  }

  .content-area,
  .sidebar {
    flex: 1;
    min-width: auto;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1.2rem;
  }

  .blog-post-card {
    flex-direction: column;
  }

  .blog-post-card img {
    max-width: 100%;
  }

  .post-content {
    padding: 15px;
  }

  .post-title {
    font-size: 1.3rem;
  }

  .section-title {
    font-size: 1.4rem;
  }

  .modal-content {
    width: 95%;
    padding: 1.5rem;
  }

  .modal-content a {
    font-size: 1.3rem;
  }
}
</style>