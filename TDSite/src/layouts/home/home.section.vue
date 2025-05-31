<template>
  <div class="text-center">
    <v-btn class="my-2" size="x-large" @click="loading = !loading">
      切换加载状态
    </v-btn>
  </div>
  <v-card variant="elevated" elevation="16" class="w-full">
    <v-container>
      <v-row>
        <v-col v-for="{ src, title, subtitle } in cards" :key="title" cols="12" lg="4" md="6">
          <v-skeleton-loader :loading="loading" height="240" type="image, list-item-two-line">
            <v-responsive>
              <v-img :src="src" class="rounded-lg mb-2" height="184" cover></v-img>
              <v-list-item :subtitle="subtitle" :title="title" class="px-0"></v-list-item>
            </v-responsive>
          </v-skeleton-loader>
        </v-col>
      </v-row>
      <v-chip prepend-icon="mdi-check-circle" size="large" variant="text" border>
        <template v-slot:prepend>
          <v-icon color="disabled"></v-icon>
        </template>
        <span class="text-subtitle-1">
          自制焦糖酱冰淇淋配巧克力碎
        </span>
      </v-chip>
    </v-container>
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

const loading = ref(true)
</script>