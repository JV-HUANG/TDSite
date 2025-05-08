import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of 
import 'font-awesome/css/font-awesome.min.css' // Ensure your project is capable of handling css files
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { aliases, fa } from 'vuetify/iconsets/fa4'
import { aliases, md } from 'vuetify/iconsets/md'
import 'vuetify/styles'


export default defineConfig((app) => {
    const vuetify = createVuetify({
      // ... your configuration
      ssr: true,
      icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,fa,md,
        },
      },
      theme: {
          defaultTheme: 'dark'
        },
      plugins: [vuetify({ autoImport: true })]
    })
    app.vueApp.use(vuetify)
})