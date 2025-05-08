---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: HOME PAGES
hero:
  name: "哎呦土豆"
  text: "<h1>天地玄黄  宇宙洪荒  日月盈昃  辰宿列张</h1>"
  tagline: "站点在建中......"
  image:
    src: /assets/img/logo.png
    alt: 21TD.COM
  <!-- actions:
    - theme: alt
      text: LIGHTBOX
      link: /lightbox
      icon: mdi-button-cursor
    - theme: alt
      text: MEDIA
      link: /media
    - theme: brand
      text: CHARTS
      link: /charts -->
---

# {{ $frontmatter.title }}
<COVER />
## CHARTS EXAMPLES
<div class="flex w-full">
  <div class="w-60 flex-none">
    <v-card variant="tonal" class="h-full mx-auto" elevation="16">
      <v-card-item>
        <v-card-title>
          Vuetify 
        </v-card-title>
        <v-card-subtitle>
          Vue 组件框架示例
        </v-card-subtitle>
      </v-card-item>
      <v-card-text>
        <v-btn variant="tonal" prepend-icon="mdi-button-cursor">
          MDI ICON Example
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
  <div class="w-auto">
    <v-card variant="plain" class="h-full mx-auto" elevation="16">
      <v-card-item>
        <v-card-title>
          折线图
        </v-card-title>
        <v-card-subtitle>    
          设备的网站访问者数量
        </v-card-subtitle>
      </v-card-item>
      <v-card-text>
        <BaseLine />
      </v-card-text>
    </v-card>
  </div>
</div>


<script setup>
import COVER from './components/Cover.vue'
import BaseLine from './components/BaseLine.vue'
</script>