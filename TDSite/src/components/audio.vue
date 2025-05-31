<template>
<div class="w-full">
	<vue-plyr>
		<v-card color="grey-darken-4" class="w-full h-45" 
    image="./assets/img/bg.png">
		<audio controls crossorigin playsinline class="w-full h-full">
			<source src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3"
				type="audio/mp3" />
			<source src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg"
				type="audio/ogg" />
		</audio>
		</v-card>
	</vue-plyr>
</div>
</template>