import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import LocalComponent from '../packages'

import '../styles/index.scss'
import App from './App.vue'

const app = createApp(App)
app
  .use(ElementPlus, { size: 'small' })
  // .use(LocalComponent)
  .mount('#app')
