import { createApp } from 'vue'

import router from './router'
import { i18n, vantLocales } from './locale'
import App from './App.vue'
import SetVantPlugins from './plugins/vant' // vant按需引入
import "./assets/css/index.css"



vantLocales('zh')
createApp(App).use(router).use(SetVantPlugins).use(i18n).mount('#app')
