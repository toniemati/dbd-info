import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Perks from '../views/Perks.vue';
import PerkDetails from '../views/PerkDetails.vue';
import Survivors from '../views/Survivors.vue';
import Killers from '../views/Killers.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/perks',
    name: 'Perks',
    component: Perks
  },
  {
    path: '/perks/:name',
    name: 'PerkDetails',
    component: PerkDetails
  },
  {
    path: '/survivors',
    name: 'Survivors',
    component: Survivors
  },
  {
    path: '/killers',
    name: 'Killers',
    component: Killers
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
