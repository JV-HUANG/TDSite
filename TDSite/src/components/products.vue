<script setup>
import { ref, onMounted } from 'vue'

const products = ref([])

onMounted(async () => {
  try {
    const response = await fetch('https://dummyjson.com/products')
    if (!response.ok) throw new Error('网络响应异常')
    const data = await response.json()
    products.value = data.products
  } catch (error) {
    console.error('获取操作出现问题:', error)
  }
})
</script>

<template>
  <div v-if="products.length" class="grid grid-cols-4 gap-4 mr-9 my-4">
    <v-card variant="tonal" v-for="product in products" :key="product.id" class="px-2 py-2 my-4" link>
      <a :href="product.images" target="_blank">
        <v-card-title>{{ product.title }} </v-card-title>
        <v-img :src="product.thumbnail" :alt="product.title" height="150" cover/>
        <v-card-subtitle class="text-h4 font-weight-bold">
          <span class="text-h6">{{ product.id }}</span>.
          ￥{{ product.price }}
        </v-card-subtitle>
        <v-card-text>{{ product.description }} </v-card-text>
      </a>
    </v-card>
  </div>
  <div v-else>
    <h1>正在加载产品...</h1>
  </div>
</template>

