import { createApp } from 'vue'
import App from './App.vue'
// import 'popper/dist/'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.scss'
import store from './store'

createApp(App).provide('store', store).mount('#app')
