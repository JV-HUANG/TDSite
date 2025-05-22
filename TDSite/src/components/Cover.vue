<template>
<div class="grid grid-cols-4 w-full gap-4">
    <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto w-full" variant="outlined" v-bind="props">
            <v-img :aspect-ratio="16 / 9" src="../assets/img/logo.png" cover>
                <v-expand-transition>
                    <div v-if="isHovering" class="d-flex bg-red-darken-2 v-card--reveal text-h2" style="height: 100%;">
                        9.9
                    </div>
                </v-expand-transition>
            </v-img>
            <v-card-text>
                <div class="font-weight-light mb-2">
                    制文字 乃服衣裳......
                </div>
                <div class="text-h5 font-weight-bold mb-2">
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
        <v-card class="mx-auto w-full" variant="outlined" v-bind="props">
            <v-img :aspect-ratio="16 / 9" src="../assets/img/logo.png" cover>
                <v-expand-transition>
                    <div v-if="isHovering" class="d-flex bg-pink-darken-2 v-card--reveal text-h2" style="height: 100%;">
                        9.9
                    </div>
                </v-expand-transition>
            </v-img>
            <v-card-text>
                <div class="font-weight-light mb-2">
                    制文字 乃服衣裳......
                </div>
                <div class="text-h5 font-weight-bold mb-2">
                    宇宙洪荒
                </div>
                <div class="font-weight-light">
                    <v-btn size="x-large" href="/media" append-icon="mdi-chevron-right" color="green-darken-1" text="MEDIA"
                    variant="text" block></v-btn>
                </div>
            </v-card-text>
        </v-card>
    </v-hover>
    <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto w-full" variant="outlined" v-bind="props">
            <v-img :aspect-ratio="16 / 9" src="../assets/img/logo.png" cover>
                <v-expand-transition>
                    <div v-if="isHovering" class="d-flex bg-purple-darken-2 v-card--reveal text-h2" style="height: 100%;">
                        9.9
                    </div>
                </v-expand-transition>
            </v-img>
            <v-card-text>
                <div class="font-weight-light mb-2">
                    制文字 乃服衣裳......
                </div>
                <div class="text-h5 font-weight-bold mb-2">
                    日月盈昃 
                </div>
                <div class="font-weight-light">
                    <v-btn size="x-large" href="/lightbox" append-icon="mdi-chevron-right" color="green-darken-1" text="LIGHTBOX"
                    variant="text" block></v-btn>
                </div>
            </v-card-text>
        </v-card>
    </v-hover>
    <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto w-full" variant="outlined" v-bind="props">
            <v-img :aspect-ratio="16 / 9" src="../assets/img/logo.png" cover>
                <v-expand-transition>
                    <div v-if="isHovering" class="d-flex bg-deep-purple-darken-2 v-card--reveal text-h2" style="height: 100%;">
                        9.9
                    </div>
                </v-expand-transition>
            </v-img>
            <v-card-text>
                <div class="font-weight-light mb-2">
                    制文字 乃服衣裳......
                </div>
                <div class="text-h5 font-weight-bold mb-2">
                    辰宿列张
                </div>
                <div class="font-weight-light">
                    <v-btn size="x-large" href="/gallery" append-icon="mdi-chevron-right" color="green-darken-1" text="GALLERY"
                    variant="text" block></v-btn>
                </div>
            </v-card-text>
        </v-card>
    </v-hover>
</div>
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