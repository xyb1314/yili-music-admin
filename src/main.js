import { createApp } from 'vue'
import { Quasar } from 'quasar'
import store from './store'
import './permission.js'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import App from './App.vue'
import router from './router/index.js'
const myApp = createApp(App)

myApp.use(router)
myApp.use(store)

myApp.use(Quasar, {
  plugins: {} // import   Quasar plugins
})

myApp.mount('#app')
