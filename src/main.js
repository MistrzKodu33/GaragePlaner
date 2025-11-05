import './assets/main.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueKonva from 'vue-konva';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueKonva);

app.mount('#app')
