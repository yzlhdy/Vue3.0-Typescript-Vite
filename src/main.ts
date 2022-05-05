import { createApp } from 'vue'

import router from './router'
import { i18n } from './locales'
import App from './App.vue'
import SetVantPlugins from './plugins/vant' // vant按需引入
import "./assets/css/index.css"

import store from './store'



createApp(App).use(router).use(SetVantPlugins).use(i18n).use(store).mount('#app')
