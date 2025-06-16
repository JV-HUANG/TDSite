<script setup>
import { ref } from "vue";
import { VueUi3dBar } from "vue-data-ui";
import "vue-data-ui/style.css"; // If you are using multiple components, place styles import in your main

const config = ref({
        theme: '',
        customPalette: [],
        style: {
            fontFamily: 'inherit',
            shape: 'bar',
            chart: {
                animation: {
                    use: true,
                    speed: 1,
                    acceleration: 1
                },
                backgroundColor: '#000000ff',
                color: '#ffffffff',
                bar: {
                    color: '#6376DDff',
                    stroke: '#6376DDff',
                    strokeWidth: 0.7,
                    shadeColor: '#2D353C'
                },
                box: {
                    stroke: '#CCCCCCff',
                    strokeWidth: 0.7,
                    strokeDasharray: 2,
                    dimensions: {
                        width: 128,
                        height: 256,
                        top: 27,
                        bottom: 9,
                        left: 24,
                        right: 24,
                        perspective: 18
                    }
                },
                title: {
                    text: 'Title',
                    color: '#ffffffff',
                    fontSize: 20,
                    bold: true,
                    textAlign: 'center',
                    paddingLeft: 0,
                    paddingRight: 0,
                    subtitle: {
                        color: '#A1A1A1ff',
                        text: '000000',
                        fontSize: 16,
                        bold: false
                    }
                },
                legend: {
                    showDefault: true,
                    fontSize: 10,
                    color: '#ffffffff',
                    bold: false,
                    roundingValue: 0,
                    roundingPercentage: 0,
                    prefix: '',
                    suffix: '',
                    hideUnderPercentage: 3
                },
                dataLabel: {
                    show: true,
                    bold: true,
                    color: '#ffffffff',
                    fontSize: 12,
                    rounding: 1,
                    formatter: null
                }
            }
        },
        userOptions: {
            show: true,
            showOnChartHover: false,
            keepStateOnChartLeave: true,
            position: 'right',
            buttons: {
                tooltip: false,
                pdf: true,
                csv: true,
                img: true,
                table: true,
                labels: false,
                fullscreen: true,
                sort: false,
                stack: false,
                animation: false,
                annotator: true
            },
            buttonTitles: {
                open: 'Open options',
                close: 'Close options',
                pdf: 'Download PDF',
                csv: 'Download CSV',
                img: 'Download PNG',
                table: 'Toggle table',
                fullscreen: 'Toggle fullscreen',
                annotator: 'Toggle annotator'
            },
            print: {
                allowTaint: false,
                backgroundColor: '#FFFFFFff',
                useCORS: false,
                onclone: null,
                scale: 2,
                logging: false
            }
        },
        table: {
            show: false,
            responsiveBreakpoint: 400,
            columnNames: {
                series: 'Series',
                value: 'Value',
                percentage: 'Percentage'
            },
            th: {
                backgroundColor: '#FFFFFFff',
                color: '#ffffffff',
                outline: 'none'
            },
            td: {
                backgroundColor: '#FFFFFFff',
                color: '#ffffffff',
                outline: 'none',
                roundingValue: 0,
                roundingPercentage: 0
            }
        }
    });

const dataset = ref({
    series: [
        {
            name: 'Serie 1',
            value: 128,
            color: '#5f8bee',
            id: '1',
            breakdown: []
        },
        {
            name: 'Serie 2',
            value: 64,
            color: '#42d392',
            id: '2',
            breakdown: []
        },
        {
            name: 'Serie 3',
            value: 32,
            color: '#ff6400',
            id: '3',
            breakdown: []
        }
    ]
});
</script>
<template>
    <h5 class="text-h5">
        <a href="https://vue-data-ui.graphieros.com/examples" target="_blank">
            https://vue-data-ui.graphieros.com/examples
        </a>
    </h5>
    <!-- Using a wrapper is optional -->
    <div class="w-full pr-9">
        <VueUi3dBar
            :config="config"
            :dataset="dataset"
        />
    </div>
</template>