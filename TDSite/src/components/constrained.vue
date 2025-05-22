<template>
  <v-container>
    <v-row class="flex-nowrap bg-grey-darken-4" no-gutters>
      <v-col class="flex-grow-0 flex-shrink-0" cols="3" v-if="leftBar">
        <v-list>
          <v-list-item prepend-avatar="./assets/img/logo.png" subtitle="jianwe@live.com" title="JV HUANG">
            <template v-slot:append>
              <v-btn icon="mdi-menu-down" size="small" variant="text"></v-btn>
            </template>
          </v-list-item>
        </v-list>
        <v-list :lines="false" density="compact" nav>
          <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="green">
            <template v-slot:prepend>
              <v-icon :icon="item.icon" size="small"></v-icon>
            </template>
            <a :href="item.href">
              <v-list-item-title v-text="item.text">
              </v-list-item-title>
            </a>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col class="flex-grow-1 flex-shrink-0" cols="1" style="min-width: 100px; max-width: 100%;">
        <!--  -->
        <v-toolbar>
          <template v-slot:prepend>
            <v-btn icon="mdi-dock-left" @click="leftBar = !leftBar"></v-btn>
            <v-breadcrumbs class="my-2 mx-2 px-0 py-0" :items="breadcrumbs">
              <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
              </template>
              {{ currentPath }}
            </v-breadcrumbs>
          </template>
          <v-btn class="ms-5" icon="mdi-archive-plus-outline"></v-btn>
          <v-btn icon="mdi-alert-circle-outline"></v-btn>
          <v-btn icon="mdi-delete-outline"></v-btn>
          <template v-if="$vuetify.display.smAndUp">
            <v-divider class="mx-3 align-self-center" length="24" thickness="2" vertical></v-divider>
            <v-btn icon="mdi-folder-outline"></v-btn>
            <v-btn icon="mdi-tag-outline"></v-btn>
            <v-btn icon="mdi-dots-vertical"></v-btn>
          </template>
        </v-toolbar>
        <component :is="currentView" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref } from 'vue'
const leftBar = ref(true)

const items = [
  { text: 'INDEX', icon: 'mdi-home', href: '#/demo' },
  { text: 'LIGHTBOX', icon: 'mdi-folder', href: '#/lightbox' },
  { text: 'BASELINE', icon: 'mdi-account-multiple', href: '#/baseline' },
  { text: 'BARCHART', icon: 'mdi-star', href: '#/barchart' },
  { text: 'AREACHART', icon: 'mdi-history', href: '#/areachart' },
  { text: 'Offline', icon: 'mdi-check-circle' },
  { text: 'Uploads', icon: 'mdi-upload' },
  { text: 'Backups', icon: 'mdi-cloud-upload' },
]

const breadcrumbs = [
  {
    title: 'HOME',
    disabled: false,
    href: '/',
  },
  {
    title: 'constrained',
    disabled: false,
    href: '/constrained',
  },
]



</script>

<script>
import DEMO from './demo.vue'
import LIGHTBOX from './lightbox.vue'
import BASELINE from './BaseLine.vue'
import BARCHART from './BarChart.vue'
import AREACHART from './AreaChart.vue'
import NotFound from './video.vue'

const routes = {
  '/demo': DEMO,
  '/lightbox': LIGHTBOX,
  '/baseline': BASELINE,
  '/barchart': BARCHART,
  '/areachart': AREACHART
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/demo'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}
</script>
