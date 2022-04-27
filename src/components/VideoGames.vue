<template>

    <div>

    <div class="flex flex-col bg-[#0e1a2b] p-3 mb-20">

      <h2 class="text-white text-2xl mb-10">Filter Results</h2>

      <div class="flex flex-col mb-3">
        <label class="text-white mb-1">Name (contains)</label>
        <input class="bg-[#182c47]">
      </div>

      <div class="flex flex-col mb-3">
        <label class="text-white mb-1">Minimum score</label>
        <input class="bg-[#182c47]">
      </div>


      <label class="text-white mb-1">Order By</label>
      <select>
        <option class="bg-[#182c47] text-white">Score</option>
        <option class="bg-[#182c47] text-white">Name</option>
      </select>

    </div>

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

            let yyyy = jsDate.getFullYear();
            let mm = jsDate.getMonth() + 1;
            let dd = jsDate.getDate();
            
            let displayedDate = dd + '/' + mm + '/' + yyyy

            game.first_release_date = displayedDate;

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
