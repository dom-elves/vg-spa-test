import { createWebHistory, createRouter } from "vue-router"
import ContactPage from "../components/ContactPage.vue"
import VideoGames from "../components/VideoGames.vue"

const routes = [
    { path: '/', component: ContactPage },
    { path: '/about', component: VideoGames },
  ]
  
  
  const router = createRouter({
   
    history: createWebHistory(),
    routes,
  
  })

  export default router;