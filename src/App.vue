<template>
  <div id="app">
    <!-- Global Header (Hamburger Nav) -->
    <Header />

    <!-- Main Content Area - All Pages Render Here -->
    <router-view />

   
  </div>
</template>

<script setup>
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  background: #f8f9fa;
  color: #333;
}

.site-footer {
  padding: 30px 20px;
  background: #2c3e50;
  color: white;
  text-align: center;
  margin-top: auto; /* Pushes footer to bottom */
}
</style>
