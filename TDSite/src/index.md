---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: 哎呦哎呦！呦！
hero:
  name: "哎呦土豆"
  text: "天地玄黄  宇宙洪荒"
  tagline: "日月盈昃 辰宿列张 寒来暑往 秋收冬藏 闰余成岁 律吕调阳 云腾致雨 露结为霜 金生丽水 玉出昆冈 剑号巨阙 珠称夜光 果珍李柰 菜重芥姜 海咸河淡 鳞潜羽翔 龙师火帝 鸟官人皇 始制文字 乃服衣裳......"
  image:
    src: /assets/img/logo.svg
    alt: 21TD.COM
---
# {{ $frontmatter.title }}

<COVER />

<LayoutSection />

<script setup>
import COVER from './layouts/home/Cover.vue'
import LayoutSection from './layouts/home/home.section.vue'

import { ref } from 'vue'
const awesome = ref(true)

const show = ref(false)
</script>