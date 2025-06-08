<template>
  <div class="mx-auto grid grid-cols-4 gap-4 mr-9">
    <v-card class="w-min my-2 px-2 py-2" variant="flat" 
      v-for="(img, idx) in imgs" :key="idx"  @click="() => onShowClick(idx)">
      <v-card-title class="text-subtitle-1">{{ img.title }}</v-card-title>
      <v-img :width="210" :src="img.src ? img.src : img" cover />
      <v-card-subtitle>天地玄黄 宇宙洪荒 日月盈昃</v-card-subtitle>
      <v-card-actions>
        <v-btn prepend-icon="mdi-eye" text="浏览图片" block></v-btn>
      </v-card-actions>
    </v-card>
  </div>
  <vue-easy-lightbox :visible="visibleRef" :index="imgIndexRef" :imgs="imgs" @hide="onHideClick">
    <template v-slot:prev-btn="{ prev }">
      <div class="absolute inset-y-0 left-0 flex justify-center items-center">
        <v-btn size="x-large" prepend-icon="mdi-chevron-left" 
         variant="tonal" class="rounded-0" title="上一张" @click="prev"></v-btn>
      </div>
    </template>

    <template v-slot:next-btn="{ next }">
      <div class="absolute inset-y-0 right-0 flex justify-center items-center">
        <v-btn size="x-large" prepend-icon="mdi-chevron-right"
         variant="tonal" class="rounded-0" title="下一张" @click="next"></v-btn>
      </div>
    </template>

    <template v-slot:close-btn="{ close }">
      <div class="absolute top-0 right-0 justify-center items-center">
        <v-btn size="large" prepend-icon="mdi-close-circle-outline"
         variant="tonal" class="rounded-0" title="关闭" @click="close">
        </v-btn>
      </div>
    </template>

    <template v-slot:toolbar="{ toolbarMethods }">
      <div class="absolute inset-x-0 bottom-0 flex justify-center items-center">
        <v-btn size="x-large" prepend-icon="mdi-magnify-plus-outline"
         variant="tonal" class="rounded-0" @click="toolbarMethods.zoomIn">放大</v-btn>
        <v-btn size="x-large" prepend-icon="mdi-magnify-minus-outline"
         variant="tonal" class="rounded-0" @click="toolbarMethods.zoomOut">缩小</v-btn>
        <v-btn size="x-large" prepend-icon="mdi-reply-outline"
         variant="tonal" class="rounded-0" @click="toolbarMethods.rotateLeft">逆转</v-btn>
        <v-btn size="x-large" prepend-icon="mdi-share-outline"
         variant="tonal" class="rounded-0" @click="toolbarMethods.rotateRight">顺转</v-btn>
      </div>
    </template>  
  </vue-easy-lightbox>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

export default defineComponent({
  components: {
    VueEasyLightbox
  },
  setup() {
    const imgIndexRef = ref(0)
    const visibleRef = ref(false)
    const imgs = [
      {
        title:"THERE IS ONE TITLE",
        src: 'https://picsum.photos/id/11/1270/952'
      },
      {
        title:"THERE IS TWO TITLE",
        src: 'https://picsum.photos/id/12/1270/952'
      },
      {
        title:"THERE IS THREE TITLE",
        src: 'https://picsum.photos/id/13/1270/952'
      },
      {
        title:"THERE IS FOUR TITLE",
        src: 'https://picsum.photos/id/14/1270/952'
      },
      {
        title:"THERE IS FIVE TITLE",
        src: 'https://picsum.photos/id/15/1270/952'
      },
      {
        title:"THERE IS SIX TITLE",
        src: 'https://picsum.photos/id/16/1270/952'
      },
      {
        title:"THERE IS SEVEN TITLE",
        src: 'https://picsum.photos/id/17/1270/952'
      },
      {
        title:"THERE IS EIGHT TITLE",
        src: 'https://picsum.photos/id/18/1270/952'
      },
      {
        title:"THERE IS NINE TITLE",
        src: 'https://picsum.photos/id/19/1270/952'
      },
      {
        title:"THERE IS NINE TITLE",
        src: 'https://picsum.photos/id/20/1270/952'
      },
      {
        title:"THERE IS NINE TITLE",
        src: 'https://picsum.photos/id/21/1270/952'
      },
      {
        title:"THERE IS NINE TITLE",
        src: 'https://picsum.photos/id/22/1270/952'
      }
    ]

    const onShowClick = (index) => {
      imgIndexRef.value = index
      visibleRef.value = true
    }
    const onHideClick = () => {
      visibleRef.value = false
    }

    onMounted(() => {})

    return {
      imgIndexRef,
      visibleRef,
      imgs,
      onShowClick,
      onHideClick
    }
  }
})
</script>
