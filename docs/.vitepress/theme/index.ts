import DefaultTheme from 'vitepress/theme'
import './global.scss' 

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import LocalComponent from '../../../packages'
import '../../../styles/index.scss'


export default {
  extends: DefaultTheme, // or ...DefaultTheme
  enhanceApp ({ app }) {
    app.use(ElementPlus)
    app.use(LocalComponent)
  }
}
