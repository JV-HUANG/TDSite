---
layout: page
hello: world
title: DEMO
---

<script setup>
import { ref } from 'vue'
import BarChart from './components/BarChart.vue'
import AreaChart from './components/AreaChart.vue'
import BaseLine from './components/BaseLine.vue'
const count = ref(0)

const tab = ref(null)
</script>

<v-card variant="text">
<v-tabs v-model="tab" class="w-full" align-tabs="center">
    <v-tab :value="1"><v-icon icon="mdi-chart-bar" />柱状|条形图</v-tab>
    <v-tab :value="2"><v-icon icon="mdi-chart-areaspline-variant" />堆积区域图</v-tab>
    <v-tab :value="3"><v-icon icon="mdi-chart-areaspline" />多重折线图</v-tab>
</v-tabs>
<v-tabs-window v-model="tab">
    <v-tabs-window-item v-for="n in 3" :value="1">
    <v-container class="w-full">
        <BarChart />
    </v-container>
    </v-tabs-window-item>
    <v-tabs-window-item v-for="n in 3" :value="2">
    <v-container  lass="w-full">
        <AreaChart />
    </v-container>
    </v-tabs-window-item>
    <v-tabs-window-item v-for="n in 3" :value="3">
    <v-container class="w-full">
        <BaseLine />
    </v-container>
    </v-tabs-window-item>
</v-tabs-window>
</v-card>
