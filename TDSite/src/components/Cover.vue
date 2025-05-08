<template>
    <div class="flex flex-wrap-reverse">
        <div class="w-1/3">
            <v-card class="mx-auto" color="transparent" image="../../assets/img/bg.png"
                subtitle="VUE-CHARTS EXAMPLES..." title="图表示例">
                <v-card-actions>
                    <v-btn append-icon="mdi-chevron-right" color="green-darken-1" text="Learn More"
                     variant="text" @click="reveal = true" block></v-btn>
                </v-card-actions>
                <v-expand-transition>
                    <v-card v-if="reveal" class="position-absolute w-100" height="100%" style="bottom: 0;">
                        <v-card-text class="pb-0">
                            <p class="text-medium-emphasis text-center">
                                <v-btn href="/charts">CHARTS EXAMPLES</v-btn>
                            </p>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                            <v-btn color="teal-accent-4" text="Close" variant="text" @click="reveal = false" block></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-expand-transition>
            </v-card>
        </div>
        <div class="w-1/3 px-4">
            <v-card class="mx-auto" color="transparent" image="../../assets/img/bg.png"
                subtitle="PLYR VIDEO&AUDIO EXAMPLES" title="多媒体示例">
                <template v-slot:actions>
                    <v-btn href="/media" append-icon="mdi-chevron-right" color="green-darken-1" text="MEDIA"
                        variant="text" block></v-btn>
                </template>
            </v-card>
        </div>
        <div class="w-1/3">
            <v-card class="mx-auto" color="transparent" image="../../assets/img/bg.png"
                subtitle="LIGHTBOX GALLERY EXAMPLES" title="加载图库示例">
                <template v-slot:actions>
                    <v-btn href="/lightbox" append-icon="mdi-chevron-right" color="green-darken-1" text="LIGHTBOX"
                        variant="text" block></v-btn>
                </template>
            </v-card>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const reveal = ref(false)
</script>