import { createRouter, createWebHistory } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import LoginPage from '../views/auth/LoginPage.vue'
import RegisterPage from '../views/auth/RegisterPage.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import EventsView from '../views/EventsView.vue'
import ContactView from '../views/ContactView.vue'
import ProfilePage from '../views/ProfilePage.vue'
import EventsDetails from '../views/EventsDetails.vue'
import HomeBase from '../views/HomeBase.vue'
import PageNotFound from '../views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound
    },
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
      component: RegisterPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage,
      beforeEnter: (to, from, next) => {
        const users = localStorage.getItem('token')
        if (users) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/events/eventsdetails/:id',
      name: 'EventsDetails',
      component: EventsDetails,
      beforeEnter: (to, from, next) => {
        const users = localStorage.getItem('token')
        if (users) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/homebase',
      name: 'homebase',
      component: HomeBase
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('token')
  if (to.name === 'login' && isLoggedIn) {
    next({ name: 'HomePage' })
  } else {
    AOS.init()
    next()
  }
})
export default router
