import { createMemoryHistory, createRouter } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import HelloWorld from '../components/HelloWorld.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Page2View.vue');
    },
  },
  {
    path: '/hello',
    name: 'hello',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HelloWorld,
  },
  {
    path: '/page-1',
    name: 'page1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Page1View.vue');
    },
  },
  {
    path: '/page-2',
    name: 'page2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Page2View.vue');
    },
  },
];

const routing = (basename, routerStrategy) =>
  createRouter({
    history: routerStrategy || createMemoryHistory(basename),
    routes,
  });

export default routing;
