<template>

    <div>
        <p class="text-white" v-if="games == null">Games is null</p>
        <p class="text-white" v-else>Games are here?</p>
        <p v-for="game in games" :key="game.id">
        {{ game.rating }}
        </p>
        
    </div>
    
</template>

<script>

import axios from 'axios'

export default {

  name: 'VideoGames',

  data() {
      return {
          games: [],
      }
  },

  mounted() {

    this.axiosRequest()

  },

  methods: {

    axiosRequest() {
      
      axios.get('https://public.connectnow.org.uk/applicant-test/')

        .then(response => {

          console.log(response.data);
            
            this.games = response.data;
        })

        .catch(error => {
          console.log('error', error);
        })

    }
  }
}

</script>
