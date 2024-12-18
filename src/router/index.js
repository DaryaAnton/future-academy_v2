import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeViews from '@/views/HomeViews.vue';
import CoursesViews from '@/views/CoursesViews.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomeViews },
  { path: '/courses', component: CoursesViews }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router