<template>
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
        <router-link to="/" @click="closeMenu">HOME</router-link>
        <router-link to="/htmlcss" @click="closeMenu">HTML & CSS</router-link>
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
    <div class="learning-page">
      <header class="page-header">
        <h1>🐍 Python</h1>
        <p>The language of choice for beginners and experts alike</p>
      </header>
  
      <main class="page-content">
        <section>
          <h2>What is Python?</h2>
          <p>
            Python is a high-level, readable programming language used in web development, data science, AI, automation, and more.
            Its simple syntax makes it ideal for first-time coders — often described as “executable pseudocode.”
          </p>
        </section>
  
        <section>
          <h2>Why Learn It?</h2>
          <ul>
            <li>Simple and intuitive — write code like English</li>
            <li>Huge community and libraries (NumPy, Pandas, Django, Flask)</li>
            <li>Used by Google, NASA, Instagram, Spotify, Netflix, and Dropbox</li>
            <li>Perfect for automating repetitive tasks and analyzing data</li>
            <li>One of the most in-demand skills in tech today</li>
          </ul>
        </section>
  
        <section>
          <h2>What You’ll Build</h2>
          <p>
            By the end of this course, you’ll create:
            <br><br>
            • A quiz game that scores your answers in real time<br>
            • A file organizer that sorts downloads into folders automatically<br>
            • A weather app that fetches live data from an API<br>
            • A chatbot that responds to user input using basic AI logic<br>
            • A script that generates personalized report cards from Excel data
          </p>
        </section>
  
        <section>
          <h2>How It Helps You</h2>
          <p>
            Whether you want to become a software developer, data analyst, AI engineer, or just automate boring tasks,
            Python gives you the power to turn ideas into reality — without needing years of training.
            <br><br>
            In school, you’ll use Python to solve math problems visually, analyze survey results, or even control robots!
            Outside school, it opens doors to internships, scholarships, and careers in tech.
          </p>
        </section>
  
        <section>
          <h2>Next Steps</h2>
          <p>
            After mastering Python, move on to:
            <br>
            • <strong>Data Science:</strong> Learn Pandas and Matplotlib to visualize data<br>
            • <strong>Web Development:</strong> Try Flask or Django to build websites<br>
            • <strong>Automation:</strong> Script file backups, email senders, or web scrapers<br>
            • <strong>AI & Machine Learning:</strong> Dive into TensorFlow or scikit-learn
          </p>
        </section>
      </main>
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
  display: flex; /* 👈 Always visible — desktop AND mobile */
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
  .learning-page {
    max-width: 900px;
    margin: 60px auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.7;
  }
  
  .page-header {
    text-align: center;
    margin-bottom: 40px;
    color: #333;
  }
  
  .page-header h1 {
    font-size: 2.5rem;
    color: #42b983;
    margin-bottom: 10px;
  }
  
  .page-header p {
    font-size: 1.2rem;
    color: #666;
  }
  
  .page-content section {
    margin-bottom: 40px;
    padding: 20px;
    border-left: 4px solid #42b983;
    background-color: #f9f9f9;
    border-radius: 0 8px 8px 0;
  }
  
  .page-content h2 {
    color: #333;
    margin-bottom: 15px;
    font-size: 1.8rem;
  }
  
  .page-content ul {
    padding-left: 20px;
    margin: 15px 0;
  }
  
  .page-content li {
    margin-bottom: 8px;
    font-size: 1.1rem;
  }
  
  .page-content p {
    font-size: 1.1rem;
    color: #444;
  }
  
  /* Improve readability of multi-line bullet points */
  .page-content p br {
    display: block;
    margin: 8px 0;
  }
  </style>