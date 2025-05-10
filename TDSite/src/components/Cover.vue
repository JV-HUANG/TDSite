<template>
    <div class="flex flex-wrap-reverse">
        <div class="w-1/4">
            <v-card class="mx-auto" color="transparent" image="../../assets/img/bg.png"
                subtitle="VUE-CHARTS EXAMPLES..." title="图表示例">
                <v-card-actions>
                    <v-btn append-icon="mdi-chevron-right" color="green-darken-1" text="Learn More" variant="text"
                        @click="reveal = true" block></v-btn>
                </v-card-actions>
                <v-expand-transition>
                    <v-card v-if="reveal" class="position-absolute w-100" height="100%" style="bottom: 0;">
                        <v-card-text class="pb-0">
                            <p class="text-medium-emphasis text-center">
                                <v-btn href="/charts">CHARTS EXAMPLES</v-btn>
                            </p>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                            <v-btn color="teal-accent-4" text="Close" variant="text" @click="reveal = false"
                                block></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-expand-transition>
            </v-card>
        </div>
        <div class="w-1/4 px-4">
            <v-card class="mx-auto" color="transparent" image="../../assets/img/bg.png"
                subtitle="PLYR VIDEO&AUDIO EXAMPLES" title="多媒体示例">
                <template v-slot:actions>
                    <v-btn href="/media" append-icon="mdi-chevron-right" color="green-darken-1" text="MEDIA"
                        variant="text" block></v-btn>
                </template>
            </v-card>
        </div>
        <div class="w-1/4">
            <v-card class="mx-auto" color="transparent" image="../../assets/img/bg.png"
                subtitle="LIGHTBOX GALLERY EXAMPLES" title="加载图库示例">
                <template v-slot:actions>
                    <v-btn href="/lightbox" append-icon="mdi-chevron-right" color="green-darken-1" text="LIGHTBOX"
                        variant="text" block></v-btn>
                </template>
            </v-card>
        </div>
        <div class="w-1/4">
            <v-card class="mx-auto" color="transparent" image="../../assets/img/bg.png"
                subtitle="GALLERY GALLERY EXAMPLES" title="加载图库示例">
                <template v-slot:actions>
                    <v-btn href="/gallery" append-icon="mdi-chevron-right" color="green-darken-1" text="GALLERY"
                        variant="text" block></v-btn>
                </template>
            </v-card>
        </div>
    </div>
    <div class="py-2">
        <v-row dense>
            <v-col cols="4">
                <v-card color="yellow-darken-4" class="h-full" variant="tonal">
                    <v-card-title class="text-h5">
                        Unlimited music now
                    </v-card-title>
                    <v-card-subtitle>
                        Listen to your favorite artists and albums whenever and wherever, online and offline.
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-btn text="Listen Now" variant="text"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card color="amber-darken-4" class="h-full" variant="tonal">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="text-h5">
                                Supermodel
                            </v-card-title>
                            <v-card-subtitle>Foster the People</v-card-subtitle>
                            <v-card-actions>
                                <v-btn class="ms-2" size="small" text="START RADIO" variant="outlined"></v-btn>
                            </v-card-actions>
                        </div>
                        <v-avatar class="ma-3" rounded="0" size="125">
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="4" elevation="6">
                <v-card color="orange-darken-4" class="h-full" variant="tonal">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="text-h5">
                                Halcyon Days
                            </v-card-title>
                            <v-card-subtitle>Ellie Goulding</v-card-subtitle>
                            <v-card-actions>
                                <v-btn class="ms-2" icon="mdi-play" variant="text"></v-btn>
                            </v-card-actions>
                        </div>
                        <v-avatar class="ma-3" rounded="0" size="125">
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const reveal = ref(false)
</script>
<style lang="css">
.v-card-title {
    font-size: 4vh;
    font-weight: bolder;
    text-align: center;
}

.v-card-subtitle {
    text-align: center;
}
</style>