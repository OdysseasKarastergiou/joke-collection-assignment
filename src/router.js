import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import JokeCollection from './components/JokeCollection.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/collection', component: JokeCollection }
  ]
});