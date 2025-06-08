<script lang="ts" setup>
import Card from "../../elements/Card.vue";

import { AreaChart, AreaStackedChart } from "../../../lib";
import { CurveType, LegendPosition } from "../../../lib/types";

import {
  AreaChartData1,
  AreaChartData2,
  AreaChartData3,
  AreaChartData4,
  categories1,
  categories2,
  categories4,
  categories5,
} from "../../data/AreaChartData";
</script>

<template>
  <div class="pb-4 pt-4">
    <label class="text-h4">堆积区域图</label>
    <label class="text-h5">
      折线图，包含连接数据点的线条以及线条与 x 轴之间的阴影区域。
    </label>
    <div class="grid grid-cols-2 gap-4 mx-auto">
      <v-card variant="plain" class="px-2 py-2">
        <label class="text-h4">域图（多线）</label>
        <p>Website visitors per device</p>
        <AreaChart :data="AreaChartData1" :height="200" y-label="Number of visits" :categories="categories1"
          :x-num-ticks="3" :x-formatter="(i: number) => AreaChartData1[i].date" :y-num-ticks="3"
          :curve-type="CurveType.MonotoneX" :legend-position="LegendPosition.Top" />
      </v-card>
      <v-card variant="plain" class="px-2 py-2">
        <label class="text-h4">单线区域图</label>
        <p>Website visitors per device</p>
        <AreaChart :data="AreaChartData2" :height="200" x-label="Time" y-label="Temperature" :categories="categories2"
          :y-num-ticks="4" :x-num-ticks="7" :x-formatter="(i: number) => AreaChartData2[i].hour"
          :curve-type="CurveType.Basis" />
      </v-card>
      <v-card variant="plain" class="px-2 py-2">
        <label class="text-h4">堆积面积图</label>
        <p>Website visitors per device</p>
        <AreaStackedChart :height="200" :data="AreaChartData3" :categories="categories4" />
      </v-card>

      <v-card variant="plain" class="px-2 py-2">
        <label class="text-h4">自然区域图</label>
        <p>Website visitors per device</p>
        <AreaChart :data="AreaChartData4" :height="200" x-label="Month" y-label="Score" :categories="categories5"
          :y-num-ticks="4" :x-num-ticks="7" :x-formatter="(i: number) => AreaChartData4[i].month"
          :curve-type="CurveType.Natural" />
      </v-card>

      <v-card variant="plain" class="px-2 py-2">
        <label class="text-h4">区域图阶梯型</label>
        <p>Website visitors per device</p>
        <AreaChart :data="AreaChartData4" :height="200" x-label="Month" y-label="Score" :categories="categories5"
          :y-num-ticks="4" :x-num-ticks="7" :x-formatter="(i: number) => AreaChartData4[i].month"
          :curve-type="CurveType.Step" />
      </v-card>

      <v-card variant="plain" class="px-2 py-2">
        <label class="text-h4">区域图默认设置</label>
        <p>Website visitors per device</p>
        <AreaChart :data="AreaChartData4" :height="200" x-label="Month" y-label="Score" :categories="categories5"
          :y-num-ticks="4" :x-num-ticks="7" :x-formatter="(i: number) => AreaChartData4[i].month" />
      </v-card>
    </div>
  </div>
</template>
