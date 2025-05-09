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

<!-- # {{ $frontmatter.title }} -->
<COVER />
<hr />
<div class="flex w-full">
  <div class="w-auto flex-none" v-if="leftBar">
    <v-card variant="tonal" class="h-full mx-auto" elevation="16">
      <v-toolbar class="text-white" image="../../assets/img/bg.png">
        <v-btn icon="mdi-menu"></v-btn>
        <v-toolbar-title text="Toolbar"></v-toolbar-title>
        <v-btn icon="mdi-arrow-left-box" @click="leftBar = false"></v-btn>
      </v-toolbar>
      <v-card-item>
        <v-card-title>
          Vuetify 
        </v-card-title>
        <v-card-subtitle>
          Vue 组件框架示例
        </v-card-subtitle>
      </v-card-item>
      <v-card-text>
        .........
      </v-card-text>
      <v-card-subtitle>    
        设备的网站访问者数量
      </v-card-subtitle>
    </v-card>
  </div>
  <div class="w-min flex-none grid content-start justify-center text-center" v-else>
      <v-btn icon="mdi-arrow-right-box" variant="tonal" @click="leftBar = !leftBar" size="small"></v-btn>
      <hr />
      <v-btn icon="$vuetify" variant="tonal" size="small">
      </v-btn>
      <v-btn icon="$vuetify" variant="tonal" size="small">
      </v-btn>
      <v-btn icon="$vuetify" variant="tonal" size="small">
      </v-btn>
  </div>
  <div class="w-full">
    <v-card variant="plain" class="h-full mx-auto" elevation="16">
    <v-card-text>
      <v-btn @click="awesome = !awesome" variant="tonal" prepend-icon="mdi-button-cursor">
        MDI ICON Toggle Example
      </v-btn>
      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>
      <BaseLine />
    </v-card-text>
    </v-card>
  </div>
</div>


<script setup>
import COVER from './components/Cover.vue'
import BaseLine from './components/BaseLine.vue'

import { ref } from 'vue'
const leftBar = ref(true)
const awesome = ref(true)
</script>