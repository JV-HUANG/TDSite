---
layout: home
hello: world
title: DEMO
---

<SimpleGallery galleryID="my-test-gallery" :images="images" />

<hr />
<center>
<v-btn prepend-icon="mdi-keyboard-backspace" href="/" variant="plain">
  BACK HOME
</v-btn>
</center>

<script>
import SimpleGallery from './components/SimpleGallery.vue';
export default {
  name: 'App',
  components: {
    SimpleGallery,
  },
  data() {
    return {
      images: [
        {
          largeURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
          thumbnailURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
          width: 1875, height: 2500,
        },
        {
          largeURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
          thumbnailURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
          width: 1669, height: 2500,
        },
        {
          largeURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
          thumbnailURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
          width: 2500, height: 1666,
        },
        {
          largeURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg',
          thumbnailURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg',
          width: 1875, height: 2500,
        },
        {
          largeURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg',
          thumbnailURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-200.jpg',
          width: 1669, height: 2500,
        },
        {
          largeURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-2500.jpg',
          thumbnailURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-200.jpg',
          width: 2500, height: 1666,
        },
      ],
    };
  },
};
</script>
