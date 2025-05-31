<template>
    <v-card class="columns-4 gap-4 w-full px-4 py-4 mx-auto" elevation="16">
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto w-full" variant="plain" elevation="16" v-bind="props">
                <v-img :aspect-ratio="16 / 9" src="../assets/img/logo.png" cover>
                    <v-expand-transition>
                        <div v-if="isHovering" class="d-flex bg-red-darken-2 v-card--reveal text-h3"
                            style="height: 100%;">
                            CHARTS
                        </div>
                    </v-expand-transition>
                </v-img>
                <v-card-text>
                    <div class="text-h4 text-center font-weight-bold mb-2">
                        天地玄黄
                    </div>
                    <div class="font-weight-light">
                        <v-btn size="x-large" href="/charts" append-icon="mdi-chevron-right" color="green-darken-1"
                            variant="text" block>CHARTS</v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto w-full" variant="plain" elevation="16" v-bind="props">
                <v-img :aspect-ratio="16 / 9" src="../assets/img/logo.png" cover>
                    <v-expand-transition>
                        <div v-if="isHovering" class="d-flex bg-pink-darken-2 v-card--reveal text-h3"
                            style="height: 100%;">
                            MEDIA
                        </div>
                    </v-expand-transition>
                </v-img>
                <v-card-text>
                    <div class="text-h4 text-center font-weight-bold mb-2">
                        宇宙洪荒
                    </div>
                    <div class="font-weight-light">
                        <v-btn size="x-large" href="/media" append-icon="mdi-chevron-right" color="green-darken-1"
                            text="MEDIA" variant="text" block></v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto w-full" variant="plain" elevation="16" v-bind="props">
                <v-img :aspect-ratio="16 / 9" src="../assets/img/logo.png" cover>
                    <v-expand-transition>
                        <div v-if="isHovering" class="d-flex bg-purple-darken-2 v-card--reveal text-h3"
                            style="height: 100%;">
                            LIGHTBOX
                        </div>
                    </v-expand-transition>
                </v-img>
                <v-card-text>
                    <div class="text-h4 text-center font-weight-bold mb-2">
                        日月盈昃
                    </div>
                    <div class="font-weight-light">
                        <v-btn size="x-large" href="/lightbox" append-icon="mdi-chevron-right" color="green-darken-1"
                            text="LIGHTBOX" variant="text" block></v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto w-full" variant="plain" elevation="16" v-bind="props">
                <v-img :aspect-ratio="16 / 9" src="../assets/img/logo.png" cover>
                    <v-expand-transition>
                        <div v-if="isHovering" class="d-flex bg-deep-purple-darken-2 v-card--reveal text-h3"
                            style="height: 100%;">
                            GALLERY
                        </div>
                    </v-expand-transition>
                </v-img>
                <v-card-text>
                    <div class="text-h4 text-center font-weight-bold mb-2">
                        辰宿列张
                    </div>
                    <div class="font-weight-light">
                        <v-btn size="x-large" href="/gallery" append-icon="mdi-chevron-right" color="green-darken-1"
                            text="GALLERY" variant="text" block></v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-hover>
    </v-card>
</template>
<style lang="css">
.v-card-title {
    font-size: 4vh;
    font-weight: bolder;
    text-align: center;
}

.v-card-subtitle {
    text-align: center;
}

.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
    position: absolute;
    width: 100%;
}
</style>