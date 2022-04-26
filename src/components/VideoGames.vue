<template>

    <div>
        <p class="text-white" v-if="games == null">Games is null</p>
        <p class="text-white" v-else>Games are here?</p>
        <div v-for="game in games" :key="game.id">
        {{ game.rating }}
        </div>
        
    </div>
    
</template>

<script>

import axios from 'axios'

export default {

  name: 'VideoGames',

  data() {
      return {
          games: null,
      }
  },

  mounted() {

    this.axiosRequest()

  },

  methods: {

    axiosRequest() {
      
      axios.get('https://public.connectnow.org.uk/applicant-test/')

        .then(response => {
            this.games = response
        })

        .catch(error => {
          console.log(error);
        })

    }
  }
}

</script>
