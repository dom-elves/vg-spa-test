<template>

  <div class="p-5">
    
    <div class="text-3xl text-white flex flex-col p-3 h-100">

      <router-link to="/videogames" class="mb-10">VIDEO GAMES</router-link>
    
      <router-link to="/contact" class="mb-12">CONTACT</router-link>
     
    </div>

    <router-view></router-view>
    

  </div>

</template>

<script>

import axios from 'axios'


export default {

  name: 'App',

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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(#081221 , #03080f);

}
</style>
