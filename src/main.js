import './assets/main.css'

import { createApp } from 'vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from './App.vue'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'


const app = createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)

app.use(router)
app.use(VueSweetalert2);

app.mount('#app')
