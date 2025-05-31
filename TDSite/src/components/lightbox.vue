<template>
  <div class="homepage-demo mr-9">
    <div class="mx-auto gallery">
      <v-card variant="flat" v-for="(img, idx) in imgs" :key="idx" class="pic"  @click="() => onShowClick(idx)">
        <v-card-title class="text-subtitle-1">{{ img.title }}</v-card-title>
        <v-img :height="90" :width="240" :aspect-ratio="16/9" :src="img.src ? img.src : img" cover />
        <v-card-subtitle>Lorem ipsum dolor!</v-card-subtitle>
        <v-card-actions>
          <v-btn prepend-icon="mdi-eye" text="Explore" block></v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <vue-easy-lightbox :visible="visibleRef" :index="imgIndexRef" :imgs="imgs" @hide="onHideClick"/>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

export default defineComponent({
  name: 'HomepageDemo',
  components: {
    VueEasyLightbox
  },
  setup() {
    const imgIndexRef = ref(0)
    const visibleRef = ref(false)
    const imgs = [
      {
        title:"THERE ONE TITLE...",
        src: 'https://picsum.photos/id/11/1270/952'
      },
      {
        title:"THERE TWO TITLE...",
        src: 'https://picsum.photos/id/12/1270/952'
      },
      {
        title:"THERE THREE TITLE...",
        src: 'https://picsum.photos/id/13/1270/952'
      },
      {
        title:"THERE FOUR TITLE...",
        src: 'https://picsum.photos/id/14/1270/952'
      },
      {
        title:"THERE FIVE TITLE...",
        src: 'https://picsum.photos/id/15/1270/952'
      },
      {
        title:"THERE SIX TITLE...",
        src: 'https://picsum.photos/id/16/1270/952'
      },
      {
        title:"THERE SEVEN TITLE...",
        src: 'https://picsum.photos/id/17/1270/952'
      },
      {
        title:"THERE EIGHT TITLE...",
        src: 'https://picsum.photos/id/18/1270/952'
      },
      {
        title:"THERE NINE TITLE...",
        src: 'https://picsum.photos/id/19/1270/952'
      },
      {
        title:"THERE NINE TITLE...",
        src: 'https://picsum.photos/id/20/1270/952'
      },
      {
        title:"THERE NINE TITLE...",
        src: 'https://picsum.photos/id/21/1270/952'
      },
      {
        title:"THERE NINE TITLE...",
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

<style scoped lang="scss">
.homepage-demo {
  :deep(img.vel-img) {
    max-width: 80vw;
    @media screen and (max-width: 750px) {
      max-width: 85vw;
    }
  }
  .gallery {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .pic {
    cursor: pointer;
    padding: 4px;
    margin:4px;

    img {
      object-fit: cover;

      @media screen and (min-width: 800px) {
        height: 200px;
        width: 200px;
      }
    }
  }
}
</style>
