import { createWebHistory, createRouter } from "vue-router"
import ContactPage from "../components/ContactPage.vue"
import VideoGames from "../components/VideoGames.vue"

const routes = [
    { path: '/Contact', component: ContactPage },
    { path: '/VideoGames', component: VideoGames },
  ]
  
  
  const router = createRouter({
   
    history: createWebHistory(),
    routes: routes,
  
  })

  export default router;