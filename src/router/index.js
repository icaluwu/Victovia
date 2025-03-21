import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Location from '../pages/Location.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/location', component: Location }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
