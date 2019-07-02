import Vue from 'vue';
import Router from 'vue-router';
import Pets from '@/components/Pets';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pets',
      component: Pets,
    },
  ],
});
