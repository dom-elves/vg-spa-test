<template>

    <div v-for="game in games" :key="game.id" class="p-5 bg-[#0e1a2b] mb-5"> 
        <h1 class="text-white text-2xl">{{ game.name }}</h1>
        <p class="text-[#c1d1e8] mb-5">Release Date: {{ game.first_release_date }}</p>
        <p class="text-[#c1d1e8]">[Summary] {{ game.summary }}</p>
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

    // this.convertDate()

  },

  methods: {

    axiosRequest() {
      
      axios.get('https://public.connectnow.org.uk/applicant-test/')

        .then(response => {

          // console.log(response.data);
          const data = response.data;
          console.log(data);

          data.forEach( game => {

            let date = game.first_release_date;
            let jsDate = new Date(date);
        
            game.first_release_date = jsDate;
            
          })
            this.games = response.data;
        })

        .catch(error => {
          console.log('error', error);
        })

    },
  }
}

</script>
