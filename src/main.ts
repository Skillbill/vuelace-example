import { createApp } from 'vue'

import '@skillbill/vuelace-3/styles/vuelace.css'
import '@skillbill/vuelace-3/styles/theme_primevue.css'
import { installVuelace } from '@skillbill/vuelace-3'
import cat from '@mdi/svg/svg/cat.svg'
import { addIcon } from '@skillbill/vuelace-3'

import App from './App.vue'

const app = createApp(App)

installVuelace(app)

addIcon('cat', cat)
app.mount('#app')
