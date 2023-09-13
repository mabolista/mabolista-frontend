import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import EventsView from '../views/EventsView.vue'
import ContactView from '../views/ContactView.vue'
import LoginPage from '../views/auth/LoginPage.vue'
import RegisterPage from '../views/auth/RegisterPage.vue'
import HomeAuthView from '../views/HomeAuthView.vue'
import ProfilePage from '../views/users/ProfilePage.vue'
import DashboardPage from '../views/admin/DashboardPage.vue'
import EventsPage from '../views/admin/EventsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: RegisterPage
    },
    {
      path: '/home',
      name: 'homeauth',
      component: HomeAuthView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage
    },
    {
      path: '/eventslist',
      name: 'eventslist',
      component: EventsPage
    }
  ]
})

export default router
