// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // 引入默认样式
import '@mdi/font/css/materialdesignicons.css' // 引入 Material Design Icons 的 CSS
// Default theme. ~960B
import '@vime/core/themes/default.css';
// Optional light theme (extends default). ~400B
import '@vime/core/themes/light.css';

const vuetify = createVuetify({ 
  components, 
  directives,
  ssr: true,
  theme: {
    defaultTheme: 'dark'
  },
 })

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.use(vuetify)
  }
} satisfies Theme
