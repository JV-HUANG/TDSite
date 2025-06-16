<template>
    <v-container class="columns-4 gap-4 pr-8" :id="galleryID">
        <a v-for="(image, key) in imagesData" 
            :key="key" 
            :href="image.largeURL" 
            :data-pswp-width="image.width"
            :data-pswp-height="image.height" 
            target="_blank" 
            rel="noreferrer">
            <v-card variant="text" class="mx-auto rounded-0 py-4 px-4 gap-4 w-100" link>
                <img class="w-full" :src="image.thumbnailURL" :title="image.largeURL" />
                <v-card-title class="text-subtitle-2 bg-blue-grey-darken-4">
                    {{ image.width }} x {{ image.height }}
                </v-card-title>
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