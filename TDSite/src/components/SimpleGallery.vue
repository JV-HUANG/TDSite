<template>
    <div class="w-full grid grid-cols-5 gap-4" :id="galleryID">
        <a class="border-green-400 border-4 px-2 py-2 self-center" v-for="(image, key) in imagesData" :key="key" :href="image.largeURL" :data-pswp-width="image.width"
            :data-pswp-height="image.height" target="_blank" rel="noreferrer">
            <img :src="image.thumbnailURL" alt="" />
        </a>
    </div>
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