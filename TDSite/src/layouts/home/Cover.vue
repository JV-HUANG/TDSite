<template>
    <v-card variant="tonal" class="rounded-0 border-dark-2">
        <v-carousel height="300" hide-delimiters>
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
            </v-carousel-item>
        </v-carousel>
    </v-card>
    <v-card variant="tonal" class="rounded-0 px-2 py-1">
        <v-tabs v-model="tab" align-tabs="end">
            <v-divider></v-divider>
            <v-tab prepend-icon="mdi-folder-multiple-plus-outline" :value="1">选项一</v-tab>
            <v-tab prepend-icon="mdi-folder-multiple-plus-outline" :value="2">选项二</v-tab>
            <v-tab prepend-icon="mdi-folder-multiple-plus-outline" :value="3">选项三</v-tab>
        </v-tabs>
        <v-tabs-window v-model="tab" class="py-1">
            <v-tabs-window-item v-for="n in 3" :key="n" :value="n">
                <v-card variant="text">
                    <v-row>
                        <v-col v-for="i in 6" :key="i" cols="12" md="4">
                            <a :href="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`" target="_blank">
                            <v-img :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`" height="205"
                                cover>
                            </v-img>
                            </a>
                        </v-col>
                    </v-row>
                </v-card>
            </v-tabs-window-item>
        </v-tabs-window>
    </v-card>
</template>
<script setup>
import { ref } from 'vue'

const length = ref(3)
const onboarding = ref(0)
const items = [
    { src: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/1.png', },
    { src: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/2.png', },
    { src: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/3.png', },
    { src: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/4.png', },
    { src: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/5.png', },
    { src: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/6.png', },
    { src: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/7.png', },
]
const tab = ref(null)
</script>