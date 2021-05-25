import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TreeView from '../views/TreeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/treeview/:id',
    name: 'TreeView',
    component: TreeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
