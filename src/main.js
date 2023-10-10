import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from './plugins/font-awesome'
import axios from 'axios'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const token = localStorage.getItem('token')
axios.defaults.baseURL = 'http://localhost:8080/'
axios.defaults.headers.common = { Authorization: `bearer ${token}` }

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(store)
app.use(VueSweetalert2)

app.mount('#app')
