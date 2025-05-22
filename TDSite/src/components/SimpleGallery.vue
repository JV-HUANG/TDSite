<template>
    <!--  -->
    <v-container class="w-full grid grid-cols-4 justify-items-center-safe" :id="galleryID">
        <a class="my-2 border"
            v-for="(image, key) in imagesData" 
            :key="key" 
            :href="image.largeURL" 
            :data-pswp-width="image.width"
            :data-pswp-height="image.height" 
            target="_blank" 
            rel="noreferrer">
            <v-card variant="outlined" class="mx-2 my-2 px-4 py-4 gap-4">
            <img :src="image.thumbnailURL" alt="" />
            </v-card>
        </a>
    </v-container>
</template>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default {
    name: 'SimpleGallery',
    props: {
        galleryID: String,
        images: Array,
    },
    setup(props) {
        return {
            imagesData: props.images,
        };
    },
    mounted() {
        if (!this.lightbox) {
            this.lightbox = new PhotoSwipeLightbox({
                gallery: '#' + this.$props.galleryID,
                children: 'a',
                pswpModule: () => import('photoswipe'),
            });
            this.lightbox.init();
        }
    },
    unmounted() {
        if (this.lightbox) {
            this.lightbox.destroy();
            this.lightbox = null;
        }
    },
    methods: {},
};
</script>