<script lang="ts" setup>
import { BarChart } from "../../../lib";

import Card from "../.././elements/Card.vue";

import { VisitorsData, VisitorsCartegories } from "../../data/VisitorsData";

import { LegendPosition, Orientation } from "../../../lib";

const RevenueData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const RevenueDataLong = [
  { date: "16/12/25", value: 60000 },
  { date: "08/12/25", value: 40000 },
  { date: "30/11/25", value: 40000 },
  { date: "22/11/25", value: 30000 },
  { date: "14/11/25", value: 65000 },
  { date: "06/11/25", value: 90000 },
  { date: "29/10/25", value: 35000 },
  { date: "21/10/25", value: 25000 },
  { date: "13/10/25", value: 60000 },
  { date: "05/10/25", value: 55000 },
  { date: "27/09/25", value: 110000 },
  { date: "19/09/25", value: 60000 },
  { date: "11/09/25", value: 50000 },
  { date: "03/09/25", value: 80000 },
  { date: "26/08/25", value: 30000 }, // Estimated
  { date: "18/08/25", value: 45000 }, // Estimated
  { date: "10/08/25", value: 55000 }, // Estimated
  { date: "02/08/25", value: 70000 }, // Estimated
  { date: "25/07/25", value: 40000 }, // Estimated
  { date: "17/07/25", value: 60000 }, // Estimated
  { date: "09/07/25", value: 35000 }, // Estimated
  { date: "01/07/25", value: 50000 }, // Estimated
  { date: "23/06/25", value: 65000 }, // Estimated
  { date: "15/06/25", value: 80000 }, // Estimated
  { date: "07/06/25", value: 45000 }, // Estimated
  { date: "30/05/25", value: 75000 }, // Estimated
  { date: "22/05/25", value: 55000 }, // Estimated
  { date: "14/05/25", value: 60000 }, // Estimated
  { date: "06/05/25", value: 40000 }, // Estimated
  { date: "28/04/25", value: 30000 }, // Estimated
  { date: "20/04/25", value: 50000 }, // Estimated
  { date: "12/04/25", value: 70000 }, // Estimated
  { date: "04/04/25", value: 65000 }, // Estimated
  { date: "27/03/25", value: 85000 }, // Estimated
  { date: "19/03/25", value: 55000 }, // Estimated
  { date: "11/03/25", value: 45000 }, // Estimated
  { date: "03/03/25", value: 60000 }, // Estimated
  { date: "25/02/25", value: 35000 }, // Estimated
  { date: "16/02/25", value: 50000 }, // Estimated
  { date: "08/02/25", value: 75000 }, // Estimated
  { date: "31/01/25", value: 65000 }, // Estimated
  { date: "23/01/25", value: 40000 }, // Estimated
  { date: "15/01/25", value: 55000 }, // Estimated
  { date: "07/01/25", value: 80000 }, // Estimated
  { date: "30/12/24", value: 70000 }, // Estimated
  { date: "22/12/24", value: 60000 }, // Estimated
  { date: "14/12/24", value: 45000 }, // Estimated
  { date: "06/12/24", value: 55000 }, // Estimated
].reverse();

const RevenueCategories = {
  value: { name: "value" },
};

const RevenueCategoriesMultple = {
  desktop: { name: "Desktop" },
  mobile: { name: "Mobile" },
};
</script>

<template>
  <label class="text-h4">柱状图 条形图</label>
  <p>条形图用于表示数据，条形的长度与其所代表的值成比例。</p>
  <div class="grid grid-cols-2 gap-4 max-w-7xl mx-auto py-4">
    <v-card variant="plain" class="px-2 py-2">
      <label class="text-h4">垂直条形图</label>
      <p>Website visitors per device</p>
      <BarChart :data="RevenueData" :height="250" :categories="RevenueCategoriesMultple" :y-axis="['desktop']"
        :radius="4" :x-formatter="(i: number): string => `${RevenueData[i]?.month}`" :y-formatter="(i: number) => i"
        :legend-position="LegendPosition.Top" />
    </v-card>

    <v-card variant="plain" class="px-2 py-2">
      <label class="text-h4">水平条形图</label>
      <p>Website visitors per device</p>
      <BarChart :data="RevenueData" :height="250" :categories="RevenueCategoriesMultple" :y-axis="['desktop']"
        :xNumTicks="6" :radius="4" :bar-padding="0" :orientation="Orientation.Horizontal"
        :x-formatter="(i) => JSON.stringify(i)" :y-formatter="(i: number): string => `${RevenueData[i].month}`"
        :legend-position="LegendPosition.Top" />
    </v-card>

    <v-card variant="plain" class="px-2 py-2">
      <label class="text-h4">条形图组</label>
      <p>Website visitors per device</p>
      <BarChart :data="RevenueData" :height="250" :categories="RevenueCategoriesMultple"
        :y-axis="['desktop', 'mobile']" :group-padding="0" :bar-padding="0.2" :radius="4"
        :x-formatter="(i: number): string => `${RevenueData[i]?.month}`" :y-formatter="(i: number) => i"
        :legend-position="LegendPosition.Top" />
    </v-card>

    <v-card variant="plain" class="px-2 py-2">
      <label class="text-h4">堆积条形图</label>
      <p>Website visitors per device</p>
      <BarChart :data="RevenueData" :stacked="true" :height="250" :categories="RevenueCategoriesMultple"
        :y-axis="['desktop', 'mobile']" :group-padding="0" :bar-padding="0.2" :xNumTicks="6" :radius="4"
        :x-formatter="(i: number): string => `${RevenueData[i]?.month}`" :y-formatter="(i: number) => i"
        :legend-position="LegendPosition.Top" />
    </v-card>

    <v-card variant="plain" class="px-2 py-2">
      <label class="text-h4">垂直条形图</label>
      <p>Website visitors per device</p>
      <BarChart :data="VisitorsData.slice(0, 6)" :height="250" :categories="VisitorsCartegories"
        :y-axis="['visitors']" :x-num-ticks="6" :radius="4"
        :x-formatter="(i: number): string => `${RevenueData[i]?.month}`" :y-formatter="(i: number) => i"
        :legend-position="LegendPosition.Top" />
    </v-card>

    <v-card variant="plain" class="px-2 py-2">
      <label class="text-h4">堆积水平条形图</label>
      <p>Website visitors per device</p>
      <BarChart :data="RevenueData" :stacked="true" :height="250" :categories="RevenueCategoriesMultple"
        :y-axis="['desktop', 'mobile']" :group-padding="0" :bar-padding="0.2" :xNumTicks="6" :radius="4"
        :orientation="Orientation.Horizontal" :x-formatter="(i) => JSON.stringify(i)"
        :y-formatter="(i: number): string => `${RevenueData[i].month}`" :legend-position="LegendPosition.Top" />
    </v-card>
  </div>

  <div class="max-w-7xl mx-auto">
    <v-card variant="plain" class="px-2 py-2">
    <label class="text-h4">柱状图</label>
    <p>Website visitors per device</p>
    <BarChart :data="RevenueDataLong" :height="358" :categories="RevenueCategories" :y-axis="['value']"
      :hide-legend="true" :y-formatter="(i: number) => i" :x-formatter="(i) => RevenueDataLong[i].date" />
    </v-card>
  </div>
</template>
<style lang="css">
.heading-2 {font-weight:bolder; font-size: 2rem}
</style>