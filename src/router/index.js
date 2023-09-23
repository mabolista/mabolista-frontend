import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/auth/LoginPage.vue'
import RegisterPage from '../views/auth/RegisterPage.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import EventsView from '../views/EventsView.vue'
import ContactView from '../views/ContactView.vue'
import ProfilePage from '../views/ProfilePage.vue'
import NytcSawangan from '../views/NytcSawangan.vue'
import HomeBase from '../views/HomeBase.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
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
      component: RegisterPage,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage,
      beforeEnter: (to, from, next) => {
        const isAuthenticated = localStorage.getItem('token');
        if (isAuthenticated) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/events/nytcsawangan',
      name: 'NytcSawangan',
      component: NytcSawangan,
    },
    {
      path: '/homebase',
      name: 'homebase',
      component: HomeBase,
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('token');
  if (to.name === 'login' && isLoggedIn) {
    next({ name: 'HomePage' });
  } else {
    next();
  }
});

export default router
