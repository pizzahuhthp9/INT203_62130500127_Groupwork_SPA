import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EditTodo from '../views/EditTodo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:id',
    name: "Edit",
    component: EditTodo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
