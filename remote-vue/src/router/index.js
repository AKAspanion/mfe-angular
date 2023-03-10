import { createMemoryHistory, createRouter } from 'vue-router';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/HomeView.vue');
    },
  },
  {
    path: '/page-1',
    name: 'page1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "page-1" */ '../views/Page1View.vue');
    },
  },
  {
    path: '/page-2',
    name: 'page2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "page-2" */ '../views/Page2View.vue');
    },
  },
  { path: '/:pathMatch(.*)', name: 'not-found', component: NotFound },
];

const routing = (basename, routerStrategy) => {
  const history = routerStrategy || createMemoryHistory(basename);

  return createRouter({
    history,
    routes,
  });
};

export default routing;
