<script>
import LIGHTBOX from './lightbox.vue'
import GALLERY from './SimpleGallery.vue'
import NotFound from './video.vue'

const routes = {
  '/lightbox': LIGHTBOX,
  '/gallery': GALLERY
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/lightbox'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script>

<template>
  <a href="#/lightbox">LIGHTBOX</a> |
  <a href="#/gallery">GALLERY</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView" />
</template>