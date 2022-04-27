<template>

  <div class="p-5">
    
    <div class="text-3xl text-white flex flex-col p-3 h-100 md:flex-row">

      <router-link to="/videogames" class="mb-10 md:mr-20">VIDEO GAMES</router-link>
    
      <router-link to="/contact" class="mb-12">CONTACT</router-link>
     
    </div>

    <router-view></router-view>
    

  </div>

</template>

<script>

export default {

  name: 'App',

}
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(#081221 , #03080f);

}
</style>
