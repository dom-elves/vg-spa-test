<template>
<div>

  <video-games></video-games>
  <contact-page></contact-page>
  
</div>
</template>

<script>
import VideoGames from './components/VideoGames.vue'
import ContactPage from './components/ContactPage.vue'

export default {
  name: 'App',
  components: {
    VideoGames,
    ContactPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
