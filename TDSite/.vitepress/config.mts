import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
import tailwindcss from '@tailwindcss/vite'
import * as d3 from 'd3';
import vuetify from 'vite-plugin-vuetify'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]], // 将 favicon.ico 放在公共目录中，如果设置了 base，则使用 /base/favicon.ico
  locales: {
    root: {
      lang: 'zh-cn',
      label: '简体中文'
    }
  },
  vite: {
    ssr: {
      noExternal: ['vue','vuetify','d3'] // 指定不需要SSR的包
    },
    build: {
      chunkSizeWarningLimit: 1500, // 单位：KB
    },
    plugins: [
      vuetify(),
      tailwindcss(),
      pagefindPlugin(
      {
        excludeSelector: ['img', 'a.header-anchor'],
        forceLanguage: 'zh-cn',
        locales: {
          root: {
            btnPlaceholder: '搜索',
            placeholder: '搜索文档',
            emptyText: '空空如也',
            heading: '共: {{searchResult}} 条结果',
            // 搜索结果不展示最后修改日期日期
            showDate: false,
          },
          // en: {
          //   btnPlaceholder: 'Search',
          //   placeholder: 'Search Docs...',
          //   emptyText: 'No results',
          //   heading: 'Total: {{searchResult}} search results.',
          // }
        }
      }
    )],
    resolve: {
      alias: {
        'vue-easy-lightbox$': 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js'
      }
    },
  },
  lang: 'zh-CN',
  title: "哎呦土豆",
  description: "在建中......",//站点描述
  themeConfig: {
    logo: '/assets/img/logo.png',
    // siteTitle: false,//显示站点标题
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '网页', link: '/TDSite' },
      { text: '桌面', link: '/TDStart' },
      {
        text: '示例',
        items: [
          { text: 'MARKDOWN', link: '/markdown-examples' },
          { text: 'RUNTIME API', link: '/api-examples' },
          { text: 'VUE CHARTS', link: '/charts' },
          { text: 'VUE Data UI', link: '/pages/AverageOccupancy' },
          { text: 'LIGHT BOX', link: '/lightbox' },
          { text: 'PRODUCTS', link: '/products' },
          { text: 'MEDIA PLAYER', link: '/media' },
          { text: 'PHOTO SWIPE', link: '/gallery' },
          { text: 'Controllable Props', link: '/controllableProps' },
          { text: 'DYNAMIC TABS', link: '/dynamicTabs' },
          { text: 'VIME PLAYER', link: '/vimePlayer' },
          { text: 'Most popula rMice', link: '/popularMice' },
          { text: 'DATA PAGES', link: '/pages/data' }
        ]
      }
    ],

    sidebar: [
      {
        text: '侧边栏',
        items: [
          { text: 'MARKDOWN', link: '/markdown-examples' },
          { text: 'RUNTIME API', link: '/api-examples' },
          { text: 'VUE CHARTS', link: '/charts' },
          { text: 'VUE Data UI', link: '/pages/AverageOccupancy' },
          { text: 'LIGHT BOX', link: '/lightbox' },
          { text: 'PRODUCTS', link: '/products' },
          { text: 'MEDIA PLAYER', link: '/media' },
          { text: 'PHOTO SWIPE', link: '/gallery' },
          { text: 'Controllable Props', link: '/controllableProps' },
          { text: 'DYNAMIC TABS', link: '/dynamicTabs' },
          { text: 'VIME PLAYER', link: '/vimePlayer' },
          { text: 'Most popula rMice', link: '/popularMice' },
          { text: 'DATA PAGES', link: '/pages/data' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JV-HUANG/TDSite' }
    ],
    
    footer: {
      message: '粤ICP备2025381183号 & 基于 MIT 许可发布',
      copyright: 'Copyright © 2025 JV HUANG'
    }
  }
})
