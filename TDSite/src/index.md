---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: 哎呦哎呦！呦！
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
  <v-btn size="x-large" @click="awesome = !awesome" variant="text" prepend-icon="mdi-button-cursor">
    天地玄黄  宇宙洪荒  日月盈昃  辰宿列张
  </v-btn>
  <h1 v-if="awesome">寒来暑往 秋收冬藏 闰余成岁 律吕调阳 云腾致雨 露结为霜!</h1>
  <h1 v-else>
    	<vue-plyr>
        <v-card color="grey-darken-4" class="w-80 h-45" 
        image="./assets/img/bg.png">
        <audio controls crossorigin playsinline class="w-full h-full">
          <source src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3"
            type="audio/mp3" />
          <source src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg"
            type="audio/ogg" />
        </audio>
        </v-card>
      </vue-plyr>
  </h1>
</center>
<hr />
<div class="grid grid-cols-4 gap-4">
<v-card hover class="mx-auto" variant="outlined" subtitle="The #1 Vue UI Library">
  <template v-slot:title>
    <span class="font-weight-black" style="font-size: 1.2rem">天地玄黄</span>
  </template>
  <v-card-text>
    寒来暑往 秋收冬藏 闰余成岁 律吕调阳 云腾致雨 露结为霜 金生丽水 玉出昆冈 剑号巨阙 珠称夜光 果珍李柰 菜重芥姜 海咸河淡 鳞潜羽翔......
  </v-card-text>
</v-card>
<v-card hover class="mx-auto" variant="outlined" subtitle="The #1 Vue UI Library">
  <template v-slot:title>
    <span class="font-weight-black" style="font-size: 1.2rem">宇宙洪荒</span>
  </template>
  <v-card-text>
    寒来暑往 秋收冬藏 闰余成岁 律吕调阳 云腾致雨 露结为霜 金生丽水 玉出昆冈 剑号巨阙 珠称夜光 果珍李柰 菜重芥姜 海咸河淡 鳞潜羽翔......
  </v-card-text>
</v-card>
<v-card hover class="mx-auto" variant="outlined" subtitle="The #1 Vue UI Library">
  <template v-slot:title>
    <span class="font-weight-black" style="font-size: 1.2rem">日月盈昃</span>
  </template>
  <v-card-text>
    寒来暑往 秋收冬藏 闰余成岁 律吕调阳 云腾致雨 露结为霜 金生丽水 玉出昆冈 剑号巨阙 珠称夜光 果珍李柰 菜重芥姜 海咸河淡 鳞潜羽翔......
  </v-card-text>
</v-card>
<v-card hover class="mx-auto" variant="outlined" subtitle="The #1 Vue UI Library">
  <template v-slot:title>
    <span class="font-weight-black" style="font-size: 1.2rem">辰宿列张</span>
  </template>
  <v-card-text>
    寒来暑往 秋收冬藏 闰余成岁 律吕调阳 云腾致雨 露结为霜 金生丽水 玉出昆冈 剑号巨阙 珠称夜光 果珍李柰 菜重芥姜 海咸河淡 鳞潜羽翔......
  </v-card-text>
</v-card>
</div>


<script setup>
import COVER from './components/Cover.vue'

import { ref } from 'vue'
const awesome = ref(true)

</script>