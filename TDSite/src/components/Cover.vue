<template>
    <div class="grid grid-cols-4 w-full pt-2 pb-2">
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto" variant="outlined" v-bind="props">
                <v-img :aspect-ratio="16 / 9" src="../assets/img/logo.png" cover>
                    <v-expand-transition>
                        <div v-if="isHovering" class="d-flex bg-red-darken-2 v-card--reveal text-h1" style="height: 100%;">
                            9.9
                        </div>
                    </v-expand-transition>
                </v-img>
                <v-card-text>
                    <div class="font-weight-light mb-2">
                        For the perfect meal
                    </div>
                    <div class="text-h5 font-weight-light mb-2">
                        QW cooking utensils
                    </div>
                    <div class="font-weight-light">
                        <v-btn size="x-large" href="/charts" append-icon="mdi-chevron-right" color="green-darken-1" 
                        variant="text" block>CHARTS</v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto" variant="outlined" v-bind="props">
                <v-img :aspect-ratio="16 / 9" src="../assets/img/logo.png" cover>
                    <v-expand-transition>
                        <div v-if="isHovering" class="d-flex bg-pink-darken-2 v-card--reveal text-h1" style="height: 100%;">
                            9.9
                        </div>
                    </v-expand-transition>
                </v-img>
                <v-card-text>
                    <div class="font-weight-light mb-2">
                        For the perfect meal
                    </div>
                    <div class="text-h5 font-weight-light mb-2">
                        QW cooking utensils
                    </div>
                    <div class="font-weight-light">
                        <v-btn size="x-large" href="/media" append-icon="mdi-chevron-right" color="green-darken-1" text="MEDIA"
                        variant="text" block></v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto" variant="outlined" v-bind="props">
                <v-img :aspect-ratio="16 / 9" src="../assets/img/logo.png" cover>
                    <v-expand-transition>
                        <div v-if="isHovering" class="d-flex bg-purple-darken-2 v-card--reveal text-h1" style="height: 100%;">
                            9.9
                        </div>
                    </v-expand-transition>
                </v-img>
                <v-card-text>
                    <div class="font-weight-light mb-2">
                        For the perfect meal
                    </div>
                    <div class="text-h5 font-weight-light mb-2">
                        QW cooking utensils
                    </div>
                    <div class="font-weight-light">
                        <v-btn size="x-large" href="/lightbox" append-icon="mdi-chevron-right" color="green-darken-1" text="LIGHTBOX"
                        variant="text" block></v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto" variant="outlined" v-bind="props">
                <v-img :aspect-ratio="16 / 9" src="../assets/img/logo.png" cover>
                    <v-expand-transition>
                        <div v-if="isHovering" class="d-flex bg-deep-purple-darken-2 v-card--reveal text-h1" style="height: 100%;">
                            9.9
                        </div>
                    </v-expand-transition>
                </v-img>
                <v-card-text>
                    <div class="font-weight-light mb-2">
                        For the perfect meal
                    </div>
                    <div class="text-h5 font-weight-light mb-2">
                        QW cooking utensils
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