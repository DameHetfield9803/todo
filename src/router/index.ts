import { createRouter, createWebHistory } from 'vue-router'
import "../assets/global.css"
import HomeView from '../views/HomeView.vue'
import Todo from "@/views/todo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    }
  ]
})

export default router
