<script setup>
import { LineChart } from 'vue-chrts';

const data = [
  { month: 'Jan', sales: 100, profit: 50 },
  { month: 'Feb', sales: 120, profit: 55 },
  { month: 'Mar', sales: 180, profit: 80 },
  { month: 'Apr', sales: 110, profit: 40 },
  { month: 'May', sales: 90, profit: 30 },
];

const categories = {
  sales: {
    name: 'Sales',
    color: '#3b82f6'
  },
  profit: {
    name: 'Profit',
    color: '#10b981'
  }
};

const xFormatter = (i) => data[i].month;
</script>

<template>
  <v-card class="mx-auto w-full">
    <LineChart :data="data" :categories="categories" class="w-auto" height="300" :xFormatter="xFormatter" xLabel="Month" yLabel="Amount" />
  </v-card>
</template>