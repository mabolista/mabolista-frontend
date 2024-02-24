import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import AOS from 'aos'
import VueSweetalert2 from 'vue-sweetalert2'

import 'animate.css'
import 'aos/dist/aos.css'
import 'sweetalert2/dist/sweetalert2.min.css'

const token = localStorage.getItem('token')
axios.defaults.baseURL = 'https://staging-mabolista.vercel.app/api/'
axios.defaults.headers.common = { Authorization: `bearer ${token}` }

AOS.init()

const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueSweetalert2)

app.mount('#app')
