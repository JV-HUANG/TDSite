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
<div class="flex w-full">
  <div class="w-auto flex-none" v-if="leftBar">
    <v-card variant="text" class="h-full mx-auto rounded-0" elevation="16">
      <v-toolbar>
        <v-toolbar-title text="Toolbar"></v-toolbar-title>
        <v-btn icon="mdi-arrow-left-box" @click="leftBar = false"></v-btn>
      </v-toolbar>
      <v-card-text>
        <v-list-item link title="List Item 1"></v-list-item>
        <v-list-item link title="List Item 2"></v-list-item>
        <v-list-item link title="List Item 3"></v-list-item>
        <v-list-item link title="List Item 4"></v-list-item>
        <v-list-item link title="List Item 5"></v-list-item>
        <v-list-item link title="List Item 6"></v-list-item>
      </v-card-text>
    </v-card>
  </div>
  <div class="w-min flex-none grid content-start justify-center text-center" v-else>
      <v-toolbar>
        <v-btn icon="mdi-arrow-right-box" @click="leftBar = !leftBar" size="small"></v-btn>
      </v-toolbar>
      <div class="h-full rounded-0 my-2" elevation="16">
        <v-btn icon="mdi-alert-circle-outline" size="small"></v-btn>
        <v-btn icon="mdi-alert-circle-outline" size="small"></v-btn>
        <v-btn icon="mdi-alert-circle-outline" size="small"></v-btn>
      </div>
  </div>
  <div class="w-full">
    <v-card variant="text" class="h-full mx-auto rounded-0" elevation="16">
    <v-toolbar>
      <v-btn icon="mdi-menu"></v-btn>
      <v-toolbar-title text="Toolbar"></v-toolbar-title>
      <v-menu location="start">
        <template v-slot:activator="{ props: menu }">
          <v-tooltip location="right">
            <template v-slot:activator="{ props: tooltip }">
              <v-btn icon="mdi-list-box" variant="plain" v-bind="mergeProps(menu, tooltip)">
              </v-btn>
            </template>
            <span>I'm A Tooltip</span>
          </v-tooltip>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" :value="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
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

import { mergeProps } from 'vue'
const items = [
  { title: 'Click Me 1' },
  { title: 'Click Me 2' },
  { title: 'Click Me 3' },
  { title: 'Click Me 4' },
]
</script>