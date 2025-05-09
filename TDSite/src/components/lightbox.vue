<template>
<v-btn variant="tonal" @click="showMultiple">Show a group of pictures.</v-btn>
<hr />
<v-row class="flex w-auto justify-center">
    <v-col v-for="(src, index) in imgsRef" 
        :key="index"
        @click="() => showImg(index)">
        <img class="w-45" :src="src" />
    </v-col>
</v-row>
<vue-easy-lightbox 
    :visible="visibleRef" 
    :imgs="imgsRef" 
    :index="indexRef" 
    @hide="onHide">
</vue-easy-lightbox>
<!-- <v-row>
    <v-col v-for="n in 12" :key="n" cols="3">
        <img class="w-12" :src="'https://picsum.photos/468/468?random='+n" />
    </v-col>
</v-row> -->
</template>
<script>
//
// 如果 VueApp 已经通过 VueEasyLightbox 注册过了，那么这里就不需要再次注册了
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref, defineComponent } from 'vue'

export default defineComponent({
    components: {
        VueEasyLightbox
    },
    setup() {
        const visibleRef = ref(false)
        const indexRef = ref(0) // default 0
        const imgsRef = ref([])

        const onShow = () => {
            visibleRef.value = true
        }
        const showMultiple = () => {
            imgsRef.value = [
                'https://picsum.photos/468/468?random=1',
                'https://picsum.photos/468/468?random=2',
                'https://picsum.photos/468/468?random=3',
                'https://picsum.photos/468/468?random=4',
                'https://picsum.photos/468/468?random=5',
                'https://picsum.photos/468/468?random=6',
                'https://picsum.photos/468/468?random=7',
                'https://picsum.photos/468/468?random=8',
                'https://picsum.photos/468/468?random=9'
            ]
            indexRef.value = 0 // index of imgList
            onShow()
        }
        
        const showImg = (index) => {
            indexRef.value = index
            visibleRef.value = true
          }

        const onHide = () => (visibleRef.value = false)

        return {
            visibleRef,
            indexRef,
            imgsRef,
            showImg,
            showMultiple,
            onHide
        }
    }
})
</script>