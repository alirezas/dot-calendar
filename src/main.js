import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import toPersianNum from './utils/toPersianNumber'

const app = createApp(App)

app.config.globalProperties.$filters = {
  toPersianNum
}

app.mount('#app')
