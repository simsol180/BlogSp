import { RouteRecordRaw } from 'vue-router'

import TopicSummaryPage from './topics/summary-page.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: TopicSummaryPage
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ './views/AboutView.vue')
  // }
]
console.dir(routes)

export default routes;
