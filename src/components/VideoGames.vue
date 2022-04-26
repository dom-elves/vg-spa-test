<template>

    <div>

        <p>{{ games }}</p>

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
