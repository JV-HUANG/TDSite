<script lang="ts" setup>
import { Status as BaseStatus } from "../components/Status";
import { Progress as BaseProgress } from "../components/Progress";

import {
  LineChart as BaseLine,
  BarChart as BaseBar,
  AreaChart as BaseArea,
  DonutChart as BaseDonut,
  LegendPosition,
} from "../../lib";

import Card from "../elements/Card.vue";
import Table from "../elements/Table.vue";

import { h } from "vue";
import { CurveType } from "@unovis/ts";
import { InvestmentData, categories } from "../data/InvestmentData";

import {
  RevenueData,
  RevenueDataSmall,
  categories as RevenueCategories,
} from "../data/RevenueData";

const DonutData = [
  {
    color: "#60A5FA",
    name: "Blue",
    value: 50,
  },
  {
    color: "#CBD5E1",
    name: "Gray",
    value: 20,
  },
  {
    color: "#00DC82",
    name: "Green",
    value: 30,
  },
];

const columns = [
  {
    accessorKey: "name",
    header: "name",
    cell: ({ row }: any) => {
      return h(
        "div",
        {
          class: "flex items-center gap-4",
        },
        [
          h(
            "span",
            {
              style: {
                width: "0.75rem",
                height: "0.75rem",
                backgroundColor: row.original.color,
                display: "block",
              },
            },
            ""
          ),
          h("span", {}, `${row.getValue("name")}`),
        ]
      );
    },
  },
  {
    accessorKey: "value",
    header: "value",
    cell: ({ row }: any) => `${row.getValue("value")}`,
  },
];
</script>
<template>
  <div class="grid grid-cols-12 gap-4 mb-4">
    <v-card variant="outlined" class="px-2 py-2 col-span-9">
      <h1>多重折线图</h1>
      <p>设备的网站访问者数量</p>
      <BaseLine :data="InvestmentData" :height="322" :categories="categories" :y-num-ticks="8" :x-tick-line="false"
        :x-formatter="(i: number): string => `${InvestmentData[i]?.date}`" :curve-type="CurveType.MonotoneX"
        :legend-position="LegendPosition.Top" />
    </v-card>
    <v-card variant="outlined" class="px-2 py-2 col-span-3">
      <h1>环形图示例</h1>
      <p>色彩分布</p>
      <BaseDonut :data="DonutData.map((i) => i.value)" :height="200" :labels="DonutData" :hide-pagination="true" :radius="0">
        <div class="absolute text-center">
          <div class="font-semibold">Label</div>
          <div>两秒前</div>
        </div>
      </BaseDonut>
      <Table  
        :data="DonutData" 
        :columns="columns" 
        :enable-sorting="false" 
        :enable-pagination="false"
        :enable-filtering="false" 
        :enable-row-selection="true" 
        :table-size="'md'" 
        :striped="true" 
        :hover="true"
        :bordered="false" 
        :legend-position="'bottom'" 
        :page-size-options="[5, 10, 20, 50]"
        :initial-page-size="10">
      </Table>
    </v-card>
  </div>
  <div class="grid grid-cols-12 gap-4">
    <v-card variant="outlined" class="px-2 py-2 col-span-5">
      <div class="space-y-2 mb-4">
        <h1>Nuxt 实验室</h1>
        <div class="flex items-center justify-between">
          <label class="text-hl dark:text-white font-bold">$75.1K</label>
          <div class="flex items-center gap-2 text-sm">
            <div>+$1.1K</div>
            <div class="text-gray-500">+9.1%</div>
          </div>
        </div>
      </div>
      <BaseArea :data="RevenueDataSmall" :height="50" :categories="RevenueCategories" :y-axis="['value']"
        :hide-legend="true" :hide-tooltip="true" :y-formatter="() => ''" :x-formatter="() => ''" />
      <div class="flex justify-end text-sm items-center gap-2">
        <span>查看更多</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
          <path fill-rule="evenodd"
            d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd" />
        </svg>
      </div>
    </v-card>
    <v-card variant="outlined" class="px-2 py-2 col-span-7">
      <h1>高级可视化</h1>
      <p>跟踪器、条形列表以及更多组件，可以优雅地可视化复杂的使用案例。</p>
      <BaseStatus />
    </v-card>
  </div>
  <div class="grid grid-cols-12 gap-4 my-4">
    <v-card variant="outlined" class="px-2 py-2 col-span-4 space-y-1">
      <h1>状态数据</h1>
        <BaseProgress color="#05DF72" label="已使用存储空间" value="1.85GB" :total="10" :progress="1.85" unit="GB">
        </BaseProgress>
        <BaseProgress color="#05DF72" label="周活跃用户数" value="250" :total="512" :progress="250">
        </BaseProgress>
        <BaseProgress color="#05DF72" label="当前成本" value="$293.5" :total="300" :progress="293.5">
        </BaseProgress>
    </v-card>
    <v-card variant="outlined" class="px-2 py-2 col-span-8">
      <h1>漂亮的柱状图</h1>
      <p>跟踪器、条形列表以及更多组件，可以优雅地可视化复杂的使用案例。</p>
      <BaseBar :data="RevenueData" :height="306" :categories="RevenueCategories" :y-axis="['value']"
        :hide-legend="true" :minMaxTicksOnly="true" :y-formatter="(i: number) => i"
        :x-formatter="(i: number): string => RevenueData[i]?.date" />
    </v-card>
  </div>
</template>
