<script lang="ts" setup>
import Card from "../elements/Card.vue";

import { AreaChart, AreaStackedChart } from "../../lib";
import { CurveType, LegendPosition } from "../../lib/types";

import {
  AreaChartData1,
  AreaChartData2,
  AreaChartData3,
  AreaChartData4,
  categories1,
  categories2,
  categories4,
  categories5,
} from ".././data/AreaChartData";
</script>

<template>
  <div class="space-y-8 pb-24 pt-8">
    <div class="max-w-7xl mx-auto space-y-4">
      <div class="mb-8 space-y-4">
        <h1 class="heading-2">堆积区域图</h1>
        <p class="text-lg font-medium text-gray-500">
          折线图，包含连接数据点的线条以及线条与 x 轴之间的阴影区域。
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 max-w-7xl mx-auto py-4">
      <Card>
        <template #header>
          <h2 class="heading-2">区域图（多线）</h2>
          <p class="text-gray-500">Website visitors per device</p>
        </template>
        <AreaChart :data="AreaChartData1" :height="200" y-label="Number of visits" :categories="categories1"
          :x-num-ticks="3" :x-formatter="(i: number) => AreaChartData1[i].date" :y-num-ticks="3"
          :curve-type="CurveType.MonotoneX" :legend-position="LegendPosition.Top" />
      </Card>

      <Card>
        <template #header>
          <h2 class="heading-2">单线区域图</h2>
          <p class="text-gray-500">Website visitors per device</p>
        </template>
        <AreaChart :data="AreaChartData2" :height="200" x-label="Time" y-label="Temperature" :categories="categories2"
          :y-num-ticks="4" :x-num-ticks="7" :x-formatter="(i: number) => AreaChartData2[i].hour"
          :curve-type="CurveType.Basis" />
      </Card>

      <Card>
        <template #header>
          <h2 class="heading-2">堆积面积图</h2>
          <p class="text-gray-500">Website visitors per device</p>
        </template>
        <AreaStackedChart :height="200" :data="AreaChartData3" :categories="categories4" />
      </Card>

      <Card>
        <template #header>
          <h2 class="heading-2">自然区域图</h2>
          <p class="text-gray-500">Website visitors per device</p>
        </template>
        <AreaChart :data="AreaChartData4" :height="200" x-label="Month" y-label="Score" :categories="categories5"
          :y-num-ticks="4" :x-num-ticks="7" :x-formatter="(i: number) => AreaChartData4[i].month"
          :curve-type="CurveType.Natural" />
      </Card>

      <Card>
        <template #header>
          <h2 class="heading-2">区域图阶梯型</h2>
          <p class="text-gray-500">Website visitors per device</p>
        </template>
        <AreaChart :data="AreaChartData4" :height="200" x-label="Month" y-label="Score" :categories="categories5"
          :y-num-ticks="4" :x-num-ticks="7" :x-formatter="(i: number) => AreaChartData4[i].month"
          :curve-type="CurveType.Step" />
      </Card>

      <Card>
        <template #header>
          <h2 class="heading-2">区域图默认设置</h2>
          <p class="text-gray-500">Website visitors per device</p>
        </template>
        <AreaChart :data="AreaChartData4" :height="200" x-label="Month" y-label="Score" :categories="categories5"
          :y-num-ticks="4" :x-num-ticks="7" :x-formatter="(i: number) => AreaChartData4[i].month" />
      </Card>
    </div>
  </div>
</template>
