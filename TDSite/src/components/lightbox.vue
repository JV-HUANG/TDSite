<template>

  <v-breadcrumbs class="my-0 mx-2 px-0 py-0" :items="breadcrumbs">
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"></v-icon>
    </template>
  </v-breadcrumbs>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-sheet rounded="lg">
          <v-list rounded="lg">
            <v-list-item v-for="n in 5" :key="n" :title="`List Item ${n}`" link></v-list-item>
            <v-divider class="my-2"></v-divider>
            <v-list-item color="grey-lighten-4" title="Refresh" link></v-list-item>
          </v-list>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet rounded="lg" min-height="70vh">
          <!--  -->
          <div class="homepage-demo">
            <div class="gallery">
              <div v-for="(img, idx) in imgs" :key="idx" class="pic" @click="() => onShowClick(idx)">
                <img :src="img.src ? img.src : img" />
              </div>
            </div>
            <vue-easy-lightbox :visible="visibleRef" :index="imgIndexRef" :imgs="imgs" @hide="onHideClick"/>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
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
        title: "img's url: https://i.loli.net/2018/11/10/5be6852cdb002.jpeg",
        src: ' https://i.loli.net/2018/11/10/5be6852cdb002.jpeg'
      },
      {
        title: "There is img's description",
        src: 'https://i.loli.net/2018/11/10/5be6852ce6965.jpeg'
      },
      'https://i.loli.net/2018/11/10/5be6852dec46e.jpeg'
    ]

    const onShowClick = (index) => {
      imgIndexRef.value = index
      visibleRef.value = true
    }
    const onHideClick = () => {
      visibleRef.value = false
    }

    ////////////////////////////////////
    const breadcrumbs = [
      {
        title: 'HOME',
        disabled: false,
        href: '/',
      },
      {
        title: 'LIGHTBOX',
        disabled: false,
        href: '/lightbox',
      },
      {
        title: 'MORE',
        disabled: true,
        href: '#',
      },
    ]
    /////////////////////////////////////
    onMounted(() => {})

    return {
      imgIndexRef,
      visibleRef,
      imgs,
      onShowClick,
      onHideClick,
      breadcrumbs
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
    margin: 4px;

    img {
      height: 100px;
      width: 100px;
      object-fit: cover;

      @media screen and (min-width: 800px) {
        height: 200px;
        width: 200px;
      }
    }
  }
}
</style>
