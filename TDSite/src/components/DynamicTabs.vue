<template>
  <v-card class="mr-9 my-2">
    <v-toolbar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>PAGE TITLE</v-toolbar-title>
      <v-btn icon="mdi-tab-minus" :disabled="!length" @click="length--"></v-btn>
      <v-btn icon="mdi-tab-plus" @click="length++"></v-btn>
      <v-btn icon="mdi-magnify"></v-btn>
      <v-btn icon="mdi-dots-vertical"></v-btn>
      <template v-slot:extension>
        <v-tabs slider-color="teal-lighten-3" show-arrows v-model="model" align-tabs="center">
          <v-tab v-for="i in length" :key="i" :text="`Item ${i}`" :value="i"></v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-window v-model="model">
      <v-tabs-window-item v-for="i in length" :key="i" :value="i">
        <v-card variant="elevated">
          <v-card-text>
            <v-container fluid>
              <h2>{{i}} - {{ text }}</h2>
              <br />
              <v-row dense>
                <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                  <v-card variant="plain">
                    <v-img :src="card.src" class="align-end" height="300" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" cover>
                      <v-card-title class="text-white" v-text="card.title"></v-card-title>
                    </v-img>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn variant="text" icon="mdi-heart" size="small"></v-btn>
                      <v-btn variant="text" icon="mdi-bookmark" size="small"></v-btn>
                      <v-btn variant="text" icon="mdi-share-variant" size="small"></v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>
<script setup>
  import { ref } from 'vue'
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  const model = ref('tab-2')

  const length = ref(9)

  const cards = [
    { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
    { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
    { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
    { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
    { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
    { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
  ]
</script>