---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: HOME PAGES
hero:
  name: "哎呦土豆"
  text: "<h1>天地玄黄  宇宙洪荒  日月盈昃  辰宿列张</h1>"
  tagline: "<h3>寒来暑往 秋收冬藏 闰余成岁 律吕调阳 云腾致雨 露结为霜 金生丽水 玉出昆冈 剑号巨阙 珠称夜光 果珍李柰 菜重芥姜 海咸河淡 鳞潜羽翔 龙师火帝 鸟官人皇 始制文字 乃服衣裳......</h3>"
  image:
    src: /assets/img/logo.svg
    alt: 21TD.COM
---

<h1># {{ $frontmatter.title }}</h1>
<COVER />
<hr />
<center>
  <v-btn @click="awesome = !awesome" variant="tonal" prepend-icon="mdi-button-cursor">
    MDI ICON EXAMPLE
  </v-btn>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
</center>
<hr />
<div class="grid grid-cols-4 gap-4">
<v-card class="mx-auto" variant="outlined" prepend-icon="$vuetify" subtitle="The #1 Vue UI Library">
  <template v-slot:title>
    <span class="font-weight-black" style="font-size: 1.2rem">Welcome to Vuetify</span>
  </template>
  <v-card-text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, 
    at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
  </v-card-text>
</v-card>
<v-card class="mx-auto" variant="outlined" prepend-icon="$vuetify" subtitle="The #1 Vue UI Library">
  <template v-slot:title>
    <span class="font-weight-black" style="font-size: 1.2rem">Welcome to Vuetify</span>
  </template>
  <v-card-text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, 
    at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
  </v-card-text>
</v-card>
<v-card class="mx-auto" variant="outlined" prepend-icon="$vuetify" subtitle="The #1 Vue UI Library">
  <template v-slot:title>
    <span class="font-weight-black" style="font-size: 1.2rem">Welcome to Vuetify</span>
  </template>
  <v-card-text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, 
    at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
  </v-card-text>
</v-card>
<v-card class="mx-auto" variant="outlined" prepend-icon="$vuetify" subtitle="The #1 Vue UI Library">
  <template v-slot:title>
    <span class="font-weight-black" style="font-size: 1.2rem">Welcome to Vuetify</span>
  </template>
  <v-card-text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, 
    at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
  </v-card-text>
</v-card>
</div>

<AreaChart />

<script setup>
import COVER from './components/Cover.vue'
import AreaChart from './components/AreaChart.vue'

import { ref } from 'vue'
const awesome = ref(true)

</script>