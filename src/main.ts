import { createApp } from 'vue'
import { ElBacktop, ElButton, ElDrawer, ElTag, ElTooltip } from 'element-plus'

import 'element-plus/es/components/base/style/css'
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/tag/style/css'
import 'element-plus/es/components/tooltip/style/css'
import 'element-plus/es/components/drawer/style/css'
import 'element-plus/es/components/backtop/style/css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import './styles/base.css'
import './styles/sections.css'
import App from './App.vue'
import { revealDirective } from './directives/reveal'

const app = createApp(App)

for (const component of [ElButton, ElTag, ElTooltip, ElDrawer, ElBacktop]) {
  app.use(component)
}

app.directive('reveal', revealDirective)
app.mount('#app')
