<template>
  <v-breadcrumbs class="my-2 mx-2 px-0 py-0" :items="breadcrumbs">
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"></v-icon>
    </template>
  </v-breadcrumbs>
  
  <v-container>
    <v-row class="d-flex mb-6 bg-grey-darken-4">
      <v-col class="w-auto ma-2 pa-2" cols="12" md="3" v-if="leftBar">
        <v-list>
          <v-list-item prepend-avatar="./assets/img/logo.png" subtitle="jianwe@live.com" title="JV HUANG">
            <template v-slot:append>
              <v-btn icon="mdi-menu-down" size="small" variant="text"></v-btn>
            </template>
          </v-list-item>
        </v-list>
        <v-expansion-panels>
          <v-expansion-panel class="rounded-0" title="Title"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
          </v-expansion-panel>
        </v-expansion-panels>
        <v-list :lines="false" density="compact" nav>
          <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="green">
            <template v-slot:prepend>
              <v-icon :icon="item.icon" size="small"></v-icon>
            </template>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col class="w-auto ma-2 pa-2 align-self-auto">
        <!--  -->
        <v-toolbar>
          <template v-slot:prepend>
            <v-btn icon="mdi-dock-left" @click="leftBar = !leftBar"></v-btn>
          </template>
          <v-btn class="ms-5" icon="mdi-archive-plus-outline"></v-btn>
          <v-btn icon="mdi-alert-circle-outline"></v-btn>
          <v-btn icon="mdi-delete-outline"></v-btn>
          <template v-if="$vuetify.display.smAndUp">
            <v-divider class="mx-3 align-self-center" length="24" thickness="2" vertical>
            </v-divider>
            <v-btn icon="mdi-folder-outline"></v-btn>
            <v-btn icon="mdi-tag-outline"></v-btn>
            <v-btn icon="mdi-dots-vertical"></v-btn>
          </template>
        </v-toolbar>
        <v-card variant="tonal" class="mx-auto">
          <v-card-text>
              <v-container>
                <v-row justify="space-around">
                  <v-col v-for="elevation in elevations" :key="elevation" cols="12" md="4">
                    <v-sheet class="pa-9" color="grey-lighten-3">
                      <v-sheet :elevation="elevation" class="mx-auto" height="45" width="45"></v-sheet>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-container>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="ma-2 pa-2" cols="12" md="2">
        <v-card variant="tonal" class="self-auto mx-auto" prepend-icon="mdi-auto-fix" title="Card title">
          <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </v-card-text>
          <v-card-actions>
            <v-btn>Click me</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref } from 'vue'
const leftBar = ref(true)

const items = [
  { text: 'My Files', icon: 'mdi-folder' },
  { text: 'Shared with me', icon: 'mdi-account-multiple' },
  { text: 'Starred', icon: 'mdi-star' },
  { text: 'Recent', icon: 'mdi-history' },
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
    title: 'GALLERY',
    disabled: false,
    href: '/gallery',
  },
  {
    title: 'constrained',
    disabled: true,
    href: '/constrained',
  },
]


const elevations = [0, 4, 8, 12, 16, 20]

</script>