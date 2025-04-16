import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import './assets/index.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar, faSortDown, faFilter } from '@fortawesome/free-solid-svg-icons'

library.add(faStar, faSortDown, faFilter)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
