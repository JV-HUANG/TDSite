<script setup>
import { ref } from "vue"
import { VueUiQuickChart } from "vue-data-ui";
import "vue-data-ui/style.css";

const dataset = ref([
    { name: '序列1', value: 10 },
    { name: '序列2', value: 20 },
    { name: '序列3', value: 5 },
    { name: '序列4', value: 2 },
    { name: '序列5', value: 1 },
]);

const config = ref({
    responsive: false,
    backgroundColor: '#ddd',
    barAnimated: true,
    barGap: 12,
    barStrokeWidth: 1,
    blurOnHover: true,
    chartIsBarUnderDatasetLength: 6,
    color: '#aaaaaa',
    dataLabelFontSize: 14,
    dataLabelRoundingPercentage: 1,
    dataLabelRoundingValue: 1,
    donutHideLabelUnderPercentage: 3,
    donutLabelMarkerStrokeWidth: 1,
    donutRadiusRatio: 0.4,
    donutShowTotal: true,
    donutStrokeWidth: 2,
    donutThicknessRatio: 0.18,
    donutTotalLabelFontSize: 24,
    donutTotalLabelOffsetY: 0,
    donutTotalLabelText: '总数',
    donutUseShadow: false,
    donutShadowColor: '#1A1A1A',
    fontFamily: 'inherit',
    height: 338,
    legendFontSize: 12,
    legendIcon: 'circleFill',
    legendIconSize: 12,
    lineAnimated: true,
    lineSmooth: true,
    lineStrokeWidth: 2,
    paletteStartIndex: 0,
    showDataLabels: true,
    showLegend: true,
    showTooltip: true,
    showUserOptions: true,
    userOptionsButtons: {
        tooltip: true,
        pdf: true,
        img: true,
        fullscreen: true,
        annotator: true
    },
    userOptionsButtonTitles: {
        open: '打开选项',
        close: '关闭选项',
        tooltip: '工具提示',
        pdf: '下载PDF',
        img: '下载PNG',
        fullscreen: '切换全屏',
        annotator: '切换标注工具'
    },
    userOptionsPrint: {
        scale: 2
    },
    title: '一张快速图表',
    titleBold: true,
    titleFontSize: 16,
    titleTextAlign: 'center',
    tooltipCustomFormat: null,
    tooltipBorderRadius: 4,
    tooltipBorderColor: '#3A3A3A',
    tooltipBorderWidth: 1,
    tooltipFontSize: 14,
    tooltipBackgroundOpacity: 30,
    tooltipPosition: 'center',
    tooltipOffsetY: 24,
    useCustomLegend: false,
    valuePrefix: '',
    valueSuffix: '',
    width: 512,
    xyAxisStroke: '#4A4A4A',
    xyAxisStrokeWidth: 1,
    xyGridStroke: '#5A5A5A',
    xyGridStrokeWidth: 0.5,
    xyHighlighterColor: '#FFFFFF',
    xyHighlighterOpacity: 0.05,
    xyLabelsXFontSize: 8,
    xyLabelsYFontSize: 12,
    xyPaddingBottom: 48,
    xyPaddingLeft: 48,
    xyPaddingRight: 12,
    xyPaddingTop: 24,
    xyPeriods: [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC'
    ],
    xyPeriodLabelsRotation: 0,
    xyPeriodsShowOnlyAtModulo: true,
    xyPeriodsModulo: 12,
    xyScaleSegments: 10,
    xyShowAxis: true,
    xyShowGrid: true,
    xyShowScale: true,
    yAxisLabel: 'Quantity',
    xAxisLabel: 'Time',
    axisLabelsFontSize: 12,
    zoomXy: true,
    zoomColor: '#CCCCCC',
    zoomHighlightColor: '#4A4A4A',
    zoomFontSize: 14,
    zoomUseResetSlot: false,
    userOptionsPosition: 'right',
    zoomMinimap: {
        show: true,
        smooth: true,
        selectedColor: '#8A8A8A',
        selectedColorOpacity: 0.2,
        lineColor: '#1f77b4',
        selectionRadius: 2,
        indicatorColor: '#CCCCCC',
        verticalHandles: false
    },
    zoomStartIndex: null,
    zoomEndIndex: null,
    showUserOptionsOnChartHover: false,
    keepUserOptionsStateOnChartLeave: true,
    zoomEnableRangeHandles: true,
    zoomEnableSelectionDrag: true,
    donitTotalLabelFontSize: undefined
});
        
</script>

<template>
<div class="w-full">
    <VueUiQuickChart :dataset="dataset" :config="config" />
</div>
</template>
    