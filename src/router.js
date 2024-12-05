import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Explore from './views/Explore.vue';
import Dysfunction from './views/Dysfunction.vue';

const routes = [
  { path: '/', component: Home, name: 'home' },  // Ajout du name 'home' à la route d'accueil
  { path: '/explore', component: Explore, name: 'explore' },
  { path: '/dysfunction', component: Dysfunction, name: 'dysfunction' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
