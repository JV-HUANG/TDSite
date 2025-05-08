---
hello: world
title: DEMO
---

<script setup>
import { ref } from 'vue'

import VuetifyChart from './components/VuetifyChart.vue'
const count = ref(0)
</script>

# Markdown
This is a demo page.
## CONTENT示例
The count is: {{ count }}
<v-btn variant="outlined" @click="count++">Increment</v-btn>
## Grid示例

<v-card>
  <v-row>
    <v-col v-for="n in 8" :key="n" cols="3">
      <v-card height="100" color="green">
        <img :src="'https://picsum.photos/468/468?random='+n" />
      </v-card>
    </v-col>
  </v-row>
</v-card>

## Vuetify Chart示例
<v-card class="mx-auto w-full"  >
<VuetifyChart />
</v-card>