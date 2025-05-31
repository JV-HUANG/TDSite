<template>
<v-card class="w-full h-full">
    <v-tabs v-model="tab" align-tabs="center" fixed-tabs>
        <v-tab value="one">SPRITE FRIGHT</v-tab>
        <v-tab value="two">Vime player</v-tab>
        <v-tab value="three">AUDIO</v-tab>
    </v-tabs>
    <v-card-text>
        <v-tabs-window v-model="tab" class="w-full h-full">
        <v-tabs-window-item value="one">
            <Player theme="dark">
                <Video crossOrigin poster="https://files.vidstack.io/sprite-fight/poster.webp">
                    <source data-src="https://files.vidstack.io/sprite-fight/720p.mp4" />
                    <track default kind="subtitles" src="https://files.vidstack.io/sprite-fight/subs/english.vtt" srclang="en"
                        label="English" />
                </Video>
                <DefaultUi />
            </Player>
        </v-tabs-window-item>
        <v-tabs-window-item value="two">
            <Player theme="dark">
                <Video crossOrigin poster="https://files.vidstack.io/agent-327/poster.png">
                    <source data-src="https://files.vidstack.io/agent-327/720p.mp4" type="video/mp4" />
                    <track default kind="subtitles" src="https://files.vidstack.io/agent-327/subs/english.vtt" srclang="en"
                        label="English" />
                </Video>
                <DefaultUi />
            </Player>
        </v-tabs-window-item>
        <v-tabs-window-item value="three">
            <audio controls class="w-full">
                <source src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3" type="audio/mp3" />
                <!-- <source> and <track> elements are placed here. -->
            </audio>
        </v-tabs-window-item>
        </v-tabs-window>
    </v-card-text>
</v-card>
</template>

<script>
import { Player, Video, Audio , DefaultUi } from '@vime/vue-next';

export default {
    
    data: () => ({
      tab: null,
    }),

    components: {
        Player,
        Video,
        Audio,
        DefaultUi,
    },
};
</script>