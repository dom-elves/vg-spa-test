<template>
<div>

  <video-games></video-games>
  <contact-page></contact-page>

</div>
</template>

<script>
import VideoGames from './components/VideoGames.vue'
import ContactPage from './components/ContactPage.vue'
import axios from 'axios'

export default {

  name: 'App',

  components: {

    VideoGames,
    ContactPage

  },

  mounted() {

    this.axiosRequest()

  },

  methods: {

    axiosRequest() {
      
      axios.get('https://public.connectnow.org.uk/applicant-test/')

        .then( function(response) {
          console.log(response.data);
        })

        .catch( function(error) {
          console.log(error);
        })
    }
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
