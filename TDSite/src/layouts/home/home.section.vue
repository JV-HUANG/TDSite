<template>
  <v-card variant="tonal" class="text-center rounded-0">
    <v-btn variant="text" prepend-icon="mdi-content-duplicate" size="x-large" class="mb-2" @click="loading = !loading">
      切换加载状态
    </v-btn>
  </v-card>
  <v-card variant="elevated" class="w-full px-2">
    <v-row>
      <v-col v-for="{ src, title, subtitle } in cards" :key="title" cols="12" lg="4" md="6">
        <v-skeleton-loader :loading="loading" height="240" type="image, list-item-two-line">
          <v-responsive>
            <a :href="src" target="_blank">
              <v-img :src="src" class="mb-2" height="150" cover></v-img>
            </a>
            <v-list-item :subtitle="subtitle" :title="title" class="px-4 py-4"></v-list-item>
            <v-card-actions>
              <v-btn prepend-icon="mdi-share-variant-outline" text="分享"></v-btn>
              <v-spacer></v-spacer>
              <v-btn prepend-icon="mdi-file-export-outline" text="浏览"></v-btn>
            </v-card-actions>
          </v-responsive>
        </v-skeleton-loader>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup>
import { ref } from 'vue'
const cards = [
  {
    title: '自制焦糖酱冰淇淋配巧克力碎',
    subtitle: '幸福美食',
    src: 'https://cdn.vuetifyjs.com/docs/images/graphics/dulce-ice-cream.png',
  },
  {
    title: '焦糖海盐漩涡冰淇淋',
    subtitle: '石头厨房',
    src: 'https://cdn.vuetifyjs.com/docs/images/graphics/salted-caramel-ice-cream.png',
  },
  {
    title: '花生酱免搅拌冰淇淋',
    subtitle: '甜蜜的一面',
    src: 'https://cdn.vuetifyjs.com/docs/images/graphics/peanut-butter-ice-cream.png',
  },
]

const loading = ref(false)
</script>