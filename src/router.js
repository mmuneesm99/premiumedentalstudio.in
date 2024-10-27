import { createRouter, createWebHashHistory } from 'vue-router';

// Lazy load components
const Home = () => import('./pages/Home.vue');
const DepartmentPage = () => import('./pages/DepartmentPage.vue');
// const NotFound = () => import('./pages/NotFound.vue'); 

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/department/:name',
    name: 'Department',
    component: DepartmentPage,
    props: true, // Pass route params as props
  },
//   { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound }, 
];

const router = createRouter({
  history: createWebHashHistory(), // Use hash-based history
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash, // Use el instead of selector for Vue Router 4
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  }
});

export default router;
