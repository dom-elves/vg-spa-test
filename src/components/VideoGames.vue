<template>

  <div>

    <div v-if="this.loading == true">
      <p class="text-white">Loading...</p>
    </div>

    <div v-for="game in games" :key="game.id" class="bg-[#0e1a2b] mb-5"> 

        <div class="w-full h-[150px] bg-black p-3 flex justify-end">

          <div class="w-[40px] h-[40px] bg-[#5692e8] text-white flex justify-center items-center rounded-full">{{ game.rating }}
          </div>

        </div>

        <div class="p-3 h-[150px] overflow-y-hidden">

          <h1 class="text-white text-2xl">{{ game.name }}</h1>
          <p class="text-[#c1d1e8] mb-5">Release Date: {{ game.first_release_date }}</p>
          <p class="text-[#c1d1e8]">[Summary] {{ game.summary }}</p>

        </div>

    </div>
  </div>  
</template>

<script>

import axios from 'axios'

export default {

  name: 'VideoGames',

  data() {
      return {
          games: [],
          loading: true,
      }
  },

  mounted() {

      this.axiosRequest()

  },

  methods: {

    axiosRequest() {

      //initial request
      axios.get('https://public.connectnow.org.uk/applicant-test/')

        .then(response => {

          
          const data = response.data;
          console.log(data);
          //looping over data to make some changes
          data.forEach( game => {

            //parsing date to readable format
            let date = game.first_release_date;
            let jsDate = new Date(date);
        
            game.first_release_date = jsDate;

            //rounding rating 
            let rating = game.rating;
            let jsRating = Math.round(rating);

            game.rating = jsRating;

          })
            this.games = response.data;
        })

        .catch(error => {
          console.log('error', error);
        })
        .finally(() => this.loading = false);

    },
  }
}

</script>
