import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Explore from './views/Explore.vue';
import Dysfunction from './views/Dysfunction.vue';
import Benefits from './components/Benefits.vue';
import about from './views/about.vue';
import Mention from './views/Mention.vue';

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/explore', component: Explore, name: 'explore' },
  { path: '/dysfunction', component: Dysfunction, name: 'dysfunction' },
  { path: '/benefits', component: Benefits, name: 'benefits' },
  { path: '/about', component: about, name: 'about' },
  { path: '/mention', component: Mention, name: 'mention' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
